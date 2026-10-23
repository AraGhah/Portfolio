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
          <div className={styles.copy}><p>{t('p1')}</p><p>{t('p2')}</p><p>{t('p3')}</p><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">{t('link')} ↗</a></div>
          <aside className={styles.note}>
            <h3>{t('offline')}</h3>
            <ul>{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
