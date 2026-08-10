'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ScrollReveal';

const skillBlocks = [
  { titleKey: 'backend', itemsKey: 'backendItems' },
  { titleKey: 'data', itemsKey: 'dataItems' },
  { titleKey: 'frontend', itemsKey: 'frontendItems' },
  { titleKey: 'cloud', itemsKey: 'cloudItems' },
] as const;

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="section-block section-block--base" aria-labelledby="skills-heading">
      <div className="container-content">
        <ScrollReveal>
          <h2
            id="skills-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-h2)',
              lineHeight: 1.02,
              color: 'var(--ink)',
              margin: '0 0 40px',
            }}
          >
            {t('title')}
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(28px, 4vw, 40px)',
          }}
        >
          {skillBlocks.map((block, i) => (
            <ScrollReveal key={block.titleKey} delay={0.08 * i}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--t-mono-label)',
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    color: 'var(--acc)',
                    margin: '0 0 12px',
                  }}
                >
                  {t(block.titleKey)}
                </h3>
                <p style={{ fontSize: 'var(--t-body-sm)', lineHeight: 1.65, color: 'var(--ink-muted)', margin: 0 }}>
                  {t(block.itemsKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.35}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-label)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--acc)',
                  margin: '0 0 12px',
                }}
              >
                {t('certifications')}
              </h3>
              <p style={{ fontSize: 'var(--t-body-sm)', lineHeight: 1.65, color: 'var(--ink-muted)', margin: 0 }}>
                {t('certItems')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
