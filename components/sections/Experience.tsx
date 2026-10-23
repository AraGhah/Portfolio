'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';
import styles from './Experience.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;
const DOT_COLORS = ['#2f5d8f', '#5a7595', '#6b7280', '#2f5d8f', '#a9865b'];

type ExperienceEntry = {
  role: string;
  company: string;
  date: string;
  body: string;
  tags?: string[];
};

function Timeline({
  title,
  items,
  delay,
  colorOffset,
}: {
  title: string;
  items: ExperienceEntry[];
  delay: number;
  colorOffset: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 55%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <div ref={ref}>
      <motion.h3
        className={`${styles.colTitle} text-gradient`}
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {title}
      </motion.h3>
      <div className={styles.timeline}>
        <span className={styles.track} aria-hidden />
        <motion.span
          className={styles.trackFill}
          style={{ scaleY: lineScale }}
          aria-hidden
        />
        <ul className={styles.list}>
          {items.map((entry, i) => (
            <motion.li
              key={`${entry.role}-${entry.company}`}
              className={styles.item}
              style={
                {
                  '--dot': DOT_COLORS[(i + colorOffset) % DOT_COLORS.length],
                } as React.CSSProperties
              }
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: delay + i * 0.1 }}
            >
              <motion.span
                className={styles.dot}
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -12% 0px' }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 14,
                  delay: delay + i * 0.1 + 0.2,
                }}
              />
              <p className={styles.head}>
                {entry.role || entry.company}
                {entry.role && entry.company ? (
                  <span className={styles.company}>· {entry.company}</span>
                ) : null}
                {entry.date ? <span className={styles.date}>{entry.date}</span> : null}
              </p>
              {entry.body ? <p className={styles.body}>{entry.body}</p> : null}
              {entry.tags?.length ? (
                <ul className={styles.tags}>
                  {entry.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const t = useTranslations('experience');
  const tNav = useTranslations('nav');
  const education = t.raw('educationItems') as ExperienceEntry[];
  const work = t.raw('workItems') as ExperienceEntry[];

  return (
    <section id="experience" className="section-block section-block--raised" aria-labelledby="experience-heading">
      <div className="container-content">
        <span className="eyebrow-num">
          <span className="eyebrow-line" aria-hidden />
          02. {tNav('experience')}
        </span>
        <RevealHeading
          id="experience-heading"
          className={styles.title}
          segments={[{ text: t('title') }]}
        />

        <div className={styles.columns}>
          <Timeline title={t('education')} items={education} delay={0.05} colorOffset={3} />
          <Timeline title={t('work')} items={work} delay={0.15} colorOffset={0} />
        </div>
      </div>
    </section>
  );
}
