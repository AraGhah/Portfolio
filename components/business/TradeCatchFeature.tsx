import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Reveal } from '@/components/motion/Reveal';
import { TradeCatchWorkflow } from './TradeCatchWorkflow';
import styles from './TradeCatchFeature.module.css';

export function TradeCatchFeature() {
  const t = useTranslations('tradecatch');
  return (
    <section id="tradecatch" className="section-block" aria-labelledby="tradecatch-heading">
      <div className="container-content">
        <Reveal><p className={styles.label}><span className="status-dot" aria-hidden />{t('label')}</p></Reveal>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <h2 id="tradecatch-heading">{t('title')}</h2>
            <p className={styles.tagline}>{t('tagline')}</p>
            <p className={styles.description}>{t('description')}</p>
            <p className={styles.ownership}>{t('ownership')}</p>
            <dl className={styles.facts}>
              <div><dt>{t('roleLabel')}</dt><dd>{t('role')}</dd></div>
              <div><dt>{t('focusLabel')}</dt><dd>{t('focus')}</dd></div>
            </dl>
            <div className={styles.actions}>
              <a href="https://tradecatch.ca/" target="_blank" rel="noopener noreferrer" className="button-primary">{t('visit')} <span aria-hidden>↗</span></a>
              <Link href="/projects/trade-catch" className="text-link">{t('story')} <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
          <Reveal delay={100} className={styles.preview}>
            <a href="https://tradecatch.ca/" target="_blank" rel="noopener noreferrer" aria-label={t('visit')} className={styles.screen}>
              <Image src="/tradecatch-home.png" alt={t('screenshotAlt')} width={1265} height={714} sizes="(max-width: 800px) 100vw, 640px" className={styles.screenshot} />
              <span className={styles.openLabel}>{t('visit')} ↗</span>
            </a>
            <div className={styles.caption}><span>tradecatch.ca</span><span>{t('tools')}</span></div>
          </Reveal>
        </div>
        <Reveal delay={70}><TradeCatchWorkflow /></Reveal>
      </div>
    </section>
  );
}
