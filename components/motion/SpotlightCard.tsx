'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, type ReactNode, type PointerEvent } from 'react';
import styles from './motion.module.css';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  tilt?: number;
};

export function SpotlightCard({ children, className = '', tilt = 6 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const glowOpacity = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), {
    stiffness: 160,
    damping: 18,
  });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${gx} ${gy}, rgba(201,164,101,.16), transparent 60%)`;
  const opacity = useSpring(glowOpacity, { stiffness: 200, damping: 30 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glowOpacity.set(1);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.spotCard} ${className}`.trim()}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <motion.div
        aria-hidden
        className={styles.spotGlow}
        style={{ background: spotlight, opacity }}
      />
      <div className={styles.spotContent}>{children}</div>
    </motion.div>
  );
}
