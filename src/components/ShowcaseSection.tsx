import { motion } from 'motion/react';

const BROKER_LOGOS = [
  { src: '/1.png', alt: 'Broker 1' },
  { src: '/2.png', alt: 'Broker 2' },
  { src: '/3.png', alt: 'Broker 3' },
  { src: '/5.png', alt: 'Broker 5' },
  { src: '/6.png', alt: 'Broker 6' },
  { src: '/7.png', alt: 'Broker 7' },
  { src: '/8.png', alt: 'Broker 8' },
  { src: '/9.png', alt: 'Broker 9' },
];

export const ShowcaseSection = () => {
  // 复制两遍实现无缝循环
  const logos = [...BROKER_LOGOS, ...BROKER_LOGOS];

  return (
    <section className="pt-0 pb-16 relative overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/lddashboard.png"
          alt="TradeGrail Dashboard"
          className="w-full h-auto block -mt-12"
        />
      </motion.div>

      {/* Stats + Broker Logos */}
      <div className="mt-10 text-center">
        {/* 统计数据 */}
        <p className="text-sm text-[var(--text-muted)]">
          内测期间已记录 <span className="font-semibold text-[var(--text-main)]">12,847</span> 笔交易 · 来自 <span className="font-semibold text-[var(--text-main)]">23</span> 个国家的 <span className="font-semibold text-[var(--text-main)]">847</span> 名交易者
        </p>

        {/* 券商标题 */}
        <p className="mt-5 text-sm font-medium text-[var(--text-muted)]">
          已支持以下券商，自动同步交易数据
        </p>

        {/* 滚动 Logo 跑马灯 */}
        <div className="relative mt-6 overflow-hidden">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-slow gap-12 items-center w-max">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center h-10 w-24 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[96px] w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
