'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styles from './motion.module.css';

const RADIUS = 20;

export function BackToTop() {
  const t = useTranslations('footer');
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => {
    setShow(v > window.innerHeight * 0.9);
  });

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          className={styles.backToTop}
          aria-label={t('backToTop')}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden>
            <defs>
              <linearGradient id="back-to-top-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7aa2cf" />
                <stop offset="60%" stopColor="#8e9bb3" />
                <stop offset="100%" stopColor="#c8ab7d" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r={RADIUS} className={styles.ringTrack} />
            <motion.circle
              cx="24"
              cy="24"
              r={RADIUS}
              className={styles.ringProgress}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <span className={styles.backArrow} aria-hidden>
            ↑
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
