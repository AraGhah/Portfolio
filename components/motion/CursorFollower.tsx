'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';
import styles from './motion.module.css';

const INTERACTIVE = 'a, button, [role="button"], [data-cursor="hover"]';

export function CursorFollower() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setHovering(!!target?.closest?.(INTERACTIVE));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [enabled, reducedMotion, x, y]);

  if (!enabled || reducedMotion) return null;

  const scale = pressed ? 0.7 : hovering ? 1.8 : 1;

  return (
    <>
      <motion.div
        aria-hidden
        className={styles.cursorRing}
        style={{ x: ringX, y: ringY }}
        animate={{
          scale,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? 'rgba(200, 171, 125, 0.8)' : 'rgba(122, 162, 207, 0.45)',
          backgroundColor: hovering ? 'rgba(200, 171, 125, 0.08)' : 'rgba(200, 171, 125, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
      <motion.div
        aria-hidden
        className={styles.cursorDot}
        style={{ x, y }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
