'use client';

import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import styles from './Skills.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

const skillBlocks = [
  { titleKey: 'backend', itemsKey: 'backendItems', glyph: '{ }', rgb: '96, 165, 250' },
  { titleKey: 'data', itemsKey: 'dataItems', glyph: '⌗', rgb: '56, 189, 248' },
  { titleKey: 'frontend', itemsKey: 'frontendItems', glyph: '◐', rgb: '99, 102, 241' },
  { titleKey: 'cloud', itemsKey: 'cloudItems', glyph: '☁', rgb: '45, 212, 191' },
] as const;

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const chips: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="section-block section-block--base" aria-labelledby="skills-heading">
      <div className="container-content">
        <RevealHeading
          id="skills-heading"
          className={styles.title}
          segments={[{ text: t('title') }]}
        />

        <motion.div
          className={styles.grid}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {skillBlocks.map((block, i) => (
            <motion.div key={block.titleKey} variants={card}>
              <SpotlightCard rgb={block.rgb}>
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.glyph} aria-hidden>
                      {block.glyph}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{t(block.titleKey)}</h3>
                  <motion.ul className={styles.chips} variants={chips}>
                    {t(block.itemsKey)
                      .split('·')
                      .map((item) => item.trim())
                      .filter(Boolean)
                      .map((item) => (
                        <motion.li key={item} className={styles.chip} variants={chip}>
                          {item}
                        </motion.li>
                      ))}
                  </motion.ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
