'use client';

import { useTranslations } from 'next-intl';
import type { ProjectCategory } from '@/lib/types';
import styles from './ComplexityFilter.module.css';

export type CategoryFilterValue = 'all' | ProjectCategory;

type CategoryFilterProps = {
  activeCategory: CategoryFilterValue;
  onChange: (category: CategoryFilterValue) => void;
};

const OPTIONS: CategoryFilterValue[] = ['all', 'fullstack', 'software'];

export function CategoryFilter({
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  const t = useTranslations('hall');

  return (
    <div className={styles.filter} role="group" aria-label={t('categoryLabel')}>
      <span className={styles.label}>{t('categoryLabel')}</span>
      {OPTIONS.map((option) => {
        const pressed = activeCategory === option;
        const label =
          option === 'all'
            ? t('filterAll')
            : option === 'fullstack'
              ? t('categoryFullstack')
              : t('categorySoftware');

        return (
          <button
            key={option}
            type="button"
            className={`${styles.btn} ${pressed ? styles.btnActive : ''}`}
            aria-pressed={pressed}
            onClick={() => onChange(option)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
