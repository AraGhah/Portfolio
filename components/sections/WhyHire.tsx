'use client';

import { motion, type Variants } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { Link } from '@/i18n/navigation';
import { getProject } from '@/lib/projects';
import styles from './WhyHire.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

const POINTS = [
  { key: 'backend', slug: 'travel-express', glyph: '{ }', rgb: '122, 162, 207' },
  { key: 'cloud', slug: 'trade-catch', glyph: '☁', rgb: '155, 181, 209' },
  { key: 'ownership', slug: 'dossier', glyph: '◆', rgb: '200, 171, 125' },
  { key: 'clarity', slug: 'file-sharing-system', glyph: '≡', rgb: '142, 155, 179' },
] as const;

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function WhyHire() {
  const t = useTranslations('why');
  const locale = useLocale();

  return (
    <section id="why" className="section-block section-block--raised" aria-labelledby="why-heading">
      <div className="container-content">
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {t('eyebrow')}
        </motion.p>
        <RevealHeading
          id="why-heading"
          className={styles.title}
          segments={[{ text: t('titleLead') }, { text: t('titleAccent'), accent: true }]}
        />
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          {t('intro')}
        </motion.p>

        <motion.ol
          className={styles.grid}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {POINTS.map((point, i) => {
            const project = getProject(locale, point.slug);
            return (
              <motion.li key={point.key} variants={card}>
                <SpotlightCard rgb={point.rgb} tilt={4}>
                  <div className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.index} aria-hidden>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.glyph} aria-hidden>
                        {point.glyph}
                      </span>
                    </div>
                    <h3 className={styles.cardTitle}>{t(`${point.key}.title`)}</h3>
                    <p className={styles.cardBody}>{t(`${point.key}.body`)}</p>
                    {project && (
                      <Link href={`/projects/${point.slug}`} className={styles.proof}>
                        {t('evidence', { project: project.title })}
                      </Link>
                    )}
                  </div>
                </SpotlightCard>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
