import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  LayoutDashboard, 
  BarChart2, 
  BookOpen, 
  FileText, 
  Users, 
  Plus, 
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Edit3,
  TrendingUp,
  Target,
  Shield,
  Globe,
  Cpu,
  Bell,
  MessageSquare,
  CheckSquare,
  Calendar,
  Award,
  HelpCircle,
  Languages,
  Moon,
  LogOut,
  Settings,
  User,
  Zap,
  ArrowRight,
  MoreHorizontal,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { TradeGrailLogo } from './Logo';
import { Cube3D } from './Cube3D';
import { PlaybookMockup } from './PlaybookMockup';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const equityData = [
  { name: '1', value: 10000 },
  { name: '2', value: 10500 },
  { name: '3', value: 10200 },
  { name: '4', value: 11000 },
  { name: '5', value: 10800 },
  { name: '6', value: 11500 },
  { name: '7', value: 12000 },
  { name: '8', value: 11800 },
  { name: '9', value: 12500 },
  { name: '10', value: 13000 },
  { name: '11', value: 12800 },
  { name: '12', value: 14000 },
  { name: '13', value: 13500 },
  { name: '14', value: 14500 },
  { name: '15', value: 15000 },
  { name: '16', value: 14800 },
  { name: '17', value: 16000 },
  { name: '18', value: 17826 },
];

const strategyData = [
  { name: 'Trend Pullback', value: 85, color: '#10b981' },
  { name: 'Fib Retracement', value: 72, color: '#10b981' },
  { name: 'Liquidity Sweep', value: 65, color: '#10b981' },
  { name: 'News Event', value: 45, color: '#10b981' },
];

