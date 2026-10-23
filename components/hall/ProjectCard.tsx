'use client';

import { useTranslations } from 'next-intl';
import { ComplexityMeter } from './ComplexityMeter';
import type { Project } from '@/lib/types';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  onOpen: (slug: string) => void;
};

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const t = useTranslations('hall');
  const tStatus = useTranslations('status');

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.cardButton}
        onClick={() => onOpen(project.slug)}
        aria-label={t('doorAria', { title: project.title })}
      >
        <div className={styles.cardHead}>
          <span className={styles.index}>{project.doorNumber}</span>
          <span className={`${styles.status} ${project.status === 'Live' ? styles.statusLive : ''}`}>
            {project.status === 'Live' ? <span className={styles.statusDot} aria-hidden /> : null}
            {tStatus(project.status)}
          </span>
        </div>

        <ComplexityMeter value={project.complexity} className={styles.meter} />

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.preview}</p>

        <ul className={styles.stack}>
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech} className={styles.tech}>
              {tech}
            </li>
          ))}
        </ul>
      </button>

      {project.links.length ? (
        <div className={styles.links}>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
