import { motion } from 'motion/react';

export const ShowcaseSection = () => {
  return (
    <section className="pt-5 pb-24 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
};
