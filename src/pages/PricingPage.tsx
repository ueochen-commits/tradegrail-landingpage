import PricingPlans from '../components/PricingPlans';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Footer } from '../components/Footer';
import { localePath } from '../content/guides';

export default function PricingPage() {
  const { language }=useLanguage(); const en=language==='en';
  return <><main className="guide-main"><header className="guide-hero"><p className="guide-eyebrow">TradeGrail</p><h1>{en?'Start free. Choose a plan when you need it.':'先免费体验，再按需要选择方案。'}</h1><p>{en?'Start with a free account. Local payment options appear in the app when billing setup is complete.':'现在可先注册免费账户；当地付款方案会在支付配置完成后于应用内开放。'}</p></header>
    <PricingPlans/>
    <section className="guide-article mt-12"><h2>{en?'Know what you are paying for':'付款前需要了解'}</h2><p>{en?'Payment options follow your network region, independently of interface language. Domestic prepaid plans do not automatically renew; Creem subscriptions renew until canceled. Applicable taxes and the final total are shown before payment. Annual prices are charged once for the full year. You can cancel future renewals in the in-app billing portal; paid access continues through the paid period unless refunded or disputed.':'支付方式根据网络地区显示，与界面语言无关。国内预付费方案到期不自动扣款；Creem 订阅会自动续费，直至取消。适用税费和最终总额会在付款前显示；年付一次收取整年费用。可在应用内账单门户取消后续续费，已付款期限内仍可使用，退款或支付争议导致权益撤销的除外。'}</p><p>{en?'AI quotas reset each UTC calendar month, including annual plans, without rollover. Existing paid users retain their purchased entitlements.':'AI 额度按 UTC 自然月重置，年付同样按月发放，不结转。原有付费用户保留已购权益。'}</p><p>{en?'No trade execution, signals, managed trading or guaranteed returns are included. API linking and automatic broker sync are currently paused. Manual records and CSV import remain available; chart-feed licensing has separate limits.':'方案不包含代客下单、交易信号、资金管理或收益承诺。API 连接与自动同步暂未开放，手动记录与 CSV 导入可用；图表行情授权有各自边界。'}</p><p>{en?'Request a full refund within seven days of payment by contacting ':'付款后七天内，可联系客服申请全额退款：'}<a href="mailto:support@tradegrail.net">support@tradegrail.net</a>{en?'.':'。'}</p><div className="flex gap-5 flex-wrap">{[['/terms',en?'Terms':'服务条款'],['/privacy',en?'Privacy':'隐私政策'],['/refunds',en?'Refunds & cancellation':'退款与取消']].map(([path,label])=><a key={path} href={localePath(path,en?'en':'zh')}>{label}</a>)}</div></section>
  </main><Footer/></>;
}
