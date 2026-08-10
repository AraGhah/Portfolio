'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--line-faint)',
        padding: '32px clamp(20px, 7vw, 110px)',
        background: 'var(--bg-raised)',
      }}
    >
      <p
        style={{
          margin: 0,
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--t-mono-nav)',
          letterSpacing: '0.16em',
          color: 'var(--ink-label)',
        }}
      >
        {t('copyright', { year })}
      </p>
    </footer>
  );
}
