'use client';

import { motion, type Variants } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { CountUp } from '@/components/motion/CountUp';
import { RevealHeading } from '@/components/motion/RevealHeading';
import { getProjects } from '@/lib/projects';
import styles from './Proof.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

export const TECH = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'React',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Oracle',
  'PL/SQL',
  'ASP.NET Core',
  'C#',
  'AWS',
  'Cloudflare Workers',
  'Supabase',
  'Docker',
  'JWT',
  'Git',
  'n8n',
  'Unity',
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Proof() {
  const t = useTranslations('proof');
  const locale = useLocale();
  const projectCount = getProjects(locale).length;

  const stats = [
    { value: projectCount, decimals: 0, suffix: '', label: t('projects'), note: t('projectsNote') },
    { value: TECH.length, decimals: 0, suffix: '', label: t('tech'), note: t('techNote') },
    { value: 9.6, decimals: 1, suffix: '%', label: t('reply'), note: t('replyNote') },
    { value: 500, decimals: 0, suffix: '', label: t('prospects'), note: t('prospectsNote') },
  ];

  return (
    <section id="proof" className={styles.proof} aria-labelledby="proof-heading">
      <div className="container-content">
        <div className={styles.head}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {t('eyebrow')}
          </motion.p>
          <RevealHeading
            id="proof-heading"
            className={styles.title}
            segments={[{ text: t('titleLead') }, { text: t('titleAccent'), accent: true }]}
          />
        </div>

        <motion.dl
          className={styles.stats}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className={styles.stat} variants={cell}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  locale={locale}
                  delay={0.15 * i}
                />
              </dd>
              <dd className={styles.note}>{stat.note}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      <div className={styles.marquee}>
        <ul className={styles.marqueeTrack}>
          {[...TECH, ...TECH].map((tech, i) => (
            <li key={`${tech}-${i}`} aria-hidden={i >= TECH.length || undefined}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
