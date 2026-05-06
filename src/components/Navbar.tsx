import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages, LogOut, LayoutGrid, ChevronDown, ArrowRight, BookOpen, HelpCircle, PlayCircle, Bitcoin, BarChart2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { TradeGrailLogo } from './Logo';
import { FeaturesMegaMenu } from './FeaturesMegaMenu';

// 通用简单下拉菜单
interface SimpleDropdownItem {
  icon: React.ReactNode;
  label: string;
  desc: string;
  href?: string;
  comingSoon?: boolean;
}

function SimpleDropdown({ items, onClose }: { items: SimpleDropdownItem[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-1 w-72 bg-[var(--card-bg)] rounded-xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] border border-[var(--border-subtle)] overflow-hidden z-50 py-2"
      onMouseLeave={onClose}
    >
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href || '#'}
          className="flex items-start gap-3 px-4 py-3 hover:bg-[var(--border-subtle)] transition-colors group"
          onClick={onClose}
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 mt-0.5">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-[var(--text-main)] group-hover:text-[#6366f1] transition-colors">{item.label}</span>
              {item.comingSoon && (
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[9px] font-bold uppercase tracking-wide">即将推出</span>
              )}
            </div>
            <p className="text-[12px] text-[var(--text-muted)] mt-0.5 leading-snug">{item.desc}</p>
          </div>
        </a>
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');
  const handleLogout = () => { logout(); navigate('/'); };

  // 导航链接统一样式：深色、15px、medium
  const navLinkCls = "flex items-center gap-1 px-3 py-2 text-[16px] font-semibold text-[var(--text-main)] hover:text-[#6366f1] transition-colors rounded-md hover:bg-[var(--border-subtle)] whitespace-nowrap";

  const solutionItems: SimpleDropdownItem[] = [
    {
      icon: <Bitcoin className="w-4 h-4 text-amber-500" />,
      label: t('nav.solutions.crypto'),
      desc: t('nav.solutions.crypto.desc'),
      href: '#',
    },
    {
      icon: <BarChart2 className="w-4 h-4 text-indigo-500" />,
      label: t('nav.solutions.stocks'),
      desc: t('nav.solutions.stocks.desc'),
      href: '#',
    },
    {
      icon: <Users className="w-4 h-4 text-emerald-500" />,
      label: t('nav.solutions.prop'),
      desc: t('nav.solutions.prop.desc'),
      href: '#',
      comingSoon: true,
    },
  ];

  const resourceItems: SimpleDropdownItem[] = [
    {
      icon: <BookOpen className="w-4 h-4 text-indigo-500" />,
      label: t('nav.resources.academy'),
      desc: t('nav.resources.academy.desc'),
      href: '#',
    },
    {
      icon: <PlayCircle className="w-4 h-4 text-pink-500" />,
      label: t('nav.resources.tutorials'),
      desc: t('nav.resources.tutorials.desc'),
      href: '#',
    },
    {
      icon: <HelpCircle className="w-4 h-4 text-slate-400" />,
      label: t('nav.resources.faq'),
      desc: t('nav.resources.faq.desc'),
      href: '#',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[72px] gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/landingpage-logo.png" alt="TradeGrail" className="h-12 w-auto" />
          </Link>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">

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

            {/* 解决方案 — simple dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <button className={navLinkCls}>
                {t('nav.solutions')}
                <motion.span animate={{ rotate: showSolutions ? 180 : 0 }} transition={{ duration: 0.18 }} className="inline-flex">
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </motion.span>
              </button>
              <AnimatePresence>
                {showSolutions && <SimpleDropdown items={solutionItems} onClose={() => setShowSolutions(false)} />}
              </AnimatePresence>
            </div>

            {/* 价格 */}
            <Link to="/pricing" className={navLinkCls}>
              {t('nav.pricing')}
            </Link>

            {/* 资源 — simple dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <button className={navLinkCls}>
                {t('nav.resources')}
                <motion.span animate={{ rotate: showResources ? 180 : 0 }} transition={{ duration: 0.18 }} className="inline-flex">
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </motion.span>
              </button>
              <AnimatePresence>
                {showResources && <SimpleDropdown items={resourceItems} onClose={() => setShowResources(false)} />}
              </AnimatePresence>
            </div>

            {user && (
              <Link to="/dashboard" className={navLinkCls}>
                <LayoutGrid className="w-3.5 h-3.5" />
                {language === 'zh' ? '控制台' : 'Dashboard'}
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-1.5 ml-auto">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="w-px h-5 bg-[var(--border-subtle)] mx-1" />

            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium text-[var(--text-muted)] hover:text-red-500 transition-colors rounded-md"
              >
                <LogOut className="w-3.5 h-3.5" />
                {t('nav.logout')}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-[16px] font-semibold text-[var(--text-main)] hover:text-[#6366f1] transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-1.5 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-5 py-2 rounded-lg text-[16px] font-semibold transition-colors"
                >
                  {language === 'zh' ? '免费开始' : 'Get Started'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button onClick={toggleLanguage} className="p-2 rounded-md text-[var(--text-muted)] hover:bg-[var(--border-subtle)]">
              <Languages className="w-4 h-4" />
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-md text-[var(--text-muted)] hover:bg-[var(--border-subtle)]">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
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
            <a href="#" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.solutions')}
            </a>
            <Link to="/pricing" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.pricing')}
            </Link>
            <a href="#" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
              {t('nav.resources')}
            </a>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]" onClick={() => setIsOpen(false)}>
                  {language === 'zh' ? '控制台' : 'Dashboard'}
                </Link>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2.5 text-[15px] font-medium text-red-500 rounded-md hover:bg-red-50">
                  {t('nav.logout')}
                </button>
              </>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <Link to="/login" className="block px-3 py-2.5 text-[15px] font-medium text-[var(--text-main)] text-center border border-[var(--border-subtle)] rounded-lg" onClick={() => setIsOpen(false)}>
                  {t('nav.login')}
                </Link>
                <Link to="/signup" className="flex items-center justify-center gap-1.5 bg-[#6366f1] text-white px-4 py-2.5 rounded-lg text-[15px] font-semibold" onClick={() => setIsOpen(false)}>
                  {language === 'zh' ? '免费开始' : 'Get Started'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
