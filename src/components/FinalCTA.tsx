import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    eyebrow: 'READY TO MOVE?',
    headline: "Let's move your email",
    headlineAccent: 'without the headaches.',
    sub: "Get a free, no-obligation migration assessment. We'll map your mailboxes, identify risks, and give you a clear timeline.",
    cta: 'Get Your Free Assessment',
  },
  ar: {
    eyebrow: 'هل أنت مستعد للانتقال؟',
    headline: 'لننقل بريدك الإلكتروني',
    headlineAccent: 'دون أي متاعب.',
    sub: 'احصل على تقييم نقل مجاني وبلا التزام. سنرسم خريطة صناديق بريدك، ونحدد المخاطر، ونمنحك جدولًا زمنيًا واضحًا.',
    cta: 'احصل على تقييمك المجاني',
  },
};

export default function FinalCTA() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  return (
    <section className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent-400 tracking-wider mb-4"
        >
          {t.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight"
        >
          {t.headline}
          <br />
          <span className="text-gradient-accent">{t.headlineAccent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-navy-200 max-w-xl mx-auto"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to={withLocale('/contact#assessment')}
            className="inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_40px_-6px_rgba(34,211,238,0.6)] text-lg"
          >
            {t.cta}
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
