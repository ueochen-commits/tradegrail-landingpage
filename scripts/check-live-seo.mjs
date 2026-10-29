const origin = (process.argv[2] || "https://www.tradegrail.net").replace(
  /\/$/,
  "",
);
const canonicalOrigin = "https://www.tradegrail.net";
const results = [];
async function request(path) {
  const response = await fetch(origin + path, {
    headers: { "User-Agent": "TradeGrail-Public-SEO-Check/1.0" },
    signal: AbortSignal.timeout(20000),
  });
  return { response, text: await response.text() };
}
try {
  const robots = await request("/robots.txt");
  results.push({
    path: "/robots.txt",
    ok:
      robots.response.ok &&
      /text\/plain/.test(robots.response.headers.get("content-type")) &&
      robots.text.includes("User-agent: *") &&
      robots.text.includes(canonicalOrigin + "/sitemap.xml"),
  });
  const sitemap = await request("/sitemap.xml");
  const urls = [...sitemap.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (m) => m[1],
  );
  results.push({
    path: "/sitemap.xml",
    ok:
      sitemap.response.ok &&
      /xml/.test(sitemap.response.headers.get("content-type")) &&
      urls.length === 16,
  });
  for (let i = 0; i < urls.length; i += 4) {
    const batch = await Promise.allSettled(
      urls.slice(i, i + 4).map(async (url) => {
        if (new URL(url).origin !== canonicalOrigin)
          throw Error("Unexpected sitemap origin");
        const path = new URL(url).pathname;
        const { response, text } = await request(path);
        const match = text.match(
          /<script id="site-structured-data" type="application\/ld\+json">(.*?)<\/script>/s,
        );
        const schema = match && JSON.parse(match[1]);
        return {
          path,
          status: response.status,
          bytes: Buffer.byteLength(text),
          ok:
            response.ok &&
            text.includes(`rel="canonical" href="${url}"`) &&
            (text.match(/<h1[ >]/g) || []).length === 1 &&
            text.includes("index,follow,max-image-preview:large") &&
            Boolean(schema?.["@graph"]),
        };
      }),
    );
    for (const r of batch)
      results.push(
        r.status === "fulfilled"
          ? r.value
          : { ok: false, error: String(r.reason) },
      );
  }
  for (const path of ["/llms.txt", "/pricing.md"]) {
    const { response, text } = await request(path);
    results.push({
      path,
      status: response.status,
      ok:
        response.ok &&
        text.startsWith("# TradeGrail") &&
        !text.includes("<html"),
    });
  }
  const missing = await request("/not-a-real-page-geo-audit");
  results.push({
    path: "/not-a-real-page-geo-audit",
    status: missing.response.status,
    ok: missing.response.status === 404,
  });
} catch (error) {
  results.push({ ok: false, error: String(error) });
}
const report = {
  checkedAt: new Date().toISOString(),
  origin,
  passed: results.every((x) => x.ok),
  checks: results.length,
  results,
  limits:
    "HTTP and initial-HTML checks only. Not Search Console index coverage, Core Web Vitals, analytics, actual AI citations, or verified crawler-IP access.",
};
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
