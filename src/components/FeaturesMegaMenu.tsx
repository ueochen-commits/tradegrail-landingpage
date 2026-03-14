import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard,
  Zap, 
  BookOpen,
  Sparkles,
  Activity,
  GraduationCap, 
  ShieldCheck,
  ArrowRight,
  Plus,
  TrendingUp,
  PlayCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface MegaMenuProps {
  onClose: () => void;
}

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
  comingSoon?: boolean;
  preview?: React.ReactNode;
}

export const FeaturesMegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const mainFeatures: FeatureItem[] = [
    {
      id: 'dashboard',
      title: t('nav.features.journal.title'),
      desc: t('nav.features.journal.desc'),
      icon: LayoutDashboard,
      color: 'text-indigo-600',
      preview: (
        <div className="mt-4 relative h-36 w-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl border border-[var(--border-subtle)] overflow-hidden p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="px-2 py-1 bg-indigo-600/10 text-indigo-600 text-[8px] font-bold rounded flex items-center gap-1">
              <Sparkles className="w-2 h-2" /> AI Insights
            </div>
          </div>
          <div className="bg-[var(--card-bg)]/80 backdrop-blur-sm rounded-lg border border-[var(--border-subtle)] p-3 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              <TrendingUp className="w-2 h-2 text-emerald-500" />
              <span className="text-[7px] font-bold text-[var(--text-muted)] uppercase">Win Rate 75%</span>
            </div>
            <div className="flex items-end gap-1 h-12 mb-2">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="#6366f1" strokeWidth="2" />
                <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15 L100,40 L0,40 Z" fill="url(#grad1)" opacity="0.2" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-1 bg-[var(--border-subtle)] rounded-full" />)}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'backtest',
      title: t('nav.features.backtest.title'),
      desc: t('nav.features.backtest.desc'),
      icon: Zap,
      color: 'text-pink-500',
      preview: (
        <div className="mt-4 relative h-36 w-full bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-xl border border-[var(--border-subtle)] overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="text-[8px] font-bold text-[var(--text-muted)] uppercase">Buy</div>
              <div className="px-4 py-2 bg-[var(--card-bg)] text-emerald-500 rounded-lg font-bold text-xs border border-[var(--border-subtle)] shadow-sm">6,765.99</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-[8px] font-bold text-[var(--text-muted)] uppercase">Sell</div>
              <div className="px-4 py-2 bg-pink-500 text-white rounded-lg font-bold text-xs shadow-md shadow-pink-500/20">6,765.99</div>
            </div>
          </div>
          <div className="w-full max-w-[160px] bg-[var(--card-bg)]/90 backdrop-blur-sm rounded-full border border-[var(--border-subtle)] p-1.5 flex items-center justify-between px-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => <div key={i} className="w-0.5 h-0.5 rounded-full bg-[var(--text-muted)]/30" />)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-[var(--border-subtle)] flex items-center justify-center"><div className="w-1 h-1 bg-[var(--text-muted)] rounded-full" /></div>
              <PlayCircle className="w-4 h-4 text-indigo-600" />
              <div className="w-3 h-3 rounded-full border border-[var(--border-subtle)] flex items-center justify-center"><div className="w-1 h-1 bg-[var(--text-muted)] rounded-full" /></div>
            </div>
            <div className="text-[8px] font-bold text-[var(--text-muted)]">1min</div>
          </div>
        </div>
      )
    },
    {
      id: 'playbook',
      title: t('nav.features.spaces.title'),
      desc: t('nav.features.spaces.desc'),
      icon: BookOpen,
      color: 'text-emerald-500',
      preview: (
        <div className="mt-4 relative h-36 w-full bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-xl border border-[var(--border-subtle)] overflow-hidden p-4 flex flex-col justify-center">
          <div className="bg-[var(--card-bg)]/80 backdrop-blur-sm rounded-xl border border-[var(--border-subtle)] p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="h-2 w-24 bg-[var(--border-subtle)] rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-[var(--bg-main)] rounded-full" />
              <div className="h-1.5 w-4/5 bg-[var(--bg-main)] rounded-full" />
              <div className="h-1.5 w-3/4 bg-[var(--bg-main)] rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analyst',
      title: t('nav.features.prop.title'),
      desc: t('nav.features.prop.desc'),
      icon: Sparkles,
      color: 'text-purple-500',
      preview: (
        <div className="mt-4 relative h-36 w-full bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-xl border border-[var(--border-subtle)] overflow-hidden p-4 flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div className="bg-indigo-600 text-white text-[9px] p-2 rounded-2xl rounded-bl-none max-w-[80%] self-start shadow-sm">
              Analyze current market sentiment.
            </div>
            <div className="bg-[var(--card-bg)] text-[var(--text-main)] text-[9px] p-2 rounded-2xl rounded-br-none max-w-[80%] self-end border border-[var(--border-subtle)] shadow-sm">
              Market is currently showing bullish divergence...
            </div>
          </div>
        </div>
      )
    }
  ];

  const sideFeatures: FeatureItem[] = [
    {
      id: 'pulse',
      title: t('nav.features.replay.title'),
      desc: t('nav.features.replay.desc'),
      icon: Activity,
      color: 'text-amber-500',
    },
    {
      id: 'university',
      title: t('nav.features.university.title'),
      desc: t('nav.features.university.desc'),
      icon: GraduationCap,
      color: 'text-indigo-600',
    },
    {
      id: 'prop-sync',
      title: t('nav.features.ai.title'),
      desc: t('nav.features.ai.desc'),
      icon: ShieldCheck,
      color: 'text-emerald-600',
      comingSoon: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-[1100px] bg-[var(--card-bg)] rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] border border-[var(--border-subtle)] overflow-hidden z-50 p-10 transition-colors duration-300"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-12 gap-10">
        {/* Left Grid: Main Features */}
        <div className="col-span-8 grid grid-cols-2 gap-8">
          {mainFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] flex items-center justify-center shrink-0 bg-[var(--bg-main)] shadow-sm group-hover:border-indigo-500/30 group-hover:shadow-md transition-all">
                  <feature.icon className={cn("w-5 h-5", feature.color)} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-[var(--text-main)] group-hover:text-indigo-500 transition-colors leading-tight">{feature.title}</h4>
                    {feature.comingSoon && (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[8px] font-black uppercase tracking-widest">
                        {t('nav.features.coming_soon')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1.5">{feature.desc}</p>
                </div>
              </div>
              {feature.preview}
            </div>
          ))}
        </div>

        {/* Right Column: Side Features */}
        <div className="col-span-4 border-l border-[var(--border-subtle)] pl-10 space-y-10">
          {sideFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="group flex items-start gap-5 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center shrink-0 bg-[var(--bg-main)] shadow-sm group-hover:border-indigo-500/30 group-hover:shadow-md transition-all">
                <feature.icon className={cn("w-6 h-6", feature.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h4 className="text-lg font-bold text-[var(--text-main)] group-hover:text-indigo-500 transition-colors leading-tight">{feature.title}</h4>
                  {feature.comingSoon && (
                    <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[8px] font-black uppercase tracking-widest">
                      {t('nav.features.coming_soon')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}

          <div className="pt-6">
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[var(--bg-main)] text-[var(--text-muted)] text-sm font-bold hover:bg-[var(--border-subtle)] transition-colors group">
              View All Features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
