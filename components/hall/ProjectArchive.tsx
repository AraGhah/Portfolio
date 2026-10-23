import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Project } from '@/lib/types';
import styles from './ProjectArchive.module.css';

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const t = useTranslations('hall');
  return (
    <details className={styles.archive}>
      <summary className={styles.summary}>
        <span><span className={styles.title}>{t('archive')}</span><span className={styles.count}> / {String(projects.length).padStart(2, '0')}</span></span>
        <span className={styles.toggle} aria-hidden>↗</span>
      </summary>
      <p className={styles.intro}>{t('archiveIntro')}</p>
      <ul className={styles.list}>
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className={styles.row}>
              <span className={styles.index} aria-hidden>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.project}>{project.title}</span>
              <span className={styles.stack}>{project.previewStack}</span>
              <span className={styles.arrow} aria-hidden>↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
