import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  BookOpen, 
  ClipboardCheck, 
  FileText, 
  Wrench, 
  RotateCcw, 
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
import { cn } from '../lib/utils';
import { AnalysisMockup } from './AnalysisMockup';
import { NotebookMockup } from './NotebookMockup';
import { DashboardMockup } from './DashboardMockup';
import { JournalMockup } from './JournalMockup';
import { ReportsMockup } from './ReportsMockup';
import { PlaybookMockup } from './PlaybookMockup';
import { useLanguage } from '../context/LanguageContext';

export const FeatureShowcase = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('journal');
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      id: 'journal',
      label: t('features.showcase.journal.label'),
      icon: FileText,
      title: t('features.showcase.journal.title'),
      description: t('features.showcase.journal.desc'),
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      id: 'analytics',
      label: t('features.showcase.analytics.label'),
      icon: BarChart3,
      title: t('features.showcase.analytics.title'),
      description: t('features.showcase.analytics.desc'),
      color: 'from-brand-primary/20 to-indigo-500/20'
    },
    {
      id: 'notebook',
      label: t('features.showcase.notebook.label'),
      icon: BookOpen,
      title: t('features.showcase.notebook.title'),
      description: t('features.showcase.notebook.desc'),
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'dashboard',
      label: t('features.showcase.dashboard.label'),
      icon: LayoutGrid,
      title: t('features.showcase.dashboard.title'),
      description: t('features.showcase.dashboard.desc'),
      color: 'from-brand-primary/20 to-indigo-500/20'
    },
    {
      id: 'reporting',
      label: t('features.showcase.reporting.label'),
      icon: ClipboardCheck,
      title: t('features.showcase.reporting.title'),
      description: t('features.showcase.reporting.desc'),
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'backtesting',
      label: t('features.showcase.backtesting.label'),
      icon: Wrench,
      title: t('features.showcase.backtesting.title'),
      description: t('features.showcase.backtesting.desc'),
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'replay',
      label: t('features.showcase.replay.label'),
      icon: RotateCcw,
      title: t('features.showcase.replay.title'),
      description: t('features.showcase.replay.desc'),
      color: 'from-brand-primary/20 to-indigo-500/20'
    },
    {
      id: 'playbook',
      label: t('features.showcase.playbook.label'),
      icon: PlayCircle,
      title: t('features.showcase.playbook.title'),
      description: t('features.showcase.playbook.desc'),
      color: 'from-amber-500/20 to-orange-500/20'
    }
  ];

  const activeFeature = features.find(f => f.id === activeTab)!;

  const nextTab = useCallback(() => {
    const currentIndex = features.findIndex(f => f.id === activeTab);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveTab(features[nextIndex].id);
  }, [activeTab, features]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTab();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextTab, isPaused]);

  return (
    <div 
      className="w-full pt-10 pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="relative mb-16 group">
          {/* Scrollable Container */}
          <div className="overflow-x-auto no-scrollbar px-4 sm:px-12 py-6">
            <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 min-w-max mx-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={cn(
                      "flex flex-col items-center gap-3 transition-all duration-300 group/btn min-w-[100px]",
                      isActive ? "scale-110" : "opacity-40 hover:opacity-70"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative",
                      isActive 
                        ? "bg-brand-primary text-white shadow-[0_0_25px_rgba(99,102,241,0.5)]" 
                        : "bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-main)] group-hover/btn:border-brand-primary/50"
                    )}>
                      <Icon className="w-7 h-7" />
                      {isActive && (
                        <motion.div 
                          layoutId="glow"
                          className="absolute -inset-1 bg-brand-primary/20 blur-xl rounded-full z-[-1]"
                        />
                      )}
                    </div>
                    <span className={cn(
                      "text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]",
                      isActive ? "text-brand-primary" : "text-[var(--text-muted)]"
                    )}>
                      {feature.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-brand-primary/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-brand-primary/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-[5] pointer-events-none sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-[5] pointer-events-none sm:hidden" />
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-[3rem] border border-[var(--border-subtle)] bg-[var(--card-bg)] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Mockup Background Glow */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-10 transition-colors duration-700",
                activeFeature.color
              )} />

              <div className="relative p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 max-w-md">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-brand-primary mb-4">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">{t('features.showcase.tag')}</span>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                      {activeFeature.title}
                    </h3>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                      {activeFeature.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 rounded-full bg-brand-primary text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20">
                        {t('features.showcase.cta.try')}
                      </button>
                      <button className="px-8 py-4 rounded-full border border-[var(--border-subtle)] text-[var(--text-main)] font-bold hover:bg-white/5 transition-colors">
                        {t('features.showcase.cta.docs')}
                      </button>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-3 relative">
                  <div className="relative aspect-[16/10] rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden">
                    {activeTab === 'dashboard' ? (
                      <DashboardMockup />
                    ) : activeTab === 'analytics' ? (
                      <AnalysisMockup />
                    ) : activeTab === 'journal' ? (
                      <JournalMockup />
                    ) : activeTab === 'notebook' ? (
                      <NotebookMockup />
                    ) : activeTab === 'reporting' ? (
                      <ReportsMockup />
                    ) : activeTab === 'playbook' ? (
                      <PlaybookMockup />
                    ) : (
                      <div className="w-full h-full p-8 flex flex-col bg-[var(--bg-main)]">
                        {/* Fallback stylized dashboard for other tabs */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                          </div>
                          <div className="h-4 w-32 bg-[var(--text-main)]/5 rounded-full" />
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-6">
                          <div className="space-y-6">
                            <div className="h-32 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] p-4">
                              <div className="h-2 w-12 bg-[var(--text-main)]/10 rounded mb-4" />
                              <div className="space-y-2">
                                <div className="h-1 w-full bg-[var(--text-main)]/5 rounded" />
                                <div className="h-1 w-2/3 bg-[var(--text-main)]/5 rounded" />
                              </div>
                            </div>
                            <div className="h-48 rounded-xl bg-gradient-to-br from-brand-primary/5 to-transparent border border-[var(--border-subtle)]" />
                          </div>
                          <div className="space-y-6">
                            <div className="h-48 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)]" />
                            <div className="h-32 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
