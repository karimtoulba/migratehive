import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, Globe, Database, RotateCcw, Settings, Network, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICONS = { Lock, Globe, Database, RotateCcw, Settings, Network };

const COPY = {
  en: {
    eyebrow: 'MIGRATION WITHOUT THE GUESSWORK',
    heading: 'Every variable accounted for',
    sub: 'Migrations fail when details are missed. We obsess over the details so your move is predictable, safe, and boring — exactly how it should be.',
    pillars: [
      { icon: 'Lock', title: 'Security First', description: 'Encrypted transfers, restricted access, and audit trails throughout the entire migration.' },
      { icon: 'Globe', title: 'MX & Deliverability', description: 'SPF, DKIM, and DMARC configured correctly before cutover, so your mail never lands in spam.' },
      { icon: 'Database', title: 'Full Mailbox Backups', description: 'Complete mailbox snapshots taken before any changes, stored securely as your safety net.' },
      { icon: 'RotateCcw', title: 'Rollback Planning', description: 'Every migration ships with a tested rollback procedure. If anything is off, we revert in minutes.' },
      { icon: 'Settings', title: 'Platform Admin Expertise', description: 'Deep knowledge of Google Workspace, Microsoft 365, Zoho, and IMAP admin consoles — not a generic checklist.' },
      { icon: 'Network', title: 'Mailbox & Directory Mapping', description: 'We map every mailbox, group, and shared resource before touching a single account.' },
    ],
    visualHeading: 'The transition, visualized',
    before: { phase: 'Before', label: 'Current Mailbox', items: ['Scattered legacy inboxes', 'No admin oversight', 'Manual backups', 'Deliverability issues'] },
    inProgress: 'Migration in progress',
    after: { phase: 'After', label: 'New Mailbox Platform', items: ['Centralized modern platform', 'Full admin console control', 'Automated backups', 'Verified deliverability'] },
    trustLink: 'See why teams trust MigrateHive',
  },
  ar: {
    eyebrow: 'نقل بلا تخمين',
    heading: 'كل متغير محسوب بدقة',
    sub: 'عمليات النقل تفشل عندما تُغفل التفاصيل. نحن نهتم بكل تفصيل حتى يكون انتقالك متوقعًا وآمنًا وخاليًا من المفاجآت — تمامًا كما يجب أن يكون.',
    pillars: [
      { icon: 'Lock', title: 'الأمان أولاً', description: 'نقل مشفّر، وصلاحيات وصول محدودة، وسجلات تدقيق طوال عملية النقل بأكملها.' },
      { icon: 'Globe', title: 'MX وقابلية التسليم', description: 'يتم ضبط SPF وDKIM وDMARC بشكل صحيح قبل التحويل، حتى لا يصل بريدك إلى الرسائل غير المرغوب فيها أبدًا.' },
      { icon: 'Database', title: 'نسخ احتياطية كاملة لصناديق البريد', description: 'لقطات كاملة لصناديق البريد تُؤخذ قبل أي تغيير، وتُخزّن بأمان كشبكة أمان لك.' },
      { icon: 'RotateCcw', title: 'خطة للتراجع', description: 'كل عملية نقل تأتي مع إجراء تراجع مُختبر. إن حدث خلل، نعيد الوضع خلال دقائق.' },
      { icon: 'Settings', title: 'خبرة في إدارة المنصات', description: 'معرفة عميقة بلوحات تحكم Google Workspace وMicrosoft 365 وZoho وIMAP — وليست قائمة تحقق عامة.' },
      { icon: 'Network', title: 'تخطيط صناديق البريد والدلائل', description: 'نخطط لكل صندوق بريد ومجموعة ومورد مشترك قبل لمس أي حساب.' },
    ],
    visualHeading: 'الانتقال، بصريًا',
    before: { phase: 'قبل', label: 'صندوق البريد الحالي', items: ['صناديق وارد قديمة متناثرة', 'بلا إشراف إداري', 'نسخ احتياطية يدوية', 'مشكلات في قابلية التسليم'] },
    inProgress: 'النقل قيد التنفيذ',
    after: { phase: 'بعد', label: 'منصة البريد الجديدة', items: ['منصة حديثة موحدة', 'تحكم إداري كامل', 'نسخ احتياطية تلقائية', 'قابلية تسليم مؤكدة'] },
    trustLink: 'اكتشف لماذا تثق الفرق بـ MigrateHive',
  },
};

export default function WhyUs() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  return (
    <section id="why-us" className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.heading}
          </h2>
          <p className="mt-4 text-navy-300 leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {t.pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 bg-navy-900/40 border border-white/5 rounded-2xl card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-navy-800 border border-accent-500/20 rounded-lg flex items-center justify-center group-hover:border-accent-500/40 transition-colors">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold mb-1.5 text-white">{pillar.title}</h3>
                    <p className="text-sm text-navy-300 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Before -> Migration -> After visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl font-semibold text-center mb-10 text-white">
            {t.visualHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-stretch">
            {/* Before */}
            <InfraPanel phase={t.before.phase} label={t.before.label} tone="muted" items={t.before.items} />

            {/* Migration arrow */}
            <div className="flex md:flex-col items-center justify-center gap-3 py-4 md:py-0">
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent to-accent-500/40" />
              <div className="relative px-5 py-3 bg-navy-800/80 border border-accent-500/30 rounded-xl flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-300">{t.inProgress}</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gradient-to-t from-transparent to-accent-500/40" />
            </div>

            {/* After */}
            <InfraPanel phase={t.after.phase} label={t.after.label} tone="accent" items={t.after.items} />
          </div>
        </motion.div>

        <div className="mt-14 text-center">
          <Link to={withLocale('/about')} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">
            {t.trustLink}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InfraPanel({
  phase,
  label,
  tone,
  items,
}: {
  phase: string;
  label: string;
  tone: 'muted' | 'accent';
  items: string[];
}) {
  const isAccent = tone === 'accent';
  return (
    <div
      className={`relative p-6 rounded-2xl border ${
        isAccent
          ? 'bg-navy-800/40 border-accent-500/30'
          : 'bg-navy-900/40 border-white/10'
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={`text-xs font-mono tracking-wider ${isAccent ? 'text-accent-400' : 'text-navy-400'}`}>
          {phase.toUpperCase()}
        </span>
        <div className={`w-2 h-2 rounded-full ${isAccent ? 'bg-accent-400 animate-pulse' : 'bg-navy-500'}`} />
      </div>
      <h4 className="font-display text-base font-semibold mb-4 text-white">{label}</h4>
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <div className={`w-1.5 h-1.5 rounded-full ${isAccent ? 'bg-accent-400' : 'bg-navy-500'}`} />
            <span className="text-sm text-navy-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
