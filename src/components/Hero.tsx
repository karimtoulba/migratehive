import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    badge: 'Specialist Email Migration Experts',
    headline: 'Move Your Inbox.',
    headlineAccent: 'Not Your Headaches.',
    sub: 'Professional business email migrations to Google Workspace, Microsoft 365, Zoho, or any IMAP platform — with zero message loss and minimal downtime.',
    cta: 'Get a Free Migration Assessment',
    explore: 'Explore Platforms',
    migrations: '500+ Migrations Completed',
    support: '30-Day Support Included',
    diagram: {
      mailbox: 'Mailbox',
      contacts: 'Contacts',
      calendar: 'Calendar',
      secureMigration: 'Secure\nMigration',
      newMailbox: 'New Mailbox',
      dnsMx: 'DNS / MX',
      current: 'CURRENT',
      new: 'NEW',
    },
  },
  ar: {
    badge: 'خبراء متخصصون في نقل البريد الإلكتروني',
    headline: 'انقل بريدك.',
    headlineAccent: 'لا تنقل متاعبك.',
    sub: 'نقل احترافي للبريد الإلكتروني للأعمال إلى Google Workspace أو Microsoft 365 أو Zoho أو أي منصة تدعم IMAP — بصفر فقدان للرسائل وأقل توقف ممكن.',
    cta: 'احصل على تقييم نقل مجاني',
    explore: 'استكشف المنصات',
    migrations: '+500 عملية نقل مكتملة',
    support: 'دعم فني لمدة 30 يومًا',
    diagram: {
      mailbox: 'صندوق البريد',
      contacts: 'جهات الاتصال',
      calendar: 'التقويم',
      secureMigration: 'نقل\nآمن',
      newMailbox: 'صندوق بريد جديد',
      dnsMx: 'DNS / MX',
      current: 'الحالي',
      new: 'الجديد',
    },
  },
};

export default function Hero() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-navy-800/60 border border-accent-500/20 rounded-full text-sm text-accent-300"
            >
              <Compass className="w-3.5 h-3.5" />
              {t.badge}
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
            >
              {t.headline}
              <br />
              <span className="text-gradient-accent">{t.headlineAccent}</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-6 text-lg text-navy-200 max-w-xl leading-relaxed"
            >
              {t.sub}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to={withLocale('/contact#assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
              >
                {t.cta}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800/60 hover:bg-navy-700/60 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all"
              >
                {t.explore}
              </button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex items-center gap-6 text-sm text-navy-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>{t.migrations}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <span>{t.support}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated infrastructure diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <InfrastructureDiagram labels={t.diagram} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface DiagramLabels {
  mailbox: string;
  contacts: string;
  calendar: string;
  secureMigration: string;
  newMailbox: string;
  dnsMx: string;
  current: string;
  new: string;
}

function InfrastructureDiagram({ labels }: { labels: DiagramLabels }) {
  return (
    <div className="relative w-full h-[440px]">
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 440" fill="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Lines from left to middle */}
        <path d="M 100 100 C 180 100, 180 220, 250 220" stroke="url(#lineGrad)" strokeWidth="2" className="animate-dash-line" />
        <path d="M 100 220 C 180 220, 180 220, 250 220" stroke="url(#lineGrad)" strokeWidth="2" className="animate-dash-line" />
        <path d="M 100 340 C 180 340, 180 220, 250 220" stroke="url(#lineGrad)" strokeWidth="2" className="animate-dash-line" />

        {/* Lines from middle to right */}
        <path d="M 250 220 C 320 220, 320 100, 400 100" stroke="url(#lineGrad)" strokeWidth="2" className="animate-dash-line" />
        <path d="M 250 220 C 320 220, 320 340, 400 340" stroke="url(#lineGrad)" strokeWidth="2" className="animate-dash-line" />
      </svg>

      {/* Left: Current Mailbox */}
      <div className="absolute left-0 top-[60px] w-[100px]">
        <NodeCard label={labels.mailbox} delay={0} />
      </div>
      <div className="absolute left-0 top-[180px] w-[100px]">
        <NodeCard label={labels.contacts} delay={0.15} />
      </div>
      <div className="absolute left-0 top-[300px] w-[100px]">
        <NodeCard label={labels.calendar} delay={0.3} />
      </div>

      {/* Middle: Secure Migration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
          className="w-24 h-24 bg-navy-800 border border-accent-500/40 rounded-2xl flex flex-col items-center justify-center gap-1.5"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="text-[10px] font-medium text-accent-300 text-center leading-tight whitespace-pre-line">{labels.secureMigration}</span>
        </motion.div>
      </div>

      {/* Right: New Mailbox */}
      <div className="absolute right-0 top-[60px] w-[100px]">
        <NodeCard label={labels.newMailbox} delay={0.45} highlight />
      </div>
      <div className="absolute right-0 top-[300px] w-[100px]">
        <NodeCard label={labels.dnsMx} delay={0.6} highlight />
      </div>

      {/* Labels — kept pinned to the diagram's fixed node positions (not mirrored) since
          the connecting-line geometry above is hardcoded left-to-right either way. */}
      <div className="absolute left-0 -bottom-2 text-xs font-mono text-navy-400 tracking-wider">{labels.current}</div>
      <div className="absolute right-0 -bottom-2 text-xs font-mono text-orange-400 tracking-wider">{labels.new}</div>
    </div>
  );
}

function NodeCard({ label, delay, highlight }: { label: string; delay: number; highlight?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`w-[100px] h-[64px] rounded-xl border flex flex-col items-center justify-center gap-1 ${
        highlight
          ? 'bg-navy-800/80 border-accent-500/30'
          : 'bg-navy-900/80 border-white/10'
      }`}
    >
      <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-accent-400' : 'bg-navy-400'} animate-pulse`} />
      <span className="text-[11px] font-medium text-navy-200 text-center leading-tight">{label}</span>
    </motion.div>
  );
}
