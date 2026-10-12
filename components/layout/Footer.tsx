'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <motion.span
        aria-hidden
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 0.84, 0.28, 1] }}
      />
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className={`${styles.name} text-gradient`}>{profile.name}</span>
        <span className={styles.meta}>{t('tagline')}</span>
        <p className={styles.copyright}>{t('copyright', { year })}</p>
      </motion.div>
    </footer>
  );
}
