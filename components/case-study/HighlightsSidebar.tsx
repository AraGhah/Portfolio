import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';
import styles from './CaseStudy.module.css';

export function HighlightsSidebar({ project }: { project: Project }) {
  const t = useTranslations('caseStudy');
  return (
    <aside className={styles.notes}>
      <section><h2>{t('whyRated')}</h2><p>{project.whyRated}</p></section>
      <section><h2>{t('highlights')}</h2><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>{t('stack')}</h2><p className={styles.tools}>{project.stack.join(' / ')}</p></section>
    </aside>
  );
}
