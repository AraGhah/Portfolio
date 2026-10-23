import { useLocale, useTranslations } from 'next-intl';
import { getFeaturedProjects, getArchivedProjects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectArchive } from './ProjectArchive';
import styles from './Hall.module.css';

export function Hall() {
  const locale = useLocale();
  const t = useTranslations('hall');
  return (
    <section id="hall" className="section-block" aria-labelledby="hall-heading">
      <div className="container-content">
        <div className={styles.header}>
          <div>
            <div className="section-heading"><span className="section-number">01 /</span><h2 id="hall-heading">{t('title')}</h2></div>
            <p className={styles.intro}>{t('intro')}</p>
          </div>
          <span className={styles.annotation} aria-hidden>Made with a little persistence. ↙</span>
        </div>
        <div className={styles.grid}>
          {getFeaturedProjects(locale).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <ProjectArchive projects={getArchivedProjects(locale)} />
      </div>
    </section>
  );
}
