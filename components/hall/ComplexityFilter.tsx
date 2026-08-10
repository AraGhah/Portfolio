'use client';

import { useTranslations } from 'next-intl';
import type { Complexity } from '@/lib/types';
import styles from './ComplexityFilter.module.css';

export type FilterLevel = 0 | Complexity;

type ComplexityFilterProps = {
  activeLevel: FilterLevel;
  onChange: (level: FilterLevel) => void;
};

const LEVELS: FilterLevel[] = [0, 2, 3, 4, 5];

export function ComplexityFilter({
  activeLevel,
  onChange,
}: ComplexityFilterProps) {
  const t = useTranslations('hall');

  return (
    <div className={styles.filter} data-levels role="group" aria-label={t('complexityLabel')}>
      <span className={styles.label}>{t('complexityLabel')}</span>
      {LEVELS.map((level) => {
        const pressed = activeLevel === level;
        const label =
          level === 0 ? t('filterAll') : String(level).padStart(2, '0');

        return (
          <button
            key={level}
            type="button"
            data-level={level}
            className={`${styles.btn} ${pressed ? styles.btnActive : ''}`}
            aria-pressed={pressed}
            onClick={() => onChange(level)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
