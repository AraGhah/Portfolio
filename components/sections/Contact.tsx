'use client';

import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="section-block section-block--base" aria-labelledby="contact-heading">
      <div style={{ maxWidth: 'var(--w-contact)', margin: '0 auto', padding: '0 clamp(20px, 7vw, 110px)' }}>
        <ScrollReveal>
          <h2
            id="contact-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-h2-contact)',
              lineHeight: 1.02,
              color: 'var(--ink)',
              margin: '0 0 28px',
            }}
          >
            {t('titleLead')}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--acc)' }}>{t('titleAccent')}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p
            style={{
              fontSize: 'var(--t-lead)',
              lineHeight: 1.68,
              color: 'var(--ink-dim)',
              maxWidth: '36rem',
              margin: '0 0 36px',
            }}
          >
            {t('body')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <li>
              <a
                href={`mailto:${profile.email}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-nav)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--acc)',
                }}
              >
                {t('email')}: {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/-/g, '')}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-nav)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                }}
              >
                {t('phone')}: {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--t-mono-nav)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                }}
              >
                {t('linkedIn')}
              </a>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
