import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    eyebrow: 'HOW IT WORKS',
    heading: 'A proven six-step migration process',
    sub: 'No guesswork, no surprises. Every migration follows the same battle-tested methodology.',
    learnMore: 'Learn more about MigrateHive',
    steps: [
      { number: '01', title: 'Assess', description: 'Full mailbox audit, domain verification, and risk assessment of your current email environment.' },
      { number: '02', title: 'Plan', description: 'Detailed migration runbook with timelines, rollback procedures, and resource allocation.' },
      { number: '03', title: 'Migrate', description: 'Staged mailbox sync with incremental passes, preserving every email, contact, and calendar event.' },
      { number: '04', title: 'Test', description: 'Comprehensive validation — mailbox completeness, deliverability, and integrity checks on the new platform.' },
      { number: '05', title: 'Switch', description: 'Coordinated MX/DNS cutover at optimal timing with minimal impact on your users and operations.' },
      { number: '06', title: 'Monitor', description: 'Post-migration monitoring, deliverability tuning, and dedicated support for 30 days after the switch.' },
    ],
  },
  ar: {
    eyebrow: 'كيف تسير العملية',
    heading: 'عملية نقل مُثبتة من ست خطوات',
    sub: 'بلا تخمين وبلا مفاجآت. كل عملية نقل تتبع نفس المنهجية المُختبرة.',
    learnMore: 'اعرف المزيد عن MigrateHive',
    steps: [
      { number: '01', title: 'التقييم', description: 'تدقيق كامل لصناديق البريد، والتحقق من النطاق، وتقييم المخاطر في بيئة بريدك الحالية.' },
      { number: '02', title: 'التخطيط', description: 'خطة نقل تفصيلية مع جدول زمني، وإجراءات تراجع، وتوزيع للموارد.' },
      { number: '03', title: 'النقل', description: 'مزامنة مرحلية لصناديق البريد مع عمليات تدريجية، مع الحفاظ على كل بريد إلكتروني وجهة اتصال وموعد تقويم.' },
      { number: '04', title: 'الاختبار', description: 'تحقق شامل — اكتمال صناديق البريد، وقابلية التسليم، وفحوصات السلامة على المنصة الجديدة.' },
      { number: '05', title: 'التحويل', description: 'تحويل منسق لسجلات MX/DNS في التوقيت الأمثل مع أقل تأثير على المستخدمين والعمليات.' },
      { number: '06', title: 'المراقبة', description: 'مراقبة بعد النقل، وضبط قابلية التسليم، ودعم مخصص لمدة 30 يومًا بعد التحويل.' },
    ],
  },
};

export default function HowItWorks() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  return (
    <section id="process" className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-500/5 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-navy-300 leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Desktop: horizontal flow with connecting line */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[60px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
          <div className="grid grid-cols-6 gap-4">
            {t.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-14 h-14 mb-5">
                  <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-md" />
                  <div className="relative w-14 h-14 bg-navy-800 border border-accent-500/30 rounded-full flex items-center justify-center">
                    <span className="font-mono text-sm font-semibold text-accent-400">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-xs text-navy-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-12 h-12 shrink-0">
                  <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-md" />
                  <div className="relative w-12 h-12 bg-navy-800 border border-accent-500/30 rounded-full flex items-center justify-center">
                    <span className="font-mono text-xs font-semibold text-accent-400">{step.number}</span>
                  </div>
                </div>
                {i < t.steps.length - 1 && <div className="w-px h-full bg-gradient-to-b from-accent-500/30 to-transparent mt-2" />}
              </div>
              <div className="pb-6">
                <h3 className="font-display text-lg font-semibold mb-1.5 text-white">{step.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to={withLocale('/about')} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">
            {t.learnMore}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
