'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { useTranslations } from 'next-intl';
import styles from './TradeCatchFeature.module.css';

export function TradeCatchWorkflow() {
  const t = useTranslations('tradecatch');
  const steps = t.raw('steps') as { title: string; body: string }[];
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  const onKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % steps.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + steps.length) % steps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = steps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  };

  return (
    <div className={styles.workflow}>
      <div role="tablist" aria-label={t('workflowLabel')} className={styles.steps}>
        {steps.map((step, index) => <button key={step.title} type="button" role="tab"
          id={`${id}-tab-${index}`} aria-selected={active === index} aria-controls={`${id}-panel-${index}`}
          tabIndex={active === index ? 0 : -1} ref={(element) => { buttons.current[index] = element; }}
          onKeyDown={(event) => onKey(event, index)} onClick={() => setActive(index)}
          className={`${styles.step} ${active === index ? styles.stepActive : ''}`}>
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>{step.title}<span className={styles.stepArrow} aria-hidden>→</span>
        </button>)}
      </div>
      {steps.map((step, index) => <div key={step.title} role="tabpanel" id={`${id}-panel-${index}`}
        aria-labelledby={`${id}-tab-${index}`} hidden={active !== index} tabIndex={0} className={styles.stepPanel}><p>{step.body}</p></div>)}
    </div>
  );
}
