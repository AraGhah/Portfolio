import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CaseStudyContent } from '@/components/case-study/CaseStudyContent';
import { getProject, getProjects } from '@/lib/projects';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const locales = routing.locales;
  const slugs = getProjects('en').map((p) => p.slug);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ara Ghahramanyan`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: 'hall' });

  return (
    <>
      <Nav />
      <main
        id="main"
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          maxWidth: 'var(--w-case)',
          margin: '0 auto',
          paddingLeft: 'clamp(20px, 5vw, 48px)',
          paddingRight: 'clamp(20px, 5vw, 48px)',
        }}
      >
        <Link
          href="/#hall"
          style={{
            display: 'inline-block',
            marginBottom: 32,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--t-mono-nav)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--acc)',
          }}
        >
          ← {t('title')}
        </Link>
        <CaseStudyContent project={project} />
      </main>
      <Footer />
    </>
  );
}
