import { useLanguage } from "../context/LanguageContext";
export const ShowcaseSection = () => {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-5 pt-8 pb-12">
      <figure>
        <img
          src="/lddashboard.jpg"
          width="2400"
          height="839"
          fetchPriority="high"
          alt={
            en
              ? "TradeGrail trading journal dashboard interface example"
              : "TradeGrail 交易日志仪表盘界面示例"
          }
          className="w-full h-auto rounded-2xl border border-[var(--border-subtle)]"
        />
        <figcaption className="text-xs text-center text-[var(--text-muted)] mt-3">
          {en
            ? "Interface example. Shown data is illustrative, not a customer performance result."
            : "界面示例，展示数据用于说明功能，不代表用户交易结果。"}
        </figcaption>
      </figure>
      <p className="text-center text-sm text-[var(--text-muted)] mt-6">
        {en
          ? "Start manually · No broker connection required · Up to 2 screenshots per trade on Free"
          : "支持手动记录 · 无需先绑定券商 · 免费账户每笔最多 2 张截图"}
      </p>
    </section>
  );
};
