'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ScrollReveal';

export function About() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="section-block section-block--raised"
      aria-labelledby="about-heading"
    >
      <div className="container-content about-grid">
        <ScrollReveal>
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <Image
                src="/ara.jpg"
                alt="Ara Ghahramanyan"
                width={640}
                height={800}
                className="about-photo"
                priority={false}
              />
            </div>
            <div className="about-photo-meta">
              <span>Montréal, QC</span>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <h2
              id="about-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--t-h2)',
                lineHeight: 1.02,
                color: 'var(--ink)',
                margin: '14px 0 0',
              }}
            >
              {t('title')}
            </h2>
            <div
              style={{
                height: 1,
                background: 'linear-gradient(90deg, rgba(201,164,101,.5), transparent)',
                margin: '32px 0',
              }}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p
              style={{
                fontSize: 'var(--t-body-sm)',
                lineHeight: 1.75,
                color: 'var(--ink-muted)',
                margin: '0 0 22px',
              }}
            >
              {t('p1')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              style={{
                fontSize: 'var(--t-body-sm)',
                lineHeight: 1.75,
                color: 'var(--ink-dim)',
                margin: '0 0 22px',
              }}
            >
              {t('p2')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              style={{
                fontSize: 'var(--t-body-sm)',
                lineHeight: 1.75,
                color: 'var(--ink-dim)',
                margin: 0,
              }}
            >
              {t('p3')}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
