import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Target, 
  Shield, 
  Zap, 
  Clock, 
  Sparkles,
  Trophy,
  Calendar,
  ListTodo,
  Flame,
  ChevronRight,
  Globe,
  LayoutGrid,
  BarChart2,
  FileText,
  PlayCircle,
  ClipboardCheck,
  BookOpen,
  Settings,
  Cpu,
  CheckCircle2,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { TradeGrailLogo } from './Logo';
import { Cube3D } from './Cube3D';

export const DashboardMockup = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl overflow-hidden flex border border-[var(--border-subtle)] shadow-2xl relative group/dashboard font-sans">
      {/* Left Sidebar */}
      <div className="w-48 border-r border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col shrink-0">
        <div className="p-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <TradeGrailLogo className="w-8 h-8" />
            <span className="font-black tracking-tighter text-sm">TRADEGRAIL</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 no-scrollbar">
          <SidebarItem icon={LayoutGrid} label={t('features.showcase.dashboard.label')} active />
          <SidebarItem icon={BarChart2} label={t('features.showcase.analytics.label')} />
          <SidebarItem icon={BookOpen} label={t('features.showcase.journal.label')} />
          <SidebarItem icon={PlayCircle} label={t('features.showcase.playbook.label')} />
          <SidebarItem icon={FileText} label={t('features.showcase.reporting.label')} />
          <SidebarItem icon={ClipboardCheck} label={t('features.showcase.notebook.label')} />
          <SidebarItem icon={Target} label={t('features.bento.psych.tag')} />
          <SidebarItem icon={Calendar} label={t('mockup.journal.today')} />
        </div>
        <div className="p-4 border-t border-[var(--border-subtle)] mt-auto">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[var(--text-main)]/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-[10px] font-black text-brand-primary">TR</div>
            <div className="min-w-0">
              <div className="text-[10px] font-black text-[var(--text-main)] truncate">Trader</div>
              <div className="text-[8px] text-brand-primary font-black uppercase tracking-widest">Elite</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Ticker Bar */}
        <div className="h-10 border-b border-[var(--border-subtle)] bg-[var(--card-bg)]/50 backdrop-blur-md flex items-center px-4 overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            <TickerItem symbol="DOW JONES" price="37,468.61" change="▲ 0.74%" color="emerald" />
            <TickerItem symbol="BTC/USD" price="65,432.10" change="▼ 1.2%" color="red" />
            <TickerItem symbol="ETH/USD" price="3,456.78" change="▲ 2.5%" color="emerald" />
            <TickerItem symbol="GOLD" price="2,045.30" change="▲ 0.45%" color="emerald" />
            <TickerItem symbol="OIL (WTI)" price="72.45" change="▼ 0.85%" color="red" />
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 no-scrollbar space-y-4">
            {/* Header & Timezones */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black tracking-tighter text-[var(--text-main)]">Good morning, Trader! 👋</h2>
                <p className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">Dashboard</p>
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                <TimezoneItem city={t('mockup.market.tokyo')} time="02:42:04" status={t('mockup.market.closed')} />
                <TimezoneItem city={t('mockup.market.london')} time="17:42:04" status={t('mockup.market.closed')} />
                <TimezoneItem city={t('mockup.market.new_york')} time="12:42:04" status={t('mockup.market.open')} />
              </div>
            </div>

            {/* Top Row: Rank & Risk */}
            <div className="grid grid-cols-12 gap-3">
              {/* Trader Rank Card */}
              <div className="col-span-8 relative h-32 rounded-xl bg-[#F59E0B] p-4 overflow-hidden group/rank shadow-lg shadow-amber-500/10">
                <div className="absolute top-0 right-0 p-1 opacity-20 group-hover/rank:scale-110 transition-transform duration-700">
                  <Trophy className="w-24 h-24" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/70 mb-0.5">{t('mockup.dashboard.rank')}</div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-white" />
                      <span className="text-xl font-black tracking-tighter text-white">{t('mockup.dashboard.gold')}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/80">
                      <span>{t('mockup.dashboard.next_rank')}</span>
                      <span className="text-white">{t('mockup.dashboard.platinum')}</span>
                    </div>
                    <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden border border-white/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
                <button className="absolute top-4 right-4 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[7px] font-black uppercase tracking-widest text-white hover:bg-white/20 transition-all flex items-center gap-1">
                  <Globe className="w-2.5 h-2.5" /> {t('mockup.dashboard.leaderboard')}
                </button>
              </div>

              {/* Risk Status Card */}
              <div className="col-span-4 h-32 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] p-4 flex flex-col justify-between group/risk hover:border-emerald-500/30 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover/risk:scale-110 transition-transform duration-500">
                      <Shield className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-[var(--text-main)] mb-0.5">{t('mockup.dashboard.risk_status')}：{t('mockup.dashboard.safe')}</div>
                      <div className="text-[7px] text-[var(--text-muted)] font-medium leading-tight">{t('mockup.dashboard.risk_desc')}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="text-[7px] text-[var(--text-muted)] uppercase font-black tracking-widest">{t('mockup.dashboard.today_pl')}</div>
                    <div className="text-base font-black text-emerald-500">$0.00</div>
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-[var(--border-subtle)]">
                    <div className="text-[7px] text-[var(--text-muted)] font-black uppercase tracking-widest">{t('mockup.dashboard.limit')}</div>
                    <div className="text-xs font-black text-red-500/80">-$500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3">
              <StatCard label={t('mockup.dashboard.net_pl')} value="$7826.83" icon={TrendingUp} color="emerald" />
              <StatCard label={t('mockup.dashboard.win_rate')} value="48.8%" icon={Target} color="brand-primary" />
              <StatCard label={t('mockup.dashboard.profit_factor')} value="3.02" icon={Zap} color="amber" />
              <StatCard label={t('mockup.dashboard.today_pl')} value="$0.00" icon={Shield} color="emerald" />
            </div>

            {/* Equity Curve Chart */}
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] space-y-3 group/chart hover:border-indigo-500/20 transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.dashboard.equity_curve')}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[8px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{t('mockup.dashboard.current')}:</span>
                    <span className="text-sm font-black text-[var(--text-main)] tracking-tighter">$17,826.83</span>
                    <span className="text-[8px] font-bold text-emerald-500 bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20">(+78.27%)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em]">{t('mockup.dashboard.initial')}: $10,000</div>
                </div>
              </div>
              <div className="h-40 relative">
                <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    d="M0,180 Q50,170 100,175 T200,150 T300,160 T400,130 T500,140 T600,100 T700,110 T800,60" 
                    fill="none" 
                    stroke="#6366F1" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M0,180 Q50,170 100,175 T200,150 T300,160 T400,130 T500,140 T600,100 T700,110 T800,60 V200 H0 Z" 
                    fill="url(#equityGradient)" 
                  />
                </svg>
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
                  {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-full h-px bg-[var(--text-main)]" />)}
                </div>
                {/* Y-Axis Labels */}
                <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-1 text-[6px] font-black text-[var(--text-muted)] uppercase tracking-widest pointer-events-none">
                  <span>18000</span>
                  <span>16000</span>
                  <span>14000</span>
                  <span>12000</span>
                  <span>10000</span>
                </div>
              </div>
            </div>

            {/* Bottom Section: Strategy & AI Insights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 className="w-3 h-3 text-brand-primary" />
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.interactive.strategy_analysis')}</h4>
                </div>
                <div className="space-y-3">
                  <StrategyBar label="Trend Pullback" value={85} color="bg-emerald-500" />
                  <StrategyBar label="Fib Retracement" value={72} color="bg-emerald-500" />
                  <StrategyBar label="Liquidity Sweep" value={100} color="bg-brand-primary" />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.interactive.ai_insights')}</h4>
                </div>
                <div className="space-y-2">
                  <InsightItem number={1} text="Good execution recently." />
                  <InsightItem number={2} text="Focus on setup: Liquidity Sweep (100% WR)" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-56 border-l border-[var(--border-subtle)] bg-[var(--card-bg)] overflow-y-auto no-scrollbar p-4 space-y-4 shrink-0">
            {/* Level Card */}
            <div className="p-3.5 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] group/level hover:border-brand-primary/20 transition-all">
              <div className="flex items-center justify-between mb-2.5">
                <div>
                  <div className="text-[7px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] mb-0.5">{t('mockup.dashboard.current_level')}</div>
                  <div className="text-sm font-black text-[var(--text-main)]">Lv. 5</div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center group-hover/level:scale-110 transition-transform">
                  <Cube3D size={24} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">
                  <span>450 XP</span>
                  <span>1000 XP</span>
                </div>
                <div className="h-1 w-full bg-[var(--text-main)]/5 rounded-full overflow-hidden border border-[var(--border-subtle)]">
                  <div className="h-full bg-brand-primary w-[45%] shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                </div>
                <div className="text-center text-[6px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] pt-1">{t('mockup.dashboard.total_xp')}: 4,500</div>
              </div>
            </div>

            {/* Weekly Goal */}
            <div className="p-3.5 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] group/goal hover:border-pink-500/20 transition-all">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <Target className="w-3 h-3 text-pink-500" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.dashboard.weekly_goal')}</span>
                </div>
                <div className="px-1 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[6px] font-black uppercase tracking-widest border border-emerald-500/20">{t('mockup.dashboard.goal_achieved')}</div>
              </div>
              <div className="flex items-center justify-center py-2 relative">
                <svg className="w-20 h-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-[var(--text-main)]/5" />
                  <motion.circle 
                    initial={{ strokeDasharray: "0, 264" }}
                    animate={{ strokeDasharray: "264, 264" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-base font-black text-[var(--text-main)] tracking-tighter">100%</span>
                </div>
              </div>
              <div className="flex justify-between px-1">
                <div className="text-center">
                  <div className="text-[7px] text-[var(--text-muted)] font-black uppercase tracking-widest mb-0.5">{t('mockup.dashboard.current')}</div>
                  <div className="text-[9px] font-black text-[var(--text-main)]">$1954</div>
                </div>
                <div className="text-center">
                  <div className="text-[7px] text-[var(--text-muted)] font-black uppercase tracking-widest mb-0.5">{t('mockup.dashboard.target')}</div>
                  <div className="text-[9px] font-black text-[var(--text-main)]">$1000</div>
                </div>
              </div>
              <button className="w-full mt-2.5 flex items-center justify-center gap-1 text-[7px] font-black uppercase tracking-[0.2em] text-brand-primary hover:text-brand-primary/80 transition-all group-hover/goal:translate-x-1">
                {t('mockup.dashboard.view_history')} <ChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Action Items */}
            <div className="p-3.5 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 mb-2.5">
                <ListTodo className="w-3 h-3 text-brand-primary" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">Action Items</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-[var(--border-subtle)]" />
                    <span className="text-[9px] font-bold">Daily Review</span>
                  </div>
                  <div className="px-1.5 py-0.5 rounded bg-brand-primary text-black text-[7px] font-black uppercase tracking-widest">Start</div>
                </div>
              </div>
            </div>

            {/* Discipline Streak */}
            <div className="p-3.5 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Flame className="w-3 h-3 text-orange-500" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{t('mockup.dashboard.discipline')}</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square rounded-md flex items-center justify-center text-[7px] font-black transition-all",
                      i < 5 ? "bg-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-[var(--text-main)]/5 text-[var(--text-muted)] hover:bg-[var(--text-main)]/10"
                    )}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-3 px-3 py-2 rounded-xl transition-all cursor-pointer group/item",
    active ? "bg-brand-primary/10 text-brand-primary" : "text-[var(--text-muted)] hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)]"
  )}>
    <Icon className={cn("w-4 h-4", active ? "text-brand-primary" : "text-[var(--text-muted)] group-hover/item:text-[var(--text-main)]")} />
    <span className="text-[10px] font-bold tracking-tight">{label}</span>
  </div>
);

