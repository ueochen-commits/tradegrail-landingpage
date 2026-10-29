import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { pageInfo } from '../lib/seo';
import { localePath } from '../content/guides';

const policies = {
  terms: {
    en: {title:'Terms of Service',sections:[
      ['The service','TradeGrail is trading-journal and post-trade review software. It helps you record trades, notes, screenshots and costs. It does not execute trades, hold trading funds, sell trading signals or promise returns. AI output and calculated examples may be incorrect; check them against your own records.'],
      ['Your account and content','Provide accurate registration information, protect your login and upload only content you may lawfully use. You retain ownership of your content and authorize the processing needed to store it, display it to you and provide features you choose. Do not upload unlawful content, attack the service or attempt to access another person’s account.'],
      ['Plans and subscriptions','The free plan remains available. Current regional prices and usage limits are shown on the pricing page and in the app. The payment currency and provider are selected from your network’s IP country, independently of interface language. USD checkout is being activated and only becomes available after billing setup is completed. Review the final currency, tax, total and renewal terms before paying. An annual plan is charged for a full year, not in monthly installments.'],
      ['Billing and cancellation','Where Creem processes the payment, its checkout and buyer terms identify the merchant of record. Creem recurring subscriptions renew until canceled. Domestic prepaid plans end at expiry and require a new purchase; they do not automatically renew. Open Manage USD subscription in TradeGrail to cancel future renewals or view invoices. Cancellation stops future renewals; access continues through the paid period unless a refund or payment dispute removes that entitlement. Returning from checkout alone does not activate membership.'],
      ['Refunds','You may request a full refund within seven days of payment by emailing support@tradegrail.net with the purchase reference. Do not send card numbers or passwords. The original payment provider processes approved refunds. Your statutory consumer rights remain unaffected. See the refund policy for details.'],
      ['Availability and changes','TradeGrail is in beta. Features, external chart feeds and supported imports have limits and may change. We do not guarantee uninterrupted service, complete broker coverage or accuracy of third-party market data. Material changes to paid access or these terms will be communicated through the service or account email. Mandatory consumer rights and liabilities that cannot legally be excluded remain in force.'],
      ['Contact','For support, cancellation assistance or questions about these terms, email support@tradegrail.net.'],
    ]},
    zh: {title:'服务条款',sections:[
      ['服务范围','TradeGrail 是交易日志和事后复盘软件，帮助你记录交易、笔记、截图和费用。不代客下单、不托管交易资金、不出售交易信号、不承诺收益。AI 输出和计算示例可能出错，请与自己的原始记录核对。'],
      ['账户与内容','请提供准确的注册信息并保护登录凭据，只上传你有权使用的内容。你保留内容的所有权，并授权我们为储存、展示及提供你主动选择的功能而处理这些内容。不得上传违法内容、攻击服务或尝试访问他人的账户。'],
      ['方案与订阅','免费版可持续使用。当前地区价格和用量额度以定价页面及应用内说明为准；系统根据网络 IP 所在国家选择支付币种和渠道，与界面语言无关。美元支付正在完成开通，仅在支付配置完成后开放结账。付款前请核对最终币种、税费、总额和续费说明。年付为一次收取整年费用，不是按月分期。'],
      ['付款与取消','由 Creem 处理的付款，其结账页面和买方条款会说明收款主体。Creem 订阅会自动续费，直至取消；国内渠道为预付费，到期需重新购买，不自动扣款。可在 TradeGrail 的“管理美元订阅”中取消后续续费或查看发票；取消后，在已付款期限内仍可使用，退款或支付争议导致权益撤销的除外。仅返回付款页面不会开通会员，系统需核实付款。'],
      ['退款','付款后七天内，可发送购买参考编号至 support@tradegrail.net 申请全额退款，请勿发送卡号或密码。获批的退款由原支付渠道处理。你的法定消费者权利不受影响，详情见退款政策。'],
      ['可用性与更新','TradeGrail 目前处于 Beta 阶段。功能、外部图表和支持的导入方式存在边界，可能调整。我们不保证服务从不中断、覆盖全部券商或第三方行情完全准确。涉及付费权益或条款的重大变化，会通过产品内通知或账户邮箱说明。依法不得排除的消费者权利与责任继续适用。'],
      ['联系','产品支持、取消协助或条款问题，请联系 support@tradegrail.net。'],
    ]},
  },
  privacy: {
    en: {title:'Privacy Policy',sections:[
      ['Who processes your information','For TradeGrail, contact support@tradegrail.net about privacy or your account data.'],
      ['Information used to provide the service','We process your registration email and account identifier, preferences, trading accounts, trade records, screenshots, notes and other content you provide. Technical information such as connection logs and errors helps operate and protect the service. You do not need to provide broker credentials for manual journaling.'],
      ['Service providers','Vercel hosts the website and backend functions; Supabase provides authentication, database and file storage. When you choose AI features, aggregate historical statistics are sent through our backend to the AI provider, currently DeepSeek, for fixed journal-review tasks; journal notes, arbitrary chat history and exchange credentials are not sent for those tasks. Optional AI CSV mapping sends the column headers and a limited sample to identify fields. Embedded TradingView charts connect to TradingView and are subject to its own privacy practices. These providers may process information in countries outside your location.'],
      ['Payments','Creem processes USD checkout, billing details, tax information and payment methods under its own policies. Domestic payments use the Chinese payment channel shown at checkout. We use the IP country to select the payment market; we do not store the IP address for pricing. TradeGrail receives payment references and subscription status needed to provide access. TradeGrail does not receive or store your complete card number or card security code.'],
      ['Cookies and measurement','Essential browser storage supports login sessions, preferences and local drafts. Advertising tracking is not currently enabled. If optional cookie-based audience analytics is introduced, we will explain it and provide a choice before activation. We do not send your email, journal text, screenshots, trades or P&L to audience analytics.'],
      ['Retention and your choices','Information is retained as needed to provide the service and meet billing, security or legal obligations. Canceling a subscription does not automatically delete journal records. Email support to request access, correction, export or deletion; information required for legal or payment records may need to be retained. Do not send passwords or payment-card details with your request.'],
      ['Security and updates','Access controls and authenticated requests help protect data, but no online service can guarantee absolute security. We do not sell your private journal content. Material privacy changes will be communicated through the service or your account email.'],
    ]},
    zh: {title:'隐私政策',sections:[
      ['谁处理你的信息','TradeGrail 的隐私或账户数据问题，请联系 support@tradegrail.net。'],
      ['为提供服务处理的信息','我们处理注册邮箱、账户标识、偏好、交易账户、交易记录、截图、笔记及你提供的其他内容。连接日志和错误等技术信息用于运行和保护服务。使用手动交易日志不需要提供券商凭据。'],
      ['服务提供商','网站和后端函数由 Vercel 托管，Supabase 提供身份验证、数据库和文件储存。你主动使用 AI 功能时，固定历史复盘任务会将历史汇总统计经我们的后端发送至 AI 提供商，目前为 DeepSeek，不会为这些任务发送笔记正文、自由对话历史或交易所凭据。可选的 AI CSV 映射会发送表头与有限样例，用于识别字段。嵌入式 TradingView 图表会连接至 TradingView，适用其隐私规则。这些提供商可能在你所在地之外的国家处理信息。'],
      ['付款信息','美元结账、账单、税务信息及付款方式由 Creem 依其政策处理。国内付款使用结账时展示的中国支付渠道。系统使用 IP 所在国家选择支付地区，不为定价保存 IP 地址。TradeGrail 接收提供会员权益所需的付款编号和订阅状态，不接收或储存完整银行卡号或卡片安全码。'],
      ['浏览器储存与统计','必要的浏览器储存用于登录会话、偏好和本地草稿。目前未启用广告追踪。如引入基于 Cookie 的可选访问统计，会先说明并提供选择。不会将你的邮箱、日志正文、截图、交易明细或盈亏发送给访问统计服务。'],
      ['保留与选择','信息在提供服务及满足账单、安全或法律义务所需期间保留。取消订阅不会自动删除交易日志。你可联系客服申请访问、更正、导出或删除数据；法律或付款记录要求保留的部分可能仍需保存。申请中请勿发送密码或银行卡资料。'],
      ['安全与更新','我们通过访问控制和登录验证保护数据，但任何在线服务都无法保证绝对安全。不会出售你的私人交易日志内容。重大隐私政策变化会通过产品或账户邮箱说明。'],
    ]},
  },
  refunds: {
    en: {title:'Refund & Cancellation Policy',sections:[
      ['Seven-day refund request','Email support@tradegrail.net within seven days after payment to request a full refund, including the purchase reference and account email. Do not send card details or passwords. Refund requests are handled through the payment provider; bank posting times depend on that provider and your bank. Mandatory consumer rights are unaffected.'],
      ['Cancel future renewals','In TradeGrail, open the plan screen and choose Manage USD subscription to open the Creem billing portal. Cancel future renewals there. Your paid access continues until the current paid period ends unless the payment is refunded or disputed. Cancellation by itself is not a refund request.'],
      ['After a refund or expiry','A refunded paid entitlement is removed; an expired subscription falls back to any other valid entitlement or the free plan. Cancellation or expiry does not automatically delete journal content. Contact support if a payment was taken but your account has not activated; do not pay a second time.'],
    ]},
    zh: {title:'退款与取消政策',sections:[
      ['七天内申请退款','付款后七天内，可向 support@tradegrail.net 发送购买参考编号及账户邮箱，申请全额退款。请勿发送卡号或密码。退款由支付提供商处理，实际到账时间由支付提供商和银行决定。法定消费者权利不受影响。'],
      ['取消后续续费','在 TradeGrail 方案页面点击“管理美元订阅”，进入 Creem 账单门户取消后续续费。已付款期间仍可使用，付款退款或出现争议而撤销权益的除外。取消订阅本身不等于申请退款。'],
      ['退款或到期后','退款对应的付费权益将撤销；订阅到期后按其他仍有效的权益或免费版使用。取消或到期不会自动删除交易日志。若已扣款但未开通，请联系客服，不要再次付款。'],
    ]},
  },
};

export default function LegalPage() {
  const p=pageInfo(useLocation().pathname);
  const key=p.base.slice(1) as keyof typeof policies;
  const policy=policies[key]?.[p.en?'en':'zh'];
  return <><main className="guide-main guide-article"><header><p className="guide-eyebrow">TradeGrail · {p.en?'Updated October 29, 2026':'更新于 2026 年 10 月 29 日'}</p><h1>{policy.title}</h1></header>{policy.sections.map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}<nav className="flex gap-5 flex-wrap">{(['terms','privacy','refunds'] as const).map(key=><Link key={key} to={localePath('/'+key,p.locale)}>{policies[key][p.en?'en':'zh'].title}</Link>)}<a href="mailto:support@tradegrail.net">support@tradegrail.net</a></nav></main><Footer/></>;
}
