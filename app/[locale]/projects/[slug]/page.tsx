import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CaseStudyContent } from '@/components/case-study/CaseStudyContent';
import { getProject, getProjects, getFeaturedProjects, getArchivedProjects } from '@/lib/projects';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from '@/components/case-study/CaseStudy.module.css';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  if (!project) return {};
  return { title: `${project.title} · Ara Ghahramanyan`, description: project.tagline };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(locale, slug);
  if (!project) notFound();
  const t = await getTranslations({ locale, namespace: 'caseStudy' });
  const projects = [...getFeaturedProjects(locale), ...getArchivedProjects(locale)];
  const next = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main" className={styles.page}>
        <Link href="/#hall" className={styles.back}><span aria-hidden>←</span> {t('back')}</Link>
        <CaseStudyContent project={project} />
        <nav className={styles.projectNav} aria-label={t('projectNav')}>
          <Link href="/#hall" className="text-link">← {t('back')}</Link>
          <Link href={`/projects/${next.slug}`} className={styles.next}>
            <span>{t('next')}</span><strong>{next.title} ↗</strong>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
