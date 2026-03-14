import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, HelpCircle, Zap, Shield, Globe, BarChart3, Clock, Users, Sparkles, Coins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Footer } from '../components/Footer';

const PricingPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const handlePlanSelect = (plan: any) => {
    navigate('/checkout', { 
      state: { 
        plan: {
          name: plan.name,
          price: billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice,
          billing: billingCycle
        } 
      } 
    });
  };

  const plans = [
    {
      id: 'starter',
      name: t('pricing.plan.starter.name'),
      desc: t('pricing.plan.starter.desc'),
      monthlyPrice: t('pricing.starter.price'),
      yearlyPrice: t('pricing.starter.price'),
      cta: t('pricing.starter.cta'),
      features: [
        { text: t('pricing.feature.manual'), included: true },
        { text: t('pricing.feature.analytics'), included: true },
        { text: t('pricing.feature.account_1'), included: true },
        { text: t('pricing.feature.charts'), included: true },
        { text: t('pricing.feature.mobile'), included: true },
        { text: t('pricing.feature.sync'), included: false },
        { text: t('pricing.feature.ai_edge'), included: false },
      ],
      color: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      buttonBg: 'bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]',
    },
    {
      id: 'pro',
      name: t('pricing.plan.pro.name'),
      desc: t('pricing.plan.pro.desc'),
      monthlyPrice: t('pricing.pro.price'),
      yearlyPrice: t('pricing.pro.yearly_price'),
      cta: t('pricing.cta.trial'),
      popular: true,
      features: [
        { text: t('pricing.feature.manual'), included: true },
        { text: t('pricing.feature.sync'), included: true },
        { text: t('pricing.feature.ai_edge'), included: true },
        { text: t('pricing.feature.psych'), included: true },
        { text: t('pricing.feature.unlimited'), included: true },
        { text: t('pricing.feature.filter'), included: true },
        { text: t('pricing.feature.support'), included: true },
        { text: t('pricing.feature.white_label'), included: false },
      ],
      color: 'from-brand-primary/20 to-indigo-500/20',
      borderColor: 'border-brand-primary/50',
      buttonBg: 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:scale-105',
    },
    {
      id: 'elite',
      name: t('pricing.plan.elite.name'),
      desc: t('pricing.plan.elite.desc'),
      monthlyPrice: t('pricing.elite.price'),
      yearlyPrice: t('pricing.elite.yearly_price'),
      cta: t('pricing.cta.trial'),
      features: [
        { text: t('pricing.feature.manual'), included: true },
        { text: t('pricing.feature.white_label'), included: true },
        { text: t('pricing.feature.api'), included: true },
        { text: t('pricing.feature.review'), included: true },
        { text: t('pricing.feature.prop_firm'), included: true },
        { text: t('pricing.feature.manager'), included: true },
        { text: t('pricing.feature.early_access'), included: true },
        { text: t('pricing.feature.onboarding'), included: true },
      ],
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
      buttonBg: 'bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]',
    }
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('pricing.faq.q4'), a: t('pricing.faq.a4') },
    { q: t('pricing.faq.q5'), a: t('pricing.faq.a5') },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] pt-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {t('nav.pricing')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight"
          >
            {t('pricing.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            {t('pricing.desc')}
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={cn("text-sm font-medium transition-colors", billingCycle === 'monthly' ? "text-[var(--text-main)]" : "text-[var(--text-muted)]")}>
            {t('pricing.billing.monthly')}
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-7 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] p-1 transition-colors hover:border-brand-primary/50"
          >
            <motion.div
              animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
              className="w-5 h-5 rounded-full bg-brand-primary"
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={cn("text-sm font-medium transition-colors", billingCycle === 'yearly' ? "text-[var(--text-main)]" : "text-[var(--text-muted)]")}>
              {t('pricing.billing.yearly')}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase">
              {t('pricing.billing.save')}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={cn(
                "relative rounded-[2.5rem] border bg-[var(--card-bg)] p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                plan.borderColor,
                plan.popular && "shadow-2xl shadow-brand-primary/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  {t('pricing.popular')}
                </div>
              )}

              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 rounded-[2.5rem]", plan.color)} />

              <div className="relative">
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{plan.name}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-8 min-h-[40px]">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-[var(--text-main)]">
                    {t('pricing.currency')}{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">/mo</span>
                </div>

                <button 
                  onClick={() => handlePlanSelect(plan)}
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-all duration-300 mb-10",
                    plan.buttonBg
                  )}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-[var(--text-muted)]/30 shrink-0" />
                      )}
                      <span className={cn(
                        "text-sm",
                        feature.included ? "text-[var(--text-main)]" : "text-[var(--text-muted)]/50"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Crypto Payment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 rounded-[2.5rem] bg-gradient-to-r from-brand-primary/10 via-purple-500/10 to-brand-primary/10 border border-brand-primary/20 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center shrink-0">
            <Coins className="w-8 h-8 text-brand-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">{t('pricing.crypto.title')}</h3>
            <p className="text-[var(--text-muted)]">{t('pricing.crypto.desc')}</p>
          </div>
          <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-sm font-bold text-[var(--text-main)]">BTC</span>
            <span className="text-sm font-bold text-[var(--text-main)]">ETH</span>
            <span className="text-sm font-bold text-[var(--text-main)]">USDT</span>
          </div>
        </motion.div>

        {/* Broker Sync Section */}
        <div className="mb-24 text-center">
          <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-[0.3em] mb-10">
            {t('pricing.brokers.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['MetaTrader', 'NinjaTrader', 'Interactive Brokers', 'TD Ameritrade', 'E*TRADE', 'Charles Schwab', 'Binance', 'Coinbase'].map((broker) => (
              <span key={broker} className="text-lg font-bold text-[var(--text-main)] tracking-tighter">
                {broker}
              </span>
            ))}
          </div>
        </div>

        {/* Feature Comparison Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">{t('pricing.compare.title')}</h2>
            <p className="text-[var(--text-muted)]">{t('pricing.compare.desc')}</p>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-subtle)] bg-white/[0.02]">
                  <th className="p-8 text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">{t('pricing.compare.features')}</th>
                  <th className="p-8 text-sm font-bold text-[var(--text-main)] text-center">{t('pricing.plan.starter.name')}</th>
                  <th className="p-8 text-sm font-bold text-brand-primary text-center">{t('pricing.plan.pro.name')}</th>
                  <th className="p-8 text-sm font-bold text-[var(--text-main)] text-center">{t('pricing.plan.elite.name')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {[
                  { category: t('pricing.compare.cat.core') },
                  { name: t('pricing.feature.manual'), starter: true, pro: true, elite: true },
                  { name: t('pricing.feature.sync'), starter: false, pro: true, elite: true },
                  { name: t('pricing.feature.charts'), starter: true, pro: true, elite: true },
                  { name: t('pricing.feature.mobile'), starter: true, pro: true, elite: true },
                  
                  { category: t('pricing.compare.cat.analytics') },
                  { name: t('pricing.feature.ai_edge'), starter: false, pro: true, elite: true },
                  { name: t('pricing.feature.psych'), starter: false, pro: true, elite: true },
                  { name: t('pricing.feature.filter'), starter: false, pro: true, elite: true },
                  
                  { category: t('pricing.compare.cat.reporting') },
                  { name: t('pricing.feature.analytics'), starter: true, pro: true, elite: true },
                  { name: t('pricing.feature.white_label'), starter: false, pro: false, elite: true },
                  { name: t('pricing.feature.support'), starter: false, pro: true, elite: true },
                  { name: t('pricing.feature.manager'), starter: false, pro: false, elite: true },
                  
                  { category: t('pricing.compare.cat.enterprise') },
                  { name: t('pricing.feature.api'), starter: false, pro: false, elite: true },
                  { name: t('pricing.feature.prop_firm'), starter: false, pro: false, elite: true },
                  { name: t('pricing.feature.review'), starter: false, pro: false, elite: true },
                ].map((row, i) => (
                  row.category ? (
                    <tr key={i} className="bg-white/[0.01]">
                      <td colSpan={4} className="p-4 px-8 text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                        {row.category}
                      </td>
                    </tr>
                  ) : (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 px-8 text-sm text-[var(--text-main)] font-medium">{row.name}</td>
                      <td className="p-6 text-center">
                        {row.starter ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-[var(--text-muted)]/20 mx-auto" />}
                      </td>
                      <td className="p-6 text-center">
                        {row.pro ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-[var(--text-muted)]/20 mx-auto" />}
                      </td>
                      <td className="p-6 text-center">
                        {row.elite ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-[var(--text-muted)]/20 mx-auto" />}
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Shield, title: t('pricing.trust.security.title'), desc: t('pricing.trust.security.desc') },
            { icon: Globe, title: t('pricing.trust.globe.title'), desc: t('pricing.trust.globe.desc') },
            { icon: Zap, title: t('pricing.trust.zap.title'), desc: t('pricing.trust.zap.desc') },
            { icon: Users, title: t('pricing.trust.users.title'), desc: t('pricing.trust.users.desc') },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-bold text-[var(--text-main)] mb-1">{item.title}</h4>
              <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">{t('faq.title')}</h2>
            <p className="text-[var(--text-muted)]">{t('pricing.faq.desc')}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[var(--text-main)]">{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-[var(--text-muted)] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-[var(--text-muted)] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
