'use client';

import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';

type HighlightsSidebarProps = {
  project: Project;
};

function Panel({
  title,
  children,
  isFirst,
}: {
  title: string;
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  return (
    <div
      style={{
        padding: '22px 24px',
        background: 'var(--bg-raised)',
        border: '1px solid var(--line)',
        borderTop: isFirst ? '1px solid var(--line)' : 'none',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--t-mono-label)',
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: 'var(--ink-label)',
          margin: '0 0 14px',
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export function HighlightsSidebar({ project }: HighlightsSidebarProps) {
  const t = useTranslations('caseStudy');

  return (
    <aside
      style={{
        position: 'sticky',
        top: 90,
        alignSelf: 'start',
      }}
    >
      <Panel title={t('whyRated')} isFirst>
        <p
          style={{
            fontSize: 'var(--t-body-sm)',
            lineHeight: 1.65,
            color: 'var(--ink-dim)',
            margin: 0,
          }}
        >
          {project.whyRated}
        </p>
      </Panel>

      <Panel title={t('highlights')}>
        <ul
          style={{
            margin: 0,
            padding: '0 0 0 1.1em',
            color: 'var(--ink-muted)',
            fontSize: 'var(--t-body-sm)',
            lineHeight: 1.55,
          }}
        >
          {project.highlights.map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              {item}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={t('stack')}>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {project.stack.map((tech) => (
            <li
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                padding: '6px 10px',
                border: '1px solid var(--line)',
                color: 'var(--ink-muted)',
              }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </Panel>
    </aside>
  );
}
