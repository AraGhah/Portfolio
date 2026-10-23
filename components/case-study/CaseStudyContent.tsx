import type { Project } from '@/lib/types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/Reveal';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyBody } from './CaseStudyBody';
import { HighlightsSidebar } from './HighlightsSidebar';
import styles from './CaseStudy.module.css';

export function CaseStudyContent({ project }: { project: Project }) {
  const t = useTranslations('tradecatch');
  return (
    <>
      <Reveal><CaseStudyHeader project={project} /></Reveal>
      {project.slug === 'trade-catch' && <Reveal className={styles.businessIntro}>
        <p className={styles.businessLabel}>{t('businessCase')}</p>
        <p>{t('caseIntro')}</p>
        <a href="https://tradecatch.ca/" target="_blank" rel="noreferrer" className={styles.productPreview}>
          <Image src="/tradecatch-home.png" alt={t('screenshotAlt')} width={1265} height={714} sizes="(max-width: 800px) 100vw, 1040px" />
          <span>{t('nextLink')} ↗</span>
        </a>
      </Reveal>}
      <div className={styles.content}>
        <Reveal><CaseStudyBody project={project} /></Reveal>
        <Reveal delay={90}><HighlightsSidebar project={project} /></Reveal>
      </div>
    </>
  );
}
