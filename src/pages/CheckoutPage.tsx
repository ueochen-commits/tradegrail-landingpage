import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  Check, 
  Coins, 
  ChevronRight,
  Info
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { TradeGrailLogo } from '../components/Logo';

const CheckoutPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'alipay' | 'wechat' | 'crypto'>('card');
  
  // Get plan details from location state or default to Pro
  const plan = location.state?.plan || {
    name: 'TradeGrail Pro',
    price: '68',
    billing: 'monthly'
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-brand-primary/20 flex flex-col md:flex-row">
      
      {/* Left Side: Product Info & Visual */}
      <div className="w-full md:w-[45%] bg-[#F8F8F8] p-8 md:p-16 flex flex-col">
        <div className="flex items-center gap-2 mb-20">
          <TradeGrailLogo className="w-8 h-8" />
          <span className="font-bold text-lg tracking-tight">TradeGrail</span>
        </div>

        <div className="flex-1 max-w-md mx-auto w-full">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold tracking-tight max-w-[240px]">
              {plan.name} Subscription (Billed {plan.billing})
            </h1>
            <div className="text-lg font-medium text-slate-500">
              {t('pricing.currency')}{plan.price} {plan.billing === 'yearly' ? 'yr.' : 'mo.'}
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-12">
            {t('pricing.currency')}{plan.price} billed every {plan.billing === 'yearly' ? 'year' : 'month'}
          </p>

          <div className="aspect-video bg-[#111827] rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-50" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <TradeGrailLogo className="w-10 h-10" />
              </div>
              <span className="text-white font-bold tracking-[0.3em] text-[10px] uppercase opacity-90">TRADEGRAIL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Payment Form */}
      <div className="w-full md:w-[55%] bg-white p-8 md:p-16 overflow-y-auto">
        <div className="max-w-[480px] mx-auto w-full">
          
          {/* Payment Method Toggle */}
          <div className="flex p-1 bg-[#F3F3F5] rounded-lg mb-10">
            <button 
              onClick={() => setPaymentMethod('card')}
              className={cn(
                "flex-1 py-2 rounded-md text-xs font-medium transition-all",
                paymentMethod === 'card' ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Pay with card
            </button>
            <button 
              onClick={() => setPaymentMethod('alipay')}
              className={cn(
                "flex-1 py-2 rounded-md text-xs font-medium transition-all",
                (paymentMethod === 'alipay' || paymentMethod === 'wechat') ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Alipay / WeChat
            </button>
          </div>

          <div className="space-y-8">
            {/* Email */}
            <section>
              <label className="block text-sm font-bold text-slate-900 mb-3">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
              />
            </section>

            {/* Payment Method Selection */}
            <div className="grid grid-cols-4 gap-2">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all",
                  paymentMethod === 'card' ? "border-brand-primary bg-white" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                )}
              >
                <CreditCard className={cn("w-4 h-4", paymentMethod === 'card' ? "text-brand-primary" : "text-slate-400")} />
                <span className={cn("text-[9px] font-bold uppercase", paymentMethod === 'card' ? "text-brand-primary" : "text-slate-500")}>Card</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('alipay')}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all",
                  paymentMethod === 'alipay' ? "border-[#00A3EE] bg-white" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                )}
              >
                <div className={cn("w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black", paymentMethod === 'alipay' ? "bg-[#00A3EE] text-white" : "bg-slate-300 text-white")}>支</div>
                <span className={cn("text-[9px] font-bold uppercase", paymentMethod === 'alipay' ? "text-[#00A3EE]" : "text-slate-500")}>Alipay</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('wechat')}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all",
                  paymentMethod === 'wechat' ? "border-[#07C160] bg-white" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                )}
              >
                <div className={cn("w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black", paymentMethod === 'wechat' ? "bg-[#07C160] text-white" : "bg-slate-300 text-white")}>微</div>
                <span className={cn("text-[9px] font-bold uppercase", paymentMethod === 'wechat' ? "text-[#07C160]" : "text-slate-500")}>WeChat</span>
              </button>
              <button 
                onClick={() => setPaymentMethod('crypto')}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all",
                  paymentMethod === 'crypto' ? "border-amber-500 bg-white" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                )}
              >
                <Coins className={cn("w-4 h-4", paymentMethod === 'crypto' ? "text-amber-500" : "text-slate-400")} />
                <span className={cn("text-[9px] font-bold uppercase", paymentMethod === 'crypto' ? "text-amber-500" : "text-slate-500")}>Crypto</span>
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <>
                {/* Card Info */}
                <section className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">Card number</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="1234 1234 1234 1234"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-50">
                        <div className="w-6 h-4 bg-blue-600 rounded-sm" />
                        <div className="w-6 h-4 bg-red-500 rounded-sm" />
                        <div className="w-6 h-4 bg-amber-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">Expiry date</label>
                      <input 
                        type="text" 
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-3">CVC</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="CVC"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                        />
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cardholder Name */}
                <section>
                  <label className="block text-sm font-bold text-slate-900 mb-3">Cardholder name</label>
                  <input 
                    type="text" 
                    placeholder="John More Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                  />
                </section>

                {/* Billing Address */}
                <section className="space-y-3">
                  <label className="block text-sm font-bold text-slate-900 mb-3">Billing address</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm bg-white">
                    <option>United States</option>
                    <option>China</option>
                    <option>United Kingdom</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Address line 1"
                    className="w-full px-4 py-3 rounded-t-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                  />
                  <select className="w-full px-4 py-3 border-x border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm bg-white">
                    <option>Select state...</option>
                  </select>
                  <div className="grid grid-cols-2">
                    <input 
                      type="text" 
                      placeholder="City"
                      className="w-full px-4 py-3 rounded-bl-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="ZIP"
                      className="w-full px-4 py-3 rounded-br-lg border-l-0 border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
                    />
                  </div>
                </section>
              </>
            ) : paymentMethod === 'alipay' || paymentMethod === 'wechat' ? (
              <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50/50">
                <div className={cn(
                  "w-48 h-48 rounded-2xl border-4 flex items-center justify-center mb-6 bg-white shadow-xl p-4",
                  paymentMethod === 'alipay' ? "border-[#00A3EE]/20" : "border-[#07C160]/20"
                )}>
                  {/* Mock QR Code */}
                  <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-1 opacity-80">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={cn(
                        "rounded-sm",
                        Math.random() > 0.5 
                          ? (paymentMethod === 'alipay' ? "bg-[#00A3EE]" : "bg-[#07C160]") 
                          : "bg-transparent"
                      )} />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">
                  Scan to pay with {paymentMethod === 'alipay' ? 'Alipay' : 'WeChat Pay'}
                </p>
                <p className="text-xs text-slate-400">
                  QR code valid for 15 minutes
                </p>
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50/50">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <Coins className="w-8 h-8 text-amber-500" />
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">Pay with Cryptocurrency</p>
                <p className="text-xs text-slate-400 text-center max-w-[240px]">
                  Select your preferred coin on the next step.
                </p>
              </div>
            )}

            {/* Tax ID */}
            <section>
              <label className="block text-sm font-bold text-slate-900 mb-3">Tax ID (optional)</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
              />
            </section>

            {/* Discount Code */}
            <section>
              <label className="block text-sm font-bold text-slate-900 mb-3">Discount code</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none text-sm"
              />
            </section>

            {/* Summary */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Subtotal</span>
                <span>{t('pricing.currency')}{plan.price}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>{t('pricing.currency')}{plan.price}</span>
              </div>
            </div>

            {/* Pay Button */}
            <button className="w-full py-4 bg-brand-primary text-white rounded-lg font-bold shadow-xl shadow-brand-primary/20 hover:opacity-90 active:scale-[0.98] transition-all text-sm mt-4">
              Pay {t('pricing.currency')}{plan.price}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CheckoutPage;
