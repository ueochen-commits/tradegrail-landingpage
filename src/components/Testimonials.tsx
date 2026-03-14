import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Rivers",
    handle: "@arivers_trades",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    quote: "TradeGrail helped me find a leak in my London session trades that was costing me $2,000 a month. Paid for itself in a day.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    handle: "@schen_fx",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    quote: "The Psychology Matrix is a game changer. I finally realized my FOMO was tied to specific news events. It's like having a therapist for my trading.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    handle: "@mthorne_swing",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    quote: "I've tried TraderSync and TradeZella. TradeGrail's interface is faster and the AI insights are actually actionable. Best investment this year.",
    rating: 5
  },
  {
    name: "Becky Ta",
    handle: "@rhmrdc",
    avatar: "https://picsum.photos/seed/avatar4/100/100",
    quote: "Love @tradegrail to help journal your trades. Simple to import trades and superb data results. My most successful trading is on Wednesday at 12 pm EST.",
    rating: 5
  },
  {
    name: "Irish Born Investor",
    handle: "@BornInvestor",
    avatar: "https://picsum.photos/seed/avatar5/100/100",
    quote: "Reviewing yesterday's trades on @tradegrail. The chart review is great. This was a Short (using ITM Puts) on $NVDA. Worked well.",
    rating: 5
  },
  {
    name: "Crusader Trading",
    handle: "@CrusaderTrades",
    avatar: "https://picsum.photos/seed/avatar6/100/100",
    quote: "@tradegrail Does all the heavy lifting for you. Log them and review. Rinse, Repeat. Stop analyzing the markets all day and analyze yourself.",
    rating: 5
  },
  {
    name: "Matt Petrallia, CMT",
    handle: "@theEquilibrium",
    avatar: "https://picsum.photos/seed/avatar7/100/100",
    quote: "Have spent some time in this chop really digging into trading journal software. After using several for a few months I'm finding @tradegrail to be the most useful for me. Also a great app. Has the best IBKR importing I've used.",
    rating: 5
  },
  {
    name: "Cityslickah",
    handle: "@dzee4pf",
    avatar: "https://picsum.photos/seed/avatar8/100/100",
    quote: "Day traders (stocks and crypto) checkout TradeGrail. The best journal to track your data and find your edge!",
    rating: 5
  },
  {
    name: "Andy (Mighty Soldiers Trades)",
    handle: "@MightySoldiers",
    avatar: "https://picsum.photos/seed/avatar9/100/100",
    quote: "Not only does @tradegrail have an amazing product, they are great people as well! The work they put into this product is very impressive!",
    rating: 5
  }
];

const zhQuotes = [
  "TradeGrail 帮我发现了伦敦盘交易中的一个漏洞，那个漏洞每月让我损失 2000 美元。一天之内就赚回了订阅费。",
  "心理矩阵改变了游戏规则。我终于意识到我的 FOMO 与特定的新闻事件有关。这就像为我的交易请了一位心理医生。",
  "我试过 TraderSync 和 TradeZella。TradeGrail 的界面更快，AI 洞察确实具有可操作性。这是我今年最好的投资。",
  "非常喜欢用 @tradegrail 来记录我的交易。导入交易非常简单，数据结果也非常出色。我最成功的交易通常发生在美东时间周三中午 12 点。",
  "正在 @tradegrail 上复盘昨天的交易。图表复盘功能太棒了。这是在 $NVDA 上的一个空单（使用价内看跌期权）。效果非常好。",
  "@tradegrail 为你完成了所有的繁重工作。记录并复盘。冲洗，重复。停止整天分析市场，开始分析你自己。",
  "在最近的市场震荡中，我花了不少时间研究交易日志软件。在使用了几个月后，我发现 @tradegrail 对我来说最有用。也是一个很棒的 App。它有我用过最好的 IBKR 导入功能。",
  "日内交易者（股票和加密货币）一定要看看 TradeGrail。追踪数据并发现优势的最佳日志！",
  "@tradegrail 不仅产品惊艳，团队也非常优秀！他们在产品上投入的心血令人印象深刻！"
];

export const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-[var(--bg-main)] transition-colors duration-300">
      {/* Top and Bottom Gradient Masks for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--bg-main)] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--bg-main)] to-transparent z-20 pointer-events-none" />

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight text-[var(--text-main)]"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-xl max-w-2xl mx-auto"
          >
            {t('testimonials.desc')}
          </motion.p>
        </div>

        {/* Grid Layout: 2 rows of 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 8).map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-brand-primary/30 transition-all duration-500 group backdrop-blur-sm shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                
                <p className="text-[var(--text-main)]/80 text-base leading-relaxed mb-8 line-clamp-6">
                  {language === 'zh' ? zhQuotes[i] : testimonial.quote}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[var(--border-subtle)]" 
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-[var(--text-main)] text-xs truncate">{testimonial.name}</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">{testimonial.handle}</div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors shrink-0">
                  <div className="w-1 h-1 rounded-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Call to Action */}
        <div className="mt-32 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight"
          >
            {t('testimonials.community.title')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg max-w-3xl mx-auto mb-12"
          >
            {t('testimonials.community.desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/signup" className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-brand-primary/90 transition-all group shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
              {t('hero.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
