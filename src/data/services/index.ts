import { ServiceContent, ServiceLocaleContent } from './types';
import { Locale } from '@/context/LanguageContext';
import { cloudEmailMigration } from './cloud-email-migration';
import { googleWorkspaceMigration } from './google-workspace-migration';
import { microsoft365Migration } from './microsoft-365-migration';
import { zohoMigration } from './zoho-migration';
import { imapEmailMigration } from './imap-email-migration';

export * from './types';

export const SERVICES: ServiceContent[] = [
  cloudEmailMigration,
  googleWorkspaceMigration,
  microsoft365Migration,
  zohoMigration,
  imapEmailMigration,
];

export const SERVICES_BY_SLUG: Record<string, ServiceContent> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service])
);

// Top-level services shown in primary navigation and the homepage grid.
export const NAV_SERVICES: ServiceContent[] = SERVICES.filter((s) => !s.parentSlug);

// Cloud Email Migration's four platform-specific pages.
export const CLOUD_EMAIL_CHILDREN: ServiceContent[] = SERVICES.filter(
  (s) => s.parentSlug === 'cloud-email-migration'
);

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getRelatedServices(service: ServiceContent): ServiceContent[] {
  return service.relatedSlugs
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter((s): s is ServiceContent => Boolean(s));
}

export function localeContent(service: ServiceContent, locale: Locale): ServiceLocaleContent {
  return service[locale];
}
