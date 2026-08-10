'use client';

import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import { ScrollReveal } from '@/components/ScrollReveal';

async function forceDownload(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
}

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
              margin: '0 0 32px',
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
                {t('email')} — {profile.email}
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
                {t('phone')} — {profile.phone}
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

        <ScrollReveal delay={0.24}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={profile.resumeEn}
              download="Ara_Ghahramanyan_EN.pdf"
              onClick={(e) => {
                e.preventDefault();
                void forceDownload(profile.resumeEn, 'Ara_Ghahramanyan_EN.pdf');
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--t-mono-nav)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '14px 22px',
                background: 'var(--acc-12)',
                border: '1px solid rgba(201,164,101,.45)',
                color: 'var(--acc)',
                textDecoration: 'none',
              }}
            >
              {t('resumeEn')}
            </a>
            <a
              href={profile.resumeFr}
              download="Ara_Ghahramanyan_FR.pdf"
              onClick={(e) => {
                e.preventDefault();
                void forceDownload(profile.resumeFr, 'Ara_Ghahramanyan_FR.pdf');
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--t-mono-nav)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '14px 22px',
                border: '1px solid var(--line)',
                color: 'var(--ink-muted)',
                textDecoration: 'none',
              }}
            >
              {t('resumeFr')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
