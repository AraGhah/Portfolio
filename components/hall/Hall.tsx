'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
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
import { Door } from './Door';
import styles from './Hall.module.css';

const EASE = [0.16, 0.84, 0.28, 1] as const;

export function Hall() {
  const t = useTranslations('hall');
  const locale = useLocale();
  const projects = getProjects(locale);

  const hallRef = useRef<HTMLDivElement>(null);
  const corridorRef = useRef<HTMLDivElement>(null);
  const inView = useInView(corridorRef, { once: true, margin: '0px 0px -15% 0px' });
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilterValue>('all');
  const [filterLevel, setFilterLevel] = useState<FilterLevel>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const dragRef = useRef({ down: false, sx: 0, sl: 0, dragged: false });
  const suppressClickRef = useRef(false);

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

  const openDoor = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  const closeDoor = useCallback(() => {
    setOpenSlug(null);
  }, []);

  useEffect(() => {
    const hall = hallRef.current;
    if (!hall) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const atStart = hall.scrollLeft <= 1;
      const atEnd = hall.scrollLeft >= hall.scrollWidth - hall.clientWidth - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
      e.preventDefault();
      hall.scrollLeft += e.deltaY;
    };

    hall.addEventListener('wheel', onWheel, { passive: false });
    return () => hall.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    const hall = hallRef.current;
    if (!hall) return;

    const onPointerDown = (e: PointerEvent) => {
      dragRef.current = {
        down: true,
        sx: e.clientX,
        sl: hall.scrollLeft,
        dragged: false,
      };
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.down) return;
      const dx = e.clientX - dragRef.current.sx;
      if (Math.abs(dx) > 6) {
        dragRef.current.dragged = true;
        suppressClickRef.current = true;
      }
      hall.scrollLeft = dragRef.current.sl - dx;
    };
    const onPointerUp = () => {
      dragRef.current.down = false;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 60);
    };

    hall.addEventListener('pointerdown', onPointerDown);
    hall.addEventListener('pointermove', onPointerMove);
    hall.addEventListener('pointerup', onPointerUp);
    hall.addEventListener('pointerleave', onPointerUp);
    return () => {
      hall.removeEventListener('pointerdown', onPointerDown);
      hall.removeEventListener('pointermove', onPointerMove);
      hall.removeEventListener('pointerup', onPointerUp);
      hall.removeEventListener('pointerleave', onPointerUp);
    };
  }, []);

  useEffect(() => {
    const corridor = corridorRef.current;
    const hall = hallRef.current;
    if (!corridor || !hall) return;

    const onMove = (e: MouseEvent) => {
      const r = corridor.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hall.style.perspectiveOrigin = `${50 + x * 26}% ${42 + y * 16}%`;
    };
    const onLeave = () => {
      hall.style.perspectiveOrigin = '50% 42%';
    };

    corridor.addEventListener('mousemove', onMove);
    corridor.addEventListener('mouseleave', onLeave);
    return () => {
      corridor.removeEventListener('mousemove', onMove);
      corridor.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const hall = hallRef.current;
    if (!hall) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        hall.scrollBy({ left: 220, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        hall.scrollBy({ left: -220, behavior: 'smooth' });
      }
    };

    hall.addEventListener('keydown', onKey);
    return () => hall.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setHoverIndex(null);
    const hall = hallRef.current;
    if (!hall) return;
    hall.scrollTo({ left: 0, behavior: 'smooth' });
  }, [categoryFilter, filterLevel]);

  return (
    <section id="hall" className={styles.section} aria-labelledby="hall-heading">
      <div className={styles.header}>
        <div className={styles.headerText}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className={styles.eyebrowLine} aria-hidden />
            {String(visibleProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </motion.span>
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

      <div ref={corridorRef} className={styles.corridor} data-corridor>
        <div className={styles.ceiling} aria-hidden />
        <div
          ref={hallRef}
          className={styles.hall}
          data-hall
          tabIndex={0}
          aria-label={t('title')}
        >
          <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={styles.doorCol}
              layout
              initial={inView ? { opacity: 0, y: 40, scale: 0.94 } : false}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.94 }
              }
              exit={{ opacity: 0, y: -30, scale: 0.9, transition: { duration: 0.3 } }}
              transition={{
                duration: 0.8,
                ease: EASE,
                delay: Math.min(index, 8) * 0.07,
                layout: { type: 'spring', stiffness: 260, damping: 30 },
              }}
            >
              <Door
                project={project}
                index={index}
                hoverIndex={hoverIndex}
                suppressClickRef={suppressClickRef}
                onHover={setHoverIndex}
                onOpen={openDoor}
              />
              <div className={styles.meta}>
                <div className={styles.metaRow}>
                  <span>{project.doorNumber}</span>
                  <span>
                    {project.complexity}/5
                  </span>
                </div>
                <div className={styles.doorTitle}>{project.title}</div>
                <div className={styles.doorStack}>{project.previewStack}</div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
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
        <div className={styles.floor} aria-hidden />
        <p className={styles.hint}>{t('hint')}</p>
      </div>

      <CaseStudyOverlay
        open={!!openProject}
        onClose={closeDoor}
        title={openProject?.title ?? ''}
      >
        {openProject ? <CaseStudyContent project={openProject} /> : null}
      </CaseStudyOverlay>
    </section>
  );
}
