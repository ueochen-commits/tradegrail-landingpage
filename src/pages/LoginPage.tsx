import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const DASHBOARD_AUTH_URL = 'https://dashboard.tradegrail.net?auth=login';

export default function LoginPage() {
  useEffect(() => {
    window.location.replace(DASHBOARD_AUTH_URL);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A051A] flex flex-col items-center justify-center text-white">
      <img src="/TRADEGRAIL-lion.png" alt="TradeGrail" className="h-12 w-auto mb-8" />
      <Loader2 className="w-6 h-6 animate-spin text-[#6E64FF] mb-4" />
      <p className="text-sm text-white/50">正在前往 TradeGrail 登录页面...</p>
    </div>
  );
}
