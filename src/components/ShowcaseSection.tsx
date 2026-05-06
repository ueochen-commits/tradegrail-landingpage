import { motion } from 'motion/react';

export const ShowcaseSection = () => {
  return (
    <section className="pt-0 pb-24 relative overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/lddashboard.png"
          alt="TradeGrail Dashboard"
          className="w-full h-auto block -mt-4"
        />
      </motion.div>
    </section>
  );
};
