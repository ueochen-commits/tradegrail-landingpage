import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Plus,
  X,
  Loader2,
  LogOut,
  Moon,
  Sun,
  Box,
  MessageSquare,
  Lightbulb,
  History,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { tradesApi } from '../services/api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import PlaybookPage from './PlaybookPage';
import { Cube3D } from '../components/Cube3D';

export default function DashboardPage() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [trades, setTrades] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('dashboard');

  useEffect(() => {
    if (user) {
      fetchTrades();
    }
  }, [user]);

  const fetchTrades = async () => {
    try {
      const data = await tradesApi.getAll(user!.id);
      setTrades(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const totalPL = trades.reduce((acc, trade) => acc + trade.pl, 0);
  const winRate = trades.length > 0 
    ? (trades.filter(t => t.pl > 0).length / trades.length * 100).toFixed(1) 
    : "0.0";
  const profitFactor = trades.length > 0
    ? (trades.filter(t => t.pl > 0).reduce((acc, t) => acc + t.pl, 0) / 
       Math.abs(trades.filter(t => t.pl < 0).reduce((acc, t) => acc + t.pl, 0) || 1)).toFixed(2)
    : "0.00";

  const chartData = trades.slice().reverse().reduce((acc: any[], trade, i) => {
    const prevPL = i > 0 ? acc[i-1].equity : 10000;
    acc.push({
      name: new Date(trade.entry_time).toLocaleDateString(),
      equity: prevPL + trade.pl
    });
    return acc;
  }, []);

  return (
    <div className="flex h-screen bg-[var(--bg-main)] text-[var(--text-main)] overflow-hidden font-sans transition-colors duration-500">
      {/* Left Sidebar - Compact */}
      <div className="w-20 lg:w-64 border-r border-[var(--border-subtle)] bg-[var(--sidebar-bg)] flex flex-col shrink-0 z-30 shadow-sm">
        <div className="p-4 lg:p-6 border-b border-[var(--border-subtle)] flex items-center justify-center lg:justify-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20 shrink-0">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <span className="font-black tracking-tighter text-xl hidden lg:block">TRADEGRAIL</span>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-3 lg:px-4 space-y-1 no-scrollbar">
          <SidebarItem 
            icon={LayoutGrid} 
            label={t('features.showcase.dashboard.label')} 
            active={currentTab === 'dashboard'} 
            onClick={() => setCurrentTab('dashboard')}
          />
          <SidebarItem 
            icon={BarChart2} 
            label={t('features.showcase.analytics.label')} 
            active={currentTab === 'analytics'}
            onClick={() => setCurrentTab('analytics')}
          />
          <SidebarItem 
            icon={BookOpen} 
            label={t('features.showcase.journal.label')} 
            active={currentTab === 'journal'}
            onClick={() => setCurrentTab('journal')}
          />
          <SidebarItem 
            icon={PlayCircle} 
            label={t('features.showcase.playbook.label')} 
            active={currentTab === 'playbook'}
            onClick={() => setCurrentTab('playbook')}
          />
          <SidebarItem 
            icon={FileText} 
            label={t('features.showcase.reporting.label')} 
            active={currentTab === 'reporting'}
            onClick={() => setCurrentTab('reporting')}
          />
          <SidebarItem 
            icon={ClipboardCheck} 
            label={t('features.showcase.notebook.label')} 
            active={currentTab === 'notebook'}
            onClick={() => setCurrentTab('notebook')}
          />
          <div className="pt-4 pb-2 px-4 hidden lg:block">
            <div className="h-px bg-[var(--border-subtle)] w-full" />
          </div>
          <SidebarItem icon={Settings} label="设置" />
          <div 
            onClick={toggleTheme}
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all cursor-pointer group/item text-[var(--text-muted)] hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-xs font-black tracking-tight uppercase tracking-widest hidden lg:block">
              {theme === 'dark' ? '浅色模式' : '深色模式'}
            </span>
          </div>
        </div>
        <div className="p-4 border-t border-[var(--border-subtle)] mt-auto">
          <div className="flex items-center justify-center lg:justify-between p-2 lg:p-3 rounded-2xl bg-[var(--text-main)]/5 border border-[var(--border-subtle)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-xs font-black text-brand-primary shrink-0">
                {user?.name?.substring(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0 hidden lg:block">
                <div className="text-xs font-black text-[var(--text-main)] truncate">{user?.name}</div>
                <div className="text-[10px] text-brand-primary font-black uppercase tracking-widest">Elite</div>
              </div>
            </div>
            <button onClick={logout} className="p-2 hover:bg-red-500/10 rounded-xl text-[var(--text-muted)] hover:text-red-500 transition-colors hidden lg:block">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Ticker Bar */}
        <div className="h-10 border-b border-[var(--border-subtle)] bg-[var(--card-bg)] flex items-center px-6 gap-8 overflow-hidden whitespace-nowrap z-20">
          <TickerItem label="(TI)" value="72.45" change="-0.85%" isDown />
          <TickerItem label="EUR/USD" value="1.095" change="+0.12%" />
          <TickerItem label="USD/JPY" value="145.2" change="+0.35%" />
          <TickerItem label="10Y YIELD" value="4.05" change="-0.02%" isDown />
          <TickerItem label="S&P 500" value="4,783" change="+0.45%" />
        </div>

        {/* Dashboard Content - Grid Layout */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {currentTab === 'dashboard' ? (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-full grid grid-cols-12 gap-6 p-6 overflow-hidden"
              >
                {/* Center Column - Main Stats & Chart */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 overflow-hidden">
                  {/* Header with Greeting */}
                  <div className="flex items-center justify-between shrink-0">
                    <div>
                      <h1 className="text-3xl font-black tracking-tighter text-[var(--text-main)] flex items-center gap-2">
                        Good morning, Trader! <span className="text-2xl">👋</span>
                      </h1>
                      <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-[0.2em] mt-1">Dashboard</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs font-bold shadow-sm">
                        <Calendar className="w-4 h-4 text-[var(--text-muted)]" /> ALL TIME <ChevronDown className="w-3 h-3" />
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs font-bold shadow-sm">
                        <LayoutGrid className="w-4 h-4 text-[var(--text-muted)]" /> ALL ACCOUNTS <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Market Clocks */}
                  <div className="grid grid-cols-3 gap-6 shrink-0">
                    <MarketClock city="TOKYO" time="06:04:06" status="CLOSED" />
                    <MarketClock city="LONDON" time="21:04:06" status="CLOSED" />
                    <MarketClock city="NEW YORK" time="16:04:06" status="CLOSED" />
                  </div>

                  {/* Rank Card & Risk Status Row */}
                  <div className="grid grid-cols-12 gap-6 shrink-0">
                    <div className="col-span-7 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-[2.5rem] p-8 relative overflow-hidden shadow-xl shadow-amber-500/20 group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 mb-4">TRADER RANK</div>
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                            <Trophy className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <div className="text-5xl font-black text-white tracking-tighter italic">Gold</div>
                          </div>
                          <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/30 transition-all">
                            <Trophy className="w-3 h-3" /> View Global Leaderboard
                          </button>
                        </div>
                        <div className="mt-auto space-y-3">
                          <div className="flex justify-between items-end">
                            <div className="text-[10px] font-black uppercase tracking-widest text-black/60">Progress to next rank</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white">Platinum</div>
                          </div>
                          <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '65%' }}
                              className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-5 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                          <div className="text-lg font-black tracking-tighter">Risk Status: OK</div>
                          <div className="text-[10px] text-[var(--text-muted)] font-medium">You are trading within limits.</div>
                        </div>
                      </div>
                      <div className="space-y-4 mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--text-muted)] font-bold">Daily PnL</span>
                          <span className="text-sm font-black text-emerald-500">$0.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-[var(--text-muted)] font-bold">Limit</span>
                          <span className="text-sm font-black text-red-500">-$500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-6 shrink-0">
                    <CompactStat label="NET P&L" value={`$${totalPL.toFixed(2)}`} change="+12%" isUp />
                    <CompactStat label="WIN RATE" value={`${winRate}%`} icon={Target} />
                    <CompactStat label="PROFIT FACTOR" value={profitFactor} icon={Zap} />
                    <CompactStat label="TODAY'S P&L" value="$0.00" icon={Shield} />
                  </div>

                  {/* Equity Curve - Fixed Height */}
                  <div className="flex-1 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between mb-6 shrink-0">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                        <h3 className="text-lg font-black tracking-tighter">Equity Curve</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-widest">Initial: $10,000</div>
                        <div className="text-sm font-black text-emerald-500">Current: ${(10000 + totalPL).toFixed(2)} (+78.27%)</div>
                      </div>
                    </div>
                    <div className="flex-1 w-full min-h-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="name" hide />
                          <YAxis hide domain={['auto', 'auto']} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-subtle)', borderRadius: '16px' }}
                          />
                          <Area type="monotone" dataKey="equity" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorEquity)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Bottom Row - Strategy & AI Insights */}
                  <div className="grid grid-cols-12 gap-6 shrink-0 pb-2">
                    <div className="col-span-7 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-5 h-5 text-brand-primary" />
                        <h3 className="text-sm font-black tracking-tight uppercase tracking-widest">Strategy Performance</h3>
                      </div>
                      <div className="space-y-4">
                        <StrategyBar label="Trend Pullback" value={85} color="bg-emerald-500" />
                        <StrategyBar label="Fib Retracement" value={62} color="bg-emerald-500" />
                        <StrategyBar label="Liquidity Sweep" value={92} color="bg-emerald-500" />
                        <StrategyBar label="News Event" value={45} color="bg-emerald-500" />
                      </div>
                    </div>
                    <div className="col-span-5 bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        <h3 className="text-sm font-black tracking-tight uppercase tracking-widest">AI Insights</h3>
                      </div>
                      <div className="space-y-4">
                        <InsightItem number={1} text="Good execution recently." />
                        <InsightItem number={2} text="Focus on setup: Liquidity Sweep (100% WR)" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Gamification & Tasks */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 overflow-hidden">
                  {/* Level Card */}
                  <div className="bg-[#1E293B] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden shrink-0">
                    <div className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center">
                      <Cube3D size={48} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">CURRENT LEVEL</div>
                    <div className="text-6xl font-black tracking-tighter italic mb-8">Lv. 5</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div className="text-[10px] font-black text-brand-primary">450 XP</div>
                        <div className="text-[10px] font-black opacity-40">1000 XP</div>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-primary w-[45%] shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                      </div>
                      <div className="text-[10px] font-black opacity-40 text-center pt-2">Total Lifetime XP: 4,500</div>
                    </div>
                  </div>

                  {/* Weekly Goal */}
                  <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg shrink-0">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                          <Target className="w-4 h-4 text-indigo-500" />
                        </div>
                        <h3 className="text-sm font-black tracking-tight uppercase tracking-widest">WEEKLY GOAL</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest">GOAL HIT!</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="relative w-24 h-24 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-[var(--text-main)]/5" />
                          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="0" className="text-brand-primary" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <div className="text-xl font-black">100%</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[var(--text-muted)] font-black uppercase tracking-widest mb-1">CURRENT</div>
                        <div className="text-2xl font-black tracking-tighter mb-2">$1954</div>
                        <div className="text-[10px] text-[var(--text-muted)] font-bold">TARGET $1000</div>
                        <button className="text-[10px] text-brand-primary font-black uppercase tracking-widest mt-4 flex items-center gap-1 hover:translate-x-1 transition-transform">
                          View History <History className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action List */}
                  <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2.5rem] p-8 shadow-lg shrink-0">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                          <ClipboardCheck className="w-4 h-4 text-indigo-500" />
                        </div>
                        <h3 className="text-sm font-black tracking-tight uppercase tracking-widest">ACTION ITEMS</h3>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center">1</div>
                    </div>
                    <div className="mb-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Add new task..." 
                          className="w-full bg-[var(--text-main)]/5 border border-[var(--border-subtle)] rounded-xl py-2 px-4 text-xs font-bold focus:outline-none focus:border-brand-primary/50"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--text-main)]/5 border border-[var(--border-subtle)] flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border-2 border-[var(--border-subtle)] flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-[var(--text-main)]/10" />
                        </div>
                        <div>
                          <div className="text-xs font-black">Daily Review</div>
                          <div className="text-[10px] text-[var(--text-muted)] font-medium">System</div>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-primary/20">Start</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : currentTab === 'playbook' ? (
              <motion.div
                key="playbook"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full"
              >
                <PlaybookPage />
              </motion.div>
            ) : (
              <motion.div 
                key="other"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-3xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tighter mb-2">Coming Soon</h2>
                  <p className="text-[var(--text-muted)] font-bold uppercase tracking-widest text-xs">This module is under development</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Add Button */}
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-brand-primary text-black flex items-center justify-center shadow-2xl shadow-brand-primary/40 hover:scale-110 transition-all z-40"
        >
          <Plus className="w-8 h-8" />
        </button>
      </div>

      {/* Add Trade Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-[var(--border-subtle)] flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tighter">New Trade Entry</h2>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-[var(--text-main)]/5 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <AddTradeForm 
                userId={user!.id} 
                onSuccess={() => {
                  setIsAddModalOpen(false);
                  fetchTrades();
                }} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AddTradeForm({ userId, onSuccess }: { userId: number, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    symbol: '',
    direction: 'LONG',
    entry_price: '',
    exit_price: '',
    quantity: '1',
    entry_time: new Date().toISOString().slice(0, 16),
    exit_time: new Date().toISOString().slice(0, 16),
    strategy: 'Trend Pullback',
    notes: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const pl = (parseFloat(formData.exit_price) - parseFloat(formData.entry_price)) * 
                 parseFloat(formData.quantity) * 
                 (formData.direction === 'LONG' ? 1 : -1);
      
      await tradesApi.create({
        ...formData,
        user_id: userId,
        entry_price: parseFloat(formData.entry_price),
        exit_price: parseFloat(formData.exit_price),
        quantity: parseFloat(formData.quantity),
        pl
      });
      onSuccess();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-1">Symbol</label>
          <input 
            type="text" 
            value={formData.symbol}
            onChange={e => setFormData({...formData, symbol: e.target.value.toUpperCase()})}
            placeholder="BTC/USDT"
            required
            className="w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary/50 transition-all font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-1">Direction</label>
          <select 
            value={formData.direction}
            onChange={e => setFormData({...formData, direction: e.target.value})}
            className="w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary/50 transition-all font-bold"
          >
            <option value="LONG">LONG</option>
            <option value="SHORT">SHORT</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-1">Entry Price</label>
          <input 
            type="number" 
            step="any"
            value={formData.entry_price}
            onChange={e => setFormData({...formData, entry_price: e.target.value})}
            placeholder="0.00"
            required
            className="w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary/50 transition-all font-mono font-bold"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-1">Exit Price</label>
          <input 
            type="number" 
            step="any"
            value={formData.exit_price}
            onChange={e => setFormData({...formData, exit_price: e.target.value})}
            placeholder="0.00"
            required
            className="w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary/50 transition-all font-mono font-bold"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-1">Strategy</label>
        <select 
          value={formData.strategy}
          onChange={e => setFormData({...formData, strategy: e.target.value})}
          className="w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-primary/50 transition-all font-bold"
        >
          <option>Trend Pullback</option>
          <option>Fib Retracement</option>
          <option>Liquidity Sweep</option>
          <option>Breakout</option>
          <option>Mean Reversion</option>
        </select>
      </div>
      <button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand-primary text-black py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
        Save Trade
      </button>
    </form>
  );
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all cursor-pointer group/item",
      active ? "bg-brand-primary text-black shadow-lg shadow-brand-primary/20" : "text-[var(--text-muted)] hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)]"
    )}
  >
    <Icon className={cn("w-5 h-5", active ? "text-black" : "text-[var(--text-muted)] group-hover/item:text-[var(--text-main)]")} />
    <span className="text-xs font-black tracking-tight uppercase tracking-widest">{label}</span>
  </div>
);

const MarketClock = ({ city, time, status, isOpen }: { city: string, time: string, status: string, isOpen?: boolean }) => (
  <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2rem] p-6 shadow-sm flex items-center gap-6">
    <div className="w-12 h-12 rounded-2xl bg-[var(--text-main)]/5 flex items-center justify-center">
      <Globe className="w-6 h-6 text-[var(--text-muted)]" />
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">{city}</span>
        <span className={cn(
          "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest",
          status === "CLOSED" ? "bg-[var(--text-main)]/10 text-[var(--text-muted)]" : "bg-red-500 text-white"
        )}>{status}</span>
      </div>
      <div className="text-xl font-black tracking-tighter">{time}</div>
    </div>
  </div>
);

const StrategyBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
      <span>{label}</span>
    </div>
    <div className="h-2 w-full bg-[var(--text-main)]/5 rounded-full overflow-hidden">
      <div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const InsightItem = ({ number, text }: { number: number, text: string }) => (
  <div className="flex items-center gap-4 p-3 rounded-2xl bg-[var(--text-main)]/5 border border-[var(--border-subtle)]">
    <div className="w-6 h-6 rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center text-[10px] font-black">
      {number}
    </div>
    <p className="text-[10px] font-bold text-[var(--text-main)]">{text}</p>
  </div>
);

const CompactStat = ({ label, value, icon: Icon, change, isUp }: { label: string, value: string, icon?: any, change?: string, isUp?: boolean }) => (
  <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-[2rem] p-6 shadow-sm relative overflow-hidden group">
    <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-2">{label}</div>
    <div className="flex items-end justify-between">
      <div className="text-2xl font-black tracking-tighter">{value}</div>
      {change && (
        <div className={cn("text-[10px] font-black flex items-center gap-0.5", isUp ? "text-emerald-500" : "text-red-500")}>
          {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
          {change}
        </div>
      )}
      {Icon && !change && <Icon className="w-5 h-5 text-brand-primary opacity-40" />}
    </div>
    {isUp && <div className="absolute bottom-0 right-0 w-12 h-12 bg-emerald-500/5 rounded-tl-full -mr-4 -mb-4" />}
  </div>
);

const TickerItem = ({ label, value, change, isDown }: { label: string, value: string, change: string, isDown?: boolean }) => (
  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shrink-0">
    <span className="text-[var(--text-muted)]">{label}</span>
    <span className="text-[var(--text-main)]">{value}</span>
    <span className={cn("flex items-center", isDown ? "text-red-500" : "text-emerald-500")}>
      {isDown ? '▼' : '▲'} {change}
    </span>
  </div>
);
