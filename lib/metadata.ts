import type { Metadata } from 'next';
import { profile } from '@/content/profile';

export function pageMetadata(locale: string, title: string, description: string, path = ''): Metadata {
  const englishPath = path || '/';
  const frenchPath = `/fr${path}`;
  const url = locale === 'fr' ? frenchPath : englishPath;
  const image = { url: '/ara.jpg', width: 1254, height: 1254, alt: profile.name };
  return {
    metadataBase: new URL(profile.siteUrl),
    title,
    description,
    alternates: { canonical: url, languages: { en: englishPath, fr: frenchPath, 'x-default': englishPath } },
    openGraph: { type: 'website', title, description, url, siteName: profile.name, locale: locale === 'fr' ? 'fr_CA' : 'en_CA', alternateLocale: locale === 'fr' ? 'en_CA' : 'fr_CA', images: [image] },
    twitter: { card: 'summary', title, description, images: [image.url] },
  };
}
