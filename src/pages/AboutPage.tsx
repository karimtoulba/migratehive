import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Lock,
  Globe,
  Database,
  RotateCcw,
  Settings,
  Network,
  MessageSquare,
  Mail,
  Target,
  Clock,
  Hexagon,
  CheckCircle2,
  XCircle,
  MinusCircle,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';

const ICONS = { Lock, Globe, Database, RotateCcw, Settings, Network, MessageSquare, Mail };

const COPY = {
  en: {
    eyebrow: 'ABOUT MIGRATEHIVE',
    headline: 'Email migrations you',
    headlineAccent: 'never have to think about again.',
    sub: "We're a specialist team singularly focused on business email migration — Google Workspace, Microsoft 365, Zoho, and IMAP. Every variable accounted for, so your move is predictable, safe, and boring — exactly how it should feel.",
    heroStats: [
      { value: '500+', label: 'Migrations Completed' },
      { value: '<30 min', label: 'Average Downtime' },
      { value: '30-Day', label: 'Support Included' },
    ],
    missionHeading: 'Why MigrateHive exists',
    missionP1: "Every growing business eventually outgrows its email setup — a free Gmail account that was fine for two people, an on-premise Exchange server nobody wants to maintain anymore, a legacy IMAP host that's falling behind. The move itself is rarely the hard part. It's everything a migration quietly puts at risk along the way: years of correspondence, contracts buried in old threads, shared calendars, and the trust clients place in you every time an email actually arrives.",
    missionP2: "MigrateHive exists to take that risk off the table. We specialize in exactly one thing — business email migration — across Google Workspace, Microsoft 365, Zoho, and any IMAP platform. One team, one rigorous process, no matter which platform you're moving to or from.",
    missionBadges: {
      zeroLoss: 'Zero Message Loss',
      security: 'Security First',
      anyPlatform: 'Any Platform',
      fastCutover: 'Fast Cutover',
    },
    pillarsEyebrow: 'HOW WE OPERATE',
    pillarsHeading: 'The principles behind every migration',
    pillars: [
      { icon: 'Lock', title: 'Security First', description: 'Every transfer runs over encrypted channels with access restricted to the engineers on your project and full audit trails throughout. Credentials are never kept longer than the migration requires.' },
      { icon: 'Globe', title: 'MX & Deliverability Management', description: 'MX, SPF, DKIM, and DMARC records are staged and verified before cutover, with mail routing switched at the exact moment your new platform is fully synced — no deliverability gaps, no mail landing in spam.' },
      { icon: 'Database', title: 'Full Mailbox Backups, Every Time', description: 'A complete backup of your existing mail environment is taken before any changes begin, stored securely as an untouched safety net for the duration of the project.' },
      { icon: 'RotateCcw', title: 'Rollback Planning', description: 'Every migration ships with a tested rollback procedure written before we need it. If anything is off after cutover, we can revert in minutes rather than troubleshoot live.' },
      { icon: 'Settings', title: 'Deep Platform Expertise', description: 'Hands-on experience across the Google Workspace admin console, Microsoft 365 / Exchange Online, Zoho admin, and IMAP/CalDAV/CardDAV protocols — not a generalist checklist applied blindly.' },
      { icon: 'Network', title: 'Mailbox & Directory Mapping', description: "We map every mailbox, group, shared resource, and dependency before touching a single account, so nothing silently breaks because it wasn't accounted for." },
      { icon: 'MessageSquare', title: 'Transparent Communication', description: 'You get a written runbook before work starts, status updates as it progresses, and a completion report at the end. No disappearing between kickoff and go-live.' },
      { icon: 'Mail', title: 'Zero Message Loss', description: 'Every mailbox is synced and checksummed against the source before cutover, so nothing — not one email, contact, or event — goes missing in the move.' },
    ],
    comparisonEyebrow: 'HOW WE COMPARE',
    comparisonHeading: 'DIY vs. a general freelancer vs. MigrateHive',
    colDiy: 'DIY',
    colFreelancer: 'GENERAL FREELANCER',
    colUs: 'MIGRATEHIVE',
    mobileFreelancer: 'Freelancer',
    mobileUs: 'MigrateHive',
    comparisonRows: [
      { aspect: 'Migration-specific expertise', diy: 'partial', freelancer: 'partial', us: 'full' },
      { aspect: 'Written runbook & rollback plan', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'Staging environment testing', diy: 'partial', freelancer: 'partial', us: 'full' },
      { aspect: 'Multi-platform coverage in one team', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'Post-launch support included', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'Direct access to your engineer', diy: 'full', freelancer: 'partial', us: 'full' },
    ] as const,
    ctaHeading: 'Ready to move your email the right way?',
    ctaSub: 'Get a free, no-obligation migration assessment tailored to your mailbox count and platform.',
    ctaButton: 'Get Your Free Assessment',
  },
  ar: {
    eyebrow: 'عن MigrateHive',
    headline: 'عمليات نقل بريد إلكتروني',
    headlineAccent: 'لن تضطر للتفكير فيها مجددًا.',
    sub: 'نحن فريق متخصص يركز حصريًا على نقل البريد الإلكتروني للأعمال — عبر Google Workspace وMicrosoft 365 وZoho وIMAP. كل متغير محسوب، حتى يكون انتقالك متوقعًا وآمنًا وخاليًا من المفاجآت — تمامًا كما يجب أن يكون.',
    heroStats: [
      { value: '+500', label: 'عملية نقل مكتملة' },
      { value: '<30 دقيقة', label: 'متوسط التوقف' },
      { value: '30 يومًا', label: 'دعم متضمن' },
    ],
    missionHeading: 'لماذا تأسست MigrateHive',
    missionP1: 'كل شركة نامية تتجاوز في النهاية إعداد بريدها الإلكتروني الحالي — حساب Gmail مجاني كان كافيًا لشخصين، أو خادم Exchange محلي لم يعد أحد يرغب في صيانته، أو مضيف IMAP قديم تجاوزه الزمن. الانتقال نفسه نادرًا ما يكون الجزء الصعب. الصعب هو كل ما يعرّضه النقل للخطر بصمت على طول الطريق: سنوات من المراسلات، وعقود مدفونة في محادثات قديمة، وتقويمات مشتركة، وثقة العملاء التي يمنحونها لكم في كل مرة تصل فيها رسالة بريد إلكتروني بالفعل.',
    missionP2: 'تأسست MigrateHive لإزالة هذا الخطر تمامًا. نحن متخصصون في شيء واحد فقط — نقل البريد الإلكتروني للأعمال — عبر Google Workspace وMicrosoft 365 وZoho وأي منصة تدعم IMAP. فريق واحد، وعملية واحدة دقيقة، بغض النظر عن المنصة التي تنتقل منها أو إليها.',
    missionBadges: {
      zeroLoss: 'صفر فقدان للرسائل',
      security: 'الأمان أولاً',
      anyPlatform: 'أي منصة',
      fastCutover: 'تحويل سريع',
    },
    pillarsEyebrow: 'كيف نعمل',
    pillarsHeading: 'المبادئ التي تقوم عليها كل عملية نقل',
    pillars: [
      { icon: 'Lock', title: 'الأمان أولاً', description: 'كل عملية نقل تتم عبر قنوات مشفّرة بصلاحيات وصول مقتصرة على المهندسين العاملين على مشروعك، مع سجلات تدقيق كاملة طوال العملية. لا يتم الاحتفاظ ببيانات الاعتماد لفترة أطول مما يتطلبه النقل.' },
      { icon: 'Globe', title: 'إدارة MX وقابلية التسليم', description: 'يتم تجهيز سجلات MX وSPF وDKIM وDMARC والتحقق منها قبل التحويل، مع تبديل توجيه البريد في اللحظة التي تكتمل فيها مزامنة منصتك الجديدة بالكامل — بلا فجوات في قابلية التسليم وبلا وصول للبريد إلى الرسائل غير المرغوب فيها.' },
      { icon: 'Database', title: 'نسخ احتياطية كاملة لصناديق البريد، في كل مرة', description: 'يتم أخذ نسخة احتياطية كاملة من بيئة بريدك الحالية قبل بدء أي تغييرات، وتُخزّن بأمان كشبكة أمان لم تُمس طوال مدة المشروع.' },
      { icon: 'RotateCcw', title: 'خطة للتراجع', description: 'كل عملية نقل تأتي مع إجراء تراجع مُختبر ومكتوب مسبقًا قبل أن نحتاج إليه. إن ظهر أي خلل بعد التحويل، يمكننا التراجع خلال دقائق بدلاً من استكشاف الأعطال مباشرة.' },
      { icon: 'Settings', title: 'خبرة عميقة في المنصات', description: 'خبرة عملية مباشرة عبر لوحة تحكم Google Workspace، وMicrosoft 365 / Exchange Online، وإدارة Zoho، وبروتوكولات IMAP/CalDAV/CardDAV — وليست قائمة تحقق عامة تُطبّق بشكل عشوائي.' },
      { icon: 'Network', title: 'تخطيط صناديق البريد والدلائل', description: 'نخطط لكل صندوق بريد ومجموعة ومورد مشترك وارتباط قبل لمس أي حساب، حتى لا ينكسر شيء بصمت لأنه لم يُحسب حسابه.' },
      { icon: 'MessageSquare', title: 'تواصل شفاف', description: 'تحصل على خطة تنفيذ مكتوبة قبل بدء العمل، وتحديثات دورية عن سير العمل، وتقرير إنجاز في النهاية. بلا اختفاء بين الانطلاق والتفعيل.' },
      { icon: 'Mail', title: 'صفر فقدان للرسائل', description: 'تتم مزامنة كل صندوق بريد والتحقق منه مقابل المصدر قبل التحويل، حتى لا يُفقد شيء — ولا حتى بريد إلكتروني واحد أو جهة اتصال أو موعد — أثناء الانتقال.' },
    ],
    comparisonEyebrow: 'كيف نُقارَن',
    comparisonHeading: 'التنفيذ الذاتي مقابل مستقل عام مقابل MigrateHive',
    colDiy: 'ذاتيًا',
    colFreelancer: 'مستقل عام',
    colUs: 'MigrateHive',
    mobileFreelancer: 'مستقل',
    mobileUs: 'MigrateHive',
    comparisonRows: [
      { aspect: 'خبرة متخصصة في النقل', diy: 'partial', freelancer: 'partial', us: 'full' },
      { aspect: 'خطة تنفيذ مكتوبة وخطة تراجع', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'اختبار في بيئة تجريبية', diy: 'partial', freelancer: 'partial', us: 'full' },
      { aspect: 'تغطية متعددة المنصات في فريق واحد', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'دعم بعد الإطلاق متضمن', diy: 'no', freelancer: 'partial', us: 'full' },
      { aspect: 'وصول مباشر إلى مهندسك', diy: 'full', freelancer: 'partial', us: 'full' },
    ] as const,
    ctaHeading: 'هل أنت مستعد لنقل بريدك الإلكتروني بالطريقة الصحيحة؟',
    ctaSub: 'احصل على تقييم نقل مجاني وبلا التزام، مصمم خصيصًا لعدد صناديق بريدك ومنصتك.',
    ctaButton: 'احصل على تقييمك المجاني',
  },
};

