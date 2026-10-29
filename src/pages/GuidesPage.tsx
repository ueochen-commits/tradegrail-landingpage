import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Footer } from "../components/Footer";
import { guides, localePath, UPDATED } from "../content/guides";
import { pageInfo } from "../lib/seo";

export function GuideCards() {
  const p = pageInfo(useLocation().pathname);
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {guides[p.locale].map((g) => (
        <Link
          key={g.slug}
          to={localePath(`/guides/${g.slug}`, p.locale)}
          className="guide-card"
        >
          <BookOpen className="w-6 h-6 text-brand-primary" />
          <h3>{g.title}</h3>
          <p>{g.summary}</p>
          <span className="guide-link">
            {p.en ? "Read the guide" : "阅读指南"}{" "}
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function GuidesPreview() {
  const p = pageInfo(useLocation().pathname);
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="guide-eyebrow">
            {p.en ? "START WITH A CLEAR PROCESS" : "先把一笔交易记清楚"}
          </p>
          <h2 className="text-3xl font-bold">
            {p.en
              ? "Practical guides for your first review"
              : "用具体示例，开始你的第一次复盘"}
          </h2>
        </div>
        <Link className="guide-link" to={localePath("/guides", p.locale)}>
          {p.en ? "All guides" : "全部指南"} →
        </Link>
      </div>
      <GuideCards />
    </section>
  );
}
export default function GuidesPage() {
  const p = pageInfo(useLocation().pathname),
    g = p.guide;
  return (
    <>
      <main className="guide-main">
        <nav
          aria-label={p.en ? "Breadcrumb" : "面包屑"}
          className="guide-breadcrumb"
        >
          <Link to={localePath("/", p.locale)}>{p.en ? "Home" : "首页"}</Link>
          <span>/</span>
          <Link to={localePath("/guides", p.locale)}>
            {p.en ? "Guides" : "复盘指南"}
          </Link>
          {g && (
            <>
              <span>/</span>
              <span>{g.title}</span>
            </>
          )}
        </nav>
        {g ? (
          <article className="guide-article">
            <header>
              <p className="guide-eyebrow">
                {p.en ? "TRADEGRAIL FIELD GUIDE" : "TRADEGRAIL 实用指南"}
              </p>
              <h1>{g.title}</h1>
              <p className="guide-meta">
                {p.en
                  ? "By the TradeGrail product team · Updated"
                  : "TradeGrail 产品团队 · 更新于"}{" "}
                <time dateTime={UPDATED}>{UPDATED}</time>
              </p>
              <p className="guide-lead">{g.summary}</p>
            </header>
            <nav
              aria-label={p.en ? "On this page" : "本文目录"}
              className="guide-toc"
            >
              <strong>{p.en ? "On this page" : "本文目录"}</strong>
              {g.sections.map((s, i) => (
                <a key={s.heading} href={`#section-${i + 1}`}>
                  {s.heading}
                </a>
              ))}
            </nav>
            {g.sections.map((s, i) => (
              <section key={s.heading} id={`section-${i + 1}`}>
                <h2>{s.heading}</h2>
                {s.paragraphs?.map((text, j) => (
                  <p
                    key={j}
                    className={text.includes("\n") ? "guide-template" : ""}
                  >
                    {text}
                  </p>
                ))}
                {s.steps && (
                  <ol>
                    {s.steps.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ol>
                )}
                {s.table && (
                  <div
                    className="guide-table-scroll"
                    tabIndex={0}
                    role="region"
                    aria-label={s.heading}
                  >
                    <table>
                      <thead>
                        <tr>
                          {s.table.headers.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, j) => (
                          <tr key={j}>
                            {row.map((cell, k) => (
                              <td key={k}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
            <section>
              <h2>{p.en ? "Common questions" : "常见问题"}</h2>
              {g.faqs.map((f) => (
                <div key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </section>
            {g.sources && (
              <section>
                <h2>
                  {p.en ? "Sources and product scope" : "资料来源与适用范围"}
                </h2>
                <ul>
                  {g.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} rel="noopener noreferrer" target="_blank">
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
                <p>
                  {p.en
                    ? "Contract examples checked on October 29, 2026. Exchange and broker documentation governs current specifications and fees."
                    : "合约示例于 2026 年 10 月 29 日核对。当前规则和费用以交易所与券商说明为准。"}
                </p>
              </section>
            )}
            <div className="guide-cta">
              <CheckCircle2 className="text-brand-primary mb-3" />
              <h2>
                {p.en
                  ? "Try the workflow with one trade"
                  : "把这份指南用在你的一笔交易上"}
              </h2>
              <p>
                {p.en
                  ? "Start free. Manual entry does not require a broker connection."
                  : "免费开始，无需先连接券商。先确认一笔记录准确，再迁移更多历史数据。"}
              </p>
              <a
                href="https://dashboard.tradegrail.net?auth=signup"
                data-cta={`guide-${g.slug}`}
                className="guide-button"
              >
                {p.en ? "Log your first trade" : "免费记录第一笔交易"}{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <aside>
              <h2>{p.en ? "Continue reading" : "继续阅读"}</h2>
              <ul>
                {guides[p.locale]
                  .filter((x) => x.slug !== g.slug)
                  .map((x) => (
                    <li key={x.slug}>
                      <Link to={localePath(`/guides/${x.slug}`, p.locale)}>
                        {x.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link to={localePath("/futures-trading-journal", p.locale)}>
                {p.en
                  ? "Explore the futures journal workflow"
                  : "了解期货交易日志工作流"}{" "}
                →
              </Link>
            </aside>
            <p className="guide-disclaimer">
              {p.en
                ? "Product and recordkeeping education only. TradeGrail does not place trades, provide trading signals, or guarantee trading results."
                : "本文用于产品使用和交易记账说明。TradeGrail 不代客下单、不提供交易信号，也不保证交易结果。"}
            </p>
          </article>
        ) : (
          <>
            <header className="guide-hub-header">
              <p className="guide-eyebrow">TRADEGRAIL GUIDES</p>
              <h1>
                {p.en
                  ? "A clearer trading journal starts with one record"
                  : "交易复盘，从记清楚一笔交易开始"}
              </h1>
              <p className="guide-lead">
                {p.en
                  ? "Practical templates, setup steps and cost examples. Read without signing up, then try the workflow with your own record."
                  : "可直接使用的模板、操作步骤与费用示例。先阅读，再用自己的一笔交易验证这套记录方法。"}
              </p>
            </header>
            <GuideCards />
            <p className="mt-10 text-sm text-[var(--text-muted)]">
              {p.en
                ? "Written by the TradeGrail product team. Updated when the workflow changes."
                : "由 TradeGrail 产品团队编写，随产品流程变化维护。"}
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
