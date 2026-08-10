import styles from './VaultDoor.module.css';

const SPOKE_ANGLES = [0, 45, 90, 135] as const;

type VaultDoorProps = {
  className?: string;
};

export function VaultDoor({ className }: VaultDoorProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-hidden
    >
      <div className={styles.sheen} />
      <div className={styles.dial}>
        <div className={styles.spokes}>
          {SPOKE_ANGLES.map((deg) => (
            <span
              key={deg}
              className={styles.spoke}
              style={{ transform: `translate(-50%, -100%) rotate(${deg}deg)` }}
            />
          ))}
        </div>
      </div>
      <span className={styles.boltTl} />
      <span className={styles.boltTr} />
      <span className={styles.boltBl} />
      <span className={styles.boltBr} />
    </div>
  );
}
