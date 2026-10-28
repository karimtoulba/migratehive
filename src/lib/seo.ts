export const SITE_URL = 'https://migratehive.com';
export const SITE_NAME = 'MigrateHive';

export function absoluteUrl(path: string): string {
  const normalized = path === '/' ? '' : path;
  return `${SITE_URL}${normalized}`;
}

interface FaqLike {
  question: string;
  answer: string;
}

export function faqPageJsonLd(faqs: FaqLike[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
