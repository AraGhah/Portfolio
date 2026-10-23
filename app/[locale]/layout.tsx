import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { BackToTop } from '@/components/motion/BackToTop';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === 'fr'
      ? 'Ara Ghahramanyan · Ingénieur logiciel'
      : 'Ara Ghahramanyan · Software Engineer';
  return {
    title,
    description:
      locale === 'fr'
        ? 'Portfolio · hall des projets et études de cas.'
        : 'Portfolio · hall of projects and case studies.',
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            {children}
            <BackToTop />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
