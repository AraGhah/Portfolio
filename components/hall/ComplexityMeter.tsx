import type { Complexity } from '@/lib/types';
import styles from './ComplexityMeter.module.css';

type ComplexityMeterProps = {
  value: Complexity;
  max?: number;
  label?: string;
  className?: string;
};

export function ComplexityMeter({
  value,
  max = 5,
  label,
  className,
}: ComplexityMeterProps) {
  return (
    <div
      className={[styles.meter, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={label ?? `Complexity ${value} of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => {
        const level = i + 1;
        const filled = level <= value;
        return (
          <span
            key={level}
            className={[styles.bar, filled ? styles.barFilled : ''].join(' ')}
            style={{ height: 8 + level * 5 }}
          />
        );
      })}
    </div>
  );
}
