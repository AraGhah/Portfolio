import type { Project } from '@/lib/types';
import { Reveal } from '@/components/motion/Reveal';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyBody } from './CaseStudyBody';
import { HighlightsSidebar } from './HighlightsSidebar';
import styles from './CaseStudy.module.css';

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <>
      <Reveal><CaseStudyHeader project={project} /></Reveal>
      <div className={styles.content}>
        <Reveal><CaseStudyBody project={project} /></Reveal>
        <Reveal delay={90}><HighlightsSidebar project={project} /></Reveal>
      </div>
    </>
  );
}
