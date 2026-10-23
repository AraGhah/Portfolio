'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; delay?: number };

export function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let animation: Animation | undefined;
    let revealed = false;

    const stop = () => {
      observer?.disconnect();
      animation?.cancel();
    };
    const start = () => {
      stop();
      if (preference.matches || revealed || !('IntersectionObserver' in window) || !element.animate) return;
      observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        revealed = true;
        animation = element.animate([
          { opacity: 0, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 720, delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        observer?.disconnect();
      }, { rootMargin: '0px 0px -24px 0px', threshold: 0.08 });
      observer.observe(element);
    };

    start();
    preference.addEventListener('change', start);
    return () => { stop(); preference.removeEventListener('change', start); };
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
