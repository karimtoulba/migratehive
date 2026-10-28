import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  BadgeCheck,
} from 'lucide-react';
import { ServiceContent, CLOUD_EMAIL_CHILDREN, getService, getRelatedServices, localeContent } from '@/data/services';
import { ICONS, IconName } from '@/lib/icons';
import { useSEO } from '@/hooks/useSEO';
import { SITE_NAME, faqPageJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const ALT_BAND = 'bg-white/5';

const UI = {
  en: {
    freeAssessment: 'Get a Free Assessment',
    aboutUs: 'About MigrateHive',
    pricing: 'PRICING',
    pricingHeading: 'Simple, transparent pricing',
    pricingSub: 'One flat fee to start. No hidden add-ons, no surprise invoices.',
    startingAt: 'STARTING AT',
    perMailbox: (n: number) => `+ $${n} per mailbox`,
    oneTimeFee: 'One-time migration fee',
    example: (base: number, extra: number, total: number) =>
      `Example: 10 mailboxes ≈ $${base} + $${extra} = $${total}`,
    pricingIncludes: [
      'Full migration handled end-to-end',
      'Pre-migration backup & staging tests',
      'Coordinated DNS / cutover scheduling',
      '30 days of post-migration support',
    ],
    priceNote: 'Final price confirmed after your free assessment based on the complexity of your setup.',
    choosePlatform: 'CHOOSE YOUR PLATFORM',
    choosePlatformHeading: 'Which email platform are you moving to?',
    choosePlatformSub: 'Each platform has its own quirks, admin console, and pricing. Pick one to see full pricing and a dedicated migration plan.',
    viewDetails: 'View pricing & details',
    fullScope: 'FULL SCOPE',
    fullScopeHeading: 'Everything we move for you',
    included: "WHAT'S INCLUDED",
    includedHeading: 'Built for zero surprises',
    howItWorks: 'HOW IT WORKS',
    processHeading: (name: string) => `Our ${name.toLowerCase()} process`,
    difference: 'THE DIFFERENCE',
    differenceHeading: 'Doing it yourself vs. MigrateHive',
    diy: 'DIY / IN-HOUSE',
    withUs: 'WITH MIGRATEHIVE',
    testimonials: 'WHAT CLIENTS SAY',
    testimonialsHeading: 'Trusted with migrations that matter',
    faq: 'FAQ',
    faqHeading: (name: string) => `${name} questions, answered`,
    relatedEyebrow: 'EXPLORE MORE',
    relatedHeading: 'Other migration paths we cover',
    learnMore: 'Learn more',
    finalCta: 'Get Your Free Assessment',
  },
  ar: {
    freeAssessment: 'احصل على تقييم مجاني',
    aboutUs: 'عن MigrateHive',
    pricing: 'الأسعار',
    pricingHeading: 'أسعار بسيطة وشفافة',
    pricingSub: 'رسوم ثابتة واحدة للبدء. بدون إضافات خفية، وبدون فواتير مفاجئة.',
    startingAt: 'تبدأ من',
    perMailbox: (n: number) => `+ ${n}$ لكل صندوق بريد`,
    oneTimeFee: 'رسوم نقل لمرة واحدة',
    example: (base: number, extra: number, total: number) =>
      `مثال: 10 صناديق بريد ≈ ${base}$ + ${extra}$ = ${total}$`,
    pricingIncludes: [
      'نقل كامل يُدار من البداية إلى النهاية',
      'نسخ احتياطي مسبق واختبارات تجريبية',
      'جدولة منسقة لتحويل DNS',
      '30 يومًا من الدعم بعد النقل',
    ],
    priceNote: 'يتم تأكيد السعر النهائي بعد التقييم المجاني وفقًا لتعقيد إعدادك.',
    choosePlatform: 'اختر منصتك',
    choosePlatformHeading: 'إلى أي منصة بريد إلكتروني تنتقل؟',
    choosePlatformSub: 'لكل منصة خصائصها ولوحة تحكمها الإدارية وأسعارها الخاصة. اختر واحدة لعرض الأسعار الكاملة وخطة نقل مخصصة.',
    viewDetails: 'عرض الأسعار والتفاصيل',
    fullScope: 'النطاق الكامل',
    fullScopeHeading: 'كل ما ننقله لك',
    included: 'المزايا المشمولة',
    includedHeading: 'مصمم لتفادي أي مفاجآت',
    howItWorks: 'كيف تسير العملية',
    processHeading: (name: string) => `عملية ${name} لدينا`,
    difference: 'الفرق',
    differenceHeading: 'التنفيذ الذاتي مقابل MigrateHive',
    diy: 'ذاتيًا / داخليًا',
    withUs: 'مع MigrateHive',
    testimonials: 'آراء العملاء',
    testimonialsHeading: 'موثوقون في عمليات النقل المهمة',
    faq: 'الأسئلة الشائعة',
    faqHeading: (name: string) => `أسئلة شائعة حول ${name}`,
    relatedEyebrow: 'استكشف المزيد',
    relatedHeading: 'مسارات نقل أخرى نغطيها',
    learnMore: 'اعرف المزيد',
    finalCta: 'احصل على تقييمك المجاني',
  },
};

export default function ServicePage({ service }: { service: ServiceContent }) {
  const { locale, withLocale } = useLanguage();
  const t = UI[locale];
  const c = localeContent(service, locale);
  const parent = service.parentSlug ? getService(service.parentSlug) : undefined;
  const parentContent = parent ? localeContent(parent, locale) : undefined;
  const related = getRelatedServices(service);
  const isCloudEmailHub = service.slug === 'cloud-email-migration';
  const HeroIcon = ICONS[service.icon as IconName];
  const arrowIconClass = 'w-4 h-4 rtl:rotate-180';

  // Sections alternate background bands so the page reads as distinct chapters rather
  // than one continuous surface. The hub page has no pricing section (it only picks a
  // platform), so its order starts one section earlier than individual platform pages.
  const sectionOrder = isCloudEmailHub
    ? ['platformPicker', 'whatWeMigrate', 'features', 'process', 'comparison', 'testimonials', 'faq', 'finalCta']
    : ['pricing', 'whatWeMigrate', 'features', 'process', 'comparison', 'testimonials', 'faq', 'finalCta'];
  const band = (key: string) => (sectionOrder.indexOf(key) % 2 === 0 ? ALT_BAND : '');

  useSEO({
    title: c.seoTitle,
    description: c.seoDescription,
    path: `/${service.slug}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: c.name,
        description: c.seoDescription,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        areaServed: 'Worldwide',
        ...(isCloudEmailHub
          ? {}
          : {
              offers: {
                '@type': 'Offer',
                price: service.pricing.amount,
                priceCurrency: 'USD',
              },
            }),
      },
      breadcrumbJsonLd(
        parent && parentContent
          ? [
              { name: 'Home', path: withLocale('/') },
              { name: parentContent.name, path: withLocale(`/${parent.slug}`) },
              { name: c.name, path: withLocale(`/${service.slug}`) },
            ]
          : [
              { name: 'Home', path: withLocale('/') },
              { name: c.name, path: withLocale(`/${service.slug}`) },
            ]
      ),
      faqPageJsonLd(c.faqs),
    ],
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <Breadcrumbs
            className="mb-6 flex justify-center"
            items={
              parent && parentContent
                ? [{ label: parentContent.name, href: `/${parent.slug}` }, { label: c.name }]
                : [{ label: c.name }]
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-md" />
              <div className="relative w-14 h-14 bg-navy-800 border border-accent-500/30 rounded-2xl flex items-center justify-center">
                {HeroIcon && <HeroIcon className="w-7 h-7 text-accent-400" />}
              </div>
            </div>

            <p className="text-sm font-mono text-accent-400 tracking-wider mb-4">{c.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              {c.headline}
              <br />
              <span className="text-gradient-accent">{c.headlineAccent}</span>
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl leading-relaxed">
              {c.subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to={withLocale('/contact#assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
              >
                {t.freeAssessment}
                <ArrowRight className={arrowIconClass} />
              </Link>
              <Link
                to={withLocale('/about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800/60 hover:bg-navy-700/60 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all"
              >
                {t.aboutUs}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              {c.heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-navy-400 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing (individual platform pages only — the overview links out to each instead) */}
      {!isCloudEmailHub && (
        <section className={`relative py-20 md:py-28 border-t border-white/5 overflow-hidden ${band('pricing')}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/5 blur-[180px] rounded-full" />
          <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.pricing}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {t.pricingHeading}
              </h2>
              <p className="mt-4 text-navy-300 leading-relaxed">
                {t.pricingSub}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto p-8 bg-navy-900/60 border border-orange-400/20 rounded-2xl text-center"
            >
              <p className="text-xs font-mono text-orange-400 tracking-wider mb-3">{t.startingAt}</p>
              <p className="font-display text-5xl font-semibold text-orange-400">
                ${service.pricing.amount}
                {service.pricing.perEmail && (
                  <span className="block text-lg font-normal text-navy-300 mt-2">
                    {t.perMailbox(service.pricing.perEmail)}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm text-navy-400">{t.oneTimeFee}</p>

              {service.pricing.perEmail && (
                <p className="mt-2 text-xs text-navy-500">
                  {t.example(service.pricing.amount, service.pricing.perEmail * 10, service.pricing.amount + service.pricing.perEmail * 10)}
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5 text-start">
                {t.pricingIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <BadgeCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-200">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to={withLocale('/contact#assessment')}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
              >
                {t.freeAssessment}
                <ArrowRight className={arrowIconClass} />
              </Link>

              <p className="mt-4 text-xs text-navy-500 leading-relaxed">
                {t.priceNote}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Cloud Email platform picker (pillar page only) — this is where "Pricing" in the nav lands */}
      {isCloudEmailHub && (
        <section className={`relative py-16 md:py-20 border-t border-white/5 ${band('platformPicker')}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.choosePlatform}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {t.choosePlatformHeading}
              </h2>
              <p className="mt-4 text-navy-300 leading-relaxed">
                {t.choosePlatformSub}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CLOUD_EMAIL_CHILDREN.map((child, i) => {
                const ChildIcon = ICONS[child.icon as IconName];
                const childContent = localeContent(child, locale);
                return (
                  <motion.div key={child.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                    <Link
                      to={withLocale(`/${child.slug}`)}
                      className="group relative flex flex-col h-full p-6 bg-navy-900/40 border border-white/5 rounded-2xl card-hover"
                    >
                      <div className="w-11 h-11 mb-5 bg-navy-800 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:border-accent-500/40 group-hover:bg-accent-500/10 transition-all">
                        {ChildIcon && <ChildIcon className="w-5 h-5 text-accent-400" />}
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2 text-white">{childContent.name}</h3>
                      <p className="text-sm text-navy-300 leading-relaxed mb-5 flex-1">{childContent.tagline}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                        {t.viewDetails}
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* What we migrate */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 overflow-hidden ${band('whatWeMigrate')}`}>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-500/5 blur-[150px] rounded-full -translate-y-1/2" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.fullScope}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.fullScopeHeading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {c.whatWeMigrate.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 10) * 0.04 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <span className="text-sm text-navy-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 ${band('features')}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.included}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.includedHeading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.features.map((feature, i) => {
              const Icon = ICONS[feature.icon as IconName];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group p-6 bg-navy-900/40 border border-white/5 rounded-2xl card-hover"
                >
                  <div className="w-11 h-11 mb-5 bg-navy-800 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:border-accent-500/40 transition-colors">
                    {Icon && <Icon className="w-5 h-5 text-accent-400" />}
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 overflow-hidden ${band('process')}`}>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-500/5 blur-[180px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.howItWorks}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.processHeading(c.name)}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {c.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-12 h-12 shrink-0">
                    <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-md" />
                    <div className="relative w-12 h-12 bg-navy-800 border border-accent-500/30 rounded-full flex items-center justify-center">
                      <span className="font-mono text-xs font-semibold text-accent-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  {i < c.process.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-accent-500/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold mb-1.5 text-white">{step.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 ${band('comparison')}`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.difference}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.differenceHeading}
            </h2>
          </motion.div>

          <div className="hidden md:grid grid-cols-[1fr_1.2fr_1.2fr] gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            <div className="bg-navy-950 p-5" />
            <div className="bg-navy-950 p-5">
              <span className="text-xs font-mono tracking-wider text-navy-400">{t.diy}</span>
            </div>
            <div className="bg-navy-900/60 p-5">
              <span className="text-xs font-mono tracking-wider text-accent-400">{t.withUs}</span>
            </div>
            {c.comparison.map((row) => (
              <Fragment key={row.aspect}>
                <div className="bg-navy-950 p-5 flex items-center">
                  <span className="text-sm font-medium text-white">{row.aspect}</span>
                </div>
                <div className="bg-navy-950 p-5 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-navy-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-400 leading-relaxed">{row.withoutUs}</span>
                </div>
                <div className="bg-navy-900/60 p-5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-200 leading-relaxed">{row.withUs}</span>
                </div>
              </Fragment>
            ))}
          </div>

          {/* Mobile stacked comparison */}
          <div className="md:hidden space-y-4">
            {c.comparison.map((row) => (
              <div key={row.aspect} className="p-5 bg-navy-900/40 border border-white/5 rounded-xl">
                <h4 className="text-sm font-semibold text-white mb-3">{row.aspect}</h4>
                <div className="flex items-start gap-2.5 mb-2.5">
                  <XCircle className="w-4 h-4 text-navy-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-400 leading-relaxed">{row.withoutUs}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-200 leading-relaxed">{row.withUs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 overflow-hidden ${band('testimonials')}`}>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 blur-[160px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.testimonials}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.testimonialsHeading}
            </h2>
          </motion.div>

          <TestimonialCarousel testimonials={c.testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 ${band('faq')}`}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.faq}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              {t.faqHeading(c.name)}
            </h2>
          </motion.div>

          <FaqAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* Related services — crosslinks every migration page to the others, so link
          equity flows between them instead of dead-ending on whichever page a visitor
          or crawler landed on. */}
      {related.length > 0 && (
        <section className={`relative py-20 md:py-28 border-t border-white/5 ${band('faq') === ALT_BAND ? '' : ALT_BAND}`}>
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mb-10"
            >
              <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.relatedEyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {t.relatedHeading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((rs, i) => {
                const rc = localeContent(rs, locale);
                const Icon = ICONS[rs.icon as IconName];
                return (
                  <motion.div
                    key={rs.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <Link
                      to={withLocale(`/${rs.slug}`)}
                      className="group relative flex flex-col h-full p-6 bg-navy-900/40 border border-white/5 rounded-2xl card-hover"
                    >
                      <div className="w-11 h-11 mb-5 bg-navy-800 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:border-accent-500/40 transition-colors">
                        {Icon && <Icon className="w-5 h-5 text-accent-400" />}
                      </div>
                      <h3 className="font-display text-base font-semibold mb-2 text-white">{rc.name}</h3>
                      <p className="text-sm text-navy-300 leading-relaxed mb-4 flex-1">{rc.tagline}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                        {t.learnMore}
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA banner */}
      <section className={`relative py-20 md:py-28 border-t border-white/5 overflow-hidden ${band('finalCta')}`}>
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
            {c.ctaHeadline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-navy-200 max-w-xl mx-auto"
          >
            {c.ctaSubtext}
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
              {t.finalCta}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
