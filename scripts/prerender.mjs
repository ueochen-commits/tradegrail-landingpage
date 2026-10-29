import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  render,
  publicPaths,
  headMarkup,
  pageInfo,
  SITE,
  UPDATED,
  guides,
} from "../.ssg/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
for (const path of [...publicPaths, "/404", "/checkout"]) {
  const p = pageInfo(path);
  const html = template
    .replace('<html lang="en">', `<html lang="${p.en ? "en" : "zh-CN"}">`)
    .replace(/<title>.*?<\/title>/, headMarkup(path))
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);
  const file = path === "/" ? "dist/index.html" : `dist${path}.html`;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nDisallow: /checkout\nDisallow: /login\nDisallow: /signup\nDisallow: /dashboard\n\nSitemap: ${SITE}/sitemap.xml\n`,
);
const e = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${publicPaths
    .map((path) => {
      const p = pageInfo(path);
      const base = p.base === "/" ? "" : p.base;
      return `<url><loc>${SITE + path}</loc><lastmod>${UPDATED}</lastmod><xhtml:link rel="alternate" hreflang="zh-CN" href="${SITE + (base || "/")}"/><xhtml:link rel="alternate" hreflang="en" href="${SITE + "/en" + base}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE + (base || "/")}"/></url>`;
    })
    .join("\n")}\n</urlset>\n`,
);
await writeFile(
  "dist/llms.txt",
  `# TradeGrail\n\n> TradeGrail is an early-beta web trading journal and post-trade review tool for recording trades, screenshots, notes, fees and net P&L. Chinese and English interfaces. It is not a broker, trading-signal service or guarantee of returns.\n\n## Product\n- [中文官网](${SITE}/): 交易日志与交易复盘工具。\n- [English product page](${SITE}/en): Manual trading records, screenshots and reviews.\n- [Current plans](${SITE}/en/pricing): Free starting plan. Paid beta availability is not a fixed public price promise.\n- [Futures journal](${SITE}/en/futures-trading-journal): Standard GC/NQ/ES bookkeeping and chart-licensing limitations.\n- [About](${SITE}/en/about): Verified product scope and authorship.\n\n## Guides\n${["zh", "en"].flatMap((locale) => guides[locale].map((g) => `- [${g.title}](${SITE}${locale === "en" ? "/en" : ""}/guides/${g.slug}): ${g.summary}`)).join("\n")}\n\n## Limits\nFree accounts allow up to two screenshots per trade. Manual entry does not require a broker connection. Automatic sync is not promised for every broker. Embedded futures data may be restricted by licensing. Micro contracts, partial exits and currency conversion need separate verification. Current in-app entitlements govern.\n\n## Start\n- [Create a free journal](https://dashboard.tradegrail.net?auth=signup)\n- [Sign in](https://dashboard.tradegrail.net?auth=login)\n\nProduct facts reviewed ${UPDATED}. This file is a convenience overview, not a search-ranking guarantee.\n`,
);
await writeFile(
  "dist/pricing.md",
  `# TradeGrail pricing and scope\n\nReviewed: ${UPDATED}\nCanonical page: ${SITE}/en/pricing\n\n## Free starting plan\nPrice: USD 0 to start. Manual trading accounts and records, review notes and basic performance views. Up to two screenshots per trade on Free. Other quotas and availability follow the current in-app plan description.\n\n## Paid plans\nThe marketing site describes early beta and planned capabilities. No final paid price is represented here; check the current application and pricing page before purchasing. No credit-card collection occurs on this marketing site.\n\nManual logging does not require connecting a broker. No promise of universal broker synchronization, licensed live CME/COMEX data, order execution or trading results.\n`,
);
console.log(
  `Generated ${publicPaths.length} public HTML pages, real 404, robots.txt, sitemap.xml and product overview files.`,
);
await rm(".ssg", { recursive: true, force: true });