function StatusIcon({ status }: { status: 'full' | 'partial' | 'no' }) {
  if (status === 'full') return <CheckCircle2 className="w-4 h-4 text-accent-400" />;
  if (status === 'partial') return <MinusCircle className="w-4 h-4 text-navy-400" />;
  return <XCircle className="w-4 h-4 text-navy-600" />;
}

function MissionVisual({ badges }: { badges: { zeroLoss: string; security: string; anyPlatform: string; fastCutover: string } }) {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-navy-900/40 border border-white/5 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <linearGradient id="missionLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--accent-500))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(var(--accent-500))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M200 200 L84 84" stroke="url(#missionLine)" strokeWidth="2" className="animate-dash-line" />
        <path d="M200 200 L316 84" stroke="url(#missionLine)" strokeWidth="2" className="animate-dash-line" />
        <path d="M200 200 L84 316" stroke="url(#missionLine)" strokeWidth="2" className="animate-dash-line" />
        <path d="M200 200 L316 316" stroke="url(#missionLine)" strokeWidth="2" className="animate-dash-line" />
      </svg>

      {/* Center mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px -5px rgba(34,211,238,0.2)',
              '0 0 40px -5px rgba(34,211,238,0.4)',
              '0 0 20px -5px rgba(34,211,238,0.2)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-20 h-20 bg-navy-800 border border-accent-500/40 rounded-2xl flex items-center justify-center"
        >
          <Hexagon className="w-9 h-9 text-accent-400" />
        </motion.div>
      </div>

      {/* Orbiting values */}
      <MissionBadge icon={Mail} label={badges.zeroLoss} className="top-6 left-6" delay={0} />
      <MissionBadge icon={Lock} label={badges.security} className="top-6 right-6" delay={0.3} />
      <MissionBadge icon={Globe} label={badges.anyPlatform} className="bottom-6 left-6" delay={0.6} />
      <MissionBadge icon={Clock} label={badges.fastCutover} className="bottom-6 right-6" delay={0.9} />
    </div>
  );
}

