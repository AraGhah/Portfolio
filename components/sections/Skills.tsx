import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import styles from './Skills.module.css';

const groups = ['backend', 'data', 'frontend', 'cloud'] as const;

export function Skills() {
  const t = useTranslations('skills');
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-heading">
      <div className="container-content">
        <div className="section-heading"><h2 id="skills-heading">{t('title')}</h2></div>
        <p className={styles.intro}>{t('intro')}</p>
        <Reveal><dl className={styles.list}>
          {groups.map((group) => (
            <div key={group} className={styles.row}>
              <dt>{t(group)}</dt>
              <dd>{t(`${group}Items`)}</dd>
            </div>
          ))}
        </dl></Reveal>
      </div>
    </section>
  );
}
