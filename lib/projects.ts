import type { Project } from '@/lib/types';
import { projectsEn, getProjectEn } from '@/content/projects.en';
import { projectsFr, getProjectFr } from '@/content/projects.fr';

export function getProjects(locale: string): Project[] {
  return locale === 'fr' ? projectsFr : projectsEn;
}

export function getProject(locale: string, slug: string): Project | undefined {
  return locale === 'fr' ? getProjectFr(slug) : getProjectEn(slug);
}
