import type { Project } from '@/lib/types';

export const projectsFr: Project[] = [
  {
    slug: "file-sharing-system",
    doorNumber: "01",
    order: 1,
    complexity: 2,
    category: "software",
    doorKind: "blueprint",
    title: "File Sharing System",
    type: "Projet d'analyse logicielle et de conception de système",
    tagline: `Analyse et conception d'un système de partage de fichiers avant l'implémentation. Aucun code, et c'était le but : le livrable était une spécification assez précise pour servir de base à la construction.`,
    preview: `Analyse orientée cas d'utilisation d'un système de partage de fichiers multiutilisateur, des diagrammes d'acteurs jusqu'à une spécification écrite qu'une équipe pouvait implémenter.`,
    previewStack: "UML · Specification · Design",
    status: "Delivered",
    links: [],
    meta: [["Rôle", "Analyse et conception"], ["Méthode", "Cas d'utilisation UML"], ["Année", "2026"], ["Statut", "Livré"]],
    whyRated: `Modélisation et spécification rigoureuses avec un raisonnement réel sur les acteurs, les permissions et les cas limites, mais sans implémentation, intégration ni comportement à l'exécution susceptibles de mal tourner.`,
    sections: [
      { heading: "Présentation", body: `Ce projet consistait à analyser et concevoir un système de partage de fichiers avant l'implémentation. L'objectif était de définir ce que le système devait accomplir, d'identifier comment les différents utilisateurs interagiraient avec lui et de documenter son comportement attendu.` },
      { heading: "Besoins", body: `Une plateforme de partage de fichiers devient rapidement difficile à développer si ses acteurs, permissions, fonctionnalités et flux de travail ne sont pas clairement définis avant l'implémentation.` },
      { heading: "Implémentation", body: `J'ai analysé les exigences du système, identifié les acteurs principaux et les cas d'utilisation, créé des diagrammes de cas d'utilisation UML et rédigé des spécifications détaillées expliquant le comportement de chaque interaction majeure.` },
      { heading: "Ma contribution", body: `J'ai participé à l'analyse des exigences, à l'identification des cas d'utilisation, à la modélisation UML et à la création de spécifications fonctionnelles détaillées.` },
      { heading: "Décisions techniques", body: `Transformer une idée de produit large en exigences précises et testables. Chaque cas d'utilisation devait avoir des acteurs clairs, des préconditions, des flux attendus, des scénarios alternatifs et des résultats définis.` },
      { heading: "Bilan", body: `La spécification décrit les acteurs, les permissions, les préconditions, les scénarios alternatifs et les conflits possibles entre utilisateurs.` },
    ],
    highlights: ["Identification des acteurs du système","Analyse des exigences fonctionnelles","Diagrammes de cas d'utilisation UML","Descriptions détaillées des cas d'utilisation","Définition des interactions utilisateur","Frontières et responsabilités du système","Documentation préparée pour l'implémentation"],
    stack: ["UML","Use case diagrams","Requirements engineering","System analysis","Technical documentation"],
  },
  {
    slug: "banking-system-api",
    doorNumber: "02",
    order: 2,
    complexity: 3,
    category: "api",
    doorKind: "vault",
    title: "Banking System API",
    type: "Application backend et base de données · Projet d'équipe académique",
    tagline: `Une application backend qui gère l'information bancaire par des points de terminaison REST structurés et une logique de base de données relationnelle.`,
    preview: `Une API REST pour un système bancaire, avec des opérations CRUD sur les comptes et les transactions gérées en SQL et PL/SQL plutôt que remontées dans la couche applicative.`,
    previewStack: "SQL · PL/SQL · JavaScript",
    status: "Delivered",
    links: [{ label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "API et base de données"], ["Équipe", "En équipe"], ["Année", "2025"], ["Statut", "Livré"]],
    whyRated: `Conception relationnelle, CRUD sur toute la surface de l'API et coordination entre la logique des routes, les requêtes SQL et les procédures stockées, dans un domaine où un mauvais résultat, c'est un mauvais solde.`,
    sections: [
      { heading: "Présentation", body: `L'API du système bancaire est une application backend conçue pour gérer l'information bancaire par des points de terminaison REST structurés et des opérations sur la base de données.` },
      { heading: "Besoins", body: `Le projet exigeait un moyen fiable de créer, lire, mettre à jour et supprimer des dossiers bancaires tout en maintenant un lien clair entre la couche API et la base de données relationnelle.` },
      { heading: "Implémentation", body: `Notre équipe a développé des points de terminaison REST pour les opérations principales et les a connectés à la logique SQL et PL/SQL. L'API offrait une interface structurée par laquelle les applications clientes pouvaient interagir avec les données bancaires.` },
      { heading: "Ma contribution", body: `J'ai contribué à la conception et à l'implémentation des routes de l'API et des opérations sur la base de données. J'ai travaillé avec les requêtes GET, POST, PUT et DELETE et aidé à relier chaque opération à la logique CRUD appropriée.` },
      { heading: "Décisions techniques", body: `Garantir que chaque requête API exécute la bonne opération sur la base de données et retourne un résultat cohérent. Cela exigeait une coordination minutieuse entre la logique des routes, les requêtes SQL et les procédures stockées.` },
      { heading: "Bilan", body: `Les tests de séquences d’appels API permettent de vérifier la cohérence des comptes et des transactions après chaque modification.` },
    ],
    highlights: ["Structure d'API REST","Points de terminaison GET, POST, PUT et DELETE","Opérations sur base de données relationnelle","Requêtes SQL","Procédures et logique PL/SQL","Fonctionnalité CRUD","Gestion des requêtes et des réponses","Développement en équipe"],
    stack: ["JavaScript","SQL","PL/SQL","Oracle Database","REST APIs"],
  },
  {
    slug: "vamp2-survivors",
    doorNumber: "03",
    order: 3,
    complexity: 3,
    category: "software",
    doorKind: "arch",
    title: "VAMP2 Survivors",
    type: "Jeu de survie 3D · Projet académique",
    tagline: `Un jeu de survie 3D inspiré de Vampire Survivors. Le travail intéressant n'a jamais été le rendu, c'était le comportement des ennemis capable de grandir sans s'effondrer sous les conditions.`,
    preview: `Un jeu de survie 3D dans Unity où le vrai travail était le comportement des ennemis : une machine à états, un système d'événements Observer et une mécanique de leurre bâtie sur une interface de ciblage commune.`,
    previewStack: "C# · Unity · OOP",
    status: "Delivered",
    links: [{ label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "Programmeur gameplay"], ["Moteur", "Unity"], ["Année", "2026"], ["Statut", "Livré"]],
    whyRated: `Comportement en temps réel, patrons de conception appliqués délibérément et logique de gameplay testée par unités, mais autonome : pas d'intégrations, pas de persistance, pas de surface de sécurité.`,
    sections: [
      { heading: "Présentation", body: `VAMP2 Survivors est un jeu de survie 3D inspiré de Vampire Survivors. Le joueur survit à des vagues d'ennemis grâce au déplacement, à la stratégie et aux mécaniques de jeu pour maîtriser des rencontres de plus en plus difficiles.` },
      { heading: "Besoins", body: `Le jeu avait besoin d'ennemis capables de changer de comportement proprement, de réagir aux événements et de choisir entre le joueur et d'autres cibles sans créer de code fortement couplé.` },
      { heading: "Implémentation", body: `J'ai implémenté le comportement des ennemis avec une machine à états et utilisé le patron Observer orienté événements pour coordonner les réactions. J'ai aussi créé une mécanique de leurre via l'interface ICibleEnnemi, permettant aux ennemis de viser différents objets selon un contrat commun.` },
      { heading: "Ma contribution", body: `J'ai développé le comportement central des ennemis, implémenté le système de leurre, connecté les réactions orientées événements et écrit des tests unitaires pour la logique de gameplay importante.` },
      { heading: "Décisions techniques", body: `Empêcher la logique ennemie de devenir une grande collection de conditions. Diviser le comportement en états et programmer contre une interface a rendu le système plus facile à étendre, tester et comprendre.` },
      { heading: "Bilan", body: `Une interface de ciblage commune permet aux ennemis de réagir au joueur et aux leurres sans systèmes distincts.` },
    ],
    highlights: ["Comportement ennemi par machine à états","Comportement de gameplay orienté événements","Patron de conception Observer","Sélection de cible basée sur les interfaces","Mécanique de gameplay leurre","Architecture orientée objet","Tests unitaires","Composants réutilisables et maintenables"],
    stack: ["C#","Unity","State machines","Observer pattern","Interfaces","Unit testing"],
  },
  {
    slug: "travel-express",
    doorNumber: "04",
    order: 4,
    complexity: 3,
    category: "fullstack",
    doorKind: "gate",
    title: "Travel Express",
    type: "Application Web de voyage full stack · Projet d'équipe académique",
    tagline: `Une plateforme de voyage full stack où les utilisateurs créent des comptes, explorent destinations et forfaits, gèrent des réservations et enregistrent des favoris. J'ai porté le backend.`,
    preview: `Une plateforme de voyage full stack avec comptes, forfaits, réservations et favoris. J'ai porté le backend : routes API, logique serveur en Node et authentification JWT.`,
    previewStack: "Node.js · React · MongoDB",
    status: "Delivered",
    links: [{ label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "Développeur backend"], ["Équipe", "En équipe"], ["Année", "2026"], ["Statut", "Livré"]],
    whyRated: `Portée full stack avec authentification, deux technologies de base de données et un vrai flux de travail d'équipe, mais un seul service sans enjeux distribués ni pipelines automatisés derrière.`,
    sections: [
      { heading: "Présentation", body: `Travel Express est une plateforme de voyage full stack où les utilisateurs peuvent créer des comptes, explorer des destinations et des forfaits, gérer des réservations, enregistrer des favoris et interagir avec du contenu voyage.` },
      { heading: "Besoins", body: `Le projet exigeait que l'équipe relie une interface réactive, un backend sécurisé et plusieurs opérations sur les bases de données dans une application cohérente. Les renseignements utilisateur et les actions protégées devaient aussi être gérés de façon sécurisée.` },
      { heading: "Implémentation", body: `Nous avons développé une application Web complète avec une interface React, un backend Node.js, des routes API REST, de l'authentification et une persistance en base de données. L'application séparait la présentation frontend de la logique backend et de l'accès aux données.` },
      { heading: "Ma contribution", body: `J'étais principalement responsable du développement backend. J'ai créé les routes API, implémenté la logique côté serveur, intégré la base de données et ajouté l'authentification par JWT. J'ai aussi collaboré avec l'équipe frontend pour définir les structures de requêtes et de réponses.` },
      { heading: "Décisions techniques", body: `Maintenir des données et un comportement d'API cohérents pendant que plusieurs membres de l'équipe travaillaient sur différentes parties de l'application. Des définitions de routes claires et un flux de travail Git nous ont permis d'intégrer les composants de façon fiable.` },
      { heading: "Bilan", body: `Des formats de requête et de réponse communs facilitent l’intégration du backend avec le travail de l’équipe frontend.` },
    ],
    highlights: ["Inscription et authentification des utilisateurs","Routes protégées par JWT","Gestion des forfaits et des destinations","Fonctionnalité de réservation","Favoris et commentaires","Opérations CRUD RESTful","Intégration frontend et backend","Flux de travail d'équipe avec Git","Opérations sur bases relationnelles et documentaires"],
    stack: ["React","Vite","Bootstrap","Node.js","Express","MongoDB","Oracle","SQL","PL/SQL","JWT"],
  },
  {
    slug: "dossier",
    doorNumber: "05",
    order: 5,
    complexity: 4,
    category: "fullstack",
    doorKind: "lab",
    title: "Dossier",
    type: "Plateforme B2B de recherche et de personnalisation",
    tagline: `Un système de recherche et de personnalisation qui aide les équipes de vente sortantes à bâtir des campagnes de courriel à froid pertinentes à grande échelle, sans sacrifier la précision.`,
    preview: `Un pipeline B2B de recherche et de personnalisation : prospects en entrée, recherche et notation, variantes personnalisées en sortie. Un pilote de 100 prospects a atteint un taux de réponse de 9,6 %.`,
    previewStack: "TypeScript · PostgreSQL · Supabase",
    status: "Live",
    links: [{ label: "Site en ligne ↗", href: "https://rundossier.co", primary: true }, { label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "Backend et architecture"], ["Année", "2026"], ["Domaine", "Recherche commerciale B2B"], ["Statut", "En ligne"]],
    whyRated: `Orchestration de workflows en plusieurs étapes, gestion des états dans PostgreSQL, intégrations d’API externes, notation de la qualité des recherches, contrôles de validation, récupération après échecs partiels, mécanismes de reprise, suivi des tâches en échec définitif et surveillance opérationnelle.`,
    sections: [
      { heading: "Vue d’ensemble", body: `Dossier est une plateforme B2B de recherche et de personnalisation conçue pour aider les équipes de prospection commerciale à créer des campagnes de courriels à froid pertinentes à grande échelle. Elle automatise la recherche sur les prospects, évalue la qualité des données, génère des variantes de courriels personnalisés et valide les résultats avant la livraison.` },
      { heading: "Exigences", body: `Personnaliser manuellement des courriels à froid prend beaucoup de temps, surtout lorsqu’il faut traiter des centaines de prospects. Les automatisations existantes produisent souvent des messages génériques ou s’appuient sur des informations incomplètes. Le défi était de construire un système capable d’automatiser la recherche et la personnalisation tout en maintenant la qualité des données, la fiabilité et la cohérence.` },
      { heading: "Implémentation", body: `J’ai développé un pipeline backend en plusieurs étapes qui prend en charge l’ingestion des prospects, la recherche automatisée, la notation de la qualité, la génération de courriels et la validation. Chaque prospect passe par une série d’états suivis, ce qui permet au système de repérer les échecs, de relancer les opérations infructueuses et d’empêcher la livraison de résultats incomplets.` },
      { heading: "Ma contribution", body: `J’étais responsable de l’architecture backend, de la conception de la base de données, de l’orchestration des workflows, des intégrations d’API externes et de la logique de recherche. J’ai mis en place la notation des recherches, la gestion des échecs, les mécanismes de reprise et les contrôles de qualité. J’ai également travaillé sur la surveillance et l’amélioration du pipeline à partir des problèmes découverts lors de livraisons réelles.` },
      { heading: "Décisions techniques", body: `J’ai utilisé PostgreSQL pour persister les états des workflows et suivre chaque prospect tout au long du pipeline. La notation des recherches aidait à distinguer les informations utiles des résultats incomplets, tandis que les contrôles de validation empêchaient les sorties de faible qualité de progresser. Les mécanismes de reprise et le suivi des tâches en échec définitif facilitaient l’analyse et la récupération sans perdre le travail déjà terminé.` },
      { heading: "Défis", body: `L’un des principaux défis était de gérer les réponses imprévisibles des fournisseurs de recherche externes. Certaines requêtes échouaient, tandis que d’autres renvoyaient des informations incomplètes ou incohérentes. Un autre défi était la gestion des échecs partiels entre plusieurs étapes du workflow, particulièrement lors du traitement de lots plus importants.` },
      { heading: "Ce que j’ai appris", body: `Passer d’un pilote de 100 prospects à une livraison de 500 prospects m’a montré à quel point les petits problèmes de fiabilité deviennent rapidement plus visibles à grande échelle. J’ai appris l’importance de suivre les états de chaque workflow, de valider les données avant de les utiliser et de concevoir des mécanismes de récupération pour les échecs partiels. J’ai aussi appris qu’une requête API réussie ne signifie pas nécessairement un résultat réussi, et que surveiller la qualité des données est aussi important que surveiller l’exécution.` },
      { heading: "Résultat", body: `Dossier a été testé lors d’un pilote externe portant sur 100 prospects documentés, suivi d’une livraison plus importante de 500 prospects. La deuxième livraison a révélé des difficultés liées à la cohérence des données, au comportement des reprises et à la visibilité opérationnelle. Ces expériences ont permis de repérer les améliorations nécessaires à la fiabilité et au traitement de volumes plus importants.` },
      { heading: "Ce que j’améliorerais", body: `J’améliorerais la visibilité opérationnelle en ajoutant un tableau de bord centralisé pour suivre les états des prospects, les raisons des échecs et les temps de traitement. J’explorerais aussi des stratégies de reprise plus adaptatives, des mesures plus solides de la qualité des recherches et un meilleur suivi des coûts des API externes. Ces améliorations rendraient le système plus facile à maintenir et plus prévisible lors de livraisons importantes.` },
    ],
    highlights: ["Orchestration asynchrone de workflows en plusieurs étapes","Ingestion et déduplication des prospects","Recherche automatisée sur les entreprises et les prospects","Intégrations d’API et de fournisseurs de données externes","Notation de la qualité des recherches","Personnalisation de courriels assistée par IA","Plusieurs variantes de courriels personnalisés","Validation des données et contrôles de qualité","Gestion des états des workflows dans PostgreSQL","Mécanismes de reprise et suivi des tâches en échec définitif","Livraison automatisée de fichiers CSV","Surveillance opérationnelle et analyse des échecs"],
    stack: ["TypeScript","Node.js","Express","React","PostgreSQL","Supabase","n8n","Apify"],
  },
  {
    slug: "trade-catch",
    doorNumber: "06",
    order: 6,
    complexity: 4,
    category: "fullstack",
    doorKind: "slat",
    title: "TradeCatch",
    type: "Entreprise actuelle · Fondateur et développeur",
    tagline: `Une plateforme bilingue de gestion des appels et de suivi des prospects assistée par IA que je construis pour les entrepreneurs du Québec.`,
    preview: `Mon entreprise actuelle : récupération d’appels manqués, qualification des demandes et suivi des soumissions.`,
    previewStack: "Next.js · Cloudflare Workers · Twilio",
    status: "Live",
    links: [{ label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "Fondateur et développeur"], ["Année", "2026"], ["Marché", "Entrepreneurs du Québec"], ["Statut", "Live"]],
    whyRated: `Gestion bilingue des appels, qualification des prospects, parcours de rendez-vous et de relance de soumissions, escalades fondées sur des règles, gestion des désabonnements, déploiement Cloudflare et surveillance opérationnelle. L’IA conversationnelle reste séparée des décisions commerciales critiques.`,
    sections: [
      { heading: "Vue d’ensemble", body: `TradeCatch est une plateforme bilingue de gestion des prospects et d’automatisation conçue pour les entrepreneurs et les entreprises de services locaux. Elle aide les entreprises à récupérer les occasions manquées, à répondre aux appels entrants, à qualifier les prospects, à planifier des rendez-vous, à relancer les soumissions et à gérer les interactions clients depuis un seul tableau de bord.` },
      { heading: "Le problème", body: `Les entrepreneurs manquent souvent des appels lorsqu’ils travaillent sur un chantier, répondent trop tard aux clients potentiels ou oublient de relancer leurs soumissions. Ces petits délais peuvent entraîner la perte de contrats et de revenus. Le défi était de créer un système capable de gérer automatiquement les communications clients tout en restant fiable, professionnel et facile à utiliser pour les entrepreneurs.` },
      { heading: "Implémentation", body: `J’ai conçu un workflow automatisé qui relie la réponse téléphonique, la récupération des appels manqués, la qualification des prospects, la prise de rendez-vous et les relances de soumissions. Les informations clients passent par des parcours structurés qui aident les entrepreneurs à repérer les occasions, à prioriser les demandes et à répondre sans gérer manuellement chaque interaction.` },
      { heading: "Réceptionniste téléphonique IA", body: `TradeCatch comprend une réceptionniste IA bilingue qui répond aux appels entrants 24 h sur 24, en français et en anglais. Elle identifie les besoins de l’appelant, recueille ses coordonnées, détermine le degré d’urgence et prépare des informations structurées sur le travail pour l’entrepreneur.

J’ai conçu le système pour séparer les conversations générées par IA des décisions commerciales critiques. Les prix, les restrictions de planification, la gestion des urgences et les escalades suivent des règles définies plutôt que de dépendre entièrement des réponses de l’IA.` },
      { heading: "Ma contribution", body: `En tant que fondateur et développeur, je suis responsable du développement technique et de l’orientation commerciale de TradeCatch. J’ai conçu l’architecture du produit, l’expérience client, les workflows d’automatisation, la logique de qualification des prospects et le site Web. Je gère aussi le déploiement, la configuration Cloudflare, les tests et les améliorations continues.

Au-delà du développement, je travaille à comprendre les besoins des entrepreneurs, à définir l’offre de service et à préparer la plateforme pour de véritables opérations clients.` },
      { heading: "Décisions techniques", body: `L’une des décisions les plus importantes a été de séparer l’IA conversationnelle de la logique métier. L’IA prend en charge les conversations naturelles et la collecte d’informations, tandis que les opérations critiques comme la planification, les désabonnements, les restrictions de prix et les escalades suivent des règles explicites.

J’ai aussi structuré les workflows autour de chaque interaction client afin que les informations recueillies pendant un appel puissent servir aux notifications de l’entrepreneur, à la qualification des prospects et aux suivis.` },
      { heading: "Défis", body: `Le principal défi était de concevoir une automatisation qui semble naturelle aux clients tout en restant prévisible pour les entreprises.

La gestion des conversations en français et en anglais a ajouté des considérations liées à la communication, à la cohérence et aux attentes des clients.

Un autre défi était de déterminer quelles actions pouvaient être automatisées et lesquelles exigeaient une intervention humaine, particulièrement pour les urgences, les demandes incertaines et les règles de planification propres à chaque entreprise.` },
      { heading: "Ce que j’ai appris", body: `Construire TradeCatch m’a appris que l’IA conversationnelle a besoin de plus qu’une bonne instruction pour fonctionner comme service aux entreprises. J’ai appris l’importance de séparer les conversations flexibles des règles opérationnelles strictes, particulièrement pour les réservations, les prix et les demandes clients.

J’ai aussi acquis de l’expérience dans la conception de workflows autour de véritables processus d’affaires plutôt que de fonctionnalités isolées. Construire le produit comme développeur et fondateur m’a aidé à comprendre comment les décisions techniques influencent l’intégration des clients, la fiabilité, l’expérience client et le service dans son ensemble.` },
      { heading: "État actuel", body: `TradeCatch est en ligne et accueille des entreprises pilotes fondatrices au Québec. Je travaille activement sur l’intégration des clients, les tests, la surveillance et l’amélioration de la plateforme autour de véritables processus d’entrepreneurs.

La priorité actuelle est d’améliorer l’expérience des entrepreneurs et de leurs clients tout en validant le fonctionnement du service dans les opérations quotidiennes.` },
      { heading: "Ce que j’améliorerais", body: `Mon prochain objectif est de rendre la plateforme plus adaptable aux différents processus des entrepreneurs. Cela comprend l’amélioration de la configuration propre à chaque entreprise, la qualification des prospects et la gestion des suivis de rendez-vous et de soumissions.

J’aimerais aussi développer les rapports opérationnels pour aider les entrepreneurs à mieux comprendre la récupération des appels manqués, l’activité des prospects, la conversion en rendez-vous et la performance des suivis.` },
    ],
    highlights: ["Réceptionniste téléphonique IA bilingue en français et en anglais","Gestion automatisée des appels entrants 24 h sur 24","Workflows de récupération des appels manqués","Qualification automatisée des prospects","Collecte structurée des informations clients et des travaux","Notifications aux entrepreneurs et acheminement des prospects","Workflows de prise de rendez-vous","Relances automatisées de soumissions","Escalades et gestion de la sécurité fondées sur des règles","Séparation de l’IA conversationnelle et de la logique métier","Gestion des désabonnements des clients","Tableau de bord centralisé de gestion des prospects","Configuration et déploiement Cloudflare","Tests des workflows et surveillance opérationnelle"],
    stack: ["Next.js","React","TypeScript","Cloudflare Workers","OpenNext","Twilio","Stripe"],
  },
  {
    slug: "internship-desk",
    doorNumber: "07",
    order: 7,
    complexity: 4,
    category: "fullstack",
    doorKind: "gate",
    title: "Internship Desk",
    type: "Plateforme de stages propulsée par l'IA · Projet personnel",
    tagline: `Une plateforme conçue pour centraliser et automatiser la recherche de stages, la préparation des candidatures, la prise de contact avec les recruteurs et le suivi des candidatures.`,
    preview: `Un seul flux pour trouver des stages, les associer à un CV, rechercher les recruteurs, rédiger des candidatures propres à chaque poste et suivre les relances, en gardant les décisions importantes visibles.`,
    previewStack: "Full stack · AI automation · Workflows",
    status: "Public",
    links: [{ label: "Dépôt", href: "https://github.com/AraGhah/CareersAgents", primary: true }],
    meta: [["Rôle", "Développement full stack et automatisation IA"], ["Équipe", "Individuel"], ["Année", "2026"], ["Statut", "Public"]],
    whyRated: `Découverte automatisée, appariement basé sur le CV, recherche de recruteurs, candidatures générées par IA et suivi des relances dans un même flux, où un mauvais appariement ou un mauvais contact coûte plus cher que de postuler à la main.`,
    sections: [
      { heading: "Présentation", body: `Internship Desk est une plateforme conçue pour réduire le travail répétitif lié à la recherche et à la gestion des candidatures de stage. Elle réunit la découverte d'offres, la gestion du CV, les candidatures personnalisées, la recherche de recruteurs et les relances dans un seul flux de travail.` },
      { heading: "Besoins", body: `L'automatisation ne pouvait pas se faire au détriment de la pertinence. Chaque stage devait correspondre au profil du candidat, et les courriels et lettres de présentation générés devaient rester propres à l'entreprise et au poste au lieu de devenir du contenu IA générique.` },
      { heading: "Implémentation", body: `J'ai conçu et développé la plateforme en tant que projet individuel, en combinant une interface Web avec des flux automatisés pour la découverte de stages, l'appariement basé sur le CV, la recherche de recruteurs, la génération de candidatures personnalisées et le suivi des relances.` },
      { heading: "Ma contribution", body: `J'ai pris en charge l'ensemble du projet, de l'interface et du parcours de candidature jusqu'à l'architecture d'automatisation et aux fonctionnalités assistées par l'IA.` },
      { heading: "Décisions techniques", body: `Le principal risque était une automatisation erronée. Trouver le mauvais contact, postuler à un poste non pertinent ou générer de l'information inexacte rendrait le système moins utile que de postuler manuellement.` },
      { heading: "Bilan", body: `Le processus garde visibles la correspondance des postes, le choix des destinataires et le contenu des candidatures pour permettre une révision.` },
    ],
    highlights: ["Découverte de stages","Appariement basé sur le CV","Recherche de recruteurs","Courriels et lettres de présentation personnalisés","Suivi des candidatures","Suivi des relances","Révision humaine des étapes automatisées","Flux de candidature unifié"],
    stack: ["Full stack web","Workflow automation","LLM integration","AI assisted writing"],
  },
  {
    slug: "ai-investment-platform",
    doorNumber: "08",
    order: 8,
    complexity: 4,
    category: "fullstack",
    doorKind: "vault",
    title: "AI Investment Platform",
    type: "Plateforme de recherche financière · Projet personnel",
    tagline: `Une plateforme de recherche en investissement propulsée par l'IA qui réunit recherche de marché, analyse d'entreprises, suivi de portefeuille et agents spécialisés dans une seule interface.`,
    preview: `Des agents IA spécialisés pour la recherche de marché, l'analyse d'entreprises, la surveillance du portefeuille et les questions sur l'investissement, reliés à un tableau de bord où les données sourcées restent séparées de l'analyse générée.`,
    previewStack: "Multi agent AI · Full stack · Dashboard",
    status: "Public",
    links: [{ label: "Dépôt", href: "https://github.com/AraGhah/CapitalOS", primary: true }],
    meta: [["Rôle", "Développement full stack et architecture IA"], ["Équipe", "Individuel"], ["Année", "2026"], ["Statut", "Public"]],
    whyRated: `Une architecture multiagent aux responsabilités distinctes, des données de marché et de portefeuille réunies dans un tableau de bord, et une frontière stricte entre l'information sourcée et l'analyse générée, dans un domaine où une donnée périmée change la conclusion.`,
    sections: [
      { heading: "Présentation", body: `L'AI Investment Platform est conçue pour organiser la grande quantité d'information qu'implique la recherche en investissement. Des agents IA spécialisés analysent les entreprises, les nouvelles financières et les données de marché, tandis que la plateforme offre un endroit central pour suivre et examiner un portefeuille.` },
      { heading: "Besoins", body: `L'information financière devait rester traçable et séparée de l'analyse générée. Le système devait aider l'utilisateur à comprendre pourquoi une information comptait au lieu de simplement produire des conclusions d'investissement non étayées.` },
      { heading: "Implémentation", body: `J'ai conçu la plateforme autour de plusieurs agents IA spécialisés aux responsabilités distinctes, dont la recherche de marché, l'analyse d'entreprises, la surveillance du portefeuille et les questions-réponses sur l'investissement. Ces systèmes sont reliés par un tableau de bord unifié.` },
      { heading: "Ma contribution", body: `J'ai conçu l'architecture multiagent et le flux principal du produit, y compris la façon dont la recherche, les données de portefeuille, l'information de marché et l'analyse générée par l'IA sont organisées et présentées à l'utilisateur.` },
      { heading: "Décisions techniques", body: `Le plus grand risque était de traiter l'analyse générée par l'IA comme un fait. L'information financière change rapidement, et une information inexacte ou périmée peut complètement changer l'interprétation d'un investissement.` },
      { heading: "Bilan", body: `Le tableau de bord distingue les données sources des analyses générées pour permettre de consulter les informations derrière chaque réponse.` },
    ],
    highlights: ["Architecture multiagent","Agent de recherche de marché","Agent d'analyse d'entreprises","Surveillance du portefeuille","Questions-réponses sur l'investissement","Analyse des nouvelles financières","Données sourcées séparées de l'analyse générée","Tableau de bord de recherche unifié"],
    stack: ["Full stack web","Multi agent AI","LLM integration","Financial data","Dashboard design"],
  },
  {
    slug: "urban-crisis-protocol",
    doorNumber: "09",
    order: 9,
    complexity: 5,
    category: "software",
    doorKind: "blueprint",
    title: "Urban Crisis Protocol",
    type: "Jeu de simulation IA · Projet d'équipe académique",
    tagline: `Un jeu de simulation réaliste où un joueur humain affronte une IA pour développer, gérer et protéger une ville dans des conditions changeantes.`,
    preview: `Deux villes, l'une gérée par le joueur et l'autre entièrement par une IA, s'affrontent dans les mêmes conditions pendant que tornades, pannes de courant et attaques de bandits interrompent les deux. Ma part : les événements de crise qui empêchent l'un ou l'autre camp de progresser trop facilement.`,
    previewStack: "C# · Unity · AI decision-making",
    status: "Public",
    links: [],
    meta: [["Rôle", "Systèmes de gameplay et événements"], ["Équipe", "En équipe"], ["Année", "2026"], ["Statut", "Public"]],
    whyRated: `Deux villes simulées côte à côte, dont l'une est pilotée par une IA qui prend ses propres décisions, avec des crises qui se répercutent sur les ressources, les infrastructures et une destruction à grande échelle des deux côtés tout en gardant la compétition équitable, le tout en équipe. Évalué sur la conception et la portée, pas sur l'achèvement.`,
    sections: [
      { heading: "Présentation", body: `Urban Crisis Protocol est un jeu de simulation développé avec Unity et C# où deux villes s'affrontent. L'une est gérée par le joueur, tandis que la seconde est entièrement contrôlée par une IA. L'objectif est d'observer comment l'IA développe sa ville, gère ses ressources, réagit aux crises et adapte sa stratégie pour surpasser le joueur humain.` },
      { heading: "Besoins", body: `Les deux villes devaient fonctionner dans des conditions comparables pour que la compétition garde tout son sens. L'IA devait prendre ses propres décisions tout en réagissant aux mêmes types de problèmes et d'opportunités que le joueur.` },
      { heading: "Implémentation", body: `Notre équipe a développé la simulation dans Unity en C#. Le projet combine gestion de ville, systèmes de ressources, prise de décision par IA et événements perturbateurs comme des tornades, des pannes de courant, des attaques de bandits et une destruction à grande échelle.` },
      { heading: "Ma contribution", body: `Mon objectif était de rendre la compétition plus difficile et plus imprévisible. J'ai travaillé sur des événements de crise qui interrompent le développement, forcent à la fois le joueur et l'IA à s'adapter et empêchent l'une ou l'autre ville de progresser trop facilement.` },
      { heading: "Décisions techniques", body: `Le principal défi était de créer des événements capables d'affecter les deux camps sans rendre la simulation injuste. L'IA devait aussi réagir de façon logique aux situations imprévues au lieu de suivre une stratégie entièrement figée.` },
      { heading: "Bilan", body: `Les mêmes crises permettent d’observer comment le joueur et la ville contrôlée par l’ordinateur réagissent aux changements.` },
    ],
    highlights: ["Compétition humain contre IA","Ville rivale contrôlée par une IA","Gestion de ville et de ressources","Systèmes de crise orientés événements","Événements de tornade et de panne de courant","Attaques de bandits","Destruction à grande échelle","Développement en équipe"],
    stack: ["C#","Unity","AI decision-making","Event driven systems","Gameplay systems"],
  },
  {
    slug: "sentinelops",
    doorNumber: "10",
    order: 10,
    complexity: 5,
    category: "software",
    doorKind: "secure",
    title: "SentinelOps",
    type: "Plateforme infonuagique de sécurité et de gestion des incidents",
    tagline: `Une plateforme d’opérations de sécurité conçue pour recueillir, normaliser et analyser les événements de sécurité infonuagiques tout en aidant les analystes à enquêter sur les menaces et à gérer les incidents.`,
    preview: `Les événements de sécurité arrivent de nombreux systèmes sous de nombreux formats. SentinelOps les normalise en un seul modèle et les fait traverser un flux de gestion d'incidents structuré, pour que les analystes traitent une file priorisée plutôt qu'un torrent.`,
    previewStack: "AWS · ASP.NET Core · Incident response",
    status: "Public",
    links: [{ label: "Dépôt non public", href: "#" }],
    meta: [["Rôle", "Architecture et full stack"], ["Année", "2026"], ["Domaine", "Opérations de sécurité"], ["Statut", "En développement"]],
    whyRated: `Ingestion infonuagique d’événements de sécurité, schémas d’événements normalisés, architecture d’API ASP.NET Core, modélisation relationnelle des données, gestion du cycle de vie des incidents, authentification, validation des entrées, journalisation structurée, gestion des erreurs et séparation des responsabilités dans le système.`,
    sections: [
      { heading: "Vue d’ensemble", body: `SentinelOps est une plateforme infonuagique d’opérations de sécurité qui centralise la surveillance des événements de sécurité et la gestion des incidents. Elle transforme les événements entrants en enregistrements structurés, ce qui permet aux analystes d’examiner les alertes, d’enquêter sur les activités suspectes, de prioriser les menaces potentielles et de suivre les incidents depuis un tableau de bord centralisé.` },
      { heading: "Le problème", body: `Les événements de sécurité proviennent de différents systèmes, chacun produisant des journaux aux structures et aux niveaux de détail différents. Sans méthode cohérente pour traiter ces informations, il devient difficile d’identifier les menaces significatives.

Le défi était de concevoir un système capable de standardiser les données de sécurité entrantes, de préserver les détails importants pour les enquêtes et de relier les événements à un workflow structuré de réponse aux incidents.` },
      { heading: "Implémentation", body: `J’ai conçu une architecture full stack reliant le traitement infonuagique des événements à un backend ASP.NET Core, une base de données PostgreSQL et un tableau de bord React.

La plateforme valide et normalise les événements de sécurité entrants avant de les stocker dans un format cohérent. Les événements peuvent ensuite être associés à des incidents, ce qui permet aux analystes d’enquêter sur l’activité, de gérer les priorités et de suivre l’état des incidents.` },
      { heading: "Ma contribution", body: `J’ai conçu l’architecture globale du système, le schéma des événements de sécurité, la structure des API backend, le modèle de base de données et l’expérience frontend.

Je me suis concentré sur la séparation de l’ingestion, de la validation, de la normalisation, du stockage et de la gestion des incidents en responsabilités distinctes.

J’ai aussi travaillé sur l’authentification, la cohérence des réponses API, la journalisation, la gestion des erreurs et la structure nécessaire aux futures intégrations infonuagiques.` },
      { heading: "Décisions techniques", body: `L’une de mes principales décisions architecturales a été d’introduire un modèle standardisé d’événement de sécurité plutôt que de laisser chaque source de données imposer sa propre structure dans toute l’application.

Cela facilite le traitement d’événements de différentes sources sans devoir constamment modifier le backend ou le tableau de bord.

J’ai aussi séparé les informations brutes des événements des données de gestion des incidents afin de préserver le contexte des enquêtes tout en permettant aux incidents d’évoluer indépendamment.

Une autre décision importante a été d’utiliser une base de données relationnelle pour maintenir des relations claires entre les événements de sécurité, les alertes et les incidents.` },
      { heading: "Défis", body: `L’un des principaux défis était de concevoir un schéma d’événement flexible capable de représenter différents types d’activités de sécurité sans perdre de détails importants.

Un autre défi était de maintenir la traçabilité entre un incident et les événements d’origine qui l’ont déclenché.

J’ai aussi dû réfléchir à la façon dont la plateforme devait gérer les données d’événements invalides, les échecs de traitement et les informations incohérentes sans compromettre la fiabilité du workflow de gestion des incidents.` },
      { heading: "Ce que j’ai appris", body: `Construire SentinelOps m’a appris que les systèmes de sécurité exigent une approche différente de l’intégrité des données et de la gestion des erreurs. J’ai appris à quel point il est important de préserver les informations d’origine des événements tout en transformant les données dans un format standardisé.

J’ai aussi approfondi ma compréhension de la conception de systèmes backend autour de responsabilités claires, particulièrement pour séparer le traitement des événements de la gestion des incidents.

L’une des leçons les plus importantes est qu’une alerte n’est utile que si l’analyste peut comprendre son origine, ce qui l’a déclenchée et ses liens avec d’autres activités de sécurité.` },
      { heading: "État actuel", body: `SentinelOps est un projet de portfolio en évolution, axé sur l’architecture des opérations de sécurité et le développement full stack.

Les fondations actuelles couvrent le traitement structuré des événements de sécurité, la gestion des incidents, les API backend, le stockage persistant et un tableau de bord destiné aux analystes.

Les prochaines étapes porteront sur l’élargissement des intégrations AWS, l’enrichissement automatisé des événements, l’amélioration des capacités de détection et le renforcement de l’automatisation de l’infrastructure.` },
      { heading: "Ce que j’améliorerais", body: `J’élargirais le système d’ingestion des événements pour prendre en charge davantage de services de sécurité AWS et j’introduirais un enrichissement automatisé pour fournir plus de contexte sur les activités suspectes.

J’explorerais aussi la corrélation d’événements pour repérer les relations entre des alertes qui pourraient autrement sembler sans lien.

Les autres améliorations comprendraient des notifications en temps réel, l’infrastructure comme code, une journalisation d’audit plus détaillée et des tests automatisés des workflows sensibles sur le plan de la sécurité.` },
    ],
    highlights: ["Architecture infonuagique d’opérations de sécurité","Schéma standardisé des événements de sécurité","Ingestion et traitement infonuagiques des événements","Validation et normalisation des événements","Traçabilité des événements bruts","Relations entre alertes de sécurité et incidents","Création et priorisation des incidents","Gestion de l’état et du cycle de vie des incidents","API REST ASP.NET Core","Modélisation relationnelle des données PostgreSQL","Tableau de bord React pour les analystes","Authentification API et validation des entrées","Gestion structurée des erreurs et journalisation","Documentation des API","Architecture modulaire pour les futures intégrations"],
    stack: ["AWS","ASP.NET Core","C#","React","PostgreSQL","REST APIs"],
  },
];

export function getProjectFr(slug: string) {
  return projectsFr.find((p) => p.slug === slug);
}
