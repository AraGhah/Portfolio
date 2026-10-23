import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getProjectNote } from '@/content/featured';
import type { Project } from '@/lib/types';
import { ProjectVisual } from './ProjectVisual';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('hall');
  const status = useTranslations('status');
  const locale = useLocale();
  const note = getProjectNote(locale, project.slug);

  return (
    <article className={styles.card}>
      <Link href={`/projects/${project.slug}`} className={styles.visualLink} aria-label={t('doorAria', { title: project.title })}>
        <ProjectVisual slug={project.slug} />
      </Link>
      <div className={styles.heading}>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <span className={styles.status}>{project.status === 'Live' && <span className="status-dot" aria-hidden />}{status(project.status)}</span>
      </div>
      <p className={styles.description}>{note?.summary ?? project.preview}</p>
      <p className={styles.contribution}>{note?.contribution ?? project.previewStack}</p>
      <Link href={`/projects/${project.slug}`} className={styles.story}>{t('caseStudy')} <span aria-hidden>↗</span></Link>
    </article>
  );
}
