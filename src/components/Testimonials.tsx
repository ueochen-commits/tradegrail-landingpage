import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Hammer, ShieldAlert, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const buildNotes = [
  {
    icon: Hammer,
    titleKey: 'testimonials.note.prototype.title',
    descKey: 'testimonials.note.prototype.desc',
  },
  {
    icon: ShieldAlert,
    titleKey: 'testimonials.note.trust.title',
    descKey: 'testimonials.note.trust.desc',
  },
  {
    icon: CheckCircle2,
    titleKey: 'testimonials.note.scope.title',
    descKey: 'testimonials.note.scope.desc',
  },
  {
    icon: Users,
    titleKey: 'testimonials.note.beta.title',
    descKey: 'testimonials.note.beta.desc',
  },
];

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-[var(--bg-main)] transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--bg-main)] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--bg-main)] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight text-[var(--text-main)]"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {t('testimonials.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildNotes.map((note, i) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={note.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-8">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-3">{t(note.titleKey)}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{t(note.descKey)}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-32 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-8 tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight"
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
            <a href="https://dashboard.tradegrail.net?auth=signup" className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-brand-primary/90 transition-all group shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
              {t('hero.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
