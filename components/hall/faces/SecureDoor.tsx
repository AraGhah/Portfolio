import styles from './SecureDoor.module.css';

const BOLT_X = [22, 40, 60, 78] as const;

type SecureDoorProps = {
  className?: string;
};

export function SecureDoor({ className }: SecureDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.innerFrame} />
      <div className={styles.plateUpper} />
      <div className={styles.plateLower} />
      <div className={styles.bolts}>
        {BOLT_X.map((x) => (
          <span
            key={`u-${x}`}
            className={styles.bolt}
            style={{ left: `${x}%`, top: 'calc(28% + 11px)' }}
          />
        ))}
        {BOLT_X.map((x) => (
          <span
            key={`l-${x}`}
            className={styles.bolt}
            style={{ left: `${x}%`, top: 'calc(58% + 11px)' }}
          />
        ))}
      </div>
      <div className={styles.handle} />
    </div>
  );
}
