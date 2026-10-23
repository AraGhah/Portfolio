'use client';

import { useEffect, useRef } from 'react';

export function ReadingProgress() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maximum > 0 ? Math.min(1, Math.max(0, window.scrollY / maximum)) : 0;
        if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div className="reading-progress" aria-hidden="true"><span ref={ref} /></div>;
}
