'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';

const EASE = [0.16, 0.84, 0.28, 1] as const;

const paragraphs = [
  { key: 'p1', color: 'var(--ink-muted)' },
  { key: 'p2', color: 'var(--ink-dim)' },
  { key: 'p3', color: 'var(--ink-dim)' },
] as const;

export function About() {
  const t = useTranslations('about');
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="about"
      className="section-block section-block--raised"
      aria-labelledby="about-heading"
    >
      <div className="container-content about-grid">
        <div className="about-photo-wrap" ref={photoRef}>
          <motion.div
            className="about-photo-frame"
            initial={{ clipPath: 'inset(100% -30% -30% -30%)' }}
            whileInView={{ clipPath: 'inset(-30% -30% -30% -30%)' }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 1.4, ease: EASE }}
          >
            <div className="about-photo-clip">
              <motion.div
                style={{ y: imageY }}
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1.12 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: EASE }}
              >
                <Image
                  src="/ara.jpg"
                  alt="Ara Ghahramanyan"
                  width={640}
                  height={800}
                  className="about-photo"
                  priority={false}
                />
              </motion.div>
            </div>
            {(['tl', 'tr', 'bl', 'br'] as const).map((corner, i) => (
              <motion.span
                key={corner}
                aria-hidden
                className={`about-corner about-corner--${corner}`}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 1 + i * 0.08 }}
              />
            ))}
          </motion.div>
          <motion.div
            className="about-photo-meta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span>Montréal, QC</span>
            <span className="about-coords">45.50° N · 73.57° W</span>
          </motion.div>
        </div>

        <div>
          <RevealHeading
            id="about-heading"
            segments={[{ text: t('title') }]}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-h2)',
              fontWeight: 400,
              lineHeight: 1.02,
              color: 'var(--ink)',
              margin: '14px 0 0',
            }}
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.2 }}
            style={{
              height: 2,
              transformOrigin: '0% 50%',
              background: 'linear-gradient(90deg, var(--c-blue), var(--c-indigo) 45%, var(--c-indigo-deep) 70%, transparent)',
              margin: '32px 0',
            }}
          />
          {paragraphs.map((p, i) => (
            <motion.p
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.1 }}
              style={{
                fontSize: 'var(--t-body-sm)',
                lineHeight: 1.75,
                color: p.color,
                margin: i === paragraphs.length - 1 ? 0 : '0 0 22px',
              }}
            >
              {t(p.key)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
