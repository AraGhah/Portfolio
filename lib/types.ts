export type Complexity = 2 | 3 | 4 | 5;

export type DoorKind =
  | 'blueprint'
  | 'vault'
  | 'arch'
  | 'gate'
  | 'lab'
  | 'slat'
  | 'secure';

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface NarrativeSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  doorNumber: string;
  order: number;
  complexity: Complexity;
  doorKind: DoorKind;
  title: string;
  type: string;
  tagline: string;
  preview: string;
  previewStack: string;
  status: 'Delivered' | 'Live' | 'In development';
  statusNote?: string;
  links: ProjectLink[];
  meta: Array<[string, string]>;
  whyRated: string;
  sections: NarrativeSection[];
  result?: string;
  highlights: string[];
  stack: string[];
}
