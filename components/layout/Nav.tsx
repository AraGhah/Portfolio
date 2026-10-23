'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { profile } from '@/content/profile';
import styles from './Nav.module.css';

const links = [
  { id: 'hall', key: 'hall' as const },
  { id: 'experience', key: 'experience' as const },
  { id: 'skills', key: 'skills' as const },
  { id: 'about', key: 'about' as const },
  { id: 'contact', key: 'contact' as const },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.42 7.9 10.95.58.1.79-.25.79-.56v-2.17c-3.22.7-3.9-1.4-3.9-1.4-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.72-1.55-2.57-.29-5.28-1.28-5.28-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.72 5.41-5.3 5.7.42.36.78 1.07.78 2.16v3.2c0 .32.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const switchLocale = locale === 'en' ? 'fr' : 'en';

  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    const onTop = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive(null);
    };
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [isHome]);

  const nameInitial = profile.name.split(' ')[0];

  return (
    <>
      <a href="#hall" className="skip-link">
        {t('skipToHall')}
      </a>

      {/* Desktop fixed sidebar */}
      <header className={styles.sidebar}>
        <div>
          <Link href="/" className={styles.name}>
            <span className={styles.monogram} aria-hidden>
              A
            </span>
            {nameInitial}
          </Link>
          <p className={styles.tagline}>{t('tagline')}</p>
        </div>

        <nav aria-label="Primary" className={styles.sideNav}>
          <ol className={styles.sideLinks}>
            {links.map((link, i) => {
              const isActive = active === link.id;
              return (
                <li key={link.key}>
                  <a
                    href={isHome ? `#${link.id}` : `/${locale}#${link.id}`}
                    className={`${styles.sideLink} ${isActive ? styles.sideLinkActive : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className={styles.sideLinkIndex} aria-hidden>
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {t(link.key)}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className={styles.sideFooter}>
          <div className={styles.social}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.socialLink}>
              <GithubIcon />
            </a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <LinkedInIcon />
            </a>
          </div>
          <Link
            href={pathname}
            locale={switchLocale}
            aria-label={t('languageToggle')}
            className={styles.lang}
          >
            {t('languageTarget')}
          </Link>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className={styles.mobileHeader}>
        <Link href="/" className={styles.name}>
          <span className={styles.monogram} aria-hidden>
            A
          </span>
          {nameInitial}
        </Link>
        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.16, 0.84, 0.28, 1] }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
              }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.key}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <a
                    href={isHome ? `#${link.id}` : `/${locale}#${link.id}`}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.mobileIndex}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {t(link.key)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className={styles.mobileFooter}>
              <div className={styles.mobileSocial}>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
              <Link
                href={pathname}
                locale={switchLocale}
                aria-label={t('languageToggle')}
                className={styles.lang}
              >
                {t('languageTarget')}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
