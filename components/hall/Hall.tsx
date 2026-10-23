'use client';

import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { RevealHeading } from '@/components/motion/RevealHeading';
import { getProjects } from '@/lib/projects';
import type { Project } from '@/lib/types';
import { CaseStudyContent } from '@/components/case-study/CaseStudyContent';
import { CaseStudyOverlay } from '@/components/case-study/CaseStudyOverlay';
import {
  CategoryFilter,
  type CategoryFilterValue,
} from './CategoryFilter';
import { ComplexityFilter, type FilterLevel } from './ComplexityFilter';
import { ProjectCard } from './ProjectCard';
import styles from './Hall.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

export function Hall() {
  const t = useTranslations('hall');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const projects = getProjects(locale);

  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilterValue>('all');
  const [filterLevel, setFilterLevel] = useState<FilterLevel>(0);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryOk =
        categoryFilter === 'all' || project.category === categoryFilter;
      const complexityOk =
        filterLevel === 0 || project.complexity === filterLevel;
      return categoryOk && complexityOk;
    });
  }, [projects, categoryFilter, filterLevel]);

  const openProject: Project | undefined = openSlug
    ? projects.find((p) => p.slug === openSlug)
    : undefined;

  const openCard = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  const closeCard = useCallback(() => {
    setOpenSlug(null);
  }, []);

  return (
    <section id="hall" className="section-block section-block--base" aria-labelledby="hall-heading">
      <div className="container-content">
        <span className="eyebrow-num">
          <span className="eyebrow-line" aria-hidden />
          01. {tNav('hall')}
        </span>

        <div className={styles.header}>
          <div className={styles.headerText}>
            <RevealHeading
              id="hall-heading"
              className={styles.title}
              segments={[{ text: t('title') }]}
            />
            <motion.p
              className={styles.intro}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            >
              {t('intro')}
            </motion.p>
          </div>
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          >
            <CategoryFilter
              activeCategory={categoryFilter}
              onChange={setCategoryFilter}
            />
            <ComplexityFilter activeLevel={filterLevel} onChange={setFilterLevel} />
          </motion.div>
        </div>

        <ul className={styles.grid}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: Math.min(index, 8) * 0.05,
                  layout: { type: 'spring', stiffness: 260, damping: 30 },
                }}
              >
                <ProjectCard project={project} onOpen={openCard} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <AnimatePresence>
          {visibleProjects.length === 0 ? (
            <motion.p
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {t('empty')}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <CaseStudyOverlay
        open={!!openProject}
        onClose={closeCard}
        title={openProject?.title ?? ''}
      >
        {openProject ? <CaseStudyContent project={openProject} /> : null}
      </CaseStudyOverlay>
    </section>
  );
}
