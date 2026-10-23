'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Magnetic } from '@/components/motion/Magnetic';
import { RotatingWords } from '@/components/motion/RotatingWords';
import { getProjects } from '@/lib/projects';
import styles from './Hero.module.css';

const NAME = 'Ara';
const EASE = [0.16, 0.84, 0.28, 1] as const;

const letters: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const letter: Variants = {
  hidden: { y: '18%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const projects = getProjects(locale);
  const liveCount = projects.filter((p) => p.status === 'Live').length;
  const buildWords = t.raw('buildWords') as string[];
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} aria-labelledby="hero-name" className={styles.hero}>
      <div aria-hidden className={styles.fade} />

      <motion.div className={styles.content} style={{ y: contentY, opacity: contentOpacity }}>
        <motion.h1
          id="hero-name"
          className={styles.title}
          aria-label={NAME}
          variants={letters}
          initial="hidden"
          animate="show"
        >
          {NAME.split('').map((char, i) => (
            <span key={i} className={styles.letterMask} aria-hidden>
              <motion.span className={styles.letter} variants={letter}>
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div className={styles.roleBlock} {...rise(0.35)}>
          <p className={`${styles.role} text-gradient`}>{t('role')}</p>
        </motion.div>

        <motion.p className={styles.build} {...rise(0.45)}>
          <span className="sr-only">
            {t('buildPrefix')} {buildWords.join(', ')}
          </span>
          <span aria-hidden>
            {t('buildPrefix')}
            <RotatingWords words={buildWords} className={styles.buildWord} />
          </span>
        </motion.p>

        <motion.p className={styles.lead} {...rise(0.55)}>
          {t('paragraph')}
        </motion.p>

        <motion.div className={styles.actions} {...rise(0.65)}>
          <Magnetic>
            <a href="#hall" className={styles.btnPrimary}>
              {t('enterHall')}
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={styles.btnSecondary}>
              {t('hireMe')}
            </a>
          </Magnetic>
        </motion.div>

        <motion.ul className={styles.trust} {...rise(0.75)}>
          <li>
            <strong>{projects.length}</strong> {t('trustProjects')}
          </li>
          <li>
            <strong>{liveCount}</strong> {t('trustLive')}
          </li>
          <li>{t('trustLanguages')}</li>
        </motion.ul>
      </motion.div>

      <motion.a
        href="#proof"
        className={styles.scrollCue}
        aria-hidden
        tabIndex={-1}
        style={{ opacity: contentOpacity }}
      >
        <motion.span
          className={styles.scrollTrack}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className={styles.scrollDot} />
        </motion.span>
      </motion.a>
    </section>
  );
}
