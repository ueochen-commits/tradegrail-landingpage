import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const { t } = useLanguage();
  
  // Set target date to 90 days from now (static for demo purposes or persistent if needed)
  // For a real app, this might be a fixed date in the future
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 90);
    return date.getTime();
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl px-3 py-2 min-w-[50px] shadow-sm backdrop-blur-md">
        <span className="text-xl font-mono font-bold text-brand-primary">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        {t('hero.countdown.label')}
      </div>
      
      <div className="flex gap-3">
        <TimeUnit value={timeLeft.days} label={t('hero.countdown.days')} />
        <div className="text-xl font-bold mt-2 opacity-30">:</div>
        <TimeUnit value={timeLeft.hours} label={t('hero.countdown.hours')} />
        <div className="text-xl font-bold mt-2 opacity-30">:</div>
        <TimeUnit value={timeLeft.minutes} label={t('hero.countdown.minutes')} />
        <div className="text-xl font-bold mt-2 opacity-30">:</div>
        <TimeUnit value={timeLeft.seconds} label={t('hero.countdown.seconds')} />
      </div>
    </div>
  );
};
