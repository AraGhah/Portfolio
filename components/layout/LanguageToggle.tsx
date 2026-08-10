'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'fr' : 'en';

  const handleClick = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={t('languageToggle')}
      onClick={handleClick}
    >
      {t('languageTarget')}
    </button>
  );
}
