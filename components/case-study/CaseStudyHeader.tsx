import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';
import styles from './CaseStudy.module.css';

export function CaseStudyHeader({ project }: { project: Project }) {
  const t = useTranslations('caseStudy');
  const status = useTranslations('status');
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{t('door')} {project.doorNumber} <span aria-hidden> / </span> {status(project.status)}</p>
      <h1 className={styles.title}>{project.title}<span>.</span></h1>
      <p className={styles.type}>{project.type}</p>
      <p className={styles.tagline}>{project.tagline}</p>
      {project.links.length > 0 && (
        <div className={styles.links}>
          {project.links.map((link) => /^https?:\/\//.test(link.href) ? (
            <a key={link.label + link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden>↗</span></a>
          ) : <span key={link.label + link.href} className={styles.unavailable}>{link.label}</span>)}
        </div>
      )}
      <dl className={styles.meta}>
        {project.meta.map(([key, value]) => (
          <div key={key}><dt>{key}</dt><dd>{key === 'Status' || key === 'Statut' ? status(value) : value}</dd></div>
        ))}
      </dl>
    </header>
  );
}
