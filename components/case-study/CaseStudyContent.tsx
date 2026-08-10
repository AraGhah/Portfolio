import type { Project } from '@/lib/types';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyBody } from './CaseStudyBody';
import { HighlightsSidebar } from './HighlightsSidebar';

type CaseStudyContentProps = {
  project: Project;
};

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <>
      <CaseStudyHeader project={project} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 'clamp(40px, 5vw, 74px)',
          alignItems: 'start',
        }}
      >
        <CaseStudyBody project={project} />
        <HighlightsSidebar project={project} />
      </div>
    </>
  );
}
