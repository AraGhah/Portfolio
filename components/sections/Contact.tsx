'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import styles from './Contact.module.css';

export function Contact() {
  const t = useTranslations('contact');
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copyEmail = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
      timer.current = setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <section id="contact" className="section-block" aria-labelledby="contact-heading">
      <div className="container-content">
        <div className={styles.panel}>
          <div className={styles.top}><span className="section-number">05 /</span><span>{t('intro')}</span><span className={styles.asterisk} aria-hidden>✳</span></div>
          <h2 id="contact-heading" className={styles.title}>{t('title')}</h2>
          <p className={styles.body}>{t('body')}</p>
          <div className={styles.emailRow}>
            <a href={`mailto:${profile.email}`} className={styles.email}>{profile.email}<span aria-hidden>↗</span></a>
            <button className={styles.copy} type="button" onClick={copyEmail}>{copyState === 'copied' ? '✓ ' + t('copied') : t('copyEmail')}</button>
          </div>
          <p className={styles.feedback} role="status">{copyState === 'failed' ? t('copyFailed') : copyState === 'copied' ? t('copied') : ''}</p>
          <div className={styles.bottom}>
            <div className={styles.socials}>
              <a href={profile.github} target="_blank" rel="noreferrer">{t('github')} ↗</a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer">{t('linkedIn')} ↗</a>
              <a href={`tel:+1${profile.phone.replaceAll('-', '')}`}>{t('phone')} ↗</a>
            </div>
            <span className={styles.note}>{t('note')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
