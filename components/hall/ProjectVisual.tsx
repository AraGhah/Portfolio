import styles from './ProjectVisual.module.css';

// These are abstract diagrams of the products, not product screenshots.
export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === 'dossier') {
    return (
      <div className={`${styles.canvas} ${styles.dossier}`} aria-hidden="true">
        <span className={styles.corner}>d / research, refined.</span>
        <div className={styles.paperBack} />
        <div className={styles.paper}>
          <div className={styles.paperHead}><span className={styles.serif}>dossier</span><span>↗</span></div>
          <div className={styles.paperRule} />
          <span className={styles.micro}>01 — 02 — 03</span>
          <div className={styles.line} /><div className={styles.lineShort} /><div className={styles.line} />
          <div className={styles.paperFoot}><span>research → relevance</span><span className={styles.check}>✓</span></div>
        </div>
        <span className={styles.annotation}>A little more personal.</span>
        <span className={styles.star}>✳</span>
      </div>
    );
  }
  if (slug === 'trade-catch') {
    return (
      <div className={`${styles.canvas} ${styles.trade}`} aria-hidden="true">
        <span className={styles.corner}>tc / always on the line.</span>
        <div className={styles.call}>
          <span className={styles.callIcon}>↗</span>
          <div className={styles.wave}>
            {[12, 22, 36, 18, 44, 29, 52, 32, 20, 38, 15, 26, 12].map((height, index) => <span key={index} style={{ height }} />)}
          </div>
          <div className={styles.callFoot}><span>FR / EN</span><span>●</span></div>
        </div>
        <span className={styles.annotation}>Every call is a beginning.</span>
      </div>
    );
  }
  return (
    <div className={`${styles.canvas} ${styles.sentinel}`} aria-hidden="true">
      <span className={styles.corner}>so / order from the noise.</span>
      <div className={styles.events}>
        {[0, 1, 2].map((i) => <div key={i} className={styles.event}><span className={styles.eventDot} /><span className={styles.eventLine} /><span className={styles.eventArrow}>↗</span></div>)}
        <div className={styles.queue}><span>events → incidents</span><span>⌁</span></div>
      </div>
      <span className={styles.annotation}>A clearer signal.</span>
    </div>
  );
}
