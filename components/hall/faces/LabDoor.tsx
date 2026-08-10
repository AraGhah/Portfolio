import styles from './LabDoor.module.css';

type LabDoorProps = {
  className?: string;
};

export function LabDoor({ className }: LabDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.viewport} />
    </div>
  );
}
