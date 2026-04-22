import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Loader2, Eye, EyeOff } from 'lucide-react';
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
  const [showPassword, setShowPassword] = useState(false);
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
        window.location.href = 'https://dashboard.tradegrail.net';
      }
    } catch (err: any) {
      setError(err.message || t('auth.login.error_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://dashboard.tradegrail.net',
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || t('auth.login.error_google'));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A051A] flex flex-col items-center relative overflow-hidden selection:bg-brand-primary/30">
      {/* Top Logo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/TRADEGRAIL-lion.png" alt="TradeGrail" style={{ height: '40px', width: 'auto' }} />
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={t('auth.login.email_placeholder')}
                  className="w-full bg-[#0A051A] border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 ml-1">{t('auth.login.password_label')}</label>
                  <Link to="/forgot-password" className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primary/80">{t('auth.login.forgot_password')}</Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder={t('auth.login.password_placeholder')}
                    className="w-full bg-[#0A051A] border border-white/10 rounded-xl py-3.5 px-5 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-white text-gray-800 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.google_button')}
              </button>

              <div className="relative flex items-center">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-white/40 text-xs">{t('auth.or_divider')}</span>
                <div className="flex-grow border-t border-white/10"></div>
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
