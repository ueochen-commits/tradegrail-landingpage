import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { localePath } from "../content/guides";
import { pageInfo } from "../lib/seo";
export default function ProductFactsPage() {
  const p = pageInfo(useLocation().pathname),
    futures = p.base === "/futures-trading-journal";
  const sections = p.en
    ? futures
      ? [
          [
            "Keep execution, charts and costs together",
            "TradeGrail is a futures trading journal for reviewing completed decisions. Record the account, contract, direction, prices, quantity, entry reason, screenshots and net P&L. It is not a broker or an order-entry platform.",
          ],
          [
            "Start manually, even when your broker is not listed",
            "Create your own manual trading account without connecting broker credentials. Add one record first or prepare a CSV with explicit column mapping and gross/net P&L basis. Automatic synchronization is not promised for every broker.",
          ],
          [
            "Reconcile standard GC, NQ and ES calculations",
            "Opt into standard-contract P&L calculations and set account/instrument fee templates. Check per-side versus round-trip fees. Manual correction remains available. Micro contracts, partial exits and currency conversion need separate verification.",
          ],
          [
            "Use screenshots alongside your review",
            "Free accounts support up to two screenshots per trade. Review images while using the adjacent chart area where a feed is available, and keep decision notes with the trade.",
          ],
          [
            "Understand the market-data boundary",
            "Recognition of a futures symbol does not include a license to show live CME/COMEX data. Embedded feeds can be unavailable; use the relevant external chart link or your own screenshots to continue reviewing.",
          ],
        ]
      : [
          [
            "What is TradeGrail?",
            "TradeGrail is web software for trading records and post-trade review. It brings manual records, screenshots, notes and performance reports into a connected workflow. The current product is in early beta.",
          ],
          [
            "Who is it for?",
            "Active traders who want to reconcile trading history and reflect on execution. Start with one manually logged trade before deciding whether to migrate a larger history. Chinese and English interfaces are available.",
          ],
          [
            "What is available now?",
            "Manual trading accounts, trade entry, CSV import, screenshots, review notes, performance views and fee templates. Free accounts can attach up to two screenshots per trade. Availability and limits follow the app’s current plan description.",
          ],
          [
            "What is outside the promise?",
            "No order execution, trading signals, guaranteed returns or universal broker synchronization. Licensed market data, contract coverage and integrations have specific limits. Paid availability is explained separately on the pricing page.",
          ],
          [
            "How we maintain these guides",
            "The TradeGrail product team writes and updates product instructions against the implemented workflow. Numerical examples are illustrative; exchange specifications link to original sources. Interface examples do not establish customer results.",
          ],
        ]
    : futures
      ? [
          [
            "把成交、图表与费用放在同一份记录里",
            "TradeGrail 是用于交易记录和事后复盘的期货交易日志工具。把账户、合约、方向、价格、数量、入场理由、截图与净盈亏连起来，方便核对和回看。它不是券商，也不是下单软件。",
          ],
          [
            "券商不在列表，也可以手动开始",
            "无需先绑定券商凭据即可创建自己的手动交易账户。先录入一笔记录，或准备好字段和毛/净盈亏口径明确的 CSV 文件。自动同步不代表覆盖全部券商。",
          ],
          [
            "核对标准 GC、NQ、ES 的盈亏与费用",
            "可以主动使用标准合约计算，并按账户与品种设置手续费模板。分清单边和往返费用，保留手动修正方式。微型合约、分批退出与跨币种需要单独核对。",
          ],
          [
            "用截图配合执行复盘",
            "免费账户每笔交易最多上传两张截图。查看截图时可操作旁边可用的图表，并保留与交易关联的笔记，记录计划、偏离和下一次检查项。",
          ],
          [
            "先说明行情授权的边界",
            "能识别期货代码，不等于拥有免费实时 CME/COMEX 行情授权。站内图表可能无法显示相关数据；可以使用对应外部图表链接或自己的截图继续复盘。",
          ],
        ]
      : [
          [
            "TradeGrail 是什么？",
            "TradeGrail 是一款网页版交易日志与交易复盘软件，把手动交易记录、图表截图、笔记和统计视图放进同一个流程。产品目前处于早期 Beta 阶段。",
          ],
          [
            "适合谁使用？",
            "适合想核对交易历史、复盘执行过程的活跃交易者。建议先用一笔手动记录试完整个流程，再决定是否迁移更多历史。产品提供中文与英文界面。",
          ],
          [
            "现在可以做哪些事？",
            "创建手动交易账户、记录交易、导入 CSV、添加截图、写复盘笔记、查看表现和设置手续费模板。免费账户每笔最多两张截图；其他范围与额度以应用内当前方案说明为准。",
          ],
          [
            "哪些事情不在产品承诺中？",
            "TradeGrail 不代客下单、不提供买卖信号、不承诺收益，也不承诺自动同步所有券商。行情授权、合约计算和集成有各自边界；付费开放情况在方案页单独说明。",
          ],
          [
            "这些指南如何维护？",
            "由 TradeGrail 产品团队按照实际产品流程编写与更新。数字示例用于演算，合约规格链接到交易所原始资料；界面示例不代表用户收益。",
          ],
        ];
  return (
    <>
      <main className="guide-main guide-article">
        <p className="guide-eyebrow">
          {futures ? "FUTURES TRADING JOURNAL" : "ABOUT TRADEGRAIL"}
        </p>
        <h1>
          {futures
            ? p.en
              ? "A futures journal for your next review"
              : "期货交易日志，让每笔记录可核对、可复盘"
            : p.en
              ? "Trading records with context"
              : "交易结果之外，留下完整的决策背景"}
        </h1>
        <p className="guide-lead">{p.description}</p>
        {sections.map(([h, text]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{text}</p>
          </section>
        ))}
        <div className="guide-cta">
          <h2>
            {p.en ? "Start with one real record" : "从自己的一笔交易开始"}
          </h2>
          <p>
            {p.en
              ? "Free to start. No broker connection required for manual entry."
              : "免费开始；手动记录无需先连接券商。"}
          </p>
          <a
            className="guide-button"
            data-cta={futures ? "futures-page" : "about-page"}
            href="https://dashboard.tradegrail.net?auth=signup"
          >
            {p.en ? "Create your free journal" : "创建免费交易日志"} →
          </a>
        </div>
        <nav className="flex flex-wrap gap-5">
          <Link to={localePath("/guides/first-trade", p.locale)}>
            {p.en ? "First-trade guide" : "第一笔交易操作指南"}
          </Link>
          <Link to={localePath("/guides/futures-pnl-commissions", p.locale)}>
            {p.en ? "P&L and fee examples" : "盈亏与费用计算示例"}
          </Link>
          <Link to={localePath("/pricing", p.locale)}>
            {p.en ? "Current plans" : "当前方案"}
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
