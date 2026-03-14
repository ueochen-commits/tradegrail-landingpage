import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Plus, 
  Filter, 
  Download, 
  Search,
  MoreHorizontal,
  MousePointer2,
  LayoutGrid,
  BarChart2,
  FileText,
  PlayCircle,
  ClipboardCheck,
  BookOpen,
  Target,
  Clock,
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { TradeGrailLogo } from './Logo';

export const JournalMockup = () => {
  const { t } = useLanguage();
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  
  const tradeData: Record<number, { pnl: number, trades: number, tags: string[] }> = {
    1: { pnl: 369.37, trades: 1, tags: ['BREAKOUT'] },
    2: { pnl: 355.71, trades: 4, tags: ['SUPPORT BOUNCE', 'BREAKOUT'] },
    3: { pnl: -103.90, trades: 1, tags: ['BREAKOUT'] },
    5: { pnl: 551.56, trades: 2, tags: ['LIQUIDITY SWEEP', 'TREND PULLBACK'] },
    7: { pnl: 551.57, trades: 3, tags: ['BREAKOUT', 'LIQUIDITY SWEEP', 'NO STOP LOSS'] },
    8: { pnl: -257.84, trades: 2, tags: ['LIQUIDITY SWEEP', 'SUPPORT BOUNCE'] },
    9: { pnl: 2.22, trades: 2, tags: ['TREND PULLBACK'] },
    10: { pnl: 513.47, trades: 4, tags: ['BREAKOUT', 'NEWS EVENT'] },
    11: { pnl: -102.56, trades: 3, tags: ['LIQUIDITY SWEEP', 'FIB RETRACEMENT'] },
    12: { pnl: 237.84, trades: 3, tags: ['LIQUIDITY SWEEP', 'BREAKOUT'] },
    13: { pnl: 410.88, trades: 3, tags: ['LIQUIDITY SWEEP', 'SUPPORT BOUNCE', 'EARLY EXIT'] },
    14: { pnl: -134.02, trades: 4, tags: ['LIQUIDITY SWEEP', 'TREND PULLBACK', 'NO STOP LOSS'] },
    15: { pnl: 488.68, trades: 5, tags: ['TREND PULLBACK', 'BREAKOUT'] },
    16: { pnl: 303.04, trades: 1, tags: ['SUPPORT BOUNCE'] },
    17: { pnl: -405.53, trades: 3, tags: ['SUPPORT BOUNCE', 'FIB RETRACEMENT', 'EARLY EXIT'] },
    18: { pnl: 266.28, trades: 1, tags: ['LIQUIDITY SWEEP'] },
    19: { pnl: 729.81, trades: 2, tags: ['BREAKOUT', 'FIB RETRACEMENT'] },
    20: { pnl: -197.77, trades: 1, tags: ['TREND PULLBACK'] },
    21: { pnl: 385.56, trades: 3, tags: ['BREAKOUT', 'NEWS EVENT'] },
    22: { pnl: 209.09, trades: 2, tags: ['BREAKOUT', 'LIQUIDITY SWEEP'] },
    23: { pnl: 280.22, trades: 3, tags: ['BREAKOUT', 'LIQUIDITY SWEEP', 'EARLY EXIT'] },
    24: { pnl: 481.33, trades: 1, tags: ['SUPPORT BOUNCE'] },
    25: { pnl: 0.04, trades: 1, tags: ['SUPPORT BOUNCE'] },
    26: { pnl: -250.69, trades: 2, tags: ['FIB RETRACEMENT', 'SUPPORT BOUNCE'] },
    27: { pnl: -89.74, trades: 1, tags: ['LIQUIDITY SWEEP'] },
    28: { pnl: 291.13, trades: 2, tags: ['LIQUIDITY SWEEP', 'SUPPORT BOUNCE'] },
  };

  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl overflow-hidden flex border border-[var(--border-subtle)] shadow-2xl relative group/journal">
      {/* 1. App Sidebar (Simulated Leftmost) */}
      <div className="w-16 border-r border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col items-center py-4 shrink-0 gap-6">
        <div className="mb-2">
          <TradeGrailLogo className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-4">
          <SidebarAppIcon icon={LayoutGrid} />
          <SidebarAppIcon icon={BarChart2} />
          <SidebarAppIcon icon={FileText} active />
          <SidebarAppIcon icon={PlayCircle} />
          <SidebarAppIcon icon={ClipboardCheck} />
          <SidebarAppIcon icon={BookOpen} />
          <SidebarAppIcon icon={Target} />
          <SidebarAppIcon icon={Clock} />
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <SidebarAppIcon icon={Settings} />
          <div className="w-8 h-8 rounded-full bg-[var(--text-main)]/10" />
        </div>
      </div>

      {/* 2. Journal Content */}
      <div className="flex-1 flex flex-col bg-[var(--bg-main)] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-main)]/50 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--text-main)]/5 border border-[var(--border-subtle)]">
              <ChevronLeft className="w-4 h-4 text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-main)] transition-colors" />
              <span className="text-sm font-black uppercase tracking-widest px-4">{t('mockup.journal.february')} 2026</span>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-main)] transition-colors" />
            </div>
            <button className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs font-black uppercase tracking-widest text-brand-primary hover:bg-brand-primary/20 transition-colors">{t('mockup.journal.today')}</button>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="text-right">
              <div className="text-[10px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-1">{t('mockup.dashboard.net_pl')}</div>
              <div className="text-xl font-black text-emerald-500">+$4594.62</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-1">{t('mockup.journal.total_trades')}</div>
              <div className="text-xl font-black text-[var(--text-main)]">58</div>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-1">
          {/* Weekday Labels */}
          <div className="grid grid-cols-7 border-b border-[var(--border-subtle)] bg-[var(--text-main)]/[0.01]">
            {[t('mockup.journal.sun'), t('mockup.journal.mon'), t('mockup.journal.tue'), t('mockup.journal.wed'), t('mockup.journal.thu'), t('mockup.journal.fri'), t('mockup.journal.sat')].map(day => (
              <div key={day} className="py-3 text-center text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em]">{day}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 auto-rows-[160px]">
            {days.map(day => {
              const data = tradeData[day];
              return (
                <div 
                  key={day} 
                  className={cn(
                    "border-r border-b border-[var(--border-subtle)] p-3 flex flex-col gap-2 transition-all hover:bg-[var(--text-main)]/[0.02] cursor-pointer group/day relative",
                    data && data.pnl > 0 ? "bg-emerald-500/[0.02]" : data && data.pnl < 0 ? "bg-red-500/[0.02]" : ""
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-[var(--text-muted)] group-hover/day:text-[var(--text-main)] transition-colors">{day}</span>
                    {data && (
                      <div className="text-right">
                        <div className={cn("text-sm font-black tracking-tight", data.pnl > 0 ? "text-emerald-500" : "text-red-500")}>
                          {data.pnl > 0 ? '+' : ''}${Math.abs(data.pnl).toFixed(2)}
                        </div>
                        <div className="text-[9px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{data.trades} {t('mockup.journal.trades')}</div>
                      </div>
                    )}
                  </div>
                  
                  {data && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {data.tags.map((tag, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "px-1.5 py-0.5 rounded-sm text-[8px] font-black uppercase tracking-widest border",
                            tag === 'NO STOP LOSS' || tag === 'EARLY EXIT' 
                              ? "bg-red-500/10 text-red-500 border-red-500/20" 
                              : "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                          )}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {/* Empty cells to fill the grid if needed */}
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`empty-${i}`} className="border-r border-b border-[var(--border-subtle)] bg-[var(--text-main)]/[0.01]" />
            ))}
          </div>
        </div>

        {/* Annotations */}
        <Annotation 
          className="top-[45%] left-[25%]"
          text={t('mockup.journal.annotation1')}
          delay={1.5}
        />
        <Annotation 
          className="top-[75%] left-[65%]"
          text={t('mockup.journal.annotation2')}
          delay={2}
          direction="bottom"
          color="pink"
        />
      </div>
    </div>
  );
};

const SidebarAppIcon = ({ icon: Icon, active }: { icon: any, active?: boolean }) => (
  <div className={cn(
    "w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer group/icon",
    active ? "bg-brand-primary text-black shadow-lg shadow-brand-primary/20" : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5"
  )}>
    <Icon className="w-5 h-5" />
  </div>
);

const Annotation = ({ className, text, delay, direction = 'top', color = 'indigo' }: { className: string, text: string, delay: number, direction?: 'top' | 'bottom' | 'left' | 'right', color?: 'indigo' | 'pink' }) => {
  const bgColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';
  const textColor = color === 'pink' ? 'text-white' : 'text-black';
  const arrowColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={cn("absolute z-40 flex flex-col items-center gap-2 pointer-events-none", className)}
    >
      <div className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl whitespace-nowrap relative", bgColor, textColor)}>
        {text}
        <div className={cn(
          "absolute w-2.5 h-2.5 rotate-45",
          arrowColor,
          direction === 'top' && "-bottom-1 left-1/2 -translate-x-1/2",
          direction === 'bottom' && "-top-1 left-1/2 -translate-x-1/2",
          direction === 'left' && "-right-1 top-1/2 -translate-y-1/2",
          direction === 'right' && "-left-1 top-1/2 -translate-y-1/2",
        )} />
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MousePointer2 className={cn("w-5 h-5", color === 'pink' ? "text-[#E91E63] fill-[#E91E63]" : "text-brand-primary fill-brand-primary")} />
      </motion.div>
    </motion.div>
  );
};
