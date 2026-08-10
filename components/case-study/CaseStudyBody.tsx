'use client';

import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';

type CaseStudyBodyProps = {
  project: Project;
};

export function CaseStudyBody({ project }: CaseStudyBodyProps) {
  const t = useTranslations('caseStudy');

  return (
    <article>
      {project.sections.map((section) => {
        return (
          <section key={section.heading} style={{ marginBottom: 'clamp(36px, 4vw, 52px)' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--t-section)',
                fontWeight: 400,
                color: 'var(--ink)',
                margin: '0 0 16px',
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                fontSize: 'var(--t-body)',
                lineHeight: 1.78,
                color: 'var(--ink-dim)',
                margin: 0,
              }}
            >
              {section.body}
            </p>
          </section>
        );
      })}

      {project.result && (
        <aside
          style={{
            marginTop: 48,
            padding: '28px 32px',
            background: 'var(--acc-06)',
            border: '1px solid var(--acc-20)',
            borderLeft: '3px solid var(--acc)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-label)',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--acc)',
              margin: '0 0 12px',
            }}
          >
            {t('result')}
          </h2>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 1.78,
              color: 'var(--ink-body)',
              margin: 0,
            }}
          >
            {project.result}
          </p>
        </aside>
      )}

      {project.statusNote && (
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-section)',
              fontWeight: 400,
              color: 'var(--ink)',
              margin: '0 0 16px',
            }}
          >
            {t('currentStatus')}
          </h2>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 1.78,
              color: 'var(--ink-dim)',
              margin: 0,
            }}
          >
            {project.statusNote}
          </p>
        </section>
      )}
    </article>
  );
}
