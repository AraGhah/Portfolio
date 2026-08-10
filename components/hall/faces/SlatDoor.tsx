import styles from './SlatDoor.module.css';

type SlatDoorProps = {
  className?: string;
};

export function SlatDoor({ className }: SlatDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.sheen} />
      <div className={styles.control} />
    </div>
  );
}
