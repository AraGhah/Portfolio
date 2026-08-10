'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export function ScrollReveal({
  children,
  className = '',
  style,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add('is-visible');
      el.style.transitionDelay = `${delay}s`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);

    const failsafe = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 3500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
