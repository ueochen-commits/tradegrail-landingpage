import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Footer } from '../components/Footer';

const PricingPage = () => {
  const { t } = useLanguage();

  const plans = [
    {
      id: 'starter',
      name: t('pricing.plan.starter.name'),
      desc: t('pricing.plan.starter.desc'),
      price: t('pricing.starter.price'),
      cta: t('pricing.starter.cta'),
      features: [
        t('pricing.feature.manual'),
        t('pricing.feature.analytics'),
        t('pricing.feature.account_1'),
        t('pricing.feature.charts'),
      ],
      buttonBg: 'bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]',
      borderColor: 'border-[var(--border-subtle)]',
    },
    {
      id: 'beta',
      name: t('pricing.plan.pro.name'),
      desc: t('pricing.plan.pro.desc'),
      price: t('pricing.pro.price'),
      cta: t('pricing.cta.trial'),
      popular: true,
      features: [
        t('pricing.feature.manual'),
        t('pricing.feature.ai_edge'),
        t('pricing.feature.psych'),
        t('pricing.feature.filter'),
        t('pricing.feature.support'),
      ],
      buttonBg: 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90',
      borderColor: 'border-brand-primary/50',
    },
    {
      id: 'future',
      name: t('pricing.plan.elite.name'),
      desc: t('pricing.plan.elite.desc'),
      price: t('pricing.elite.price'),
      cta: t('pricing.elite.cta'),
      features: [
        t('pricing.feature.early_access'),
        t('pricing.future.imports'),
        t('pricing.future.reports'),
        t('pricing.future.teams'),
      ],
      buttonBg: 'bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]',
      borderColor: 'border-[var(--border-subtle)]',
    },
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {t('pricing.beta.badge')}
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
            className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed"
          >
            {t('pricing.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={cn(
                'relative rounded-[2rem] border bg-[var(--card-bg)] p-8 flex flex-col transition-all duration-300',
                plan.borderColor,
                plan.popular && 'shadow-2xl shadow-brand-primary/10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  {t('pricing.popular')}
                </div>
              )}

              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{plan.name}</h3>
              <p className="text-[var(--text-muted)] text-sm mb-8 min-h-[56px] leading-relaxed">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-[var(--text-main)]">{plan.price}</span>
              </div>

              <a
                href="https://dashboard.tradegrail.net?auth=signup"
                className={cn('w-full py-4 rounded-2xl font-bold transition-all duration-300 mb-10 text-center', plan.buttonBg)}
              >
                {plan.cta}
              </a>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-[var(--text-main)]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-24 p-8 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-subtle)]">
          <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">{t('pricing.beta.title')}</h2>
          <p className="text-[var(--text-muted)] leading-relaxed max-w-4xl">{t('pricing.beta.desc')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">{t('faq.title')}</h2>
            <p className="text-[var(--text-muted)]">{t('pricing.faq.desc')}</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] overflow-hidden">
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
