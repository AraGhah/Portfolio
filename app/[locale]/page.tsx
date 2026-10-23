import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/hero/Hero';
import { Hall } from '@/components/hall/Hall';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { pageMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return pageMetadata(locale, t('title'), t('description'));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <Nav />
      <div className="main-shell">
        <main id="main" tabIndex={-1}>
          <Reveal><Hero /></Reveal>
          <Reveal><Hall /></Reveal>
          <Reveal><About /></Reveal>
          <Reveal><Experience /></Reveal>
          <Reveal><Skills /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}
