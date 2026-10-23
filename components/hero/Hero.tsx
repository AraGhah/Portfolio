import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/motion/Reveal';
import styles from './Hero.module.css';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section aria-labelledby="hero-name" className={styles.hero}>
      <div className={styles.intro}>
        <Reveal><p className={styles.eyebrow}>{t('eyebrow')}</p></Reveal>
        <Reveal delay={70}><h1 id="hero-name" className={styles.title}>{t('greeting')}<span className={styles.period}>.</span></h1></Reveal>
        <Reveal delay={130}><p className={styles.role}>{t('role')}</p><p className={styles.lead}>{t('paragraph')}</p></Reveal>
        <Reveal delay={180}><div className={styles.actions}>
          <a href="#tradecatch" className="button-primary">{t('businessLink')} <span aria-hidden>↘</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">{t('codeLink')} <span aria-hidden>↗</span></a>
        </div></Reveal>
      </div>
      <Reveal delay={160} className={styles.portrait}>
        <figure>
          <Image src="/ara.jpg" alt="Ara Ghahramanyan" width={240} height={300} priority sizes="(max-width: 600px) 76px, 180px" className={styles.photo} />
          <figcaption>{t('location')}</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
