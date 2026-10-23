import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>{t('copyright', { year: new Date().getFullYear() })}</span>
        <span className={styles.note}>{t('tagline')}</span>
        <a href="#main">{t('backToTop')} ↑</a>
      </div>
    </footer>
  );
}