const SidebarAppIcon = ({ icon: Icon, active }: { icon: any, active?: boolean }) => (
  <div className={cn(
    "w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer group/icon",
    active ? "bg-brand-primary text-black shadow-lg shadow-brand-primary/20" : "text-white/20 hover:text-white/60 hover:bg-white/5"
  )}>
    <Icon className="w-5 h-5" />
  </div>
);

const TickerItem = ({ symbol, price, change, color }: { symbol: string, price: string, change: string, color: 'emerald' | 'red' }) => (
  <div className="flex items-center gap-3">
    <span className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest">{symbol}</span>
    <span className="text-[10px] font-black text-[var(--text-main)]">{price}</span>
    <span className={cn("text-[9px] font-black", color === 'emerald' ? "text-emerald-500" : "text-red-500")}>{change}</span>
  </div>
);

const TimezoneItem = ({ city, time, status }: { city: string, time: string, status: string }) => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] shrink-0">
    <div className="w-6 h-6 rounded-md bg-[var(--text-main)]/5 flex items-center justify-center shrink-0">
      <Globe className="w-3 h-3 text-[var(--text-muted)]" />
    </div>
    <div className="min-w-0">
      <div className="flex items-center gap-1.5 leading-none mb-0.5">
        <span className="text-[9px] font-black text-[var(--text-main)] truncate">{city}</span>
        <span className="text-[7px] text-[var(--text-muted)] font-bold uppercase shrink-0">{status}</span>
      </div>
      <div className="text-[9px] font-mono font-bold text-[var(--text-muted)] leading-none">{time}</div>
    </div>
  </div>
);

