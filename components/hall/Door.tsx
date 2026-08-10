'use client';

import { useCallback, useMemo, useState, type KeyboardEvent, type RefObject } from 'react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/lib/types';
import { DoorFace } from './faces/DoorFace';
import { DoorPreview } from './DoorPreview';
import styles from './Door.module.css';

type DoorProps = {
  project: Project;
  index: number;
  hoverIndex: number | null;
  filterLevel: number;
  suppressClickRef: RefObject<boolean>;
  onHover: (index: number | null) => void;
  onOpen: (slug: string) => void;
};

function widthClass(complexity: Project['complexity']): string {
  if (complexity === 5) return styles.w5;
  if (complexity === 4) return styles.w4;
  return styles.wBase;
}

function coolGlow(kind: Project['doorKind']): boolean {
  return kind === 'blueprint' || kind === 'lab';
}

function proximityK(index: number, hoverIndex: number | null): number {
  if (hoverIndex === null) return 0;
  if (index === hoverIndex) return 1;
  if (Math.abs(index - hoverIndex) === 1) return 0.45;
  return 0;
}

export function Door({
  project,
  index,
  hoverIndex,
  filterLevel,
  suppressClickRef,
  onHover,
  onOpen,
}: DoorProps) {
  const t = useTranslations('hall');
  const [pushing, setPushing] = useState(false);

  const filtered =
    filterLevel !== 0 && project.complexity !== filterLevel;

  const k = filtered ? 0 : proximityK(index, hoverIndex);

  const transform = useMemo(() => {
    if (pushing) return 'rotateY(0deg) translateZ(160px)';
    if (filtered) {
      return 'rotateY(-9deg) translateZ(-90px) scale(0.94)';
    }
  if (k > 0) {
      return `translateY(${-14 * k}px) rotateY(${-2 * k}deg) translateZ(${70 * k}px)`;
    }
    return 'rotateY(-9deg)';
  }, [filtered, k, pushing]);

  const opacity = filtered ? 0.28 : 1;
  const filterStyle = filtered ? 'saturate(0.4)' : 'none';

  const openDoor = useCallback(() => {
    if (filtered) return;
    setPushing(true);
    window.setTimeout(() => {
      onOpen(project.slug);
      setPushing(false);
    }, 180);
  }, [filtered, onOpen, project.slug]);

  const handleClick = () => {
    if (suppressClickRef.current || filtered) return;
    openDoor();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (filtered) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDoor();
    }
  };

  const glowOpacity = k > 0 ? 1 : 0;
  const previewOpacity = k > 0 ? 1 : 0;
  const previewTransform = k > 0 ? 'translateY(0)' : 'translateY(10px)';

  return (
    <div
      role="button"
      tabIndex={filtered ? -1 : 0}
      data-door={project.slug}
      data-lvl={project.complexity}
      data-filtered={filtered ? 'true' : undefined}
      aria-label={t('doorAria', { title: project.title })}
      className={`${styles.door} ${widthClass(project.complexity)} ${
        filtered ? styles.doorFiltered : ''
      } ${pushing ? styles.pushing : ''}`}
      style={{
        transform,
        opacity,
        filter: filterStyle,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(index)}
      onBlur={() => onHover(null)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <DoorFace doorKind={project.doorKind} />
      <div
        data-glow
        className={`${styles.glow} ${
          coolGlow(project.doorKind) ? styles.glowCool : styles.glowBrass
        }`}
        style={{ opacity: glowOpacity }}
        aria-hidden
      />
      <div
        data-preview
        className={styles.previewWrap}
        style={{
          opacity: previewOpacity,
          transform: previewTransform,
        }}
      >
        <DoorPreview
          preview={project.preview}
          previewStack={project.previewStack}
          openCta={t('openDoor')}
        />
      </div>
    </div>
  );
}
