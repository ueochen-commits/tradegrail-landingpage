import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Shield, 
  Star, 
  MessageSquare, 
  Tag, 
  MousePointer2,
  ChevronDown,
  LayoutGrid,
  BarChart2,
  Clock,
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export const AnalysisMockup = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl overflow-hidden flex flex-col border border-[var(--border-subtle)] shadow-2xl relative group/mockup">
      {/* Browser Header */}
      <div className="h-10 bg-[var(--card-bg)] border-b border-[var(--border-subtle)] flex items-center px-4 justify-between shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-5 w-48 bg-[var(--text-main)]/5 rounded-md flex items-center px-2 gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider">1000SATS / USDT • 15m</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--text-main)]/5 border border-[var(--border-subtle)]">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-[var(--text-muted)] font-medium">{t('mockup.analysis.tag_reviewed')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[9px] font-bold">{t('mockup.analysis.replay')}</div>
            <div className="px-2 py-1 rounded bg-brand-primary text-white dark:text-black text-[9px] font-bold">{t('mockup.analysis.share')}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Stats */}
        <div className="w-64 border-r border-[var(--border-subtle)] bg-[var(--bg-main)] flex flex-col shrink-0">
          <div className="p-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.net_pl')}</span>
              <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-bold">{t('mockup.analysis.live')}</div>
            </div>
            <div className="text-2xl font-bold text-emerald-500">+$600.00</div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            <div className="space-y-2">
              <StatRow label={t('mockup.analysis.direction')} value={t('mockup.analysis.long')} valueClass="text-emerald-500" />
              <StatRow label={t('mockup.analysis.contracts')} value="30" />
              <StatRow label={t('mockup.analysis.total_pl')} value="$600.00" />
              <StatRow label={t('mockup.analysis.strategy')} value={t('mockup.analysis.strategy_val')} />
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.mae_mfe')}</span>
                <div className="flex gap-1">
                  <span className="text-[9px] text-red-500">-$5,341.50</span>
                  <span className="text-[9px] text-emerald-500">/ $5,348.25</span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[var(--text-main)]/5 rounded-full overflow-hidden flex">
                <div className="h-full bg-red-500/40 w-1/3" />
                <div className="h-full bg-emerald-500/40 w-2/3" />
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
              <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.rating')}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                <Star className="w-3 h-3 text-[var(--text-main)]/10" />
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] text-[var(--text-muted)] uppercase">{t('mockup.analysis.tp')}</span>
                  <div className="h-7 bg-[var(--text-main)]/5 rounded border border-[var(--border-subtle)] flex items-center px-2 text-[10px]">$ 5358.0</div>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] text-[var(--text-muted)] uppercase">{t('mockup.analysis.sl')}</span>
                  <div className="h-7 bg-[var(--text-main)]/5 rounded border border-[var(--border-subtle)] flex items-center px-2 text-[10px]">$ 5346.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Chart */}
        <div className="flex-1 flex flex-col relative">
          {/* Chart Toolbar */}
          <div className="h-10 border-b border-[var(--border-subtle)] flex items-center px-4 justify-between bg-[var(--bg-main)]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-medium text-[var(--text-muted)]">
                <span className="hover:text-[var(--text-main)] cursor-pointer">1m</span>
                <span className="text-[var(--text-main)] font-bold">15m</span>
                <span className="hover:text-[var(--text-main)] cursor-pointer">1h</span>
                <span className="hover:text-[var(--text-main)] cursor-pointer">4h</span>
                <span className="hover:text-[var(--text-main)] cursor-pointer">1d</span>
              </div>
              <div className="w-px h-4 bg-[var(--border-subtle)]" />
              <div className="flex items-center gap-3">
                <BarChart2 className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <TrendingUp className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <LayoutGrid className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[9px] text-[var(--text-muted)]">
                <Clock className="w-3 h-3" />
                <span>{t('mockup.analysis.autosaved')}</span>
              </div>
              <Settings className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </div>
          </div>

          {/* Actual Chart Area */}
          <div className="flex-1 relative p-4 overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full" style={{ 
                backgroundImage: 'linear-gradient(var(--text-main) 1px, transparent 1px), linear-gradient(90deg, var(--text-main) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Simulated Candlesticks */}
            <div className="absolute inset-0 flex items-end justify-around px-12 pb-20 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => {
                const height = 40 + Math.random() * 100;
                const isUp = Math.random() > 0.4;
                return (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div className={cn("w-[2px] h-4", isUp ? "bg-emerald-500/40" : "bg-red-500/40")} />
                    <div 
                      className={cn("w-2 rounded-sm", isUp ? "bg-emerald-500/60" : "bg-red-500/60")} 
                      style={{ height: `${height}px` }} 
                    />
                    <div className={cn("w-[2px] h-6", isUp ? "bg-emerald-500/40" : "bg-red-500/40")} />
                  </div>
                );
              })}
            </div>

            {/* Entry/Exit Markers */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <TrendingUp className="w-3.5 h-3.5 text-white dark:text-black" />
              </div>
              <div className="w-px h-12 bg-emerald-500/50" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute top-1/4 right-1/4 flex flex-col items-center"
            >
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                <TrendingDown className="w-3.5 h-3.5 text-white dark:text-black" />
              </div>
              <div className="w-px h-8 bg-red-500/50" />
            </motion.div>

            {/* Floating Callouts (Image 2 style) */}
            <Annotation 
              className="top-1/4 left-[55%]"
              text={t('mockup.analysis.annotation1')}
              delay={2}
            />

            <Annotation 
              className="top-[55%] left-[20%]"
              text={t('mockup.analysis.annotation2')}
              delay={2.5}
              direction="left"
            />

            {/* Floating Mistakes/Setups Card (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
              className="absolute bottom-4 left-4 w-64 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-4 space-y-4 z-30"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.mistakes')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <TagBadge text={t('mockup.analysis.mistake1')} color="red" />
                  <TagBadge text={t('mockup.analysis.mistake2')} color="red" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.opportunities')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <TagBadge text={t('mockup.analysis.opp1')} color="purple" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.habits')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <TagBadge text={t('mockup.analysis.habit1')} color="emerald" />
                </div>
              </div>
            </motion.div>

            {/* Floating Running P&L Card (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
              className="absolute bottom-4 right-4 w-72 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-4 z-30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-wider">{t('mockup.analysis.running_pl')}</span>
                <div className="text-[10px] text-emerald-500 font-bold">+$1,240.00</div>
              </div>
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  <defs>
                    <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,80 Q25,70 50,85 T100,60 T150,75 T200,40" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="2" 
                  />
                  <path 
                    d="M0,80 Q25,70 50,85 T100,60 T150,75 T200,40 V100 H0 Z" 
                    fill="url(#pnlGradient)" 
                  />
                  <circle cx="200" cy="40" r="3" fill="#10B981" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-[8px] text-[var(--text-muted)]">
                <span>09:14</span>
                <span>09:42</span>
              </div>
            </motion.div>

            {/* Start Journaling Annotation */}
            <Annotation 
              className="bottom-12 left-1/2 -translate-x-1/2"
              text={t('mockup.analysis.annotation3')}
              delay={4}
              direction="bottom"
              color="pink"
            />
          </div>

          {/* Bottom Section - Notes (Simplified as it's now partly floating) */}
          <div className="h-24 border-t border-[var(--border-subtle)] flex bg-[var(--bg-main)] px-4 items-center">
            <div className="flex-1 bg-[var(--text-main)]/5 rounded-lg p-3 text-[11px] text-[var(--text-muted)] leading-relaxed italic border border-[var(--border-subtle)]">
              {t('mockup.analysis.note_placeholder')}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-2xl shadow-brand-primary/20 cursor-pointer hover:scale-110 transition-transform">
        <MessageSquare className="w-6 h-6 text-white dark:text-black" />
      </div>
    </div>
  );
};

