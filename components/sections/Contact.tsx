'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import { RevealHeading } from '@/components/motion/RevealHeading';
import { Magnetic } from '@/components/motion/Magnetic';
import styles from './Contact.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

export function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  const rows = [
    { label: t('email'), value: profile.email, href: `mailto:${profile.email}`, external: false, color: 'var(--c-blue)' },
    { label: t('phone'), value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}`, external: false, color: 'var(--c-steel)' },
    { label: t('linkedIn'), value: 'in/ara-ghahramanyan', href: profile.linkedIn, external: true, color: 'var(--c-sand)' },
  ];

  const facts = [
    { label: t('factRole'), value: t('factRoleValue'), live: true },
    { label: t('factFocus'), value: t('factFocusValue'), live: false },
    { label: t('factBase'), value: t('factBaseValue'), live: false },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className={`section-block section-block--base ${styles.section}`} aria-labelledby="contact-heading">
      <div aria-hidden className={styles.glow} />
      <div className={styles.inner}>
        <RevealHeading
          id="contact-heading"
          className={styles.title}
          segments={[
            { text: t('titleLead') },
            { text: t('titleAccent'), accent: true },
          ]}
          stagger={0.07}
        />

        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          {t('body')}
        </motion.p>

        <motion.dl
          className={styles.facts}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
          }}
        >
          {facts.map((fact) => (
            <motion.div
              key={fact.label}
              className={styles.fact}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <dt className={styles.factLabel}>
                {fact.live ? <span className={styles.factDot} aria-hidden /> : null}
                {fact.label}
              </dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          <Magnetic strength={0.35}>
            <a href={`mailto:${profile.email}`} className={styles.ctaPrimary}>
              <span className={styles.ctaShine} aria-hidden />
              {t('email')}
            </a>
          </Magnetic>
          <button type="button" className={styles.copy} onClick={copyEmail}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'done' : 'idle'}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={styles.copyLabel}
              >
                {copied ? `✓ ${t('copied')}` : t('copyEmail')}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>

        <ul className={styles.rows}>
          {rows.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -5% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 + i * 0.1 }}
            >
              <a
                href={row.href}
                className={styles.row}
                style={{ '--row-color': row.color } as React.CSSProperties}
                {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.rowLabel}>{row.label}</span>
                <span className={styles.rowValue}>{row.value}</span>
                <span className={styles.rowLine} aria-hidden />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
