export const featuredSlugs = ['dossier', 'trade-catch', 'sentinelops'] as const;

type ProjectNote = { summary: string; contribution: string };

const notes: Record<'en' | 'fr', Record<(typeof featuredSlugs)[number], ProjectNote>> = {
  en: {
    dossier: {
      summary: 'Research, scoring and email personalization for outbound sales teams.',
      contribution: 'Research pipelines · Data quality · Full stack',
    },
    'trade-catch': {
      summary: 'Bilingual call handling and follow-up workflows built with Next.js and Cloudflare.',
      contribution: 'Voice workflows · Automation · Cloud deployment',
    },
    sentinelops: {
      summary: 'Security event processing and incident management with ASP.NET Core and AWS.',
      contribution: 'Backend architecture · Event processing · AWS',
    },
  },
  fr: {
    dossier: {
      summary: 'Recherche, notation et personnalisation de courriels pour les équipes de vente.',
      contribution: 'Pipelines de recherche · Qualité des données · Full stack',
    },
    'trade-catch': {
      summary: 'Gestion bilingue des appels et parcours de suivi avec Next.js et Cloudflare.',
      contribution: 'Appels vocaux · Automatisation · Déploiement',
    },
    sentinelops: {
      summary: 'Traitement d’événements de sécurité et gestion des incidents avec ASP.NET Core et AWS.',
      contribution: 'Architecture backend · Traitement d’événements · AWS',
    },
  },
};

export function getProjectNote(locale: string, slug: string): ProjectNote | undefined {
  return notes[locale === 'fr' ? 'fr' : 'en'][slug as (typeof featuredSlugs)[number]];
}
