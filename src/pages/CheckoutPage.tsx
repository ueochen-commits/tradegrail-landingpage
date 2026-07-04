import React from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TradeGrailLogo } from '../components/Logo';

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans flex items-center justify-center p-8">
      <div className="max-w-xl w-full">
        <div className="flex items-center gap-2 mb-12">
          <TradeGrailLogo className="w-8 h-8" />
          <span className="font-bold text-lg tracking-tight">TradeGrail</span>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-8">
            <ShieldAlert className="w-7 h-7 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Payment flow is under validation</h1>
          <p className="text-slate-600 leading-relaxed mb-8">
            TradeGrail is currently in early beta. We are not presenting this landing-page checkout as a live payment flow until order validation, callbacks, amount checks, and subscription handling are verified in the dashboard app.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://dashboard.tradegrail.net?auth=signup"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 font-bold text-white hover:opacity-90"
            >
              Join early access
            </a>
            <button
              onClick={() => navigate('/pricing')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-800 hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
