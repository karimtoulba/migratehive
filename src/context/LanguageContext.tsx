import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Locale = 'en' | 'ar';

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  /** Path to navigate to for the other language, preserving the current page. */
  toggleHref: string;
  /** Prefixes an English path (e.g. "/contact#assessment") with /ar when the current locale is Arabic. */
  withLocale: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function localeFromPath(pathname: string): Locale {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';
}

/** Prefixes an English path with /ar for the given locale, handling "/" and "#hash" correctly. */
export function withLocalePath(path: string, locale: Locale): string {
  if (locale !== 'ar') return path;
  const [base, hash] = path.split('#');
  const prefixedBase = base === '/' || base === '' ? '/ar' : `/ar${base}`;
  return hash ? `${prefixedBase}#${hash}` : prefixedBase;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale = localeFromPath(location.pathname);
  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr';

  const toggleHref =
    locale === 'ar'
      ? location.pathname.replace(/^\/ar/, '') || '/'
      : location.pathname === '/'
      ? '/ar'
      : `/ar${location.pathname}`;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <LanguageContext.Provider value={{ locale, dir, toggleHref, withLocale: (path: string) => withLocalePath(path, locale) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
