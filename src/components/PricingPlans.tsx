import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export default function PricingPlans() {
  const { language }=useLanguage(); const en=language==='en';
  const [yearly,setYearly]=useState(false);
  const [market,setMarket]=useState<{currency:'CNY'|'USD';prices:Record<'pro'|'elite',Record<'monthly'|'yearly',number>>}|null>(null);
  const [failed,setFailed]=useState(false);
  const [retry,setRetry]=useState(0);
  useEffect(()=>{let alive=true;setFailed(false);setMarket(null);fetch('/api/billing-market',{cache:'no-store'}).then(async response=>{if(!response.ok)throw Error('market');const value=await response.json();if(!['CNY','USD'].includes(value.currency)||!value.prices?.pro?.monthly||!value.prices?.elite?.yearly)throw Error('market');if(alive)setMarket(value);}).catch(()=>{if(alive)setFailed(true);});return()=>{alive=false;};},[retry]);
  const sign=market?.currency==='CNY'?'¥':'US$';

  const plans=[
    {name:'Free',price:0,features:en?['1 personal trading account','Manual records and CSV import','Up to 2 screenshots per trade','Review notes and performance views','30 AI requests/month, up to 5/day']:['1 个真实交易账户','手动记录与 CSV 导入','每笔交易最多 2 张截图','复盘笔记与表现统计','AI 每月 30 次，每日最多 5 次']},
    {name:'Pro',price:market?.prices.pro[yearly?'yearly':'monthly'],features:en?['Up to 3 personal accounts','Up to 1,000 trade records','Multiple screenshots per trade','300 AI requests/month, up to 30/day','Calendar and performance views']:['最多 3 个真实交易账户','最多 1,000 条交易记录','每笔交易支持多张截图','AI 每月 300 次，每日最多 30 次','交易日历与表现统计']},
    {name:'Elite',price:market?.prices.elite[yearly?'yearly':'monthly'],features:en?['Everything in Pro','No trading account count limit','No trade record count limit','600 AI requests/month, up to 60/day']:['包含 Pro 功能','不限真实交易账户数量','不限交易记录数量','AI 每月 600 次，每日最多 60 次']},
  ];
  return <>
    <p className="mb-5 text-[var(--text-muted)]">{market?(market.currency==='CNY'?'人民币 · 支付宝 · 预付费，到期不自动扣款':(en?'USD · Creem checkout · Auto-renewing subscription':'美元 · Creem 支付 · 自动续费，可取消后续续费')):(failed?<>{en?'Unable to load local prices.':'暂时无法加载当地价格。'} <button onClick={()=>setRetry(x=>x+1)}>{en?'Retry':'重试'}</button></>:(en?'Loading local prices…':'正在确认当地价格…'))}</p><div className="flex gap-3 mb-8" aria-label={en?'Billing period':'付款周期'}><button onClick={()=>setYearly(false)} aria-pressed={!yearly} className={`px-5 py-3 rounded-xl border ${!yearly?'border-brand-primary text-brand-primary':'border-[var(--border-subtle)]'}`}>{en?'Monthly':'月付'}</button><button onClick={()=>setYearly(true)} aria-pressed={yearly} className={`px-5 py-3 rounded-xl border ${yearly?'border-brand-primary text-brand-primary':'border-[var(--border-subtle)]'}`}>{en?'Yearly — charged annually':'年付 · 整年一次收取'}</button></div>
    <div className="grid md:grid-cols-3 gap-6">{plans.map(plan=><section key={plan.name} className="rounded-2xl p-7 border border-[var(--border-subtle)] bg-[var(--card-bg)]"><h2 className="text-2xl font-bold mb-4">{plan.name}</h2><p className="text-4xl font-bold mb-2">{market?`${sign}${plan.price}`:(plan.name==='Free'?'0':(en?'Loading…':'加载中…'))}<span className="text-base font-normal text-[var(--text-muted)]"> / {yearly&&plan.name!=='Free'?(en?'year':'年'):(en?'month':'月')}</span></p>{plan.name!=='Free'&&market&&<p className="text-sm text-[var(--text-muted)] mb-5">{yearly?(en?'Charged once for the full year.':'一次收取整年费用。'):(en?'Monthly plan.':'按月方案。')}</p>}<ul className="space-y-3 my-6">{plan.features.map(f=><li key={f} className="flex gap-2 text-sm"><Check size={17} className="shrink-0 text-brand-primary"/>{f}</li>)}</ul><a data-cta={`pricing-${plan.name.toLowerCase()}`} className="inline-block rounded-xl bg-brand-primary text-white px-5 py-3" href="https://dashboard.tradegrail.net?auth=signup">{en?'Create a free account':'创建免费账户'}</a></section>)}</div>
    <p className="text-sm text-[var(--text-muted)] mt-6">{en?'Annual plans are charged once for the full year. Taxes and the final total appear before payment. USD subscriptions renew until canceled; domestic prepaid plans do not automatically renew. API linking and automatic broker sync are currently paused.':'年付一次收取整年费用，税费和最终总额在付款前展示。美元订阅自动续费至取消，国内预付费到期不自动扣款。API 连接与自动同步暂未开放。'}</p>
  </>;
}
