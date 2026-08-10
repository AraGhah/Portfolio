'use client';

import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';
import { ComplexityMeter } from './ComplexityMeter';

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const t = useTranslations('caseStudy');
  const tStatus = useTranslations('status');

  return (
    <header style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '16px 24px',
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--t-mono-label)',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--ink-label)',
          }}
        >
          {t('door')} {project.doorNumber}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-meta)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-label)',
            }}
          >
            {t('complexity')}
          </span>
          <ComplexityMeter
            value={project.complexity}
            label={`${t('complexity')} ${project.complexity}/5`}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-meta)',
              color: 'var(--acc)',
            }}
          >
            {String(project.complexity).padStart(2, '0')}/05
          </span>
        </div>
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--t-project)',
          lineHeight: 0.94,
          fontWeight: 400,
          color: 'var(--ink)',
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}
      >
        {project.title}
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--t-mono-role)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          margin: '0 0 20px',
        }}
      >
        {project.type}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--t-tagline)',
          lineHeight: 1.6,
          color: 'var(--ink-body)',
          maxWidth: '52rem',
          margin: '0 0 28px',
        }}
      >
        {project.tagline}
      </p>

      {project.links.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
          {project.links.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            const chipStyle = {
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-nav)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
              padding: '10px 18px',
              border: `1px solid ${link.primary ? 'rgba(201,164,101,.5)' : 'var(--line)'}`,
              background: link.primary ? 'var(--acc-12)' : 'transparent',
              color: link.primary ? 'var(--acc)' : 'var(--ink-label)',
              textDecoration: 'none',
              transition: 'border-color 400ms, background 400ms',
            };

            if (!isExternal) {
              return (
                <span key={link.label + link.href} style={chipStyle}>
                  {link.label}
                </span>
              );
            }

            return (
              <a
                key={link.label + link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...chipStyle,
                  color: link.primary ? 'var(--acc)' : 'var(--ink-muted)',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <dl
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '20px 32px',
          margin: 0,
          padding: '24px 0 0',
          borderTop: '1px solid var(--line-faint)',
        }}
      >
        {project.meta.map(([key, val]) => (
          <div key={key}>
            <dt
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--t-mono-meta)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ink-label)',
                marginBottom: 6,
              }}
            >
              {key}
            </dt>
            <dd
              style={{
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--t-body-sm)',
                color: 'var(--ink-muted)',
              }}
            >
              {key === 'Status' || key === 'Statut'
                ? tStatus(val as 'Delivered' | 'Live' | 'In development' | 'Livré' | 'En ligne' | 'En développement')
                : val}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
