import { Link } from 'react-router-dom';
import { CLOUD_EMAIL_CHILDREN, localeContent } from '@/data/services';
import Logo from '@/components/Logo';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    tagline: 'Specialist business email migration company. We move your mailboxes safely, with zero message loss and minimal downtime.',
    platforms: 'Platforms',
    company: 'Company',
    getInTouch: 'Get in touch',
    hours: 'Mon-Fri, 9am-6pm GMT',
    startAssessment: 'Start an assessment →',
    copyright: 'MigrateHive. Specialist email migration services.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    companyLinks: [
      { label: 'Pricing', href: '/cloud-email-migration' },
      { label: 'About', href: '/about' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  ar: {
    tagline: 'شركة متخصصة في نقل البريد الإلكتروني للأعمال. ننقل صناديق بريدكم بأمان، بصفر فقدان للرسائل وأقل توقف ممكن.',
    platforms: 'المنصات',
    company: 'الشركة',
    getInTouch: 'تواصل معنا',
    hours: 'الإثنين-الجمعة، 9ص-6م بتوقيت غرينتش',
    startAssessment: '← ابدأ تقييمًا',
    copyright: 'MigrateHive. خدمات متخصصة لنقل البريد الإلكتروني.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    companyLinks: [
      { label: 'الأسعار', href: '/cloud-email-migration' },
      { label: 'عنّا', href: '/about' },
      { label: 'الأسئلة الشائعة', href: '/faqs' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
  },
};

export default function Footer() {
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 mb-10">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-navy-300 leading-relaxed max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.platforms}</h4>
            <ul className="space-y-2.5">
              {CLOUD_EMAIL_CHILDREN.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={withLocale(`/${service.slug}`)}
                    className="text-sm text-navy-300 hover:text-white transition-colors text-start"
                  >
                    {localeContent(service, locale).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.company}</h4>
            <ul className="space-y-2.5">
              {t.companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={withLocale(item.href)}
                    className="text-sm text-navy-300 hover:text-white transition-colors text-start"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.getInTouch}</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-navy-300">{t.hours}</li>
              <li>
                <Link
                  to={withLocale('/contact#assessment')}
                  className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
                >
                  {t.startAssessment}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link to={withLocale('/privacy-policy')} className="text-xs text-navy-400 hover:text-navy-200 transition-colors">{t.privacy}</Link>
            <Link to={withLocale('/terms-of-service')} className="text-xs text-navy-400 hover:text-navy-200 transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
