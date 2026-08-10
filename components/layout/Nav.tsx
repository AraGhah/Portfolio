'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { profile } from '@/content/profile';

const links = [
  { href: '/#hall', key: 'hall' as const },
  { href: '/#about', key: 'about' as const },
  { href: '/#skills', key: 'skills' as const },
  { href: '/#experience', key: 'experience' as const },
  { href: '/#contact', key: 'contact' as const },
];

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = locale === 'en' ? 'fr' : 'en';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 70,
        backdropFilter: 'blur(14px)',
        background: 'linear-gradient(180deg, rgba(8,9,11,.86), rgba(8,9,11,0))',
        borderBottom: '1px solid var(--line-faint)',
      }}
    >
      <a href="#hall" className="skip-link">
        {t('skipToHall')}
      </a>
      <nav
        aria-label="Primary"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px clamp(20px, 5vw, 48px)',
          maxWidth: 'var(--w-content)',
          margin: '0 auto',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            letterSpacing: '0.06em',
            color: 'var(--ink)',
          }}
        >
          {profile.name.split(' ')[0]}
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(12px, 2vw, 28px)',
            flexWrap: 'wrap',
          }}
        >
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href.replace(/^\//, '')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--t-mono-nav)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: link.key === 'contact' ? 'var(--acc)' : 'var(--ink-label)',
                borderBottom:
                  link.key === 'contact' ? '1px solid var(--acc-42)' : 'none',
                paddingBottom: link.key === 'contact' ? 2 : 0,
                transition: 'color 350ms',
              }}
            >
              {t(link.key)}
            </a>
          ))}
          <Link
            href={pathname}
            locale={switchLocale}
            aria-label={t('languageToggle')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-nav)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              border: '1px solid var(--line)',
              padding: '8px 12px',
            }}
          >
            {t('languageTarget')}
          </Link>
        </div>
      </nav>
    </header>
  );
}
