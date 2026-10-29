import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const asPath = (url) => new URL(url).pathname;
const fileFor = (p) => (p === "/" ? "dist/index.html" : `dist${p}.html`);
const pages = new Map(
  await Promise.all(
    urls.map(async (url) => [
      asPath(url),
      await readFile(fileFor(asPath(url)), "utf8"),
    ]),
  ),
);

test("all 22 public pages contain meaningful initial HTML, unique titles and matching canonicals", () => {
  assert.equal(urls.length, 22);
  const titles = new Set();
  for (const [p, html] of pages) {
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title);
    assert.ok(!titles.has(title), `unique title ${p}`);
    titles.add(title);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `one H1 ${p}`);
    assert.ok(
      html.includes(`rel="canonical" href="https://www.tradegrail.net${p}"`),
    );
    assert.ok(html.includes("index,follow,max-image-preview:large"));
    assert.ok(html.length > 5000);
    assert.doesNotMatch(html, />(?:nav|hero|footer|faq|pricing)\.[a-z_.]+</);
    assert.ok(/<p[ >]/.test(html));
  }
});
test("locale alternates are reciprocal, canonical and fully translated", () => {
  for (const [p, html] of pages) {
    const base = p.replace(/^\/en(?=\/|$)/, "") || "/";
    for (const lang of ["zh", "en"]) {
      const alt = lang === "en" ? "/en" + (base === "/" ? "" : base) : base;
      assert.ok(pages.has(alt));
      assert.ok(
        html.includes(
          `hreflang="${lang === "zh" ? "zh-CN" : "en"}" href="https://www.tradegrail.net${alt}"`,
        ),
      );
    }
    assert.ok(
      html.includes(`<html lang="${p.startsWith("/en") ? "en" : "zh-CN"}">`),
    );
  }
  assert.match(
    pages.get("/en/guides/first-trade"),
    /How to create an account and log your first trade/,
  );
  assert.match(pages.get("/guides/first-trade"), /记录第一笔交易/);
});
test("structured data parses and does not invent ratings, awards, paid prices or people", () => {
  for (const html of pages.values()) {
    const json = JSON.parse(
      html.match(
        /<script id="site-structured-data" type="application\/ld\+json">(.*?)<\/script>/s,
      )[1],
    );
    assert.equal(json["@context"], "https://schema.org");
    assert.ok(json["@graph"].some((x) => x["@type"] === "Organization"));
    assert.doesNotMatch(
      JSON.stringify(json),
      /AggregateRating|ratingValue|reviewCount|award|Person/,
    );
  }
});
test("all internal page and asset links resolve; discovery files have actual non-HTML content", async () => {
  for (const [p, html] of pages) {
    for (const m of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
      const link = m[1].split("?")[0];
      if (!link) continue;
      if (pages.has(link)) continue;
      await assert.doesNotReject(
        stat(`dist${link}`),
        `exists ${link} from ${p}`,
      );
    }
  }
  const robots = await readFile("dist/robots.txt", "utf8");
  assert.match(robots, /User-agent: \*\nAllow: \//);
  assert.match(robots, /Sitemap: https:\/\/www.tradegrail.net\/sitemap.xml/);
  assert.ok(!robots.includes("<html"));
  assert.match(await readFile("dist/llms.txt", "utf8"), /^# TradeGrail/);
  assert.match(await readFile("dist/pricing.md", "utf8"), /Free to start/);
});
test("sitemap excludes auth, checkout and 404, with a real noindex error document", async () => {
  assert.doesNotMatch(sitemap, /<loc>[^<]*(?:login|signup|checkout|404)/);
  assert.match(await readFile("dist/404.html", "utf8"), /noindex,follow/);
  assert.match(await readFile("dist/checkout.html", "utf8"), /noindex,follow/);
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  assert.equal(config.cleanUrls, true);
  assert.equal(config.rewrites, undefined);
  assert.equal(
    config.redirects.find((x) => x.source === "/signup").destination,
    "https://dashboard.tradegrail.net?auth=signup",
  );
});
test("high-intent guides include actionable scope, sourced examples, related links and a real signup destination", () => {
  for (const [p, html] of pages) {
    if (!p.includes("/guides/")) continue;
    assert.ok(html.includes("<article"));
    assert.ok(html.includes("https://dashboard.tradegrail.net?auth=signup"));
    assert.ok(html.includes("2026-10-29"));
    assert.ok(html.includes("guide-toc"));
    assert.ok(html.includes("guide-cta"));
  }
  const pnl = pages.get("/guides/futures-pnl-commissions");
  assert.match(pnl, /991\.12/);
  assert.ok(pnl.includes("www.cmegroup.com"));
  assert.match(pnl, /不会自动重算历史/);
  assert.doesNotMatch(
    pages.get("/"),
    /12,847|847.*名交易者|已支持以下券商，自动同步交易数据/,
  );
});


test('public legal and pricing HTML does not disclose private operator identity or mix payment currencies',async()=>{
  for(const path of ['terms','privacy','refunds','en/terms','en/privacy','en/refunds','pricing','en/pricing']) {
    const html=await readFile(new URL('../dist/'+path+'.html',import.meta.url),'utf8');
    assert.doesNotMatch(html,/陈峙樳|Chen Zhixun|东华南路|湖景华厦|510080/);
    if(path.endsWith('pricing'))assert.doesNotMatch(html,/(?:US\$|¥)\d/);
  }
});

test('homepage and pricing share accurate plan limits without old beta or course offers',()=>{
 for(const p of ['/','/en','/pricing','/en/pricing']){
  const html=pages.get(p);assert.ok(html, p);
  assert.match(html,p.startsWith('/en')?/Up to 3 personal accounts/:/最多 3 个真实交易账户/);
  assert.doesNotMatch(html,/Unlimited accounts|无限账户|TradeGrail Academy|系统化交易课程/);
  assert.match(html,/API (?:linking|连接)/);
 }
});
