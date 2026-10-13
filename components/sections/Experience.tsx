'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';
import styles from './Experience.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;
const DOT_COLORS = ['#7aa2cf', '#9bb5d1', '#8e9bb3', '#7aa2cf', '#c8ab7d'];

function splitItem(item: string): { head: string; body: string } {
  const match = item.match(/^(.+?[.:])\s+(.*)$/);
  if (!match) return { head: item, body: '' };
  return { head: match[1].replace(/[.:]$/, '').trim(), body: match[2] };
}

function Timeline({
  title,
  items,
  delay,
  colorOffset,
}: {
  title: string;
  items: string[];
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
          {items.map((item, i) => {
            const { head, body } = splitItem(item);
            return (
              <motion.li
                key={item}
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
                <p className={styles.head}>{head}</p>
                {body ? <p className={styles.body}>{body}</p> : null}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const t = useTranslations('experience');
  const education = t.raw('educationItems') as string[];
  const work = t.raw('workItems') as string[];

  return (
    <section id="experience" className="section-block section-block--raised" aria-labelledby="experience-heading">
      <div className="container-content">
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
