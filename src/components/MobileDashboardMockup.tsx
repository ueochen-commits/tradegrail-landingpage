import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutGrid, 
  BarChart2, 
  BookOpen, 
  FileText, 
  PlayCircle, 
  ClipboardCheck, 
  Target, 
  Zap,
  Trophy,
  Globe,
  Shield,
  Plus,
  MessageSquare,
  Map,
  Moon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { TradeGrailLogo } from './Logo';

export const MobileDashboardMockup = ({ isDark = false }: { isDark?: boolean }) => {
  const { t } = useLanguage();

  return (
    <div className={cn(
      "w-full h-full flex flex-col font-sans transition-colors duration-500",
      isDark ? "bg-[#0F172A] text-slate-100" : "bg-[#F8FAFC] text-[#1E293B]"
    )}>
      {/* Status Bar */}
      <div className={cn(
        "h-12 shrink-0 relative z-[60] transition-colors duration-500",
        isDark ? "bg-[#1E293B]" : "bg-white"
      )}>
        <div className={cn("absolute top-[18px] left-6 text-[10px] font-bold", isDark ? "text-slate-300" : "text-[#1E293B]")}>9:41</div>
        <div className="absolute top-[18px] right-6 flex items-center gap-1.5">
          <div className={cn("w-4 h-2 border rounded-[2px] relative", isDark ? "border-slate-500" : "border-black/20")}>
            <div className={cn("absolute inset-[1px] rounded-[0.5px]", isDark ? "bg-slate-300" : "bg-black")} />
          </div>
          <div className="w-3.5 h-3.5 flex items-end gap-[1px]">
            <div className={cn("w-[2px] h-[20%]", isDark ? "bg-slate-300" : "bg-black")} />
            <div className={cn("w-[2px] h-[40%]", isDark ? "bg-slate-300" : "bg-black")} />
            <div className={cn("w-[2px] h-[60%]", isDark ? "bg-slate-300" : "bg-black")} />
            <div className={cn("w-[2px] h-[80%]", isDark ? "bg-slate-300" : "bg-black")} />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className={cn(
          "w-14 border-r flex flex-col items-center py-4 gap-4 shrink-0 transition-colors duration-500",
          isDark ? "bg-[#1E293B] border-slate-800" : "bg-white border-[#E2E8F0]"
        )}>
          <div className="mb-2">
            <TradeGrailLogo className="w-8 h-8" />
          </div>
          
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 mb-2">
            <span className="text-[10px] font-bold leading-tight text-center">Add<br/>Trade</span>
          </div>

          <div className="flex flex-col gap-4 items-center overflow-y-auto no-scrollbar pb-4">
            <SidebarIcon icon={LayoutGrid} active isDark={isDark} />
            <SidebarIcon icon={BarChart2} isDark={isDark} />
            <SidebarIcon icon={BookOpen} isDark={isDark} />
            <SidebarIcon icon={FileText} isDark={isDark} />
            <SidebarIcon icon={PlayCircle} isDark={isDark} />
            <SidebarIcon icon={ClipboardCheck} isDark={isDark} />
            <SidebarIcon icon={Target} isDark={isDark} />
            <SidebarIcon icon={MessageSquare} badge={3} isDark={isDark} />
            <SidebarIcon icon={Map} isDark={isDark} />
            <SidebarIcon icon={Globe} isDark={isDark} />
            <SidebarIcon icon={Moon} isDark={isDark} />
          </div>

          <div className="mt-auto pt-4">
            <div className={cn(
              "w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold transition-colors duration-500",
              isDark ? "bg-slate-800 border-slate-700 text-slate-400" : "bg-[#F1F5F9] border-[#E2E8F0] text-[#64748B]"
            )}>
              RO
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Top Ticker */}
          <div className={cn(
            "h-10 px-4 flex items-center justify-between border-b shrink-0 transition-colors duration-500",
            isDark ? "bg-[#1E293B] border-slate-800" : "bg-white border-[#E2E8F0]"
          )}>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-red-500">32.1 ▼ 1.2%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-[10px] font-bold", isDark ? "text-slate-400" : "text-[#64748B]")}>ETH/USD</span>
            <span className="text-[10px] font-bold text-emerald-500">3,456.78 ▲</span>
          </div>
        </div>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-20">
          <h2 className={cn("text-xl font-bold tracking-tight", isDark ? "text-white" : "text-[#1E293B]")}>{t('mockup.showcase.dashboard')}</h2>

          {/* Market Sessions */}
          <div className="space-y-2">
            <MarketCard city={t('mockup.market.tokyo')} time="02:31:51" status={t('mockup.market.closed')} isDark={isDark} />
            <MarketCard city={t('mockup.market.london')} time="17:31:51" status={t('mockup.market.closed')} isDark={isDark} />
            <MarketCard city={t('mockup.market.new_york')} time="12:31:51" status={t('mockup.market.open')} active isDark={isDark} />
          </div>

          {/* Trader Rank Card */}
          <div className="relative rounded-2xl bg-[#EAB308] p-5 overflow-hidden shadow-lg shadow-yellow-500/20">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Trophy className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1">{t('mockup.dashboard.rank')}</div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-white" />
                    <span className="text-2xl font-bold text-white">{t('mockup.dashboard.gold')}</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-[8px] font-bold uppercase tracking-widest text-white">
                  {t('mockup.dashboard.leaderboard')}
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-white/90">
                  <span>{t('mockup.dashboard.next_rank')}</span>
                  <span>{t('mockup.dashboard.platinum')}</span>
                </div>
                <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Risk Status Card */}
          <div className={cn(
            "rounded-2xl border p-4 shadow-sm transition-colors duration-500",
            isDark ? "bg-[#1E293B] border-slate-800" : "bg-white border-[#E2E8F0]"
          )}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <div className={cn("text-sm font-bold", isDark ? "text-white" : "text-[#1E293B]")}>{t('mockup.dashboard.risk_status')}: {t('mockup.dashboard.safe')}</div>
                <div className={cn("text-[10px]", isDark ? "text-slate-400" : "text-[#64748B]")}>{t('mockup.dashboard.risk_desc')}</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={cn("text-xs", isDark ? "text-slate-400" : "text-[#64748B]")}>{t('mockup.dashboard.today_pl')}</span>
                <span className="text-sm font-bold text-red-500">$-124.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={cn("text-xs", isDark ? "text-slate-400" : "text-[#64748B]")}>{t('mockup.dashboard.limit')}</span>
                <span className={cn("text-sm font-bold", isDark ? "text-white" : "text-[#1E293B]")}>-$500</span>
              </div>
              <div className={cn("h-1.5 w-full rounded-full overflow-hidden", isDark ? "bg-slate-800" : "bg-[#F1F5F9]")}>
                <div className="h-full bg-red-500 w-[25%]" />
              </div>
            </div>
          </div>

          {/* Recent Review Card */}
          <div className={cn(
            "rounded-2xl border p-4 shadow-sm transition-colors duration-500",
            isDark ? "bg-[#1E293B] border-slate-800" : "bg-white border-[#E2E8F0]"
          )}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('mockup.showcase.recent_shared')}</span>
              </div>
              <span className="text-[10px] text-[#64748B]">14:20</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex flex-col items-center justify-center",
                isDark ? "bg-slate-800" : "bg-[#F1F5F9]"
              )}>
                <span className="text-[8px] font-bold text-[#64748B]">FEB</span>
                <span className="text-lg font-bold">28</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold">NAS100</span>
                  <span className="text-xs font-bold text-emerald-500">+$1,240.00</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className={cn("px-1.5 py-0.5 rounded text-[8px] font-bold uppercase", isDark ? "bg-slate-800 text-slate-400" : "bg-[#F1F5F9] text-[#64748B]")}>
                    {t('mockup.analysis.strategy_val')}
                  </span>
                  <span className={cn("px-1.5 py-0.5 rounded text-[8px] font-bold uppercase", isDark ? "bg-slate-800 text-slate-400" : "bg-[#F1F5F9] text-[#64748B]")}>
                    {t('mockup.analysis.long')}
                  </span>
                </div>
              </div>
            </div>

            <div className={cn(
              "p-3 rounded-xl italic text-[10px] leading-relaxed",
              isDark ? "bg-slate-800 text-slate-400" : "bg-[#F8FAFC] text-[#64748B]"
            )}>
              {t('mockup.analysis.note_placeholder')}
            </div>
          </div>
        </div>

        {/* FAB */}
        <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-primary text-white shadow-lg shadow-brand-primary/40 flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon: Icon, active, badge, isDark }: { icon: any, active?: boolean, badge?: number, isDark?: boolean }) => (
  <div className={cn(
    "w-10 h-10 rounded-xl flex items-center justify-center relative cursor-pointer transition-all",
    active 
      ? (isDark ? "bg-slate-800 text-brand-primary" : "bg-[#F1F5F9] text-brand-primary") 
      : (isDark ? "text-slate-500 hover:bg-slate-800 hover:text-slate-300" : "text-[#94A3B8] hover:bg-[#F8FAFC] hover:text-[#64748B]")
  )}>
    <Icon className="w-5 h-5" />
    {badge && (
      <span className={cn(
        "absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center border-2",
        isDark ? "border-[#1E293B]" : "border-white"
      )}>
        {badge}
      </span>
    )}
  </div>
);