export const ShowcaseSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const activeTab = 'dashboard';

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: t('mockup.showcase.dashboard') },
    { id: 'charts', icon: BarChart2, label: t('mockup.dashboard.charts') },
    { id: 'journal', icon: BookOpen, label: t('mockup.dashboard.journal') },
    { id: 'playbook', icon: Target, label: t('mockup.dashboard.playbook') },
    { id: 'reports', icon: FileText, label: t('mockup.dashboard.reports') },
    { id: 'notebook', icon: Edit3, label: t('mockup.dashboard.notebook') },
    { id: 'psychology', icon: Cpu, label: t('mockup.dashboard.psychology') },
    { id: 'calendar', icon: Calendar, label: t('mockup.dashboard.calendar') },
    { id: 'social', icon: Globe, label: t('mockup.dashboard.social') },
    { id: 'academy', icon: Award, label: t('mockup.dashboard.academy') },
    { id: 'notifications', icon: Bell, label: t('mockup.dashboard.notifications'), badge: '2' },
  ];

  return (
    <section className="pt-5 pb-24 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] p-1 sm:p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden group transition-colors duration-300"
        >
          {/* Browser Header Decor */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] flex items-center px-6 gap-2 z-20 transition-colors duration-300">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* App Interface Mockup */}
          <div className="mt-10 bg-[var(--bg-main)] flex h-[900px] overflow-hidden transition-colors duration-300">
            {/* Sidebar */}
            <div className="w-64 border-r border-[var(--border-subtle)] bg-[var(--sidebar-bg)] flex flex-col p-4 shrink-0 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-8 px-2">
                <TradeGrailLogo className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg tracking-tight leading-none text-[var(--text-main)]">TradeGrail</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">LIVE V2.4</span>
                  </div>
                </div>
                <div className="ml-auto p-1.5 rounded-md bg-[var(--bg-main)] border border-[var(--border-subtle)] cursor-pointer hover:bg-[var(--card-bg)] transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="px-2 mb-6">
                <button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-primary/20">
                  <Plus className="w-5 h-5" />
                  {t('mockup.dashboard.add_trade')}
                </button>
              </div>

              <nav className="flex-1 space-y-0.5 px-2 overflow-y-auto custom-scrollbar">
                {navItems.map((item, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group/nav",
                      activeTab === item.id ? "bg-brand-primary/10 text-brand-primary" : "text-[var(--text-muted)] hover:bg-[var(--bg-main)] hover:text-[var(--text-main)]"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-brand-primary" : "text-gray-400 group-hover/nav:text-[var(--text-main)]")} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-4 border-t border-[var(--border-subtle)] space-y-1 px-2">
                {[
                  { icon: MessageSquare, label: t('mockup.dashboard.friends'), badge: '3' },
                  { icon: HelpCircle, label: t('mockup.dashboard.guide') },
                  { icon: Languages, label: t('mockup.dashboard.language'), val: 'EN' },
                  { icon: Moon, label: t('mockup.dashboard.dark_mode') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:bg-[var(--bg-main)] cursor-pointer transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-gray-400" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && <span className="bg-red-500 text-white text-[9px] font-bold px-1 rounded-full">{item.badge}</span>}
                    {item.val && <span className="text-[9px] font-bold bg-[var(--bg-main)] px-1.5 py-0.5 rounded text-gray-400">{item.val}</span>}
                  </div>
                ))}
                
                <div className="mt-4 p-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center gap-3 cursor-pointer hover:bg-[var(--card-bg)] transition-colors group/user">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-[var(--border-subtle)]">
                    <img src="https://picsum.photos/seed/trader/100/100" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[var(--text-main)] truncate">Trader</div>
                    <div className="text-[9px] text-brand-primary font-black uppercase tracking-widest bg-brand-primary/10 px-1 rounded inline-block">ELITE</div>
                  </div>
                  <ChevronRight className="w-3 h-3 text-gray-300 group-hover/user:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <React.Fragment>
                {/* Market Ticker */}
                  <div className="h-10 bg-[var(--card-bg)] border-b border-[var(--border-subtle)] flex items-center overflow-hidden whitespace-nowrap transition-colors duration-300">
                    <div className="flex items-center animate-marquee">
                      {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-12 px-6">
                          {[
                            { label: '(TI)', val: '72.45', change: '-0.85%', neg: true },
                            { label: 'EUR/USD', val: '1.095', change: '+0.12%', pos: true },
                            { label: 'USD/JPY', val: '145.2', change: '+0.35%', pos: true },
                            { label: '10Y YIELD', val: '4.05', change: '-0.02%', neg: true },
                            { label: 'S&P 500', val: '4,783.45', change: '+1.25%', pos: true },
                            { label: 'NASDAQ', val: '16,832.92', change: '+1.8%', pos: true },
                            { label: 'DOW JONES', val: '37,468.61', change: '+0.74%', pos: true },
                          ].map((ticker, i) => (
                            <div key={`${setIndex}-${i}`} className="flex items-center gap-2 text-[10px] font-bold">
                              <span className="text-gray-400">{ticker.label}</span>
                              <span className="text-[var(--text-main)]">{ticker.val}</span>
                              <span className={cn(ticker.pos ? "text-emerald-500" : "text-red-500")}>
                                {ticker.pos ? '▲' : '▼'} {ticker.change}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="p-8 pb-0 flex items-start justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-[var(--text-main)] mb-1">{t('mockup.dashboard.good_morning')}</h1>
                      <div className="text-xs text-[var(--text-muted)] font-medium">{t('mockup.showcase.dashboard')}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl shadow-sm cursor-pointer hover:bg-[var(--bg-main)] transition-colors">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-bold text-[var(--text-muted)]">{t('mockup.dashboard.all_time')}</span>
                        <ChevronLeft className="w-3 h-3 text-gray-300 rotate-270" />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl shadow-sm cursor-pointer hover:bg-[var(--bg-main)] transition-colors">
                        <LayoutDashboard className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-bold text-[var(--text-muted)]">{t('mockup.dashboard.all_accounts')}</span>
                        <ChevronLeft className="w-3 h-3 text-gray-300 rotate-270" />
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 overflow-y-auto p-8 pt-6 space-y-6 custom-scrollbar">
                    {/* Market Status Row */}
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { city: t('mockup.market.tokyo'), time: '05:09:15', status: t('mockup.market.closed') },
                        { city: t('mockup.market.london'), time: '20:09:15', status: t('mockup.market.closed') },
                        { city: 'NEW YORK', time: '15:09:15', status: t('mockup.market.open'), active: true },
                      ].map((market, i) => (
                        <div key={i} className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl p-4 flex items-center justify-between shadow-sm transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", market.active ? "bg-red-50 text-red-500" : "bg-[var(--bg-main)] text-gray-400")}>
                              <Globe className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{market.city}</div>
                              <div className="text-sm font-bold text-[var(--text-main)]">{market.time}</div>
                            </div>
                          </div>
                          <div className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md", market.active ? "bg-red-500 text-white" : "bg-[var(--bg-main)] text-[var(--text-muted)]")}>
                            {market.status}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Rank & Risk Section */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-amber-500/20">
                        <div className="relative z-10">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">{t('mockup.dashboard.rank')}</div>
                          <div className="flex items-center gap-4 mb-8">
                            <Award className="w-10 h-10" />
                            <h2 className="text-4xl font-black italic tracking-tight">{t('mockup.dashboard.gold')}</h2>
                            <div className="ml-auto px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-colors">
                              <Trophy className="w-4 h-4" />
                              {t('mockup.dashboard.leaderboard')}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                              <span>{t('mockup.dashboard.next_rank')}</span>
                              <span>{t('mockup.dashboard.platinum')}</span>
                            </div>
                            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-white w-3/4" />
                            </div>
                          </div>
                        </div>
                        <Trophy className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" />
                      </div>

                      <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl p-8 flex flex-col shadow-sm transition-colors duration-300">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                            <Shield className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[var(--text-main)]">{t('mockup.dashboard.risk_status')}</h3>
                            <p className="text-[10px] text-[var(--text-muted)] font-medium">{t('mockup.dashboard.risk_desc')}</p>
                          </div>
                        </div>
                        <div className="space-y-4 mt-auto">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-[var(--text-muted)]">Daily PnL</span>
                            <span className="text-sm font-bold text-emerald-500">$0.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-[var(--text-muted)]">{t('mockup.dashboard.limit')}</span>
                            <span className="text-sm font-bold text-[var(--text-main)]">-$500</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-6">
                      {[
                        { label: t('mockup.dashboard.net_pl'), val: '$7826.83', icon: TrendingUp, color: 'emerald' },
                        { label: t('mockup.dashboard.win_rate'), val: '48.8%', icon: Target, color: 'brand' },
                        { label: t('mockup.dashboard.profit_factor'), val: '3.02', icon: Zap, color: 'amber' },
                        { label: t('mockup.dashboard.today_pl'), val: '$0.00', icon: Shield, color: 'emerald' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl p-6 flex flex-col gap-2 shadow-sm group hover:border-brand-primary/30 transition-all duration-300 relative overflow-hidden">
                          <div className="flex items-center justify-between relative z-10">
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 truncate pr-2">{stat.label}</div>
                            <stat.icon className={cn(
                              "w-5 h-5 shrink-0 transition-transform group-hover:scale-110",
                              stat.color === 'emerald' ? "text-emerald-500" : 
                              stat.color === 'brand' ? "text-brand-primary" : "text-amber-500"
                            )} />
                          </div>
                          <div className="text-2xl font-black text-[var(--text-main)] tracking-tight truncate relative z-10">{stat.val}</div>
                          
                          {/* Ambient Glow */}
                          <div className={cn(
                            "absolute -bottom-8 -right-8 w-24 h-24 blur-3xl opacity-10 rounded-full transition-opacity group-hover:opacity-20",
                            stat.color === 'emerald' ? "bg-emerald-500" : 
                            stat.color === 'brand' ? "bg-brand-primary" : "bg-amber-500"
                          )} />
                        </div>
                      ))}
                    </div>

                    {/* Equity Curve Chart */}
                    <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-sm transition-colors duration-300">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-emerald-500" />
                          <h3 className="text-lg font-bold text-[var(--text-main)]">{t('mockup.dashboard.equity_curve')}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{t('mockup.dashboard.initial')}: $10,000</div>
                          <div className="text-sm font-bold text-[var(--text-main)]">
                            Current: <span className="text-emerald-500">$17,826.83 (+78.27%)</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-[300px] w-full min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={300}>
                          <AreaChart data={equityData}>
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#f1f5f9'} />
                            <XAxis dataKey="name" hide />
                            <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: theme === 'dark' ? '#151921' : '#fff', borderRadius: '12px', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                              itemStyle={{ fontWeight: 'bold', color: '#6366f1' }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="#6366f1" 
                              strokeWidth={3} 
                              fillOpacity={1} 
                              fill="url(#colorValue)" 
                              animationDuration={2000}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold">
                          <div className="w-2 h-2 rounded-full bg-brand-primary" />
                          My Equity
                        </div>
                      </div>
                    </div>

                    {/* Strategy & AI Insights */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-sm transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-8">
                          <Zap className="w-5 h-5 text-brand-primary" />
                          <h3 className="text-lg font-bold text-[var(--text-main)]">{t('mockup.dashboard.strategy_perf')}</h3>
                        </div>
                        <div className="h-[200px] w-full min-h-[200px]">
                          <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
                            <BarChart data={strategyData} layout="vertical" margin={{ left: 40 }}>
                              <XAxis type="number" hide />
                              <YAxis 
                                dataKey="name" 
                                type="category" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 10, fontWeight: 'bold', fill: theme === 'dark' ? '#64748b' : '#94a3b8' }} 
                              />
                              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                                {strategyData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-sm transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-8">
                          <Cpu className="w-5 h-5 text-amber-500" />
                          <h3 className="text-lg font-bold text-[var(--text-main)]">{t('mockup.dashboard.ai_insights')}</h3>
                        </div>
                        <div className="space-y-4">
                          {[
                            'Good execution recently.',
                            'Focus on setup: Liquidity Sweep (100% WR)'
                          ].map((insight, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] group hover:border-brand-primary/30 transition-colors">
                              <div className="w-6 h-6 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:text-brand-primary transition-colors">
                                {i + 1}
                              </div>
                              <p className="text-xs font-bold text-[var(--text-muted)] leading-relaxed">{insight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
            </div>

            {/* Right Sidebar Widgets */}
            <div className="w-80 border-l border-[var(--border-subtle)] bg-[var(--sidebar-bg)] flex flex-col p-6 space-y-6 shrink-0 overflow-y-auto custom-scrollbar transition-colors duration-300">
              {/* Level Widget */}
              <div className="bg-[#0f172a] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-slate-900/20">
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{t('mockup.dashboard.current_level')}</div>
                  <div className="text-3xl font-black italic mb-4">Lv. <span className="text-4xl">5</span></div>
                  <div className="flex justify-between text-[10px] font-bold mb-2">
                    <span className="text-brand-primary">450 XP</span>
                    <span className="text-gray-500">1000 XP</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary w-[45%]" />
                  </div>
                  <div className="mt-4 text-[9px] font-bold text-center text-gray-500 uppercase tracking-widest">
                    {t('mockup.dashboard.total_xp')}: 4,500
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
                  <Cube3D size={32} />
                </div>
              </div>

              {/* Weekly Goal Widget */}
              <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-sm transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-[var(--text-main)]">{t('mockup.dashboard.weekly_goal')}</h3>
                  </div>
                  <div className="bg-emerald-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                    {t('mockup.dashboard.goal_achieved')}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="34" fill="none" stroke={theme === 'dark' ? 'rgba(255,255,255,0.05)' : '#f1f5f9'} strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray="213" strokeDashoffset="0" />
                    </svg>
                    <span className="absolute text-sm font-black text-[var(--text-main)]">100%</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{t('mockup.dashboard.current')}</div>
                      <div className="text-lg font-black text-[var(--text-main)]">$1954</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{t('mockup.dashboard.target')}</div>
                      <div className="text-sm font-bold text-[var(--text-muted)]">$1000</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <div className="text-[10px] font-bold text-brand-primary flex items-center gap-1 cursor-pointer hover:underline">
                    {t('mockup.dashboard.view_history')} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Action Items Widget */}
              <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-sm transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-brand-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-[var(--text-main)]">{t('mockup.dashboard.todo')}</h3>
                  </div>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-between group cursor-pointer hover:border-brand-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-[var(--border-subtle)] flex items-center justify-center group-hover:border-brand-primary transition-colors">
                        <div className="w-4 h-4 rounded-full bg-[var(--bg-main)] group-hover:bg-brand-primary/10 transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-main)]">Daily Review</div>
                        <div className="text-[9px] text-[var(--text-muted)] font-medium">System</div>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-brand-primary text-white text-[10px] font-bold rounded-lg hover:bg-brand-primary/90 transition-colors">
                      Start
                    </button>
                  </div>
                </div>
              </div>

              {/* Discipline Streak Widget */}
              <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-sm transition-colors duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-[var(--text-main)]">{t('mockup.dashboard.discipline')}</h3>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(31)].map((_, i) => {
                    const status = i < 10 ? 'success' : i < 15 ? 'fail' : 'empty';
                    return (
                      <div 
                        key={i} 
                        className={cn(
                          "aspect-square rounded-md flex items-center justify-center text-[9px] font-bold",
                          status === 'success' ? "bg-emerald-50 text-emerald-500" : 
                          status === 'fail' ? "bg-red-50 text-red-500" : "bg-[var(--bg-main)] text-[var(--text-muted)]"
                        )}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1.5 text-[8px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Success
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Fail
                  </div>
                  <div className="flex items-center gap-1.5 text-[8px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" /> Empty
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Background Elements behind mockup */}
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Trophy = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
