'use client';

import { motion, type Variants } from 'framer-motion';
import { Fragment, type CSSProperties } from 'react';
import styles from './motion.module.css';

type Segment = { text: string; accent?: boolean };

type RevealHeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  style?: CSSProperties;
  segments: Segment[];
  delay?: number;
  stagger?: number;
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const word: Variants = {
  hidden: { y: '108%', rotate: 4, opacity: 0 },
  show: {
    y: '0%',
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 0.84, 0.28, 1] },
  },
};

export function RevealHeading({
  as = 'h2',
  id,
  className,
  style,
  segments,
  delay = 0,
  stagger = 0.06,
}: RevealHeadingProps) {
  const Tag = motion[as];
  const words = segments.flatMap((segment) =>
    segment.text
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => ({ w, accent: segment.accent })),
  );

  const label = segments.map((s) => s.text.trim()).join(' ');

  return (
    <Tag
      id={id}
      aria-label={label}
      className={className}
      style={style}
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {words.map(({ w, accent }, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className={styles.wordMask} aria-hidden>
            <motion.span
              className={`${styles.word} ${accent ? styles.accent : ''}`}
              variants={word}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
