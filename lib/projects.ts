import type { Project } from '@/lib/types';
import { projectsEn, getProjectEn } from '@/content/projects.en';
import { projectsFr, getProjectFr } from '@/content/projects.fr';
import { featuredSlugs } from '@/content/featured';

export function getProjects(locale: string): Project[] {
  return locale === 'fr' ? projectsFr : projectsEn;
}

export function getProject(locale: string, slug: string): Project | undefined {
  return locale === 'fr' ? getProjectFr(slug) : getProjectEn(slug);
}

export function getFeaturedProjects(locale: string): Project[] {
  const projects = getProjects(locale);
  return featuredSlugs.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
}

export function getArchivedProjects(locale: string): Project[] {
  const featured = new Set<string>(featuredSlugs);
  return getProjects(locale).filter((project) => !featured.has(project.slug));
}
