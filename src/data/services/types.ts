export interface ServicePainPoint {
  title: string;
  description: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceComparisonRow {
  aspect: string;
  withoutUs: string;
  withUs: string;
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServicePricing {
  /** Base one-time migration fee in USD. */
  amount: number;
  /** Additional per-mailbox fee in USD, for email migrations. */
  perEmail?: number;
}

/** Everything about a service that differs between English and Arabic. */
export interface ServiceLocaleContent {
  name: string;
  shortName: string;
  /** Short override for compact list contexts (nav dropdown, footer). Falls back to `name`. */
  navLabel?: string;
  tagline: string;
  /** Keyword-rich <title> tag text, without the " | MigrateHive" suffix. Distinct from
   *  `name` (used in on-page headings/breadcrumbs) since a strong SEO title usually
   *  needs more specificity/value-prop than a clean UI heading. */
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  heroStats: ServiceStat[];
  painPoints: ServicePainPoint[];
  whatWeMigrate: string[];
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  comparison: ServiceComparisonRow[];
  testimonials: ServiceTestimonial[];
  faqs: ServiceFaq[];
  ctaHeadline: string;
  ctaSubtext: string;
}

export interface ServiceContent {
  slug: string;
  icon: string;
  parentSlug?: string;
  pricing: ServicePricing;
  relatedSlugs: string[];
  en: ServiceLocaleContent;
  ar: ServiceLocaleContent;
}
