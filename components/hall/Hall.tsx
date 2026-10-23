import { useLocale, useTranslations } from 'next-intl';
import { getFeaturedProjects, getArchivedProjects } from '@/lib/projects';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectCard } from './ProjectCard';
import { ProjectArchive } from './ProjectArchive';
import styles from './Hall.module.css';

export function Hall() {
  const locale = useLocale();
  const t = useTranslations('hall');
  return (
    <section id="hall" className="section-block" aria-labelledby="hall-heading">
      <div className="container-content">
        <Reveal><div className={styles.header}><h2 id="hall-heading">{t('title')}</h2><p>{t('intro')}</p></div></Reveal>
        <div className={styles.projects}>
          {getFeaturedProjects(locale).filter((project) => project.slug !== 'trade-catch').map((project, index) =>
            <Reveal key={project.slug} delay={index * 80}><ProjectCard project={project} /></Reveal>)}
        </div>
        <Reveal><ProjectArchive projects={getArchivedProjects(locale)} /></Reveal>
      </div>
    </section>
  );
}