const MarketCard = ({ city, time, status, active, isDark }: { city: string, time: string, status: string, active?: boolean, isDark?: boolean }) => (
  <div className={cn(
    "p-3 rounded-xl border flex items-center justify-between transition-all",
    active 
      ? (isDark ? "bg-red-500/10 border-red-500/20" : "bg-red-50 border-red-100") 
      : (isDark ? "bg-[#1E293B] border-slate-800" : "bg-white border-[#E2E8F0]")
  )}>
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center",
        active 
          ? (isDark ? "bg-red-500/20" : "bg-red-100") 
          : (isDark ? "bg-slate-800" : "bg-[#F1F5F9]")
      )}>
        <Globe className={cn("w-4 h-4", active ? "text-red-500" : (isDark ? "text-slate-500" : "text-[#94A3B8]"))} />
      </div>
      <div>
        <div className={cn("text-[10px] font-bold tracking-wider", isDark ? "text-slate-500" : "text-[#64748B]")}>{city}</div>
        <div className={cn("text-xs font-bold", isDark ? "text-white" : "text-[#1E293B]")}>{time}</div>
      </div>
    </div>
    <div className={cn(
      "px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest",
      active 
        ? "bg-red-500 text-white" 
        : (isDark ? "bg-slate-800 text-slate-500" : "bg-[#F1F5F9] text-[#94A3B8]")
    )}>
      {status}
    </div>
  </div>
);
