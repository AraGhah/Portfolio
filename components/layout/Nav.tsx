'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
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

const desktopLinks = links.filter((l) => l.key !== 'contact');

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const switchLocale = locale === 'en' ? 'fr' : 'en';

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    if (menuOpen) return;
    if (y > 320 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y <= 320) setHidden(false);
  });

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

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -90 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <a href="#hall" className="skip-link">
        {t('skipToHall')}
      </a>
      <nav aria-label="Primary" className={styles.nav}>
        <Link href="/" className={styles.name}>
          <span className={styles.monogram} aria-hidden>
            A
          </span>
          {profile.name.split(' ')[0]}
        </Link>

        <div className={styles.right}>
          <ul className={styles.links}>
            {desktopLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.key}>
                  <a
                    href={isHome ? `#${link.id}` : `/${locale}#${link.id}`}
                    className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {t(link.key)}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className={styles.activeBar}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <Link
            href={pathname}
            locale={switchLocale}
            aria-label={t('languageToggle')}
            className={styles.lang}
          >
            {t('languageTarget')}
          </Link>
          <motion.a
            href={isHome ? '#contact' : `/${locale}#contact`}
            className={`${styles.cta} ${active === 'contact' ? styles.ctaActive : ''}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className={styles.ctaDot} aria-hidden />
            {t('cta')}
          </motion.a>
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
        </div>
      </nav>
      <motion.div
        aria-hidden
        className={styles.progress}
        style={{ scaleX: progress }}
      />
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
