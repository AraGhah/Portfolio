import type { Complexity } from '@/lib/types';

type ComplexityMeterProps = {
  value: Complexity;
  label?: string;
  max?: number;
};

export function ComplexityMeter({
  value,
  label,
  max = 5,
}: ComplexityMeterProps) {
  return (
    <div
      role="img"
      aria-label={label ?? `Complexity ${value} of ${max}`}
      style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}
    >
      {Array.from({ length: max }, (_, i) => {
        const level = i + 1;
        const filled = level <= value;
        return (
          <span
            key={level}
            style={{
              width: 8,
              height: 8 + level * 5,
              background: filled ? 'var(--acc)' : 'var(--line)',
              borderRadius: 1,
              opacity: filled ? 1 : 0.45,
              transition: 'background 400ms var(--ease-out)',
            }}
          />
        );
      })}
    </div>
  );
}
