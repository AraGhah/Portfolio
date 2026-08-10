import styles from './GateDoor.module.css';

type GateDoorProps = {
  className?: string;
};

export function GateDoor({ className }: GateDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.header} />
      <div className={styles.panels}>
        <div className={styles.panel} />
        <div className={styles.panel} />
        <div className={styles.panel} />
      </div>
      <div className={styles.handle} />
    </div>
  );
}
