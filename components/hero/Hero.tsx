'use client';

import { useRef, type PointerEvent } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Magnetic } from '@/components/motion/Magnetic';
import { RotatingWords } from '@/components/motion/RotatingWords';
import { getProjects } from '@/lib/projects';
import styles from './Hero.module.css';

const NAME = 'Ara';
const EASE = [0.16, 0.84, 0.28, 1] as const;

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  color: i % 3 === 0 ? '#bfdbfe' : '#60a5fa',
  left: (i * 47 + 13) % 100,
  size: 1 + (i % 2),
  delay: (i * 0.91) % 11,
  duration: 12 + ((i * 37) % 9),
  drift: ((i % 5) - 2) * 12,
}));

const letters: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const letter: Variants = {
  hidden: { y: '105%', rotateX: -80, opacity: 0 },
  show: {
    y: '0%',
    rotateX: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: EASE },
  },
};

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, ease: EASE, delay },
});

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const projects = getProjects(locale);
  const liveCount = projects.filter((p) => p.status === 'Live').length;
  const buildWords = t.raw('buildWords') as string[];
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(32);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${smx}% ${smy}%, rgba(96,165,250,.11), transparent 65%)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-name"
      className={styles.hero}
      onPointerMove={onPointerMove}
    >
      <motion.div aria-hidden className={styles.aurora} style={{ scale: glowScale }}>
        <span className={`${styles.blob} ${styles.blobBlue}`} />
        <span className={`${styles.blob} ${styles.blobIndigo}`} />
        <span className={`${styles.blob} ${styles.blobSky}`} />
      </motion.div>
      <motion.div aria-hidden className={styles.spotlight} style={{ background: spotlight }} />

      <motion.div aria-hidden className={styles.gridWrap} style={{ y: gridY }}>
        <div className={styles.grid} />
      </motion.div>

      <div aria-hidden className={styles.particles}>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                '--drift': `${p.drift}px`,
                '--p-color': p.color,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div aria-hidden className={styles.fade} />

      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p className={styles.available} {...rise(0.05)}>
          <span className={styles.pulse} aria-hidden />
          <span className={styles.availableStrong}>{t('available')}</span>
          <span className={styles.availableSep} aria-hidden />
          <span className={styles.availableLocation}>{t('location')}</span>
        </motion.p>

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

        <motion.div className={styles.roleBlock} {...rise(0.55)}>
          <p className={`${styles.role} text-gradient`}>{t('role')}</p>
        </motion.div>

        <motion.p className={styles.build} {...rise(0.7)}>
          <span className="sr-only">
            {t('buildPrefix')} {buildWords.join(', ')}
          </span>
          <span aria-hidden>
            {t('buildPrefix')}
            <RotatingWords words={buildWords} className={styles.buildWord} />
          </span>
        </motion.p>

        <motion.p className={styles.lead} {...rise(0.85)}>
          {t('paragraph')}
        </motion.p>

        <motion.div className={styles.actions} {...rise(1)}>
          <Magnetic>
            <a href="#hall" className={styles.btnPrimary}>
              <span className={styles.btnShine} aria-hidden />
              {t('enterHall')}
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={styles.btnSecondary}>
              {t('hireMe')}
            </a>
          </Magnetic>
        </motion.div>

        <motion.ul className={styles.trust} {...rise(1.15)}>
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
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className={styles.scrollDot} />
        </motion.span>
      </motion.a>
    </section>
  );
}
