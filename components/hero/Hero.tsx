import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { profile } from '@/content/profile';
import styles from './Hero.module.css';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section aria-labelledby="hero-name" className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{t('eyebrow')}</p>
        <h1 id="hero-name" className={styles.title}>{t('greeting')}<span>.</span></h1>
        <p className={styles.lead}>{t('paragraph')}</p>
        <p className={styles.current}>{t('current')} <a href="https://rundossier.co" target="_blank" rel="noreferrer">{t('currentProject')} ↗</a> {t('currentSuffix')}</p>
        <div className={styles.actions}>
          <a href="#hall" className={styles.primary}>{t('enterHall')} <span aria-hidden>↘</span></a>
          <a href={`mailto:${profile.email}`} className="text-link">{t('hireMe')} <span aria-hidden>↗</span></a>
        </div>
        <p className={styles.available}><span className="status-dot" aria-hidden />{t('available')}</p>
      </div>
      <figure className={styles.portrait}>
        <div className={styles.photoFrame}>
          <span className={styles.tape} aria-hidden />
          <Image src="/ara.jpg" alt="Ara Ghahramanyan" width={480} height={600} priority className={styles.photo} sizes="(max-width: 700px) 160px, 220px" />
          <figcaption>{t('location')} <span aria-hidden>↗</span></figcaption>
        </div>
        <p className={styles.photoNote}>{t('photoNote')}</p>
        <svg className={styles.doodle} viewBox="0 0 100 60" fill="none" aria-hidden>
          <path d="M6 50C45 55 90 42 83 14M75 22l8-10 10 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </figure>
    </section>
  );
}
