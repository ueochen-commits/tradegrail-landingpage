import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { TradeGrailLogo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import { DynamicOrb } from '../components/DynamicOrb';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (data.user) {
        login({ id: data.user.id, email: data.user.email || '' });
        // 跳转到工具页面
        window.location.href = 'https://trading-journal-ruby-two.vercel.app';
      }
    } catch (err: any) {
      setError(err.message || '登录失败，请检查邮箱和密码');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A051A] flex flex-col items-center relative overflow-hidden selection:bg-brand-primary/30">
      {/* Top Logo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <TradeGrailLogo className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tighter text-white uppercase opacity-90">TradeGrail</span>
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center relative z-10 py-24">
        
        {/* Left Side: Dynamic Orb & Hero Text */}
        <div className="hidden lg:flex flex-col items-start justify-center relative h-full">
          {/* Large Dynamic Orb Backdrop */}
          <div className="absolute -left-[25%] top-1/2 -translate-y-1/2 w-[120%] aspect-square pointer-events-none opacity-80">
            <DynamicOrb />
          </div>

          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 max-w-lg"
          >
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {t('auth.login.title')}
            </h1>
            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-md">
              {t('auth.login.desc')}
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { key: 'auth.tags.analyze', label: 'Analyze' },
                { key: 'auth.tags.backtest', label: 'Backtest' },
                { key: 'auth.tags.ai_analyst', label: 'AI Analyst' }
              ].map((tag, i) => (
                <motion.div 
                  key={tag.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium backdrop-blur-md"
                >
                  {t(tag.key)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Login Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-[#120B2E]/60 border border-white/5 rounded-[2.5rem] p-10 md:p-12 backdrop-blur-2xl shadow-2xl relative">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-xs font-bold"
                >
                  {error}
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">{t('auth.login.email_label')}</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#0A051A] border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">{t('auth.login.password_label')}</label>
                  <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primary/80">{t('auth.login.forgot_password')}</a>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0A051A] border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6E64FF] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#5D54E6] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6E64FF]/20"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.login.submit')}
              </button>

              <div className="pt-4 text-center">
                <p className="text-xs text-white/40 font-medium">
                  {t('auth.login.no_account')}{' '}
                  <Link to="/signup" className="text-white/60 hover:text-white underline underline-offset-4 ml-1">{t('auth.login.create_account')}</Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
