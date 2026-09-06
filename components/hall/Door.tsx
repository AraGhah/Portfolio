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
  suppressClickRef,
  onHover,
  onOpen,
}: DoorProps) {
  const t = useTranslations('hall');
  const [pushing, setPushing] = useState(false);

  const k = proximityK(index, hoverIndex);

  const transform = useMemo(() => {
    if (pushing) return 'rotateY(0deg) translateZ(160px)';
    if (k > 0) {
      return `translateY(${-14 * k}px) rotateY(${-2 * k}deg) translateZ(${70 * k}px)`;
    }
    return 'rotateY(-9deg)';
  }, [k, pushing]);

  const openDoor = useCallback(() => {
    setPushing(true);
    window.setTimeout(() => {
      onOpen(project.slug);
      setPushing(false);
    }, 180);
  }, [onOpen, project.slug]);

  const handleClick = () => {
    if (suppressClickRef.current) return;
    openDoor();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
      tabIndex={0}
      data-door={project.slug}
      data-lvl={project.complexity}
      data-category={project.category}
      aria-label={t('doorAria', { title: project.title })}
      className={`${styles.door} ${widthClass(project.complexity)} ${
        pushing ? styles.pushing : ''
      }`}
      style={{ transform }}
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