const StatRow = ({ label, value, valueClass }: { label: string, value: string, valueClass?: string }) => (
  <div className="flex items-center justify-between text-[11px]">
    <span className="text-[var(--text-muted)]">{label}</span>
    <span className={cn("font-medium", valueClass || "text-[var(--text-main)]/80")}>{value}</span>
  </div>
);

const TagBadge = ({ text, color }: { text: string, color: 'red' | 'purple' | 'emerald' }) => {
  const colors = {
    red: "bg-red-500/10 text-red-500 border-red-500/20",
    purple: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  };
  return (
    <div className={cn("px-2 py-0.5 rounded-full text-[9px] font-medium border flex items-center gap-1", colors[color])}>
      {text}
      <span className="opacity-40">×</span>
    </div>
  );
};

const Annotation = ({ className, text, delay, direction = 'top', color = 'indigo' }: { className: string, text: string, delay: number, direction?: 'top' | 'bottom' | 'left' | 'right', color?: 'indigo' | 'pink' }) => {
  const bgColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';
  const textColor = color === 'pink' ? 'text-white' : 'text-black';
  const arrowColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn("absolute z-40 flex flex-col items-center gap-2 pointer-events-none", className)}
    >
      <div className={cn("px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-xl whitespace-nowrap relative", bgColor, textColor)}>
        {text}
        {/* Arrow */}
        <div className={cn(
          "absolute w-2 h-2 rotate-45",
          arrowColor,
          direction === 'top' && "-bottom-1 left-1/2 -translate-x-1/2",
          direction === 'bottom' && "-top-1 left-1/2 -translate-x-1/2",
          direction === 'left' && "-right-1 top-1/2 -translate-y-1/2",
          direction === 'right' && "-left-1 top-1/2 -translate-y-1/2",
        )} />
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MousePointer2 className={cn("w-4 h-4", color === 'pink' ? "text-[#E91E63] fill-[#E91E63]" : "text-brand-primary fill-brand-primary")} />
      </motion.div>
    </motion.div>
  );
};
