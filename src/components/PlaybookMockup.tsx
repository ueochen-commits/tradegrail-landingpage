import React from 'react';
import { motion } from 'motion/react';
import { 
  MoreHorizontal, 
  Lock, 
  Plus, 
  Search, 
  ChevronDown,
  PlayCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

const strategies = [
  {
    id: 'breakout',
    trades: 13,
    winRate: 61.54,
    pnl: 659.59,
    isPrivate: true
  },
  {
    id: 'gap',
    trades: 17,
    winRate: 58.82,
    pnl: 1902.38,
    isPrivate: true
  },
  {
    id: 'sweep',
    trades: 11,
    winRate: 36.36,
    pnl: 330.90,
    isPrivate: true
  },
  {
    id: 'bounce',
    trades: 11,
    winRate: 54.55,
    pnl: 1633.86,
    isPrivate: true
  },
  {
    id: 'pullback',
    trades: 12,
    winRate: 50.00,
    pnl: 340.14,
    isPrivate: true
  }
];

export const PlaybookMockup = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] p-6 overflow-hidden flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center">
            <PlayCircle className="w-5 h-5 text-brand-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">{t('playbook.title')}</h2>
            <button className="text-[10px] text-brand-primary hover:underline flex items-center gap-1">
              {t('playbook.learn_more')} <span className="text-[8px]">↗</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input 
              type="text" 
              placeholder={t('playbook.search')} 
              className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg py-1.5 pl-10 pr-4 text-xs w-48 focus:outline-none focus:border-brand-primary/50 text-[var(--text-main)]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-muted)] font-mono opacity-60">(F6)</span>
          </div>
          
          <button className="bg-brand-primary text-white px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-brand-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            {t('playbook.create')}
          </button>
          
          <button className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-lg px-3 py-1.5 text-xs flex items-center gap-2 hover:bg-[var(--text-main)]/5 transition-colors text-[var(--text-main)]">
            name-asc
            <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 overflow-y-auto no-scrollbar pb-10">
        {strategies.map((strategy, index) => (
          <StrategyCard 
            key={index} 
            strategy={{
              ...strategy,
              title: t(`playbook.strat.${strategy.id}.title`),
              description: t(`playbook.strat.${strategy.id}.desc`)
            }} 
          />
        ))}
        
        {/* Create New Placeholder */}
        <div className="border-2 border-dashed border-brand-primary/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors cursor-pointer group min-h-[220px]">
          <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-6 h-6 text-brand-primary" />
          </div>
          <span className="text-sm font-bold text-brand-primary/80">{t('playbook.create')}</span>
        </div>
      </div>
    </div>
  );
};

const StrategyCard: React.FC<{ strategy: any }> = ({ strategy }) => {
  const isPositive = strategy.pnl >= 0;
  const { t } = useLanguage();
  
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col gap-4 relative group hover:border-brand-primary/50 transition-all shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold tracking-tight text-[var(--text-main)]">{strategy.title}</h3>
        <button className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-brand-primary/80">{strategy.trades} {t('playbook.trades')}</span>
        {strategy.isPrivate && (
          <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)] font-medium">
            <Lock className="w-3 h-3" />
            {t('playbook.private')}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4 my-2">
        <div className="relative w-12 h-12 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="10" 
              className="text-[var(--text-main)]/5" 
            />
            <circle 
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="10" 
              strokeDasharray="251.2" 
              strokeDashoffset={251.2 - (251.2 * strategy.winRate) / 100} 
              className="text-emerald-500" 
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] font-black text-[var(--text-main)]">{Math.round(strategy.winRate)}%</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[8px] text-[var(--text-muted)] font-bold uppercase tracking-widest truncate">{t('playbook.win_rate')}</span>
            <span className="text-[10px] font-black text-[var(--text-main)] shrink-0">{strategy.winRate}%</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[8px] text-[var(--text-muted)] font-bold uppercase tracking-widest truncate">{t('playbook.net_pl')}</span>
            <span className={cn("text-[10px] font-black shrink-0", isPositive ? "text-emerald-500" : "text-red-500")}>
              {isPositive ? '+' : ''}${strategy.pnl.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
        {strategy.description}
      </p>
      
      {/* Hover Effect Glow */}
      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </div>
  );
};
