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
import { useTranslations } from 'next-intl';
import { Magnetic } from '@/components/motion/Magnetic';
import styles from './Hero.module.css';

const NAME = 'Ara';
const EASE = [0.16, 0.84, 0.28, 1] as const;

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 47 + 13) % 100,
  size: 1 + (i % 3),
  delay: (i * 0.73) % 9,
  duration: 10 + ((i * 37) % 9),
  drift: ((i % 5) - 2) * 14,
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
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.1, ease: EASE, delay },
});

export function Hero() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(32);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${smx}% ${smy}%, rgba(201,164,101,.14), transparent 65%)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

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
      <motion.div aria-hidden className={styles.glow} style={{ scale: glowScale }} />
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
        <motion.p className={styles.location} {...rise(0.05)}>
          <span className={styles.pulse} aria-hidden />
          {t('location')}
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
          <p className={styles.role}>{t('role')}</p>
          <motion.div
            className={styles.rule}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
          />
        </motion.div>

        <motion.p className={styles.lead} {...rise(0.75)}>
          {t('paragraph')}
        </motion.p>

        <motion.div className={styles.actions} {...rise(0.95)}>
          <Magnetic>
            <a href="#hall" className={styles.btnPrimary}>
              <span className={styles.btnShine} aria-hidden />
              {t('enterHall')}
              <span className={styles.btnArrow} aria-hidden>
                →
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={styles.btnSecondary}>
              {t('hireMe')}
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#hall"
        className={styles.scrollCue}
        aria-hidden
        tabIndex={-1}
        style={{ opacity: contentOpacity }}
      >
        <motion.span
          className={styles.scrollTrack}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <span className={styles.scrollDot} />
        </motion.span>
      </motion.a>
    </section>
  );
}
