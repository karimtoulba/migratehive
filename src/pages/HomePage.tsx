import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { useSEO } from '@/hooks/useSEO';
import { SITE_URL } from '@/lib/seo';
import { useLanguage } from '@/context/LanguageContext';

const COPY = {
  en: {
    title: 'Business Email Migration Services – Zero Data Loss',
    description:
      'Professional business email migrations to Google Workspace, Microsoft 365, Zoho, or any IMAP platform — zero message loss, minimal downtime. Move your inbox, not your headaches.',
  },
  ar: {
    title: 'خدمات نقل البريد الإلكتروني للأعمال – بدون فقدان بيانات',
    description:
      'نقل احترافي للبريد الإلكتروني للأعمال إلى Google Workspace أو Microsoft 365 أو Zoho أو أي منصة تدعم IMAP — صفر فقدان للرسائل وأقل توقف ممكن. انقل بريدك لا متاعبك.',
  },
};

export default function HomePage() {
  const { locale } = useLanguage();
  const t = COPY[locale];

  useSEO({
    title: t.title,
    description: t.description,
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MigrateHive',
      url: SITE_URL,
      inLanguage: locale,
    },
  });

  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <HowItWorks />
      <WhyUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
