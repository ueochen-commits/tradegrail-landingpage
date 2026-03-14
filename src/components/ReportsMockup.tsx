import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Hash, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Info,
  Download,
  Filter,
  Share2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export const ReportsMockup = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl overflow-hidden flex flex-col border border-[var(--border-subtle)] shadow-2xl relative group/reports font-sans">
      {/* Header Area */}
      <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--text-main)]/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-brand-primary" />
          </div>
          <h2 className="text-lg font-black tracking-tighter text-[var(--text-main)]">{t('mockup.reports.title')}</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] hover:bg-[var(--text-main)]/10 transition-all">
            <Filter className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </button>
          <button className="p-1.5 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] hover:bg-[var(--text-main)]/10 transition-all">
            <Download className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </button>
          <button className="p-1.5 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] hover:bg-[var(--text-main)]/10 transition-all">
            <Share2 className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-4">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          <SummaryCard 
            label={t('mockup.reports.best_month')} 
            value="$3,141.00" 
            subtext={t('mockup.reports.best_month_desc')} 
            color="emerald" 
            icon={TrendingUp}
          />
          <SummaryCard 
            label={t('mockup.reports.worst_month')} 
            value="$0.00" 
            subtext={t('mockup.reports.worst_month_desc')} 
            color="red" 
            icon={TrendingDown}
          />
          <SummaryCard 
            label={t('mockup.reports.avg_monthly')} 
            value="$2,058.005" 
            subtext={t('mockup.reports.avg_monthly_desc')} 
            color="brand-primary" 
            icon={Calendar}
          />
        </div>

        {/* Statistics Table Section */}
        <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--border-subtle)] flex items-center gap-2 bg-[var(--text-main)]/[0.01]">
            <Hash className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.reports.detailed_stats')} ({t('mockup.journal.all_time')})</span>
          </div>
          <div className="p-4 grid grid-cols-2 gap-x-12 gap-y-1.5">
            <StatRow label={t('mockup.analysis.total_pl')} value="$4,159.81" color="emerald" />
            <StatRow label={t('mockup.reports.avg_hold_loss')} value={`2${t('mockup.reports.hours')} 37${t('mockup.reports.minutes')}`} />
            <StatRow label={t('mockup.reports.avg_daily_vol')} value="$21,490.302" />
            <StatRow label={t('mockup.reports.avg_hold_even')} value="N/A" />
            <StatRow label={t('mockup.reports.avg_win')} value="$264.11" color="emerald" />
            <StatRow label={t('mockup.reports.avg_pl_per_trade')} value="$49.52" color="emerald" />
            <StatRow label={t('mockup.reports.avg_loss')} value="$-120.75" color="red" />
            <StatRow label={t('mockup.reports.profit_factor')} value="1.81" color="brand-primary" />
            <StatRow label={t('mockup.reports.total_trades')} value="85" />
            <StatRow label={t('mockup.reports.open_positions')} value="1" color="brand-primary" />
            <StatRow label={t('mockup.reports.winning_trades')} value="38" color="emerald" />
            <StatRow label={t('mockup.reports.total_days')} value="30" />
            <StatRow label={t('mockup.reports.losing_trades')} value="46" color="red" />
            <StatRow label={t('mockup.reports.winning_days')} value="18" color="emerald" />
            <StatRow label={t('mockup.reports.even_trades')} value="0" />
            <StatRow label={t('mockup.reports.losing_days')} value="12" color="red" />
            <StatRow label={t('mockup.reports.max_win_streak')} value="4" color="emerald" />
            <StatRow label={t('mockup.reports.even_days')} value="0" />
            <StatRow label={t('mockup.reports.max_loss_streak')} value="6" color="red" />
            <StatRow label={t('mockup.reports.recorded_days')} value="30" />
            <StatRow label={t('mockup.reports.total_fees')} value="$321.75" color="red" />
            <StatRow label={t('mockup.reports.max_green_streak')} value="6" color="emerald" />
            <StatRow label={t('mockup.reports.overnight_fees')} value="$0.00" />
            <StatRow label={t('mockup.reports.max_red_streak')} value="3" color="red" />
            <StatRow label={t('mockup.reports.max_win')} value="$492.47" color="emerald" />
            <StatRow label={t('mockup.reports.avg_daily_pl')} value="$138.66" color="emerald" />
            <StatRow label={t('mockup.reports.max_loss')} value="$-191.43" color="red" />
            <StatRow label={t('mockup.reports.max_daily_loss')} value="$-398.89" color="red" />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Equity Curve */}
          <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] p-4 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.dashboard.equity_curve')}</span>
            </div>
            <div className="h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0,80 Q20,75 40,78 T80,65 T120,70 T160,55 T200,60 T240,45 T280,50 T320,35 T360,40 T400,25" 
                  fill="none" 
                  stroke="#6366F1" 
                  strokeWidth="2" 
                />
                <path 
                  d="M0,80 Q20,75 40,78 T80,65 T120,70 T160,55 T200,60 T240,45 T280,50 T320,35 T360,40 T400,25 V100 H0 Z" 
                  fill="url(#equityGrad)" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.02]">
                {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-[var(--text-main)]" />)}
              </div>
            </div>
          </div>

          {/* Daily P&L Bar Chart */}
          <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] p-4 space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.dashboard.today_pl')}</span>
            </div>
            <div className="h-32 relative flex items-center gap-[2px] px-1">
              {/* Zero Line */}
              <div className="absolute left-0 right-0 h-px bg-[var(--text-main)]/10 top-1/2 z-0" />
              
              {Array.from({ length: 30 }).map((_, i) => {
                const isPositive = Math.random() > 0.4;
                const height = Math.random() * 40 + 10;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center h-full relative z-10">
                    {isPositive ? (
                      <div className="flex-1 flex flex-col justify-end w-full">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 2}%` }}
                          transition={{ duration: 0.5, delay: i * 0.02 }}
                          className="w-full bg-emerald-500/40 border-t border-emerald-500/50 rounded-t-[1px]"
                        />
                        <div className="flex-1" />
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col w-full">
                        <div className="flex-1" />
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 2}%` }}
                          transition={{ duration: 0.5, delay: i * 0.02 }}
                          className="w-full bg-red-500/40 border-b border-red-500/50 rounded-b-[1px]"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, subtext, color, icon: Icon }: any) => (
  <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] relative overflow-hidden group/card hover:border-[var(--text-main)]/10 transition-all">
    <div className="absolute top-0 right-0 p-2 opacity-[0.03] group-hover/card:scale-110 transition-transform duration-700">
      <Icon className="w-16 h-16" />
    </div>
    <div className="relative z-10 space-y-1">
      <div className="text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)]">{label}</div>
      <div className={cn(
        "text-xl font-black tracking-tighter",
        color === 'emerald' ? "text-emerald-500" : 
        color === 'red' ? "text-red-500" : "text-brand-primary"
      )}>
        {value}
      </div>
      <div className="text-[7px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{subtext}</div>
    </div>
  </div>
);

const StatRow = ({ label, value, color }: any) => (
  <div className="flex items-center justify-between py-1 group/row">
    <span className="text-[9px] font-bold text-[var(--text-muted)] group-hover/row:text-[var(--text-main)]/50 transition-colors">{label}</span>
    <span className={cn(
      "text-[9px] font-black tracking-tight",
      color === 'emerald' ? "text-emerald-500" : 
      color === 'red' ? "text-red-500" : 
      color === 'brand-primary' ? "text-brand-primary" : "text-[var(--text-main)]/80"
    )}>
      {value}
    </span>
  </div>
);
