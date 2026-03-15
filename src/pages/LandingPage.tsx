import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, ArrowRight, CheckCircle2, BarChart3, Zap, Target, Shield, Globe, Cpu, MousePointer2, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TradeGrailLogo } from '../components/Logo';
import React from 'react';
import { cn } from '../lib/utils';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { Footer } from '../components/Footer';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import { InteractiveMockup } from '../components/InteractiveMockup';
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
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [isMobileDark, setIsMobileDark] = React.useState(theme === 'dark');
  
  // Sync with global theme changes initially
  React.useEffect(() => {
    setIsMobileDark(theme === 'dark');
  }, [theme]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="pt-16 overflow-x-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <BackgroundAnimation />
      </div>
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-16 pb-4 z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              <Zap className="w-3 h-3 fill-current" /> {t('hero.badge')}
            </span>
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-[var(--text-main)] to-[var(--text-muted)]">
              {t('hero.title')} <br />
              <span className="text-brand-primary italic">{t('hero.title.accent')}</span>
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/signup" className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]">
                {t('hero.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="w-full sm:w-auto bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[var(--border-subtle)] transition-all backdrop-blur-md">
                {t('hero.demo')}
              </Link>
            </div>
            
          </motion.div>

          {/* Floating Stats */}
          <div className="hidden lg:block absolute -left-20 top-1/4">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-2xl"
            >
              <div className="text-brand-primary text-2xl font-mono font-bold">+24.5%</div>
              <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">{t('hero.stats.roi')}</div>
            </motion.div>
          </div>
          <div className="hidden lg:block absolute -right-20 bottom-1/4">
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] backdrop-blur-xl shadow-2xl"
            >
              <div className="text-[var(--text-main)] text-2xl font-mono font-bold">2.84</div>
              <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold">{t('hero.stats.profit_factor')}</div>
            </motion.div>
          </div>
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
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="relative group/avatar">
                      <img 
                        src={`https://picsum.photos/seed/avatar${i + 15}/100/100`} 
                        alt={`Trader ${i}`}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full border-2 border-[var(--bg-main)] object-cover ring-1 ring-[var(--border-subtle)] group-hover/avatar:scale-110 transition-transform" 
                      />
                    </div>
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
                <Globe className="w-6 h-6 text-blue-500/50" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-[var(--text-main)]">{t('features.bento.global.title')}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t('features.bento.global.desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee (Simulated) */}
      <section className="py-20 border-y border-[var(--border-subtle)] overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {['Bloomberg', 'Reuters', 'Forbes', 'Wall Street Journal', 'Financial Times', 'CNBC'].map(i => (
            <div key={i} className="flex items-center gap-4 text-[var(--text-muted)] opacity-30 font-bold text-2xl uppercase tracking-widest italic">
              {i}
            </div>
          ))}
          {['Bloomberg', 'Reuters', 'Forbes', 'Wall Street Journal', 'Financial Times', 'CNBC'].map(i => (
            <div key={i + 'copy'} className="flex items-center gap-4 text-[var(--text-muted)] opacity-30 font-bold text-2xl uppercase tracking-widest italic">
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Mockup Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeInWhenVisible>
              <h2 className="text-5xl font-bold mb-8 leading-tight">{t('mockup.title')} <br /><span className="text-brand-primary">{t('mockup.title.accent')}</span></h2>
              <p className="text-[var(--text-muted)] text-xl mb-12 leading-relaxed">
                {t('mockup.desc')}
              </p>
              <div className="space-y-6">
                {[t('mockup.feature1'), t('mockup.feature2'), t('mockup.feature3')].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative lg:h-[600px] w-full"
            >
              <div className="absolute -inset-10 bg-brand-primary/20 blur-[120px] rounded-full opacity-20 animate-pulse" />
              <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full opacity-20 bottom-0 right-0" />
              
              <div className="relative h-full w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[3.5rem] p-4 shadow-2xl overflow-hidden group transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-main)]/[0.02] to-transparent pointer-events-none" />
                <InteractiveMockup />
                
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                <div className="absolute bottom-8 left-8 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-main)]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-main)]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-main)]/20" />
                </div>
              </div>
            </motion.div>
          </div>
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
                  <a href="#" className="px-6 py-3 rounded-2xl bg-white border border-black/10 flex items-center gap-4 hover:scale-[1.02] transition-all shadow-sm group">
                    <svg viewBox="0 0 384 512" className="w-7 h-7 fill-black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] text-black/60 uppercase font-black tracking-tighter leading-none mb-1">{t('mobile.app_store.label')}</div>
                      <div className="text-lg font-bold text-black leading-none">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="px-6 py-3 rounded-2xl bg-white border border-black/10 flex items-center gap-4 hover:scale-[1.02] transition-all shadow-sm group">
                    <svg viewBox="0 0 512 512" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#4285F4" d="M12 55.4v401.2c0 13.1 7.1 25.1 18.6 31.4l212.1-212.1L12 55.4z"/>
                      <path fill="#34A853" d="M481.4 223.4L337.3 139.9 242.7 234.5l94.6 94.6 144.1-83.5c11.5-6.3 18.6-18.3 18.6-31.4s-7.1-25.1-18.6-30.8z"/>
                      <path fill="#FBBC05" d="M12 55.4l230.7 230.7 94.6-94.6L12 24c-11.5 6.3-18.6 18.3-18.6 31.4z"/>
                      <path fill="#EA4335" d="M242.7 277.5l94.6 94.6 144.1-83.5c11.5-6.3 18.6-18.3 18.6-31.4s-7.1-25.1-18.6-30.8L242.7 277.5z" opacity=".1"/>
                      <path fill="#EA4335" d="M337.3 372.1l144.1-83.5c11.5-6.3 18.6-18.3 18.6-31.4 0-1.2-.1-2.4-.2-3.6l-162.5 162.5 0 0z" opacity=".1"/>
                      <path fill="#EA4335" d="M30.6 488c-11.5-6.3-18.6-18.3-18.6-31.4V55.4c0-1.2.1-2.4.2-3.6L242.7 282.5 30.6 488z" opacity=".1"/>
                      <path fill="#EA4335" d="M337.3 139.9L30.6 24C19.1 17.7 12 29.7 12 42.8V55.4L242.7 286.1 337.3 139.9z"/>
                      <path fill="#EA4335" d="M337.3 372.1L242.7 277.5 30.6 488c11.5 6.3 18.6-5.7 18.6-18.8v-12.6L337.3 372.1z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] text-black/60 uppercase font-black tracking-tighter leading-none mb-1">{t('mobile.google_play.label')}</div>
                      <div className="text-lg font-bold text-black leading-none">Google Play</div>
                    </div>
                  </a>
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
                <Link 
                  to="/signup" 
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-all text-center",
                    plan.popular ? "bg-brand-primary text-white hover:bg-brand-primary/90" : "bg-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)]"
                  )}
                >
                  {plan.cta}
                </Link>
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
