import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  /** Omit on the current (last) page — it renders as plain text, not a link. */
  href?: string;
}

const HOME_LABEL = { en: 'Home', ar: 'الرئيسية' };

/**
 * Visible, crawlable breadcrumb trail. Every page listing itself links back to Home
 * (and, for service pages, to the parent hub) with descriptive anchor text — unlike
 * breadcrumbJsonLd (structured data only, no real <a> tags), this is what actually
 * passes internal-link equity between pages.
 */
export default function Breadcrumbs({ items, className = '' }: { items: BreadcrumbItem[]; className?: string }) {
  const { locale, withLocale } = useLanguage();
  const all: BreadcrumbItem[] = [{ label: HOME_LABEL[locale], href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-navy-400 flex-wrap">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3 rtl:rotate-180 text-navy-600 shrink-0" />}
              {isLast || !item.href ? (
                <span className="text-navy-300" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={withLocale(item.href)} className="hover:text-accent-400 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
