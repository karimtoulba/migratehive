import { motion } from 'framer-motion';
import { Clock, ShieldCheck, ClipboardList, LifeBuoy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICONS: Record<string, typeof Clock> = {
  Clock,
  ShieldCheck,
  ClipboardList,
  LifeBuoy,
};

const COPY = {
  en: {
    eyebrow: 'WHY MIGRATEHIVE',
    heading: 'Migration built on trust and precision',
    benefits: [
      {
        icon: 'Clock',
        title: 'Minimal Downtime',
        description: 'Precision-timed MX cutovers and parallel mailbox syncing keep mail flowing throughout the transition.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Zero Message Loss',
        description: 'Encrypted transfer channels and checksummed mailbox sync protect every email, contact, and event.',
      },
      {
        icon: 'ClipboardList',
        title: 'Careful Planning',
        description: 'Every migration starts with a full mailbox audit and a documented, tested migration runbook.',
      },
      {
        icon: 'LifeBuoy',
        title: 'Post-Migration Support',
        description: 'We stay engaged after the switch — monitoring, troubleshooting, and deliverability checks for 30 days included.',
      },
    ],
  },
  ar: {
    eyebrow: 'لماذا MigrateHive',
    heading: 'نقل مبني على الثقة والدقة',
    benefits: [
      {
        icon: 'Clock',
        title: 'أقل توقف ممكن',
        description: 'تحويلات MX محددة التوقيت بدقة ومزامنة متوازية لصناديق البريد تبقي البريد يتدفق طوال فترة الانتقال.',
      },
      {
        icon: 'ShieldCheck',
        title: 'صفر فقدان للرسائل',
        description: 'قنوات نقل مشفّرة ومزامنة موثقة لصناديق البريد تحمي كل بريد إلكتروني وجهة اتصال وموعد.',
      },
      {
        icon: 'ClipboardList',
        title: 'تخطيط دقيق',
        description: 'كل نقل يبدأ بتدقيق كامل لصناديق البريد وخطة تنفيذ موثقة ومُختبرة.',
      },
      {
        icon: 'LifeBuoy',
        title: 'دعم بعد النقل',
        description: 'نبقى متفاعلين بعد الانتقال — مراقبة واستكشاف للأعطال وفحوصات لقابلية التسليم لمدة 30 يومًا.',
      },
    ],
  },
};

export default function Benefits() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  return (
    <section className="relative py-20 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x rtl:divide-x-reverse divide-white/10">
          {t.benefits.map((benefit, i) => {
            const Icon = ICONS[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group py-6 lg:py-0 lg:ps-8 lg:pe-8 first:lg:ps-0 last:lg:pe-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-sm text-accent-400/70 tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <Icon className="w-5 h-5 text-accent-400 shrink-0" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
