import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages, LogOut, LayoutGrid, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

import { TradeGrailLogo } from './Logo';
import { FeaturesMegaMenu } from './FeaturesMegaMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[72px] gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <TradeGrailLogo className="w-8 h-8" />
            <span className="text-[17px] font-bold tracking-tight text-[var(--text-main)]">TradeGrail</span>
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {/* Features dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors rounded-md hover:bg-[var(--border-subtle)]">
                {t('nav.features')}
                <motion.span
                  animate={{ rotate: showMegaMenu ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {showMegaMenu && (
                  <FeaturesMegaMenu onClose={() => setShowMegaMenu(false)} />
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/pricing"
              className="px-3 py-2 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors rounded-md hover:bg-[var(--border-subtle)]"
            >
              {t('nav.pricing')}
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors rounded-md hover:bg-[var(--border-subtle)]"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                {t('features.showcase.dashboard.label')}
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {/* Language + Theme toggles */}
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
                className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-[var(--text-muted)] hover:text-red-500 transition-colors rounded-md"
              >
                <LogOut className="w-3.5 h-3.5" />
                {t('nav.logout') || '退出'}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-1.5 bg-[#6366f1] hover:bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-[14px] font-semibold transition-colors"
                >
                  {language === 'zh' ? '免费开始' : 'Get Started'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-[var(--text-muted)] hover:bg-[var(--border-subtle)]"
            >
              <Languages className="w-4 h-4" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[var(--text-muted)] hover:bg-[var(--border-subtle)]"
            >
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
            <a
              href="/#features"
              className="block px-3 py-2.5 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.features')}
            </a>
            <Link
              to="/pricing"
              className="block px-3 py-2.5 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2.5 text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-md hover:bg-[var(--border-subtle)]"
                  onClick={() => setIsOpen(false)}
                >
                  {t('features.showcase.dashboard.label')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2.5 text-[14px] font-medium text-red-500 rounded-md hover:bg-red-50"
                >
                  {t('nav.logout') || '退出'}
                </button>
              </>
            ) : (
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/login"
                  className="block px-3 py-2.5 text-[14px] font-medium text-[var(--text-muted)] text-center border border-[var(--border-subtle)] rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center justify-center gap-1.5 bg-[#6366f1] text-white px-4 py-2.5 rounded-lg text-[14px] font-semibold"
                  onClick={() => setIsOpen(false)}
                >
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
