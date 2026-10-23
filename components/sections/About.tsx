import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import styles from './About.module.css';

export function About() {
  const t = useTranslations('about');
  const interests = t.raw('interests') as string[];
  return (
    <section id="about" className="section-block" aria-labelledby="about-heading">
      <div className="container-content">
        <div className="section-heading"><span className="section-number">02 /</span><h2 id="about-heading">{t('title')}</h2></div>
        <div className={styles.grid}>
          <div className={styles.copy}><p>{t('p1')}</p><p>{t('p2')}</p><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">{t('link')} ↗</a></div>
          <aside className={styles.note}>
            <svg className={styles.flower} viewBox="0 0 80 80" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M40 28C17-3 8 17 28 35-5 26-5 52 28 46 6 69 27 82 38 53 44 86 67 73 50 48 81 62 88 37 55 37 83 18 61 1 46 29 51-6 26-4 40 28Z" />
              <circle cx="41" cy="40" r="8" />
            </svg>
            <h3>{t('offline')}</h3>
            <ul>{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
            <p>{t('note')}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
