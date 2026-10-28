import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CLOUD_EMAIL_CHILDREN, localeContent } from '@/data/services';
import { ICONS, IconName } from '@/lib/icons';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    eyebrow: 'PLATFORMS WE MIGRATE',
    heading: 'Every major business email platform',
    sub: "Whatever you're moving to or from, we cover it with the same rigorous process, zero message loss, and attention to detail.",
    learnMore: 'Learn more',
  },
  ar: {
    eyebrow: 'المنصات التي ننقل إليها',
    heading: 'كل منصة بريد إلكتروني رئيسية للأعمال',
    sub: 'أيًا كانت المنصة التي تنتقل منها أو إليها، نغطيها بنفس العملية الدقيقة، وصفر فقدان للرسائل، واهتمام تام بالتفاصيل.',
    learnMore: 'اعرف المزيد',
  },
};

export default function Services() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  return (
    <section id="services" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-500/5 blur-[150px] rounded-full -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-navy-300 leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLOUD_EMAIL_CHILDREN.map((service, i) => {
            const Icon = ICONS[service.icon as IconName];
            const content = localeContent(service, locale);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={withLocale(`/${service.slug}`)}
                  className="group relative flex flex-col h-full p-7 bg-navy-900/40 border border-white/5 rounded-2xl card-hover overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col flex-1">
                    <div className="w-12 h-12 mb-5 bg-navy-800 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:border-accent-500/40 group-hover:bg-accent-500/10 transition-all">
                      {Icon && <Icon className="w-6 h-6 text-accent-400" />}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-white">
                      {content.name}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed mb-5 flex-1">
                      {content.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                      {t.learnMore}
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
