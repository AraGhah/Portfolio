'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './Nav.module.css';

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const languageHref = `/${locale === 'en' ? 'fr' : 'en'}${pathname === '/' ? '' : pathname}`;
  const links = ['tradecatch', 'hall', 'contact'] as const;
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setActive(current.target.id);
    }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    ['tradecatch', 'hall', 'about', 'experience', 'skills', 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    const onScroll = () => { if (window.scrollY < 80) setActive(''); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [pathname]);

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
              <Link key={id} href={pathname === '/' ? `#${id}` : `/#${id}`} className={`${styles.link} ${pathname === '/' && active === id ? styles.active : ''}`} aria-current={pathname === '/' && active === id ? 'location' : undefined}>
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
