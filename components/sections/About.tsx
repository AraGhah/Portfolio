import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/motion/Reveal';
import styles from './About.module.css';

export function About() {
  const t = useTranslations('about');
  return (
    <section id="about" className="section-block" aria-labelledby="about-heading">
      <div className="container-content">
        <Reveal><div className="section-heading"><h2 id="about-heading">{t('title')}</h2></div></Reveal>
        <div className={styles.grid}>
          <Reveal className={styles.copy}><p>{t('p1')}</p><p>{t('p2')}</p><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">{t('link')} ↗</a></Reveal>
          <Reveal delay={90} className={styles.interests}><h3>{t('offline')}</h3><ul>{(t.raw('interests') as string[]).map((interest) => <li key={interest}>{interest}</li>)}</ul></Reveal>
        </div>
      </div>
    </section>
  );
}
