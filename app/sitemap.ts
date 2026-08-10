import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { projectsEn } from '@/content/projects.en';

const baseUrl = 'https://araghahramanyan.dev';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;

    entries.push({
      url: `${baseUrl}${prefix || '/'}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    });

    for (const project of projectsEn) {
      entries.push({
        url: `${baseUrl}${prefix}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
