import styles from './BlueprintDoor.module.css';

type BlueprintDoorProps = {
  className?: string;
};

export function BlueprintDoor({ className }: BlueprintDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.grid} />
      <div className={styles.frame} />
      <div className={styles.dimension}>
        <span className={styles.capTop} />
        <span className={styles.capBottom} />
      </div>
      <div className={styles.handle} />
    </div>
  );
}
