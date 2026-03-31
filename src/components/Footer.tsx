import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Twitter, 
  Instagram, 
  Youtube, 
  Apple, 
  PlayCircle 
} from 'lucide-react';
import { TradeGrailLogo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative bg-[var(--bg-main)] text-[var(--text-main)] pt-20 pb-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section - Large Rounded Card */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3.5rem] p-16 sm:p-24 lg:p-32 text-center overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl group transition-all duration-700"
          >
            {/* Atmospheric Background Gradients - Immersive Mesh Style */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              {/* Deep Purple Glow */}
              <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[140%] bg-indigo-600/30 blur-[140px] rounded-full opacity-80 animate-pulse" style={{ animationDuration: '8s' }} />
              {/* Vibrant Blue Accent */}
              <div className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[150%] bg-blue-600/40 blur-[120px] rounded-full opacity-70 animate-pulse" style={{ animationDuration: '12s' }} />
              {/* Pink Highlight */}
              <div className="absolute top-[10%] right-[5%] w-[40%] h-[60%] bg-pink-600/20 blur-[100px] rounded-full opacity-50" />
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-indigo-950/20 to-black/40" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#ff4e9e] font-bold text-xs uppercase tracking-[0.4em] mb-8"
              >
                {t('footer.cta.tag')}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-[0.95] text-white"
              >
                {t('footer.cta.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-lg sm:text-xl lg:text-2xl mb-14 leading-relaxed max-w-3xl mx-auto font-medium"
              >
                {t('footer.cta.desc')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to="/signup" 
                  className="inline-flex items-center gap-3 bg-[#6366f1] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#4f46e5] transition-all active:scale-95 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]"
                >
                  {t('footer.cta.button')} <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>

            {/* Grain Overlay - CSS-based noise effect */}
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}
            />
            
            {/* Subtle Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-[3.5rem] pointer-events-none" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[var(--border-subtle)] mb-20" />

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Logo & Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <TradeGrailLogo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter uppercase">TradeGrail</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">{t('footer.product')}</h4>
            <ul className="space-y-4">
              {[
                { key: 'footer.product.analytics', label: t('footer.product.analytics'), to: '#' },
                { key: 'footer.product.replay', label: t('footer.product.replay'), to: '#' },
                { key: 'footer.product.assistant', label: t('footer.product.assistant'), to: '#' },
                { key: 'footer.product.brokers', label: t('footer.product.brokers'), to: '#' },
                { key: 'footer.product.pricing', label: t('footer.product.pricing'), to: '/pricing' },
                { key: 'footer.product.whatsnew', label: t('footer.product.whatsnew'), to: '#' }
              ].map(link => (
                <li key={link.key}>
                  {link.to.startsWith('/') ? (
                    <Link to={link.to} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{link.label}</Link>
                  ) : (
                    <a href={link.to} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4">
              {[
                { key: 'footer.company.about', label: t('footer.company.about') },
                { key: 'footer.company.reviews', label: t('footer.company.reviews') },
                { key: 'footer.company.blog', label: t('footer.company.blog') },
                { key: 'footer.company.affiliate', label: t('footer.company.affiliate') }
              ].map(link => (
                <li key={link.key}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4">
              {[
                { key: 'footer.support.help', label: t('footer.support.help') },
                { key: 'footer.support.contact', label: t('footer.support.contact') },
                { key: 'footer.support.tutorials', label: t('footer.support.tutorials') },
                { key: 'footer.support.howto', label: t('footer.support.howto') },
                { key: 'footer.support.glossary', label: t('footer.support.glossary') }
              ].map(link => (
                <li key={link.key}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              {[
                { key: 'footer.legal.terms', label: t('footer.legal.terms') },
                { key: 'footer.legal.billing', label: t('footer.legal.billing') },
                { key: 'footer.legal.risk', label: t('footer.legal.risk') },
                { key: 'footer.legal.privacy', label: t('footer.legal.privacy') }
              ].map(link => (
                <li key={link.key}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-[var(--border-subtle)] flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:bg-[var(--bg-main)] transition-colors group">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[8px] uppercase leading-none text-[var(--text-muted)]">{language === 'zh' ? 'App Store 下载' : 'Download on the'}</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:bg-[var(--bg-main)] transition-colors group">
                <PlayCircle className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[8px] uppercase leading-none text-[var(--text-muted)]">{language === 'zh' ? 'Google Play 获取' : 'Get it on'}</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-5xl">
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed uppercase tracking-wider">
              {t('footer.disclaimer1')}
            </p>
            <p className="text-[10px] text-[var(--text-muted)] mt-4 leading-relaxed uppercase tracking-wider">
              {t('footer.disclaimer2')}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-[var(--text-muted)] opacity-50 uppercase tracking-[0.2em]">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};
