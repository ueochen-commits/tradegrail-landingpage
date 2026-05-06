import { motion } from 'motion/react';

export const ShowcaseSection = () => {
  return (
    <section className="pt-5 pb-24 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] p-1 sm:p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-300"
        >
          {/* Browser Header Decor */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] flex items-center px-6 gap-2 z-20 transition-colors duration-300">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-b-[2.3rem]">
            <img
              src="/lddashboard.png"
              alt="TradeGrail Dashboard"
              className="w-full h-auto block"
            />
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
