import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MoreHorizontal, 
  Lock, 
  Plus, 
  Search, 
  ChevronDown,
  PlayCircle,
  Filter,
  ArrowUpDown
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

export default function PlaybookPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex flex-col h-full bg-[var(--bg-main)] overflow-hidden">
      {/* Header */}
      <div className="p-8 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-brand-primary" />
              </div>
              <h1 className="text-3xl font-black tracking-tighter text-[var(--text-main)]">{t('playbook.title')}</h1>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-[0.2em] ml-13">{t('playbook.title')}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-brand-primary transition-colors" />
              <input 
                type="text" 
                placeholder={t('playbook.search')} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 pl-12 pr-12 text-sm w-72 focus:outline-none focus:border-brand-primary/50 shadow-sm transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-muted)] font-black opacity-40">(F6)</span>
            </div>
            
            <button className="bg-brand-primary text-black px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-brand-primary/20">
              <Plus className="w-5 h-5" />
              {t('playbook.create')}
            </button>
            
            <button className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl px-4 py-3 text-sm font-bold flex items-center gap-3 hover:bg-[var(--text-main)]/5 transition-colors shadow-sm">
              <span className="text-[var(--text-muted)]">{t('playbook.sort')}</span>
              <span>name-asc</span>
              <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex items-center gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-[10px] font-black uppercase tracking-widest">
            <Filter className="w-3 h-3" /> {t('playbook.all_categories')}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
            {t('playbook.long_only')}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
            {t('playbook.short_only')}
          </button>
          <div className="h-4 w-px bg-[var(--border-subtle)] mx-2" />
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
            <ArrowUpDown className="w-3 h-3" /> {t('playbook.win_rate')}
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-8 pt-0 no-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
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
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="border-4 border-dashed border-brand-primary/20 rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-6 bg-brand-primary/5 hover:bg-brand-primary/10 transition-all cursor-pointer group min-h-[300px]"
          >
            <div className="w-20 h-20 rounded-3xl bg-brand-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <Plus className="w-10 h-10 text-brand-primary" />
            </div>
            <div className="text-center">
              <span className="text-xl font-black text-brand-primary block mb-2">{t('playbook.create')}</span>
              <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">{t('playbook.define_edge')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const StrategyCard: React.FC<{ strategy: any }> = ({ strategy }) => {
  const isPositive = strategy.pnl >= 0;
  const { t } = useLanguage();
  
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 flex flex-col gap-6 relative group hover:border-brand-primary/50 transition-all shadow-xl hover:shadow-brand-primary/10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--text-main)]/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
            <PlayCircle className="w-5 h-5 text-brand-primary" />
          </div>
          <h3 className="text-xl font-black tracking-tighter text-[var(--text-main)]">{strategy.title}</h3>
        </div>
        <button className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5 rounded-full transition-all">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest">
          {strategy.trades} {t('playbook.trades')}
        </div>
        {strategy.isPrivate && (
          <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)] font-black uppercase tracking-widest">
            <Lock className="w-3 h-3" />
            {t('playbook.private')}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-6 my-2">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="12" 
              className="text-[var(--text-main)]/5" 
            />
            <motion.circle 
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * strategy.winRate) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="12" 
              strokeDasharray="251.2" 
              className="text-emerald-500" 
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs font-black text-[var(--text-main)]">{Math.round(strategy.winRate)}%</div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] text-[var(--text-muted)] font-black uppercase tracking-widest truncate">{t('playbook.win_rate')}</span>
            <span className="text-lg font-black text-[var(--text-main)] shrink-0">{strategy.winRate}%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] text-[var(--text-muted)] font-black uppercase tracking-widest truncate">{t('playbook.net_pl')}</span>
            <span className={cn("text-lg font-black shrink-0", isPositive ? "text-emerald-500" : "text-red-500")}>
              {isPositive ? '+' : ''}${strategy.pnl.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium line-clamp-2">
        {strategy.description}
      </p>
      
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-[var(--card-bg)] bg-[var(--text-main)]/10 flex items-center justify-center text-[8px] font-black">
              U{i}
            </div>
          ))}
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary hover:underline">
          {t('playbook.view_details')} →
        </button>
      </div>
      
      {/* Hover Effect Glow */}
      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
    </motion.div>
  );
};
