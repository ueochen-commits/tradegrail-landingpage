export type Locale = "zh" | "en";
export const SITE = "https://www.tradegrail.net";
export const UPDATED = "2026-10-29";
export const localePath = (path: string, locale: Locale) =>
  locale === "en" ? `/en${path === "/" ? "" : path}` : path;
export const plainPath = (path: string) =>
  path.replace(/^\/en(?=\/|$)/, "") || "/";
export const pathLocale = (path: string): Locale =>
  /^\/en(?:\/|$)/.test(path) ? "en" : "zh";
export type Section = {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
  table?: { headers: string[]; rows: string[][] };
};
export type Guide = {
  slug: string;
  title: string;
  summary: string;
  intent: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
};
export const guides: Record<Locale, Guide[]> = {
  zh: [
    {
      slug: "trading-journal-template",
      title: "交易日志模板：一笔交易应该记录什么？",
      intent: "交易日志模板 / 交易复盘表格",
      summary:
        "一份实用的交易日志应把成交事实、交易前的计划和交易后的复盘分开：先记录品种、方向、时间、价格、数量、费用与净盈亏，再写入场理由、计划是否执行和下一次要检查的事。下面的模板可直接复制到表格或笔记中。",
      sections: [
        {
          heading: "先用这份模板记录一笔完整交易",
          table: {
            headers: ["记录部分", "建议填写", "填写目的"],
            rows: [
              [
                "成交事实",
                "账户、品种、方向、开平仓时间、价格、数量",
                "保留可核对的成交信息",
              ],
              [
                "成本与结果",
                "开仓费、平仓费、其他费用、毛盈亏、净盈亏",
                "分清口径，避免重复扣费",
              ],
              [
                "交易前计划",
                "入场理由、失效条件、计划风险、退出条件",
                "留住当时的判断",
              ],
              [
                "图表截图",
                "入场与退出截图，标明时间和周期",
                "方便回看决策背景",
              ],
              [
                "执行复盘",
                "是否按计划、偏离原因、下次检查项",
                "把结果和执行质量分开",
              ],
            ],
          },
        },
        {
          heading: "可复制的笔记模板",
          paragraphs: [
            "品种 / 账户：\n方向 / 数量：\n开仓时间 / 价格：\n平仓时间 / 价格：\n开仓 + 平仓费用：\n毛盈亏 / 净盈亏：\n入场理由与失效条件：\n计划是否执行：\n截图与时间周期：\n下一次只改进哪一件事：",
          ],
        },
        {
          heading: "一个虚构例子：盈利不等于执行正确",
          paragraphs: [
            "示例仅用于说明记录方式：做多某品种，按计划退出；毛盈利 100 美元，开平仓合计费用 6 美元，净盈利 94 美元。复盘时还应检查进场是否符合规则、风险是否按计划控制，而不是只看这笔赚了多少。",
            "如果券商报表中的盈亏已经扣除了全部费用，应直接记录净盈亏，不要再减一次手续费。模板中的字段可以删减，不必为填满表格而编写理由。",
          ],
        },
        {
          heading: "表格、笔记和专门的交易日志工具怎么选？",
          table: {
            headers: ["方式", "适合的情况", "需要自己处理的部分"],
            rows: [
              [
                "Excel / 表格",
                "想自行定制字段与公式",
                "截图整理、口径一致性和统计维护",
              ],
              [
                "普通笔记",
                "以文字反思为主，交易数量较少",
                "汇总统计和成交数据核对",
              ],
              [
                "TradeGrail",
                "希望把记录、截图、笔记和统计放在一起",
                "确认导入映射、费用口径与每笔交易内容",
              ],
            ],
          },
        },
        {
          heading: "在 TradeGrail 里从一笔记录开始",
          steps: [
            "注册并创建自己的交易账户；没有列出的券商也可以手动创建。",
            "先手动记录一笔已完成交易，明确净盈亏和手续费。",
            "附上截图并写一条执行复盘。免费账户每笔交易最多两张截图。",
            "确认这笔记录准确，再决定是否导入更多历史数据。",
          ],
        },
      ],
      faqs: [
        {
          q: "必须每天写很长的交易日记吗？",
          a: "不必。优先保留成交事实、入场理由、是否执行计划和一个具体改进项。记录长度由你的复盘需要决定。",
        },
        {
          q: "可以不连接券商使用吗？",
          a: "可以。TradeGrail 支持手动创建交易账户并录入交易；自动同步不能默认理解为支持所有券商。",
        },
      ],
    },
    {
      slug: "first-trade",
      title: "如何在 TradeGrail 创建账户并记录第一笔交易",
      intent: "交易日志怎么开始 / 手动添加交易",
      summary:
        "第一次使用 TradeGrail，可以先手动创建自己的交易账户，再记录一笔已完成交易。无需先连接券商；演示账户用于熟悉界面，自己的账户用于记录真实历史。先核对一笔记录，再批量迁移更稳妥。",
      sections: [
        {
          heading: "从注册到第一笔记录，按这四步完成",
          steps: [
            "打开免费注册入口，可手动输入邮箱注册；按照页面提示完成邮箱验证，再登录。",
            "打开设置 → 经纪商账户，创建自己的账户。选择手动记录；券商未列出时使用其他券商或不指定券商。",
            "点击添加交易，确认交易归属账户，填写品种、方向、数量和开平仓信息。不要把演示数据混入自己的账户。",
            "明确盈亏口径、填写费用并保存。回到交易日志，核对账户、价格、数量和净盈亏，再补充截图与笔记。",
          ],
        },
        {
          heading: "第一笔交易先准备哪些信息？",
          paragraphs: [
            "至少准备账户、品种、方向、开仓时间、开仓价格和数量。已平仓交易还应准备退出信息、手续费和净盈亏。金额为零时也应明确填零，不要用空白来代替。",
            "不确定某个合约的自动计算是否适用时，先以券商成交单和结算报表核对，使用手动盈亏输入。分批开平仓、微型合约与不同结算币种不能随意套用标准合约的公式。",
          ],
        },
        {
          heading: "常见卡点怎么处理？",
          table: {
            headers: ["现象", "先检查"],
            rows: [
              ["只有演示账户", "先在设置中创建自己的账户，再选择交易归属"],
              ["券商不在列表", "使用其他 / 不指定券商，按手动方式记录"],
              ["保存失败", "看清页面错误，保留表单并重试，不要立即重复建账户"],
              ["看到风险提醒", "风险数值是复盘参考，不会禁止你记录或补录交易"],
              [
                "期货图表无法在站内显示",
                "嵌入行情可能受授权限制，可以使用外部图表链接和截图继续复盘",
              ],
            ],
          },
        },
        {
          heading: "确认一笔准确后，再使用 CSV",
          paragraphs: [
            "CSV 导入前需要确认字段映射、时间、数量、账户，以及盈亏是毛额还是净额。若文件没有说明费用是否已扣除，不要直接假设。先导入少量记录与原始报表核对，再迁移更多数据。",
          ],
        },
      ],
      faqs: [
        {
          q: "风险规则会阻止记录亏损交易吗？",
          a: "不会。心态风控的参考值用于提示和复盘，不会因为连续亏损或超过参考金额而禁止添加、编辑或补录交易。",
        },
        {
          q: "免费用户可以上传截图吗？",
          a: "可以，每笔交易最多两张截图；删除一张后可以替换。其他套餐额度以应用内当前说明为准。",
        },
      ],
    },
    {
      slug: "futures-pnl-commissions",
      title: "期货交易日志如何区分毛盈亏、净盈亏和手续费",
      intent: "期货交易日志 手续费 / GC NQ ES 净盈亏",
      summary:
        "期货交易日志应先确认盈亏口径：毛盈亏反映价格变动的结果，净盈亏是在毛盈亏中扣除全部相关费用后的结果。若导入数据已经是净额，不应再次扣手续费。合约乘数、合约数量和开平仓两边费用需要分别确认。",
      sections: [
        {
          heading: "先确认导入或手动填写的是哪一种盈亏",
          table: {
            headers: ["口径", "含义", "记录方式"],
            rows: [
              [
                "毛盈亏",
                "价格变动产生的盈亏，尚未扣除费用",
                "扣除完整的开平仓费用后得到净额",
              ],
              [
                "净盈亏",
                "已扣除相关费用的最终结果",
                "保留净额，费用用于明细展示而非再次扣减",
              ],
              [
                "费用不完整",
                "报表可能只有一边佣金或遗漏其他费用",
                "先核对报表定义，不把单边费用当完整成本",
              ],
            ],
          },
        },
        {
          heading: "标准 GC / NQ / ES 合约的计算示例",
          paragraphs: [
            "以下仅是美元标准合约的记账示例，不适用于 MGC、MNQ、MES、期权或其他同名产品。多头毛盈亏 =（退出价 − 进入价）× 合约乘数 × 合约数；空头的价差方向相反。净盈亏 = 毛盈亏 − 开平仓合计费用。",
            "例如：标准 GC 做多 2 手，4050 开仓、4055 平仓，乘数为 100，则毛盈利为 5 × 100 × 2 = 1000 美元。若假设每手每边费用 2.22 美元，完整费用为 2.22 × 2 手 × 2 边 = 8.88 美元，净盈利为 991.12 美元。2.22 只是演算假设，不代表任何券商的收费。",
          ],
          table: {
            headers: [
              "标准合约",
              "合约乘数 / 每点价值",
              "最小跳动与每手跳动价值",
            ],
            rows: [
              [
                "GC 黄金",
                "100 金衡盎司；每 1 美元价差为 100 美元",
                "0.10 美元；每跳 10 美元",
              ],
              [
                "NQ E-mini Nasdaq-100",
                "每指数点 20 美元",
                "0.25 点；每跳 5 美元",
              ],
              [
                "ES E-mini S&P 500",
                "每指数点 50 美元",
                "0.25 点；每跳 12.50 美元",
              ],
            ],
          },
        },
        {
          heading: "为什么不再把盈亏乘一次杠杆？",
          paragraphs: [
            "使用价格差、合约乘数与合约数计算时，已经得到了该持仓的盈亏金额。再次乘以杠杆会重复放大结果。保证金占用与盈亏计算是不同问题，也不能把名义价值收益率直接当作保证金收益率。",
          ],
        },
        {
          heading: "TradeGrail 中如何设置费用？",
          steps: [
            "在账户相关设置中按账户、品种和币种设置手续费模板。",
            "分清总额、每手每边和每手往返三种口径；不要套用他人的费率。",
            "需要时主动启用标准合约计算，也可手动修正盈亏与费用。",
            "核对后保存；修改模板不会自动重算历史已保存交易。",
          ],
        },
        {
          heading: "哪些情况需要额外核对？",
          paragraphs: [
            "微型合约、分批退出、跨币种结算和报表中的费用范围都需要单独核对。本指南不是实时合约、费率或保证金公告；具体合约规则以交易所和券商当前资料为准。相关品种在站内的行情显示还受数据授权限制。",
          ],
        },
      ],
      faqs: [
        {
          q: "修改手续费模板会改变旧交易吗？",
          a: "不会自动重算已保存的历史交易。若需要纠正旧记录，应逐笔核对原始报表后编辑。",
        },
        {
          q: "报表的 P&L 已经是净额怎么办？",
          a: "选择净盈亏口径，保留净额。可以同时记录费用明细，但不要再次从净额中扣除。",
        },
      ],
      sources: [
        {
          label: "CME：GC 黄金合约规格",
          url: "https://www.cmegroup.com/markets/metals/precious/gold.contractSpecs.html",
        },
        {
          label: "CME：NQ E-mini Nasdaq-100 合约规格",
          url: "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
        },
        {
          label: "CME：ES E-mini S&P 500 合约规格",
          url: "https://www.cmegroup.com/markets/equities/sp/e-mini-sandp500.contractSpecs.html",
        },
      ],
    },
  ],
  en: [
    {
      slug: "trading-journal-template",
      title: "Trading journal template: what to record for each trade",
      intent: "trading journal template / trade review checklist",
      summary:
        "A useful trading journal separates execution facts, the original plan and the post-trade review. Record the instrument, direction, timestamps, prices, quantity, costs and net P&L first. Then add the entry reason, whether you followed the plan, and one specific item to check next time. This template works in a spreadsheet or a notes app.",
      sections: [
        {
          heading: "A template for one complete trade",
          table: {
            headers: ["Part", "Fields to record", "Why it matters"],
            rows: [
              [
                "Execution facts",
                "Account, instrument, direction, entry/exit time and price, quantity",
                "Keep information you can reconcile",
              ],
              [
                "Costs and outcome",
                "Entry fees, exit fees, other costs, gross and net P&L",
                "Avoid mixing definitions or deducting fees twice",
              ],
              [
                "Original plan",
                "Entry reason, invalidation, planned risk and exit conditions",
                "Preserve the decision made at the time",
              ],
              [
                "Screenshots",
                "Entry and exit charts with time and timeframe",
                "Retain the decision context",
              ],
              [
                "Execution review",
                "Plan followed, deviations and one next action",
                "Separate process quality from the outcome",
              ],
            ],
          },
        },
        {
          heading: "Copy this note template",
          paragraphs: [
            "Instrument / account:\nDirection / quantity:\nEntry time / price:\nExit time / price:\nTotal entry + exit fees:\nGross / net P&L:\nEntry reason and invalidation:\nWas the plan followed?\nScreenshots and timeframe:\nOne thing to check next time:",
          ],
        },
        {
          heading:
            "An illustrative example: a winning trade can still have poor execution",
          paragraphs: [
            "Fictional example: a long position exits according to plan, with $100 gross profit and $6 in total entry and exit costs. Net profit is $94. The review should still check whether the entry matched the rules and the planned risk was respected. A positive result alone does not establish good execution.",
            "If the broker statement already reports net P&L after all relevant costs, keep that net figure. Do not deduct the same fees again. Remove fields you do not need rather than inventing reasons to fill a template.",
          ],
        },
        {
          heading: "Spreadsheet, notes app or a trading journal?",
          table: {
            headers: ["Method", "Useful when", "What you maintain yourself"],
            rows: [
              [
                "Excel / spreadsheet",
                "You want custom fields and formulas",
                "Screenshot organization, consistent definitions and reporting",
              ],
              [
                "Notes app",
                "Written reflection matters most and trade volume is small",
                "Execution reconciliation and aggregate statistics",
              ],
              [
                "TradeGrail",
                "You want trades, screenshots, notes and reporting together",
                "Import mappings, fee definitions and record accuracy",
              ],
            ],
          },
        },
        {
          heading: "Start with one record in TradeGrail",
          steps: [
            "Register and create your own trading account. Manual entry does not require a supported broker connection.",
            "Enter one completed trade with explicit net P&L and costs.",
            "Attach screenshots and write one execution review. Free accounts allow up to two screenshots per trade.",
            "Reconcile that record before deciding whether to migrate more history.",
          ],
        },
      ],
      faqs: [
        {
          q: "Do I need to write a long trading diary every day?",
          a: "No. Prioritize execution facts, the entry reason, adherence to the plan and one specific review action. The right length depends on what you need to review.",
        },
        {
          q: "Can I use TradeGrail without connecting a broker?",
          a: "Yes. You can create a manual account and record trades. Do not assume automatic synchronization supports every broker.",
        },
      ],
    },
    {
      slug: "first-trade",
      title: "How to create an account and log your first trade in TradeGrail",
      intent: "manual trading journal setup / first trade",
      summary:
        "Start TradeGrail by creating your own manual trading account and recording one completed trade. You do not need to connect a broker first. Demo data is for exploring the interface; your own account keeps your trading history separate. Reconcile one record before migrating a full history.",
      sections: [
        {
          heading: "Four steps from signup to your first record",
          steps: [
            "Open free signup and register with your email address. Follow the confirmation instructions shown, then sign in.",
            "In Settings → Broker accounts (经纪商账户), create your own account and choose manual entry. Use another broker or no broker if yours is not listed.",
            "Choose Add trade and confirm the destination account. Enter the instrument, direction, quantity and entry/exit details. Keep demo records separate.",
            "Confirm the P&L basis and fees, then save. Recheck the account, prices, quantity and net result in the journal before adding screenshots and notes.",
          ],
        },
        {
          heading: "What information should I prepare?",
          paragraphs: [
            "Have the account, instrument, direction, entry timestamp, entry price and quantity ready. For completed trades, also prepare the exit details, fees and net result. Enter an explicit zero where appropriate instead of using a blank value.",
            "If you are unsure whether an automatic calculation fits your contract, reconcile against the broker execution and settlement statement and use manual P&L. Partial exits, micro contracts and different settlement currencies cannot be assumed to use the standard-contract calculation.",
          ],
        },
        {
          heading: "Common setup questions",
          table: {
            headers: ["Situation", "What to check"],
            rows: [
              [
                "Only a demo account is visible",
                "Create your own account in Settings, then select its destination",
              ],
              [
                "Your broker is not listed",
                "Choose another / unspecified broker and record manually",
              ],
              [
                "A save fails",
                "Read the error, keep the form and retry instead of duplicating accounts",
              ],
              [
                "A risk notice appears",
                "Risk references are review reminders and do not prohibit logging or backfilling",
              ],
              [
                "An embedded futures chart is unavailable",
                "Market-data licensing can restrict the widget; use the external chart link and screenshots",
              ],
            ],
          },
        },
        {
          heading: "Try CSV after reconciling one record",
          paragraphs: [
            "Confirm column mapping, timestamps, quantity, destination account and whether P&L is gross or net. Do not guess when the file does not explain how costs are treated. Import a small sample and reconcile with the original statement before migrating more history.",
          ],
        },
      ],
      faqs: [
        {
          q: "Do risk rules block logging losing trades?",
          a: "No. Risk reference amounts are for review. Consecutive losses or a loss above a reference value do not prohibit adding, editing or backfilling records.",
        },
        {
          q: "Can free users upload screenshots?",
          a: "Yes, up to two screenshots per trade. Remove one to replace it. Other plan limits follow the current in-app description.",
        },
      ],
    },
    {
      slug: "futures-pnl-commissions",
      title: "Futures journal P&L: gross profit, net profit and commissions",
      intent: "futures trading journal fees / GC NQ ES net P&L",
      summary:
        "Confirm the P&L basis before recording a futures trade. Gross P&L is the price-movement result; net P&L subtracts all relevant costs. An imported figure that is already net must not have the same fees deducted again. Check the contract multiplier, contract quantity and both entry and exit costs separately.",
      sections: [
        {
          heading: "Identify the P&L definition first",
          table: {
            headers: ["Basis", "Meaning", "How to record it"],
            rows: [
              [
                "Gross P&L",
                "Price-movement result before costs",
                "Subtract complete entry and exit costs to obtain net P&L",
              ],
              [
                "Net P&L",
                "Result after the relevant costs",
                "Keep the net figure; fee details are not a second deduction",
              ],
              [
                "Incomplete costs",
                "A statement may contain only one side or omit other fees",
                "Reconcile the statement definition before assuming round-trip costs",
              ],
            ],
          },
        },
        {
          heading: "Standard GC, NQ and ES examples",
          paragraphs: [
            "These are USD standard-contract bookkeeping examples, not MGC, MNQ, MES, options or other similarly named products. Long gross P&L = (exit price − entry price) × contract multiplier × contract quantity. Reverse the price difference for a short. Net P&L = gross P&L − total entry and exit costs.",
            "Example: two standard GC contracts entered long at 4050 and exited at 4055, with multiplier 100, produce $1,000 gross profit. Assuming an illustrative fee of $2.22 per contract per side, total costs are $2.22 × 2 contracts × 2 sides = $8.88, leaving $991.12 net profit. The $2.22 fee is an assumption, not a broker quote.",
          ],
          table: {
            headers: [
              "Standard contract",
              "Multiplier / value per point",
              "Minimum price movement / value per contract",
            ],
            rows: [
              [
                "GC Gold",
                "100 troy ounces; $100 per $1 price change",
                "$0.10 / $10",
              ],
              [
                "NQ E-mini Nasdaq-100",
                "$20 per index point",
                "0.25 points / $5",
              ],
              [
                "ES E-mini S&P 500",
                "$50 per index point",
                "0.25 points / $12.50",
              ],
            ],
          },
        },
        {
          heading: "Why not multiply by leverage again?",
          paragraphs: [
            "Price difference, contract multiplier and contract quantity already give the position P&L. Multiplying that result by leverage would inflate it again. Margin requirements are a separate calculation, and a return on notional value must not be presented as a return on margin.",
          ],
        },
        {
          heading: "Set up costs in TradeGrail",
          steps: [
            "Set a fee template for the relevant account, instrument and currency.",
            "Distinguish trade total, per contract per side and per contract round trip. Do not borrow another trader’s fee rate.",
            "Opt into supported standard-contract calculations when suitable; manual corrections remain available.",
            "Reconcile before saving. Changing a template does not automatically recalculate saved historical trades.",
          ],
        },
        {
          heading: "Cases requiring a separate check",
          paragraphs: [
            "Micro contracts, partial exits, currency conversion and the statement’s cost definition need separate verification. This guide is not a live contract, fee or margin notice; the exchange and broker’s current documentation governs those details. Embedded market-data availability is also subject to licensing.",
          ],
        },
      ],
      faqs: [
        {
          q: "Will editing a fee template change old trades?",
          a: "No automatic recalculation is applied to saved historical trades. Reconcile the original statement before editing any old record.",
        },
        {
          q: "What if a statement already provides net P&L?",
          a: "Choose the net P&L basis and keep that result. You may retain cost details, but do not deduct the same costs again.",
        },
      ],
      sources: [
        {
          label: "CME: GC Gold contract specifications",
          url: "https://www.cmegroup.com/markets/metals/precious/gold.contractSpecs.html",
        },
        {
          label: "CME: NQ E-mini Nasdaq-100 specifications",
          url: "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html",
        },
        {
          label: "CME: ES E-mini S&P 500 specifications",
          url: "https://www.cmegroup.com/markets/equities/sp/e-mini-sandp500.contractSpecs.html",
        },
      ],
    },
  ],
};
