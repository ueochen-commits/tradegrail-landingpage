import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, Menu, X, Sun, Moon, Languages, LogOut, LayoutGrid } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <TradeGrailLogo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">TradeGrail</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div 
              className="relative py-4"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors flex items-center gap-1">
                {t('nav.features')}
                <motion.div
                  animate={{ rotate: showMegaMenu ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {showMegaMenu && (
                  <FeaturesMegaMenu onClose={() => setShowMegaMenu(false)} />
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{t('nav.pricing')}</Link>
            
            {user ? (
              <>
                <Link to="/dashboard" className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                  {t('features.showcase.dashboard.label')}
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-red-500 transition-colors">
                  <LogOut className="w-4 h-4" />
                  {t('nav.logout') || '退出'}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">{t('nav.login')}</Link>
                <Link to="/signup" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-primary/90 transition-colors">
                  {t('nav.signup')}
                </Link>
              </>
            )}
            
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors text-xs font-bold"
              >
                <Languages className="w-4 h-4" />
                <span>{language === 'zh' ? 'EN' : '中文'}</span>
              </button>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)]"
            >
              <Languages className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-main)]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--bg-main)] border-b border-[var(--border-subtle)] px-4 py-4 space-y-4"
        >
          <a href="/#features" className="block text-sm font-medium text-[var(--text-muted)]" onClick={() => setIsOpen(false)}>{t('nav.features')}</a>
          <Link to="/pricing" className="block text-sm font-medium text-[var(--text-muted)]" onClick={() => setIsOpen(false)}>{t('nav.pricing')}</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="block text-sm font-medium text-[var(--text-muted)]">{t('features.showcase.dashboard.label')}</Link>
              <button onClick={handleLogout} className="block text-sm font-medium text-red-500">{t('nav.logout') || '退出'}</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-sm font-medium text-[var(--text-muted)]">{t('nav.login')}</Link>
              <Link to="/signup" className="block bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-bold text-center">
                {t('nav.signup')}
              </Link>
            </>
          )}
        </motion.div>
      )}
    </nav>
  );
}
