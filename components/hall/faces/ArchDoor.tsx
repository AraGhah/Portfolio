import styles from './ArchDoor.module.css';

const STUD_X = [14, 28, 42, 58, 72, 86] as const;

type ArchDoorProps = {
  className?: string;
};

export function ArchDoor({ className }: ArchDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.vignette} />
      <div className={styles.bandUpper} />
      <div className={styles.bandLower} />
      <div className={styles.studs}>
        {STUD_X.map((x) => (
          <span
            key={`u-${x}`}
            className={styles.stud}
            style={{ left: `${x}%`, top: '26%' }}
          />
        ))}
        {STUD_X.map((x) => (
          <span
            key={`l-${x}`}
            className={styles.stud}
            style={{ left: `${x}%`, top: '68%' }}
          />
        ))}
      </div>
      <div className={styles.handle} />
    </div>
  );
}