function MissionBadge({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`absolute w-[104px] ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        className="p-3 bg-navy-900/80 border border-white/10 rounded-xl text-center"
      >
        <Icon className="w-4 h-4 text-accent-400 mx-auto mb-1.5" />
        <span className="text-[11px] font-medium text-navy-200 leading-tight block">{label}</span>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  useSEO({
    title: locale === 'ar' ? 'عن MigrateHive – خبراء نقل البريد الإلكتروني' : 'About Us – Business Email Migration Experts',
    description:
      locale === 'ar'
        ? 'MigrateHive فريق متخصص في نقل البريد الإلكتروني للأعمال — Google Workspace وMicrosoft 365 وZoho وIMAP. تعرف على ما يحرك عمليتنا القائمة على الأمان و30 يومًا من الدعم المتضمن.'
        : 'MigrateHive is a specialist business email migration team — Google Workspace, Microsoft 365, Zoho, and IMAP. Learn what drives our security-first process and 30 days of included support.',
    path: '/about',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: locale === 'ar' ? 'عن MigrateHive' : 'About MigrateHive',
      },
      breadcrumbJsonLd([
        { name: locale === 'ar' ? 'الرئيسية' : 'Home', path: withLocale('/') },
        { name: locale === 'ar' ? 'عنّا' : 'About', path: withLocale('/about') },
      ]),
    ],
  });

  return (
    <div>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Breadcrumbs
            className="mb-6 flex justify-center"
            items={[{ label: locale === 'ar' ? 'عنّا' : 'About' }]}
          />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-4">{t.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              {t.headline}
              <br />
              <span className="text-gradient-accent">{t.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
              {t.sub}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              {t.heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-navy-400 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-16 md:py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Target className="w-6 h-6 text-accent-400 mb-5" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-5">{t.missionHeading}</h2>
              <p className="text-navy-300 leading-relaxed">
                {t.missionP1}
              </p>
              <p className="mt-4 text-navy-300 leading-relaxed">
                {t.missionP2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MissionVisual badges={t.missionBadges} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.pillarsEyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.pillarsHeading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.pillars.map((pillar, i) => {
              const Icon = ICONS[pillar.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="p-6 bg-navy-900/40 border border-white/5 rounded-2xl card-hover"
                >
                  <div className="w-10 h-10 mb-5 bg-navy-800 border border-accent-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2 text-white">{pillar.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.comparisonEyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.comparisonHeading}
            </h2>
          </motion.div>

          <div className="hidden md:grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            <div className="bg-navy-950 p-5" />
            <div className="bg-navy-950 p-5 text-center">
              <span className="text-xs font-mono tracking-wider text-navy-400">{t.colDiy}</span>
            </div>
            <div className="bg-navy-950 p-5 text-center">
              <span className="text-xs font-mono tracking-wider text-navy-400">{t.colFreelancer}</span>
            </div>
            <div className="bg-navy-900/60 p-5 text-center">
              <span className="text-xs font-mono tracking-wider text-accent-400">{t.colUs}</span>
            </div>

            {t.comparisonRows.map((row) => (
              <Fragment key={row.aspect}>
                <div className="bg-navy-950 p-5 flex items-center">
                  <span className="text-sm font-medium text-white">{row.aspect}</span>
                </div>
                <div className="bg-navy-950 p-5 flex items-center justify-center">
                  <StatusIcon status={row.diy} />
                </div>
                <div className="bg-navy-950 p-5 flex items-center justify-center">
                  <StatusIcon status={row.freelancer} />
                </div>
                <div className="bg-navy-900/60 p-5 flex items-center justify-center">
                  <StatusIcon status={row.us} />
                </div>
              </Fragment>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            {t.comparisonRows.map((row) => (
              <div key={row.aspect} className="p-5 bg-navy-900/40 border border-white/5 rounded-xl">
                <h4 className="text-sm font-semibold text-white mb-3">{row.aspect}</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <StatusIcon status={row.diy} />
                    <p className="text-[10px] text-navy-500 mt-1">{t.colDiy}</p>
                  </div>
                  <div>
                    <StatusIcon status={row.freelancer} />
                    <p className="text-[10px] text-navy-500 mt-1">{t.mobileFreelancer}</p>
                  </div>
                  <div>
                    <StatusIcon status={row.us} />
                    <p className="text-[10px] text-accent-400 mt-1">{t.mobileUs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[150px] rounded-full" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            {t.ctaHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-navy-200 max-w-xl mx-auto"
          >
            {t.ctaSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              to={withLocale('/contact#assessment')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_40px_-6px_rgba(34,211,238,0.6)] text-lg"
            >
              {t.ctaButton}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
