import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Target, Shield, Cpu, X, Sun, Moon } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { Footer } from '../components/Footer';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { Testimonials } from '../components/Testimonials';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

import { MobileDashboardMockup } from '../components/MobileDashboardMockup';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isMobileDark, setIsMobileDark] = React.useState(theme === 'dark');
  
  // Sync with global theme changes initially
  React.useEffect(() => {
    setIsMobileDark(theme === 'dark');
  }, [theme]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="pt-[72px] overflow-x-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <BackgroundAnimation />
      </div>
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-10 pb-10 z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5 leading-[1.1] text-[var(--text-main)]">
              {t('hero.title')} <span className="text-brand-primary italic">{t('hero.title.accent')}</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto mb-6 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://dashboard.tradegrail.net?auth=signup" className="w-full sm:w-auto bg-gradient-to-r from-[#2b276f] to-[#3a33a9] hover:from-[#332e88] hover:to-[#4540c0] text-white px-8 py-3.5 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_24px_-4px_rgba(58,51,169,0.45)]">
                {t('hero.cta')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://dashboard.tradegrail.net?auth=login" className="w-full sm:w-auto bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] px-8 py-3.5 rounded-xl text-base font-bold hover:bg-[var(--border-subtle)] transition-all">
                {t('hero.demo')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Feature Showcase Section */}
      <section className="pt-24 pb-32 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <FadeInWhenVisible>
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">{t('features.tag')}</span>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">{t('features.title')} <br /><span className="text-brand-primary italic">{t('features.title.accent')}</span></h2>
            <p className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto leading-relaxed">
              {t('features.desc')}
            </p>
          </FadeInWhenVisible>
        </div>
        <FeatureShowcase />
      </section>

      {/* Bento Grid Features */}
      <section className="pt-32 pb-24 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">{t('features.bento.title')}</h2>
              <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">{t('features.bento.desc')}</p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Big Card - AI Advantage */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-3xl flex flex-col justify-between group overflow-hidden relative shadow-2xl"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full group-hover:bg-brand-primary/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-8 shadow-inner">
                  <Cpu className="w-7 h-7 text-brand-primary animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight leading-tight text-[var(--text-main)]">
                  {t('features.bento.ai.title').split(' ')[0]} <br />
                  <span className="text-brand-primary italic">{t('features.bento.ai.title').split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-sm">
                  {t('features.bento.ai.desc')}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6 relative z-10">
                <div className="grid grid-cols-2 gap-2">
                  {[t('build.status.prototype'), t('build.status.beta'), t('build.status.audit'), t('build.status.public')].map((label) => (
                    <span key={label} className="px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/15 text-[10px] font-bold text-brand-primary uppercase tracking-widest">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-0.5">{t('features.bento.trust')}</span>
                  <span className="text-sm text-[var(--text-muted)] font-medium">{t('features.bento.trust.desc')}</span>
                </div>
              </div>
            </motion.div>

            {/* Medium Card - Psychology */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-3xl flex items-center gap-10 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full" />
              
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {t('features.bento.psych.tag')}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-[var(--text-main)]">{t('features.bento.psych.title')}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {t('features.bento.psych.desc')}
                </p>
              </div>
              <div className="w-24 h-24 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 transition-all duration-500 relative z-10 shadow-inner">
                <Target className="w-12 h-12 text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
              </div>
            </motion.div>

            {/* Small Card 1 - Security */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-3xl flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] rounded-full" />
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-emerald-500/50" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-[var(--text-main)]">{t('features.bento.security.title')}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t('features.bento.security.desc')}</p>
              </div>
            </motion.div>

            {/* Small Card 2 - Global */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-3xl flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full" />
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-blue-500/50" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-[var(--text-main)]">{t('features.bento.global.title')}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t('features.bento.global.desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Build in Public Strip */}
      <section id="build-public" className="py-20 border-y border-[var(--border-subtle)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-primary mb-4">{t('build.strip.tag')}</p>
          <p className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
            {t('build.strip.title')}
          </p>
          <p className="mt-5 text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t('build.strip.desc')}
          </p>
        </div>
      </section>



      {/* Mobile App Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-brand-primary/20 blur-[120px] rounded-full -z-10" />
              
              {/* Theme Toggle for Mockup */}
              <div className={cn(
                "absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 backdrop-blur-md border px-4 py-2 rounded-full shadow-sm z-50 transition-all duration-500",
                isMobileDark 
                  ? "bg-slate-900/80 border-slate-800" 
                  : "bg-white/80 border-[#E2E8F0]"
              )}>
                <button 
                  onClick={() => setIsMobileDark(false)}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    !isMobileDark ? "bg-brand-primary text-white shadow-md" : "text-[#64748B] hover:bg-[#F1F5F9]"
                  )}
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsMobileDark(true)}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    isMobileDark ? "bg-brand-primary text-white shadow-md" : "text-[#64748B] hover:bg-slate-800"
                  )}
                >
                  <Moon className="w-4 h-4" />
                </button>
                <span className={cn("text-xs font-bold ml-1", isMobileDark ? "text-slate-400" : "text-[#64748B]")}>
                  {isMobileDark ? t('nav.theme.dark') : t('nav.theme.light')}
                </span>
              </div>

              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative mx-auto w-[300px] h-[620px] rounded-[3.5rem] p-[6px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] ring-1 transition-all duration-500",
                  isMobileDark ? "bg-[#0a0a0a] ring-white/20" : "bg-[#1a1a1a] ring-black/5"
                )}
              >
                {/* Outer Frame Polish */}
                <div className="absolute inset-0 rounded-[3.5rem] border border-white/5 pointer-events-none" />
                
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-[70] flex items-center justify-center shadow-inner">
                  <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#0a0a0a] border border-white/5" />
                </div>
                
                {/* Screen */}
                <div className="h-full w-full bg-white rounded-[3.1rem] overflow-hidden relative shadow-inner">
                  <MobileDashboardMockup isDark={isMobileDark} />
                </div>

                {/* Side Buttons - iPhone 16 Style */}
                {/* Action Button */}
                <div className="absolute -left-[2px] top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-r-sm shadow-sm" />
                {/* Volume Buttons */}
                <div className="absolute -left-[2px] top-44 w-[3px] h-14 bg-[#2a2a2a] rounded-r-sm shadow-sm" />
                <div className="absolute -left-[2px] top-64 w-[3px] h-14 bg-[#2a2a2a] rounded-r-sm shadow-sm" />
                {/* Power Button */}
                <div className="absolute -right-[2px] top-48 w-[3px] h-20 bg-[#2a2a2a] rounded-l-sm shadow-sm" />
                {/* Camera Control */}
                <div className="absolute -right-[2px] top-80 w-[3px] h-14 bg-[#2a2a2a] rounded-l-sm shadow-sm opacity-80" />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <FadeInWhenVisible>
                <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">{t('mobile.tag')}</span>
                <h2 className="text-5xl font-bold mb-8 leading-tight">{t('mobile.title')} <br /><span className="text-brand-primary">{t('mobile.title.accent')}</span></h2>
                <p className="text-[var(--text-muted)] text-xl mb-12 leading-relaxed">
                  {t('mobile.desc')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://dashboard.tradegrail.net?auth=signup" className="px-6 py-3 rounded-2xl bg-brand-primary text-white flex items-center gap-3 hover:bg-brand-primary/90 transition-all font-bold">
                    {t('mobile.web_cta')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="px-6 py-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-muted)] text-sm flex items-center">
                    {t('mobile.app_status')}
                  </span>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-[var(--bg-main)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t('comparison.title')}</h2>
            <p className="text-[var(--text-muted)] text-lg">{t('comparison.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] opacity-50">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" /> {t('comparison.excel.title')}
              </h3>
              <ul className="space-y-4 text-sm text-[var(--text-muted)]">
                <li>• {t('comparison.excel.f1')}</li>
                <li>• {t('comparison.excel.f2')}</li>
                <li>• {t('comparison.excel.f3')}</li>
                <li>• {t('comparison.excel.f4')}</li>
                <li>• {t('comparison.excel.f5')}</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {t('comparison.grail.title')}
              </h3>
              <ul className="space-y-4 text-sm text-[var(--text-main)]">
                <li>• {t('comparison.grail.f1')}</li>
                <li>• {t('comparison.grail.f2')}</li>
                <li>• {t('comparison.grail.f3')}</li>
                <li>• {t('comparison.grail.f4')}</li>
                <li>• {t('comparison.grail.f5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[var(--card-bg)]/30" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t('pricing.title')}</h2>
            <p className="text-[var(--text-muted)] text-lg">{t('pricing.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: t('pricing.plan.starter.name'), 
                price: t('pricing.currency') + t('pricing.starter.price'), 
                desc: t('pricing.plan.starter.desc'),
                features: [t('pricing.starter.f1'), t('pricing.starter.f2'), t('pricing.starter.f3'), t('pricing.starter.f4')],
                cta: t('pricing.starter.cta'),
                popular: false
              },
              { 
                name: t('pricing.plan.pro.name'), 
                price: t('pricing.currency') + t('pricing.pro.price'), 
                desc: t('pricing.plan.pro.desc'),
                features: [t('pricing.pro.f1'), t('pricing.pro.f2'), t('pricing.pro.f3'), t('pricing.pro.f4'), t('pricing.pro.f5')],
                cta: t('pricing.pro.cta'),
                popular: true
              },
              { 
                name: t('pricing.plan.elite.name'), 
                price: t('pricing.currency') + t('pricing.elite.price'), 
                desc: t('pricing.plan.elite.desc'),
                features: [t('pricing.elite.f1'), t('pricing.elite.f2'), t('pricing.elite.f3'), t('pricing.elite.f4'), t('pricing.elite.f5')],
                cta: t('pricing.elite.cta'),
                popular: false
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "p-10 rounded-[2.5rem] border flex flex-col",
                  plan.popular ? "bg-brand-primary/10 border-brand-primary/50 relative" : "bg-[var(--card-bg)] border-[var(--border-subtle)]"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    {t('pricing.popular')}
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-[var(--text-muted)] text-sm">/mo</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-4">{plan.desc}</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://dashboard.tradegrail.net?auth=signup"
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-all text-center",
                    plan.popular ? "bg-brand-primary text-white hover:bg-brand-primary/90" : "bg-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]"
                  )}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-32 bg-[var(--bg-main)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('faq.title')}</h2>
          <div className="space-y-6">
            {[
              { q: t('faq.q1'), a: t('faq.a1') },
              { q: t('faq.q2'), a: t('faq.a2') },
              { q: t('faq.q3'), a: t('faq.a3') }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                <h4 className="font-bold mb-2">{item.q}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section (Includes CTA) */}
      <Footer />
    </div>
  );
}
