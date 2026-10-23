import { useTranslations } from 'next-intl';
import styles from './Skills.module.css';

const groups = ['backend', 'data', 'frontend', 'cloud'] as const;

export function Skills() {
  const t = useTranslations('skills');
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-heading">
      <div className="container-content">
        <div className="section-heading"><span className="section-number">04 /</span><h2 id="skills-heading">{t('title')}</h2></div>
        <p className={styles.intro}>{t('intro')}</p>
        <dl className={styles.list}>
          {groups.map((group) => (
            <div key={group} className={styles.row}>
              <dt>{t(group)}</dt>
              <dd>{t(`${group}Items`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
