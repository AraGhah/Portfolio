export const featuredSlugs = ['dossier', 'trade-catch', 'sentinelops'] as const;

type ProjectNote = { summary: string; contribution: string };

const notes: Record<'en' | 'fr', Record<(typeof featuredSlugs)[number], ProjectNote>> = {
  en: {
    dossier: {
      summary: 'From a list of prospects to research worth reading. A pipeline for more relevant, personal outreach.',
      contribution: 'Research pipelines · Data quality · Full stack',
    },
    'trade-catch': {
      summary: 'A missed call shouldn’t mean a missed job. A bilingual receptionist and follow-up platform for contractors.',
      contribution: 'Voice workflows · Automation · Cloud deployment',
    },
    sentinelops: {
      summary: 'Making sense of the noise. Security events become a structured, prioritised incident workflow.',
      contribution: 'Backend architecture · Event processing · AWS',
    },
  },
  fr: {
    dossier: {
      summary: 'D’une liste de prospects à une recherche utile. Un pipeline pour des échanges plus pertinents et personnels.',
      contribution: 'Pipelines de recherche · Qualité des données · Full stack',
    },
    'trade-catch': {
      summary: 'Un appel manqué ne devrait pas coûter un contrat. Une réceptionniste bilingue et un suivi pour les entrepreneurs.',
      contribution: 'Appels vocaux · Automatisation · Déploiement',
    },
    sentinelops: {
      summary: 'Donner du sens au bruit. Les événements de sécurité deviennent un processus de gestion des incidents structuré.',
      contribution: 'Architecture backend · Traitement d’événements · AWS',
    },
  },
};

export function getProjectNote(locale: string, slug: string): ProjectNote | undefined {
  return notes[locale === 'fr' ? 'fr' : 'en'][slug as (typeof featuredSlugs)[number]];
}
