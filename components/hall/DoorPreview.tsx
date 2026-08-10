import styles from './DoorPreview.module.css';

export type DoorPreviewProps = {
  preview: string;
  previewStack?: string;
  openCta?: string;
  className?: string;
};

export function DoorPreview({
  preview,
  previewStack,
  openCta = 'Open door →',
  className,
}: DoorPreviewProps) {
  return (
    <div className={[styles.panel, className].filter(Boolean).join(' ')}>
      <p className={styles.preview}>{preview}</p>
      {previewStack ? <p className={styles.stack}>{previewStack}</p> : null}
      <p className={styles.cta} aria-hidden>
        {openCta}
      </p>
    </div>
  );
}
