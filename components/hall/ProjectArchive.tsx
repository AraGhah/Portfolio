'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CategoryFilter, type CategoryFilterValue } from './CategoryFilter';
import { Link } from '@/i18n/navigation';
import type { Project } from '@/lib/types';
import styles from './ProjectArchive.module.css';

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const t = useTranslations('hall');
  const [category, setCategory] = useState<CategoryFilterValue>('all');
  const visible = projects.filter((project) => category === 'all' || project.category === category);
  return (
    <details className={styles.archive}>
      <summary className={styles.summary}>
        <span><span className={styles.title}>{t('archive')}</span><span className={styles.count}> / {String(projects.length).padStart(2, '0')}</span></span>
        <span className={styles.toggle} aria-hidden>↗</span>
      </summary>
      <p className={styles.intro}>{t('archiveIntro')}</p>
      <div className={styles.toolbar}>
        <CategoryFilter activeCategory={category} onChange={setCategory} />
        <span className={styles.resultCount} role="status">{t('projectCount', { count: visible.length })}</span>
      </div>
      <ul className={styles.list}>
        {visible.map((project, index) => (
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
      {visible.length === 0 && <p className={styles.intro}>{t('empty')} <button type="button" onClick={() => setCategory('all')} className="text-link">{t('reset')}</button></p>}
    </details>
  );
}
