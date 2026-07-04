import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { FeaturesMegaMenu } from './FeaturesMegaMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const { t } = useLanguage();

  // 导航链接统一样式：深色、15px、medium
  const navLinkCls = "flex items-center gap-1 px-3 py-2 text-[16px] font-semibold text-[var(--text-main)] hover:text-[#3D3A8C] transition-colors rounded-md hover:bg-[var(--border-subtle)] whitespace-nowrap";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-[72px]">

          {/* Logo — 左侧固定 */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/landingpage-logo.png" alt="TradeGrail" className="h-12 w-auto" />
          </Link>

          {/* Center nav — 绝对居中 */}
          <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">

            {/* 产品 — mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className={navLinkCls}>
                {t('nav.products')}
                <motion.span animate={{ rotate: showMegaMenu ? 180 : 0 }} transition={{ duration: 0.18 }} className="inline-flex">
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </motion.span>
              </button>
              <AnimatePresence>
                {showMegaMenu && <FeaturesMegaMenu onClose={() => setShowMegaMenu(false)} />}
              </AnimatePresence>
            </div>

            {/* 价格 */}
            <Link to="/pricing" className={navLinkCls}>
              {t('nav.pricing')}
            </Link>

            <a href="/#build-public" className={navLinkCls}>
              {t('nav.build_public')}
            </a>

          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-1.5 ml-auto">
            <a
              href="https://dashboard.tradegrail.net?auth=login"
              className="px-4 py-2 text-[16px] font-semibold text-[var(--text-main)] hover:text-[#3D3A8C] transition-colors"
            >
              {t('nav.login')}
            </a>
            <a
              href="https://dashboard.tradegrail.net?auth=signup"
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#2b276f] to-[#3a33a9] hover:from-[#332e88] hover:to-[#4540c0] text-white px-5 py-2 rounded-lg text-[16px] font-semibold transition-all"
            >
              {'免费开始'}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[var(--text-main)]">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-[var(--bg-main)] border-b border-[var(--border-subtle)] px-4 py-4 space-y-1"
          >
            <a href="/#features" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.products')}
            </a>
            <Link to="/pricing" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.pricing')}
            </Link>
            <a href="/#build-public" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.build_public')}
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a href="https://dashboard.tradegrail.net?auth=login" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] text-center border border-[var(--border-subtle)] rounded-lg" onClick={() => setIsOpen(false)}>
                {t('nav.login')}
              </a>
              <a href="https://dashboard.tradegrail.net?auth=signup" className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#2b276f] to-[#3a33a9] text-white px-4 py-2.5 rounded-lg text-[15px] font-semibold" onClick={() => setIsOpen(false)}>
                {'免费开始'}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
