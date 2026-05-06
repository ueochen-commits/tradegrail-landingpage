import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { TrendingUp, Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const equityData = [
  { name: '1', value: 10000 },
  { name: '2', value: 10200 },
  { name: '3', value: 10100 },
  { name: '4', value: 10500 },
  { name: '5', value: 10400 },
  { name: '6', value: 10800 },
  { name: '7', value: 11200 },
  { name: '8', value: 11000 },
  { name: '9', value: 11500 },
  { name: '10', value: 12000 },
  { name: '11', value: 11800 },
  { name: '12', value: 12500 },
  { name: '13', value: 13200 },
  { name: '14', value: 13000 },
  { name: '15', value: 13800 },
  { name: '16', value: 14500 },
  { name: '17', value: 14200 },
  { name: '18', value: 15000 },
  { name: '19', value: 15800 },
  { name: '20', value: 15500 },
  { name: '21', value: 16200 },
  { name: '22', value: 17000 },
  { name: '23', value: 16800 },
  { name: '24', value: 17255 },
];

export const InteractiveMockup = () => {
  const { t } = useLanguage();

  const strategyData = [
    { name: t('mockup.interactive.strategy1'), value: 85, color: '#10b981' },
    { name: t('mockup.interactive.strategy2'), value: 78, color: '#10b981' },
    { name: t('mockup.interactive.strategy3'), value: 65, color: '#10b981' },
    { name: t('mockup.interactive.strategy4'), value: 55, color: '#10b981' },
    { name: t('mockup.interactive.strategy5'), value: 35, color: '#10b981' },
    { name: t('mockup.interactive.strategy6'), value: 25, color: '#10b981' },
    { name: t('mockup.interactive.strategy7'), value: -5, color: '#ef4444' },
    { name: t('mockup.interactive.strategy8'), value: -12, color: '#ef4444' },
  ];

  const insights = [
    { id: 1, text: t('mockup.interactive.insight1'), color: "text-indigo-400", delay: 0.6 },
    { id: 2, text: t('mockup.interactive.insight2'), color: "text-emerald-400", delay: 0.7 },
    { id: 3, text: t('mockup.interactive.insight3'), color: "text-amber-400", delay: 0.8 }
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4 p-2 bg-transparent rounded-[2rem] overflow-hidden relative">
      {/* Tech Grid Background Overlay - More subtle and refined */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,var(--text-main)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-main)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Top: Equity Curve - Glassmorphism Style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 min-h-[240px] bg-[var(--text-main)]/[0.03] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-3xl p-6 relative group overflow-hidden shadow-xl transition-colors duration-300"
      >
        {/* Animated Glow behind the chart */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" 
        />
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-brand-primary/80 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary">{t('mockup.interactive.system_title')}</span>
            </div>
            <div className="flex items-baseline gap-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-4xl font-bold text-[var(--text-main)] tracking-tighter drop-shadow-2xl"
              >
                $17,255.86
              </motion.span>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-3 h-3 text-emerald-500" />
                <span className="text-xs font-black text-emerald-500 tracking-tight">+72.56%</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] mb-1">{t('mockup.interactive.initial_capital')}</div>
            <div className="text-sm font-mono font-medium text-[var(--text-muted)] tracking-wider">$10,000.00</div>
          </div>
        </div>

        <div className="h-[140px] w-full relative z-10 min-h-[140px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={140}>
            <AreaChart data={equityData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  fontSize: '11px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  color: 'var(--text-main)'
                }}
                itemStyle={{ color: 'var(--text-main)', fontWeight: 600 }}
                cursor={{ stroke: 'rgba(99,102,241,0.3)', strokeWidth: 2 }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#6366f1" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={3000}
                animationEasing="cubic-bezier(0.16, 1, 0.3, 1)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Bottom: Strategy & Insights */}
      <div className="flex flex-col lg:flex-row gap-4 h-[280px]">
        {/* Strategy Performance - Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-[1.5] bg-[var(--text-main)]/[0.03] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-3xl p-6 flex flex-col relative group overflow-hidden shadow-xl transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]" />
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">{t('mockup.interactive.strategy_analysis')}</h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">{t('mockup.interactive.live_feed')}</span>
            </div>
          </div>
          
          <div className="flex-1 w-full relative z-10 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
              <BarChart data={strategyData} layout="vertical" margin={{ left: 60 }}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--text-muted)', fontSize: 10, fontWeight: 700, letterSpacing: '-0.02em' }}
                  width={90}
                />
                <Tooltip 
                  cursor={{ fill: 'var(--text-main)/0.05' }}
                  contentStyle={{ 
                    backgroundColor: 'var(--card-bg)', 
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    fontSize: '10px',
                    backdropFilter: 'blur(20px)',
                    color: 'var(--text-main)'
                  }}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={8}>
                  {strategyData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      fillOpacity={0.8}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Insights - Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-[var(--text-main)]/[0.03] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-3xl p-6 relative group overflow-hidden shadow-xl transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            </div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)]">{t('mockup.interactive.ai_insights')}</h4>
          </div>

          <div className="space-y-4 relative z-10">
            {insights.map((insight) => (
              <motion.div 
                key={insight.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: insight.delay }}
                whileHover={{ x: 5, backgroundColor: 'var(--text-main)/0.08', borderColor: 'var(--border-subtle)' }}
                className="p-3.5 rounded-2xl bg-[var(--text-main)]/[0.04] border border-[var(--border-subtle)] flex items-center gap-4 group cursor-default transition-all duration-300"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-current ${insight.color} shadow-[0_0_10px_currentColor] opacity-60 group-hover:opacity-100 transition-opacity`} />
                <span className="text-[11px] font-bold text-[var(--text-muted)] group-hover:text-[var(--text-main)]/90 transition-colors tracking-tight">
                  {insight.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Decorative AI Pulse Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-primary/10 blur-[50px] rounded-full animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};
