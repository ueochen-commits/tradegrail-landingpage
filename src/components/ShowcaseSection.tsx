import { motion } from 'motion/react';

const BROKER_LOGOS = [
  '/broker-1.png',
  '/broker-2.png',
  '/broker-3.png',
  '/broker-5.png',
  '/broker-6.png',
  '/broker-7.png',
  '/broker-8.png',
  '/broker-9.png',
];

export const ShowcaseSection = () => {
  // 三倍复制保证无缝循环
  const track = [...BROKER_LOGOS, ...BROKER_LOGOS, ...BROKER_LOGOS];

  return (
    <>
      {/* 仪表盘截图 — 位置不变 */}
      <section className="pt-0 pb-0 relative overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/lddashboard.png"
            alt="TradeGrail Dashboard"
            className="w-full h-auto block"
          />
        </motion.div>
      </section>

      {/* 统计数据 + 经纪商 logo 滚动 */}
      <section className="pt-10 pb-16 relative z-10">
        {/* 统计文字 */}
        <p className="text-center text-sm text-[var(--text-muted)]">
          内测期间已记录{' '}
          <span className="font-semibold text-[var(--text-main)]">12,847</span>{' '}
          笔交易 · 来自{' '}
          <span className="font-semibold text-[var(--text-main)]">23</span>{' '}
          个国家的{' '}
          <span className="font-semibold text-[var(--text-main)]">847</span>{' '}
          名交易者
        </p>

        {/* 副标题 */}
        <p className="mt-4 text-center text-sm font-medium text-[var(--text-muted)]">
          已支持以下券商，自动同步交易数据
        </p>

        {/* Logo 跑马灯 */}
        <div className="relative mt-8 overflow-hidden max-w-4xl mx-auto">
          {/* 左侧渐隐 */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          {/* 右侧渐隐 */}
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

          {/* 滚动轨道 */}
          <div
            className="flex items-center"
            style={{
              animation: 'brokerScroll 28s linear infinite',
              width: 'max-content',
            }}
          >
            {track.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 px-8"
                style={{ width: '180px', height: '64px' }}
              >
                <img
                  src={src}
                  alt={`broker-${i}`}
                  className="max-h-12 max-w-[140px] w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
