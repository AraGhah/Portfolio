import { useTranslations } from 'next-intl';
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
    </section>
  );
}