const StatCard = ({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) => (
  <div className="p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] flex flex-col gap-1.5 group/stat hover:border-brand-primary/30 transition-all relative overflow-hidden">
    <div className="flex items-center justify-between">
      <div className="text-[7px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] truncate pr-2">{label}</div>
      <Icon className={cn(
        "w-3.5 h-3.5 shrink-0 transition-transform group-hover/stat:scale-110",
        color === 'emerald' ? "text-emerald-500" : 
        color === 'brand-primary' ? "text-brand-primary" :
        "text-amber-500"
      )} />
    </div>
    <div className="text-xs font-mono font-bold text-[var(--text-main)] tracking-tight truncate">
      {value}
    </div>
    {/* Subtle ambient glow */}
    <div className={cn(
      "absolute -bottom-6 -right-6 w-12 h-12 blur-2xl opacity-10 rounded-full transition-opacity group-hover/stat:opacity-20",
      color === 'emerald' ? "bg-emerald-500" : 
      color === 'brand-primary' ? "bg-brand-primary" :
      "bg-amber-500"
    )} />
  </div>
);

const StrategyBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
      <span>{label}</span>
      <span className={cn(value > 0 ? "text-emerald-500" : "text-red-500")}>{value}%</span>
    </div>
    <div className="h-1.5 w-full bg-[var(--text-main)]/5 rounded-full overflow-hidden flex">
      {value > 0 ? (
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full", color)} 
        />
      ) : (
        <div className="flex-1 flex justify-end">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${Math.abs(value)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={cn("h-full", color)} 
          />
        </div>
      )}
    </div>
  </div>
);

const InsightItem = ({ number, text }: { number: number, text: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] hover:bg-[var(--text-main)]/5 transition-colors cursor-pointer group/insight">
    <div className="w-7 h-7 rounded-lg bg-[var(--text-main)]/5 flex items-center justify-center text-[9px] font-black text-[var(--text-muted)] group-hover/insight:bg-brand-primary group-hover/insight:text-white dark:group-hover/insight:text-black transition-all">{number}</div>
    <span className="text-[10px] font-bold text-[var(--text-main)]/80">{text}</span>
  </div>
);

const TodoItem = ({ label, status }: { label: string, status: string }) => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)]">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-[var(--text-main)]/5 flex items-center justify-center">
          <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-[var(--text-main)]">{label}</div>
          <div className="text-[8px] text-[var(--text-muted)] font-bold uppercase tracking-widest">{status}</div>
        </div>
      </div>
      <button className="px-2.5 py-1 rounded-lg bg-brand-primary text-black text-[8px] font-black uppercase tracking-widest hover:bg-brand-primary/90 transition-colors">{t('hero.demo')}</button>
    </div>
  );
};
