import type { Project } from '@/lib/types';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyBody } from './CaseStudyBody';
import { HighlightsSidebar } from './HighlightsSidebar';
import styles from './CaseStudy.module.css';

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <>
      <CaseStudyHeader project={project} />
      <div className={styles.content}>
        <CaseStudyBody project={project} />
        <HighlightsSidebar project={project} />
      </div>
    </>
  );
}
