import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getProjectNote } from '@/content/featured';
import type { Project } from '@/lib/types';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('hall');
  const locale = useLocale();
  const note = getProjectNote(locale, project.slug);
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.stack}>{project.previewStack}</p>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className={styles.description}>{note?.summary ?? project.preview}</p>
      </div>
      <Link href={`/projects/${project.slug}`} className={styles.story} aria-label={t('doorAria',{title:project.title})}>{t('caseStudy')}<span aria-hidden>↗</span></Link>
    </article>
  );
}
