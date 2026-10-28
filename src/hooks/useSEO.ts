import { useEffect } from 'react';
import { SITE_NAME, absoluteUrl } from '@/lib/seo';
import { useLanguage, withLocalePath } from '@/context/LanguageContext';

interface SEOOptions {
  /** Page title, without the " | MigrateHive" suffix. */
  title: string;
  description: string;
  /** English route path (e.g. "/google-workspace-migration" or "/"). The Arabic
   *  equivalent and hreflang alternates are derived from this automatically. */
  path: string;
  /** One or more JSON-LD structured data objects to inject as <script type="application/ld+json">. */
  jsonLd?: object | object[];
  /** Set true for pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function removeHreflangLinks() {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
}

function setJsonLd(data: object | object[] | undefined) {
  const id = 'page-jsonld';
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function useSEO({ title, description, path, jsonLd, noindex }: SEOOptions) {
  const { locale } = useLanguage();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const enPath = path;
    const arPath = withLocalePath(path, 'ar');
    const currentPath = locale === 'ar' ? arPath : enPath;
    const url = absoluteUrl(currentPath);

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', url);

    // hreflang alternates so search engines understand the English/Arabic pages
    // are the same content in different languages, not duplicates.
    removeHreflangLinks();
    setLink('alternate', absoluteUrl(enPath), 'en');
    setLink('alternate', absoluteUrl(arPath), 'ar');
    setLink('alternate', absoluteUrl(enPath), 'x-default');

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:locale', locale === 'ar' ? 'ar_AR' : 'en_US');

    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    setJsonLd(jsonLd);

    return () => {
      setJsonLd(undefined);
      removeHreflangLinks();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, noindex, locale, JSON.stringify(jsonLd)]);
}
