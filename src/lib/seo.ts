import {
  guides,
  SITE,
  UPDATED,
  localePath,
  plainPath,
  pathLocale,
  type Locale,
} from "../content/guides";
export const basePaths = [
  "/",
  "/pricing",
  "/guides",
  "/futures-trading-journal",
  "/about",
  "/terms",
  "/privacy",
  "/refunds",
  ...guides.zh.map((g) => `/guides/${g.slug}`),
];
export const publicPaths = basePaths.flatMap((p) => [
  localePath(p, "zh"),
  localePath(p, "en"),
]);
export function pageInfo(pathname: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const locale = pathLocale(path);
  const base = plainPath(path);
  const en = locale === "en";
  const guide = guides[locale].find((g) => base === `/guides/${g.slug}`);
  const titles: Record<string, string> = en
    ? {
        "/": "Trading Journal & Trade Review | TradeGrail",
        "/pricing": "Free Trading Journal & Beta Plans | TradeGrail",
        "/guides": "Trading Journal Guides & Templates | TradeGrail",
        "/futures-trading-journal":
          "Futures Trading Journal for GC, NQ & ES | TradeGrail",
        "/about": "About TradeGrail | Trading Journal & Review Software",
        "/terms": "Terms of Service | TradeGrail",
        "/privacy": "Privacy Policy | TradeGrail",
        "/refunds": "Refund & Cancellation Policy | TradeGrail",
      }
    : {
        "/": "交易日志与交易复盘工具｜TradeGrail",
        "/pricing": "免费交易日志与 Beta 方案｜TradeGrail",
        "/guides": "交易复盘指南与交易日志模板｜TradeGrail",
        "/futures-trading-journal":
          "期货交易日志：GC、NQ、ES 截图与费用复盘｜TradeGrail",
        "/about": "关于 TradeGrail｜交易记录与复盘软件",
        "/terms": "服务条款｜TradeGrail",
        "/privacy": "隐私政策｜TradeGrail",
        "/refunds": "退款与取消政策｜TradeGrail",
      };
  const descriptions: Record<string, string> = en
    ? {
        "/": "Record trades, screenshots, fees and net P&L in TradeGrail. Review execution by account and strategy. Start free with manual entry or CSV imports.",
        "/pricing":
          "Start TradeGrail with free manual journaling and up to two screenshots per trade. Read the current beta scope before choosing a plan.",
        "/guides":
          "Practical trading journal templates, first-trade setup instructions, and clear futures P&L and commission examples. Read the guides without an account.",
        "/futures-trading-journal":
          "Keep GC, NQ and ES trade records, screenshots, fees and review notes together. Learn standard-contract calculations and the limits of embedded chart data.",
        "/about":
          "Learn what TradeGrail does, who it is for, which review workflows are available, and which capabilities are outside its current beta scope.",
        "/terms": "Read TradeGrail's software service, subscription, renewal and cancellation terms.",
        "/privacy": "How TradeGrail handles account data, journal content, AI requests, payments and privacy requests.",
        "/refunds": "How to request a refund, cancel renewals and get help with a TradeGrail payment.",
      }
    : {
        "/": "用 TradeGrail 记录交易、图表截图、手续费与净盈亏，按账户和策略复盘执行。支持手动记录与 CSV 导入，免费完成第一笔交易记录。",
        "/pricing":
          "免费开始使用 TradeGrail 记录与复盘交易，每笔交易最多上传两张截图。查看当前 Beta 阶段的方案与功能说明。",
        "/guides":
          "从交易日志模板到第一笔交易记录，再到期货手续费与净盈亏核对：用具体示例建立可持续的交易复盘流程，无需注册即可阅读。",
        "/futures-trading-journal":
          "集中记录 GC、NQ、ES 期货交易的价格、截图、手续费与净盈亏，复盘执行过程。支持手动记录与费用模板，清楚说明合约计算和行情授权边界。",
        "/about":
          "了解 TradeGrail 的交易日志、截图、执行复盘和账户工作流，以及当前 Beta 阶段的产品范围与限制。",
        "/terms": "了解 TradeGrail 软件服务、订阅、续费与取消条款。",
        "/privacy": "了解 TradeGrail 如何处理账户、交易日志、AI 请求、付款及隐私申请。",
        "/refunds": "了解如何申请退款、取消续费并处理 TradeGrail 付款问题。",
      };
  const known = publicPaths.includes(path);
  return {
    path,
    base,
    locale,
    en,
    guide,
    known,
    title: guide
      ? `${guide.title} | TradeGrail`
      : titles[base] ||
        (en ? "Page not found | TradeGrail" : "页面未找到｜TradeGrail"),
    description:
      guide?.summary ||
      descriptions[base] ||
      (en
        ? "This page was not found. Browse the TradeGrail guides."
        : "未找到此页面，请浏览 TradeGrail 使用指南。"),
    canonical: SITE + path,
    updated: UPDATED,
  };
}
export function structuredData(pathname: string) {
  const p = pageInfo(pathname);
  if (!p.known) return [];
  const organization = {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "TradeGrail",
    url: SITE,
    logo: `${SITE}/landingpage-logo.png`,
  };
  const page = {
    "@type": p.guide ? "Article" : "WebPage",
    "@id": p.canonical + "#page",
    url: p.canonical,
    name: p.title,
    description: p.description,
    inLanguage: p.en ? "en" : "zh-CN",
    isPartOf: { "@id": `${SITE}/#website` },
    ...(p.guide
      ? {
          headline: p.guide.title,
          datePublished: UPDATED,
          dateModified: UPDATED,
          author: { "@id": `${SITE}/#organization` },
          publisher: { "@id": `${SITE}/#organization` },
        }
      : {}),
  };
  const graph: any[] = [
    organization,
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "TradeGrail",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: ["zh-CN", "en"],
    },
    page,
  ];
  if (p.base === "/")
    graph.push({
      "@type": "SoftwareApplication",
      name: "TradeGrail",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: p.canonical,
      description: p.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: p.en
          ? "Free starting plan; paid beta availability is described on the pricing page."
          : "免费入门方案；付费 Beta 开放情况以方案页面为准。",
      },
    });
  if (p.base !== "/")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: p.en ? "Home" : "首页",
          item: SITE + localePath("/", p.locale),
        },
        ...(p.guide
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: p.en ? "Guides" : "指南",
                item: SITE + localePath("/guides", p.locale),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: p.guide.title,
                item: p.canonical,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 2,
                name: p.title.split("|")[0].split("｜")[0].trim(),
                item: p.canonical,
              },
            ]),
      ],
    });
  return { "@context": "https://schema.org", "@graph": graph };
}
export const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function headMarkup(path: string) {
  const p = pageInfo(path),
    e = escapeHtml;
  return `<title>${e(p.title)}</title><meta name="description" content="${e(p.description)}"><meta name="robots" content="${p.known ? "index,follow,max-image-preview:large" : "noindex,follow"}"><link rel="canonical" href="${e(p.canonical)}">${p.known ? (["zh", "en"] as Locale[]).map((l) => `<link rel="alternate" hreflang="${l === "zh" ? "zh-CN" : "en"}" href="${SITE + localePath(p.base, l)}">`).join("") + `<link rel="alternate" hreflang="x-default" href="${SITE + localePath(p.base, "zh")}">` : ""}<meta property="og:type" content="${p.guide ? "article" : "website"}"><meta property="og:title" content="${e(p.title)}"><meta property="og:description" content="${e(p.description)}"><meta property="og:url" content="${e(p.canonical)}"><meta property="og:site_name" content="TradeGrail"><meta property="og:locale" content="${p.en ? "en_US" : "zh_CN"}"><meta property="og:image" content="${SITE}/lddashboard.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(p.title)}"><meta name="twitter:description" content="${e(p.description)}"><meta name="twitter:image" content="${SITE}/lddashboard.jpg"><link rel="alternate" type="text/plain" title="TradeGrail AI overview" href="/llms.txt"><script id="site-structured-data" type="application/ld+json">${JSON.stringify(structuredData(path)).replace(/</g, "\\u003c")}</script>`;
}
