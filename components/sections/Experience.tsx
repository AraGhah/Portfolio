'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Experience() {
  const t = useTranslations('experience');
  const education = t.raw('educationItems') as string[];
  const work = t.raw('workItems') as string[];

  return (
    <section id="experience" className="section-block section-block--raised" aria-labelledby="experience-heading">
      <div className="container-content">
        <ScrollReveal>
          <h2
            id="experience-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-h2)',
              lineHeight: 1.02,
              color: 'var(--ink)',
              margin: '0 0 48px',
            }}
          >
            {t('title')}
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gap: 48, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <ScrollReveal delay={0.1}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-label)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-label)',
                  margin: '0 0 20px',
                }}
              >
                {t('education')}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {education.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 'var(--t-body-sm)',
                      lineHeight: 1.65,
                      color: 'var(--ink-muted)',
                      marginBottom: 16,
                      paddingLeft: 16,
                      borderLeft: '2px solid var(--acc-20)',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-label)',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-label)',
                  margin: '0 0 20px',
                }}
              >
                {t('work')}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {work.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 'var(--t-body-sm)',
                      lineHeight: 1.65,
                      color: 'var(--ink-muted)',
                      marginBottom: 16,
                      paddingLeft: 16,
                      borderLeft: '2px solid var(--acc-20)',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
