import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import styles from './Experience.module.css';

type Entry = { role: string; company: string; date: string; body: string; tags?: string[] };

function Entries({ title, items }: { title: string; items: Entry[] }) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <ol className={styles.list}>
        {items.map((entry) => (
          <li key={entry.role + entry.company} className={styles.entry}>
            {entry.date && <p className={styles.date}>{entry.date}</p>}
            <h4>{entry.role}</h4>
            <p className={styles.company}>{entry.company}</p>
            {entry.body && <p className={styles.body}>{entry.body}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  const t = useTranslations('experience');
  return (
    <section id="experience" className="section-block" aria-labelledby="experience-heading">
      <div className="container-content">
        <div className="section-heading"><h2 id="experience-heading">{t('title')}</h2></div>
        <Reveal className={styles.columns}>
          <Entries title={t('work')} items={t.raw('workItems') as Entry[]} />
          <Entries title={t('education')} items={t.raw('educationItems') as Entry[]} />
        </Reveal>
      </div>
    </section>
  );
}
