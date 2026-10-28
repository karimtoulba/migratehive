import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    eyebrow: '404',
    heading: "This page didn't make the move.",
    sub: "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
    cta: 'Back to Homepage',
  },
  ar: {
    title: 'الصفحة غير موجودة',
    description: 'الصفحة التي تبحث عنها غير موجودة.',
    eyebrow: '404',
    heading: 'هذه الصفحة لم تنتقل معنا.',
    sub: 'الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها. دعنا نعيدك إلى المسار الصحيح.',
    cta: 'العودة إلى الصفحة الرئيسية',
  },
};

export default function NotFoundPage() {
  const { pathname } = useLocation();
  const { locale, withLocale } = useLanguage();
  const t = COPY[locale];
  // useSEO expects an English-canonical path and derives the Arabic one itself, so
  // strip any /ar prefix the actual (unmatched) URL might already carry.
  const enPath = pathname.startsWith('/ar') ? pathname.replace(/^\/ar/, '') || '/' : pathname;

  useSEO({
    title: t.title,
    description: t.description,
    path: enPath,
    noindex: true,
  });

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative max-w-lg mx-auto px-6 text-center">
        <div className="relative w-14 h-14 mb-6 mx-auto">
          <div className="absolute inset-0 bg-accent-500/20 rounded-2xl blur-md" />
          <div className="relative w-14 h-14 bg-navy-800 border border-accent-500/30 rounded-2xl flex items-center justify-center">
            <Compass className="w-7 h-7 text-accent-400" />
          </div>
        </div>
        <p className="text-sm font-mono text-accent-400 tracking-wider mb-3">{t.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          {t.heading}
        </h1>
        <p className="mt-4 text-navy-300 leading-relaxed">
          {t.sub}
        </p>
        <Link
          to={withLocale('/')}
          className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-black font-semibold rounded-xl transition-all hover:shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]"
        >
          {t.cta}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
