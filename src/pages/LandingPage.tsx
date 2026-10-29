import PricingPlans from '../components/PricingPlans';
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
import { GuidesPreview } from './GuidesPage';
import { localePath } from '../content/guides';




const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={false}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const { t, language } = useLanguage();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="pt-[72px] overflow-x-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative">
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
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5 leading-[1.1] text-[var(--text-main)]">
              {t('hero.title')} <span className="text-brand-primary italic block">{t('hero.title.accent')}</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto mb-6 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a data-cta="hero" href="https://dashboard.tradegrail.net?auth=signup" className="w-full sm:w-auto bg-gradient-to-r from-[#2b276f] to-[#3a33a9] hover:from-[#332e88] hover:to-[#4540c0] text-white px-8 py-3.5 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_24px_-4px_rgba(58,51,169,0.45)]">
                {t('hero.cta')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={localePath('/guides', language)} className="w-full sm:w-auto bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] px-8 py-3.5 rounded-xl text-base font-bold hover:bg-[var(--border-subtle)] transition-all">
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



      <section className="py-20 bg-[var(--card-bg)]/30">
        <div className="max-w-5xl mx-auto px-6"><span className="text-brand-primary font-bold">{t('mobile.tag')}</span><h2 className="text-4xl font-bold my-5">{t('mobile.title')} {t('mobile.title.accent')}</h2><p className="text-[var(--text-muted)] text-lg mb-7">{t('mobile.desc')}</p><a href="https://dashboard.tradegrail.net?auth=signup" className="inline-flex px-6 py-3 rounded-xl bg-brand-primary text-white font-bold">{t('mobile.web_cta')}</a><p className="mt-4 text-sm text-[var(--text-muted)]">{t('mobile.app_status')}</p></div>
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

      <section className="py-24 bg-[var(--card-bg)]/30" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-4xl font-bold mb-6">{t('pricing.title')}</h2><p className="text-[var(--text-muted)]">{language === 'en' ? 'Start free. Choose a plan when you need it.' : '先免费体验，再按需要选择方案。'}</p></div>
          <PricingPlans/>
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

      <GuidesPreview />

      {/* Footer Section (Includes CTA) */}
      <Footer />
    </main>
  );
}
