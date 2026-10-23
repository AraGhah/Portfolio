import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';
import styles from './CaseStudy.module.css';

export function CaseStudyBody({ project }: { project: Project }) {
  const t = useTranslations('caseStudy');
  return (
    <article className={styles.body}>
      {project.sections.map((section, index) => (
        <section key={section.heading}>
          <span className={styles.sectionIndex} aria-hidden>{String(index + 1).padStart(2, '0')}</span>
          <h2>{section.heading}</h2>
          {section.body.split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </section>
      ))}
      {project.result && <aside className={styles.result}><h2>{t('result')}</h2><p>{project.result}</p></aside>}
      {project.statusNote && <section><h2>{t('currentStatus')}</h2><p>{project.statusNote}</p></section>}
    </article>
  );
}
