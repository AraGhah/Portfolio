'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './Nav.module.css';

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const languageHref = `/${locale === 'en' ? 'fr' : 'en'}${pathname === '/' ? '' : pathname}`;
  const links = ['hall', 'about', 'contact'] as const;

  return (
    <>
      <a href="#main" className="skip-link">{t('skipToHall')}</a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.home} aria-label="Ara Ghahramanyan">
            <span className={styles.mark} aria-hidden>ag<span>.</span></span>
          </Link>
          <nav aria-label={t('primary')} className={styles.nav}>
            {links.map((id) => (
              <Link key={id} href={pathname === '/' ? `#${id}` : `/#${id}`} className={styles.link}>
                {t(id)}
              </Link>
            ))}
            <span className={styles.divider} aria-hidden />
            <a href={languageHref}
              hrefLang={locale === 'en' ? 'fr' : 'en'} lang={locale === 'en' ? 'fr' : 'en'}
              aria-label={t('languageToggle')} className={styles.language}>
              {locale === 'en' ? 'FR' : 'EN'}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
