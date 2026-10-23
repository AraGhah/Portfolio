import type { Project } from '@/lib/types';

export const projectsEn: Project[] = [
  {
    slug: 'file-sharing-system',
    doorNumber: '01',
    order: 1,
    complexity: 2,
    category: 'software',
    doorKind: 'blueprint',
    title: 'File Sharing System',
    type: 'Software analysis and system design project',
    tagline: `Analysis and design of a file sharing system before implementation. No code, which was the point: the deliverable was a specification precise enough to build from.`,
    preview: `Use case driven analysis of a multi user file sharing system, taken from actor diagrams to a written specification a team could build from.`,
    previewStack: 'UML · Specification · Design',
    status: 'Delivered',
    links: [],
    meta: [['Role', 'Analysis and design'], ['Method', 'UML use cases'], ['Year', '2026'], ['Status', 'Delivered']],
    whyRated: `Rigorous modelling and specification work with real reasoning about actors, permissions and edge cases, but no implementation, integration or runtime behaviour to get wrong.`,
    sections: [
      { heading: "Overview", body: `This project involved analyzing and designing a file sharing system before implementation. The objective was to define what the system should accomplish, identify how different users would interact with it and document its expected behavior.` },
      { heading: "Requirements", body: `A file sharing platform quickly becomes difficult to develop if its actors, permissions, features and workflows are not clearly defined before implementation.` },
      { heading: "Implementation", body: `I analyzed the system requirements, identified the principal actors and use cases, created UML use case diagrams and wrote detailed specifications explaining the behavior of each major interaction.` },
      { heading: "My contribution", body: `I participated in requirements analysis, use case identification, UML modeling and the creation of detailed functional specifications.` },
      { heading: "Technical decisions", body: `Turning a broad product idea into precise and testable requirements. Each use case needed clear actors, preconditions, expected flows, alternative scenarios and outcomes.` },
      { heading: "What I learned", body: "The specification covers actors, permissions, preconditions, alternative flows and potential conflicts between users." },
    ],
    highlights: ["Identification of system actors","Functional requirement analysis","UML use case diagrams","Detailed use case descriptions","Definition of user interactions","System boundaries and responsibilities","Documentation prepared for implementation"],
    stack: ["UML","Use case diagrams","Requirements engineering","System analysis","Technical documentation"],
  },
  {
    slug: 'banking-system-api',
    doorNumber: '02',
    order: 2,
    complexity: 3,
    category: 'api',
    doorKind: 'vault',
    title: 'Banking System API',
    type: 'Backend and database application · Academic team project',
    tagline: `A backend application managing banking information through structured REST endpoints and relational database logic.`,
    preview: `A REST API for a banking system, with CRUD over accounts and transactions handled in SQL and PL/SQL rather than pushed up into the application layer.`,
    previewStack: 'SQL · PL/SQL · JavaScript',
    status: 'Delivered',
    links: [{ label: 'Repository not public', href: '#' }],
    meta: [['Role', 'API and database'], ['Team', 'Collaborative'], ['Year', '2025'], ['Status', 'Delivered']],
    whyRated: `Relational design, CRUD across a full API surface and coordination between route logic, SQL queries and stored procedures, in a domain where a wrong result is a wrong balance.`,
    sections: [
      { heading: "Overview", body: `The Banking System API is a backend application designed to manage banking information through structured REST endpoints and database operations.` },
      { heading: "Requirements", body: `The project required a reliable way to create, retrieve, update and delete banking records while maintaining a clear connection between the API layer and the relational database.` },
      { heading: "Implementation", body: `Our team developed REST endpoints for the principal operations and connected them to SQL and PL/SQL database logic. The API provided a structured interface through which client applications could interact with the banking data.` },
      { heading: "My contribution", body: `I contributed to the design and implementation of the API routes and database operations. I worked with GET, POST, PUT and DELETE requests and helped connect each operation to the appropriate CRUD logic.` },
      { heading: "Technical decisions", body: `Ensuring that every API request performed the correct database operation and returned a consistent result. That required careful coordination between route logic, SQL queries and stored procedures.` },
      { heading: "What I learned", body: "Testing sequences of API calls helped check that account and transaction data remained consistent after changes." },
    ],
    highlights: ["REST API structure","GET, POST, PUT and DELETE endpoints","Relational database operations","SQL queries","PL/SQL procedures and logic","CRUD functionality","Request and response handling","Team based development"],
    stack: ["JavaScript","SQL","PL/SQL","Oracle Database","REST APIs"],
  },
  {
    slug: 'vamp2-survivors',
    doorNumber: '03',
    order: 3,
    complexity: 3,
    category: 'software',
    doorKind: 'arch',
    title: 'VAMP2 Survivors',
    type: '3D survival game · Academic project',
    tagline: `A 3D survival game inspired by Vampire Survivors. The interesting work was never the rendering, it was enemy behaviour that could grow without collapsing into conditions.`,
    preview: `A 3D survival game in Unity where the real work was enemy behaviour: a state machine, an Observer driven event system, and a decoy mechanic built on a shared targeting interface.`,
    previewStack: 'C# · Unity · OOP',
    status: 'Delivered',
    links: [{ label: 'Repository not public', href: '#' }],
    meta: [['Role', 'Gameplay programmer'], ['Engine', 'Unity'], ['Year', '2026'], ['Status', 'Delivered']],
    whyRated: `Real time behaviour, design patterns applied deliberately and unit tested gameplay logic, but self contained: no integrations, no persistence, no security surface.`,
    sections: [
      { heading: "Overview", body: `VAMP2 Survivors is a 3D survival game inspired by Vampire Survivors. The player survives repeated enemy attacks using movement, strategy and game mechanics to control increasingly difficult encounters.` },
      { heading: "Requirements", body: `The game needed enemies that could change behavior cleanly, react to events and select between the player and alternative targets without creating tightly coupled code.` },
      { heading: "Implementation", body: `I implemented enemy behavior using a state machine and used an event driven Observer pattern to coordinate reactions. I also created a decoy mechanic through the ICibleEnnemi interface, allowing enemies to target different objects through a shared contract.` },
      { heading: "My contribution", body: `I developed core enemy behavior, implemented the decoy system, connected event driven reactions and wrote unit tests for important gameplay logic.` },
      { heading: "Technical decisions", body: `Preventing enemy logic from becoming one large collection of conditions. Dividing behavior into states and programming against an interface made the system easier to extend, test and understand.` },
      { heading: "What I learned", body: "A shared targeting interface lets enemies respond to both the player and decoys without separate targeting systems." },
    ],
    highlights: ["State machine enemy behaviour","Event driven gameplay behavior","Observer design pattern","Interface based target selection","Decoy gameplay mechanic","Object oriented architecture","Unit testing","Reusable and maintainable components"],
    stack: ["C#","Unity","State machines","Observer pattern","Interfaces","Unit testing"],
  },
  {
    slug: 'travel-express',
    doorNumber: '04',
    order: 4,
    complexity: 3,
    category: 'fullstack',
    doorKind: 'gate',
    title: 'Travel Express',
    type: 'Full stack travel web application · Academic team project',
    tagline: `A full stack travel platform where users create accounts, explore destinations and packages, manage reservations and save favorites. I owned the backend.`,
    preview: `A full stack travel platform with accounts, packages, reservations and favorites. I owned the backend: API routes, server logic in Node and JWT authentication.`,
    previewStack: 'Node.js · React · MongoDB',
    status: 'Delivered',
    links: [{ label: 'Repository not public', href: '#' }],
    meta: [['Role', 'Backend developer'], ['Team', 'Collaborative'], ['Year', '2026'], ['Status', 'Delivered']],
    whyRated: `Full stack scope with authentication, two database technologies and a real team workflow, but a single service with no distributed concerns or automated pipelines behind it.`,
    sections: [
      { heading: "Overview", body: `Travel Express is a full stack travel platform where users can create accounts, explore destinations and travel packages, manage reservations, save favorites and interact with travel content.` },
      { heading: "Requirements", body: `The project required our team to connect a responsive frontend, a secure backend and multiple database operations within one consistent application. User information and protected actions also needed to be managed securely.` },
      { heading: "Implementation", body: `We developed a complete web application with a React interface, a Node.js backend, REST API routes, authentication and database persistence. The application separated frontend presentation from backend logic and data access.` },
      { heading: "My contribution", body: `I was primarily responsible for backend development. I created API routes, implemented server side logic, integrated the database and added JWT based authentication. I also collaborated with the frontend team to define request and response structures.` },
      { heading: "Technical decisions", body: `Maintaining consistent data and API behavior while several team members worked on different parts of the application. Clear route definitions and a Git workflow let us integrate the components reliably.` },
      { heading: "What I learned", body: "Shared request and response formats were important when integrating the backend with the frontend team." },
    ],
    highlights: ["User registration and authentication","JWT protected routes","Travel package and destination management","Reservation functionality","Favorites and comments","RESTful CRUD operations","Frontend and backend integration","Git based team workflow","Relational and document database operations"],
    stack: ["React","Vite","Bootstrap","Node.js","Express","MongoDB","Oracle","SQL","PL/SQL","JWT"],
  },
  {
    "slug": "dossier",
    "doorNumber": "05",
    "order": 5,
    "complexity": 4,
    "category": "fullstack",
    "doorKind": "lab",
    "title": "Dossier",
    "type": "B2B research and personalization platform",
    "tagline": "A research and personalization system that helps outbound sales teams build relevant cold email campaigns at scale, without giving up on accuracy.",
    "preview": "A B2B research and personalization pipeline: prospects in, researched and scored, personalized variants out.",
    "previewStack": "TypeScript · PostgreSQL · Supabase",
    "status": "Live",
    "links": [
      {
        "label": "Live site",
        "href": "https://rundossier.co",
        "primary": true
      },
      {
        "label": "Repository not public",
        "href": "#"
      }
    ],
    "meta": [
      [
        "Role",
        "Backend and architecture"
      ],
      [
        "Year",
        "2026"
      ],
      [
        "Domain",
        "B2B sales research"
      ],
      [
        "Status",
        "Live"
      ]
    ],
    "whyRated": "Multi-stage workflow orchestration, PostgreSQL-based state management, external API integrations, research quality scoring, validation gates, partial failure recovery, retry mechanisms, dead-letter tracking, and operational monitoring.",
    "sections": [
      {
        "heading": "Overview",
        "body": "Dossier is a B2B research and personalization platform designed to help outbound sales teams create relevant cold email campaigns at scale. It automates prospect research, evaluates data quality, generates personalized email variants, and validates results before delivery."
      },
      {
        "heading": "Requirements",
        "body": "Personalizing cold emails manually takes significant time, especially when working with hundreds of prospects. Existing automation often produces generic messages or relies on incomplete information. The challenge was building a system that could automate research and personalization while maintaining data quality, reliability, and consistency."
      },
      {
        "heading": "Implementation",
        "body": "I developed a multi-stage backend pipeline that handles prospect ingestion, automated research, quality scoring, email generation, and validation. Each prospect moves through a series of tracked states, allowing the system to identify failures, retry unsuccessful operations, and prevent incomplete results from reaching the final delivery."
      },
      {
        "heading": "My Contribution",
        "body": "I was responsible for the backend architecture, database design, workflow orchestration, external API integrations, and research logic. I implemented research scoring, failure handling, retry mechanisms, and quality control checks. I also worked on monitoring and improving the pipeline based on issues discovered during real deliveries."
      },
      {
        "heading": "Technical Decisions",
        "body": "I used PostgreSQL to persist workflow states and track each prospect throughout the pipeline. Research scoring helped distinguish useful information from incomplete results, while validation gates prevented low-quality outputs from progressing. Retry mechanisms and dead-letter tracking made failures easier to investigate and recover from without losing completed work."
      },
      {
        "heading": "Challenges",
        "body": "One of the biggest challenges was handling unpredictable responses from external research providers. Some requests failed, while others returned incomplete or inconsistent information. Another challenge was managing partial failures across multiple workflow stages, especially when processing larger batches of prospects."
      },
      {
        "heading": "What I Learned",
        "body": "Moving from a 100-prospect pilot to a 500-prospect delivery showed me how quickly small reliability issues become more noticeable at scale. I learned the importance of tracking individual workflow states, validating data before using it, and designing recovery mechanisms for partial failures. I also learned that successful API requests don't necessarily mean successful results, and that monitoring data quality is just as important as monitoring execution."
      },
      {
        "heading": "Result",
        "body": "Dossier was tested through an external pilot involving 100 researched prospects, followed by a larger 500-prospect delivery. The second delivery exposed challenges related to data consistency, retry behavior, and operational visibility. These experiences helped identify areas for improving reliability and handling larger workloads."
      },
      {
        "heading": "What I'd Improve",
        "body": "I'd improve operational visibility by introducing a centralized dashboard for tracking prospect states, failure reasons, and processing times. I'd also explore more adaptive retry strategies, stronger research quality metrics, and better cost tracking for external API usage. These improvements would make the system easier to maintain and more predictable during larger deliveries."
      }
    ],
    "highlights": [
      "Multi-stage asynchronous workflow orchestration",
      "Prospect ingestion and deduplication",
      "Automated company and prospect research",
      "External API and data provider integrations",
      "Research quality scoring",
      "AI-powered email personalization",
      "Multiple personalized email variants",
      "Data validation and quality control gates",
      "PostgreSQL-based workflow state management",
      "Retry mechanisms and dead-letter tracking",
      "Automated CSV delivery",
      "Operational monitoring and failure investigation"
    ],
    "stack": [
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Supabase",
      "n8n",
      "Apify"
    ]
  },
  {
    "slug": "trade-catch",
    "doorNumber": "06",
    "order": 6,
    "complexity": 4,
    "category": "fullstack",
    "doorKind": "slat",
    "title": "TradeCatch",
    "type": "Current business · Founder & Developer",
    "tagline": "A bilingual AI-powered call-handling and lead follow-up platform I'm building for contractors in Québec.",
    "preview": "My current business: missed-call recovery, job qualification and estimate follow-up for contractors.",
    "previewStack": "Next.js · Cloudflare Workers · Twilio",
    "status": "Live",
    "links": [
      {
        "label": "Live site",
        "href": "https://tradecatch.ca/",
        "primary": true
      },
      {
        "label": "Repository",
        "href": "https://github.com/AraGhah/TradeCatch"
      }
    ],
    "meta": [
      [
        "Role",
        "Founder & developer"
      ],
      [
        "Year",
        "2026"
      ],
      [
        "Market",
        "Contractors in Québec"
      ],
      [
        "Status",
        "Live"
      ]
    ],
    "whyRated": "Bilingual call handling, lead qualification, appointment and estimate workflows, rule-based escalation, customer opt-out management, Cloudflare deployment, and operational monitoring. Conversational AI remains separate from critical business decisions.",
    "sections": [
      {
        "heading": "Overview",
        "body": "TradeCatch is a bilingual lead management and automation platform designed for contractors and local service businesses. It helps businesses capture missed opportunities, answer incoming calls, qualify leads, schedule appointments, follow up on estimates, and manage customer interactions from one dashboard."
      },
      {
        "heading": "The Problem",
        "body": "Contractors often miss calls while working on job sites, respond too late to potential customers, or forget to follow up on estimates. These small delays can result in lost jobs and revenue. The challenge was creating a system that could handle customer communication automatically while remaining reliable, professional, and easy for contractors to use."
      },
      {
        "heading": "Implementation",
        "body": "I designed an automated workflow that connects phone answering, missed-call recovery, lead qualification, appointment scheduling, and estimate follow-ups. Customer information moves through structured workflows that help contractors identify opportunities, prioritize requests, and respond without manually managing every interaction."
      },
      {
        "heading": "AI Phone Receptionist",
        "body": "TradeCatch includes a bilingual AI receptionist that answers incoming calls 24/7 in French and English. It identifies the caller's needs, collects contact information, determines urgency, and prepares structured job details for the contractor.\n\nI designed the system to separate AI-generated conversations from critical business decisions. Pricing, scheduling restrictions, emergency handling, and escalation follow defined rules rather than relying entirely on AI responses."
      },
      {
        "heading": "My Contribution",
        "body": "As the founder and developer, I'm responsible for both the technical development and business direction of TradeCatch. I designed the product architecture, customer experience, automation workflows, lead qualification logic, and website. I also manage deployment, Cloudflare configuration, testing, and ongoing improvements.\n\nBeyond development, I work on understanding contractors' needs, defining the service offering, and preparing the platform for real customer operations."
      },
      {
        "heading": "Technical Decisions",
        "body": "One of the most important decisions was separating conversational AI from business logic. While AI handles natural conversations and information collection, critical operations such as scheduling, opt-outs, pricing restrictions, and escalation follow explicit rules.\n\nI also structured the workflows around individual customer interactions so information collected during a call could be used for contractor notifications, lead qualification, and follow-up processes."
      },
      {
        "heading": "Challenges",
        "body": "The main challenge was designing automation that feels natural to customers while remaining predictable for businesses.\n\nHandling conversations in both French and English introduced additional considerations around communication, consistency, and customer expectations.\n\nAnother challenge was deciding which actions could be automated and which required human involvement, particularly when dealing with emergencies, uncertain requests, and business-specific scheduling rules."
      },
      {
        "heading": "What I Learned",
        "body": "Building TradeCatch taught me that conversational AI needs more than a good prompt to work as a business service. I learned the importance of separating flexible conversations from strict operational rules, especially when handling bookings, pricing, and customer requests.\n\nI also gained experience designing workflows around real business processes rather than individual features. Building the product as both a developer and founder helped me understand how technical decisions affect onboarding, reliability, customer experience, and the overall service."
      },
      {
        "heading": "Current Status",
        "body": "TradeCatch is live and accepting founding pilot businesses in Québec. I'm actively working on onboarding, testing, monitoring, and refining the platform around real contractor workflows.\n\nThe current priority is improving the experience for both contractors and their customers while validating how the service performs in everyday business operations."
      },
      {
        "heading": "What I'd Improve",
        "body": "My next focus is making the platform more adaptable to different contractor workflows. This includes improving business-specific configuration, refining lead qualification, and making appointment and estimate follow-ups easier to manage.\n\nI'd also like to expand operational reporting so contractors can better understand missed-call recovery, lead activity, appointment conversion, and follow-up performance."
      }
    ],
    "highlights": [
      "Bilingual AI phone receptionist (French and English)",
      "24/7 automated incoming call handling",
      "Missed-call recovery workflows",
      "Automated lead qualification",
      "Structured customer and job information collection",
      "Contractor notifications and lead routing",
      "Appointment scheduling workflows",
      "Automated estimate follow-ups",
      "Rule-based escalation and safety handling",
      "Separation of conversational AI and business logic",
      "Customer opt-out management",
      "Centralized lead management dashboard",
      "Cloudflare configuration and deployment",
      "Workflow testing and operational monitoring"
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "OpenNext",
      "Twilio",
      "Stripe"
    ]
  },
  {
    slug: 'internship-desk',
    doorNumber: '07',
    order: 7,
    complexity: 4,
    category: 'fullstack',
    doorKind: 'gate',
    title: 'Internship Desk',
    type: 'AI powered internship platform · Personal project',
    tagline: `A platform designed to centralize and automate internship discovery, application preparation, recruiter outreach and application tracking.`,
    preview: `One workflow for finding internships, matching them to a CV, researching recruiters, drafting applications specific to each role and tracking follow ups, with the important decisions kept visible.`,
    previewStack: 'Full stack · AI automation · Workflows',
    status: 'Public',
    links: [{ label: 'Repository', href: 'https://github.com/AraGhah/CareersAgents', primary: true }],
    meta: [['Role', 'Full stack development and AI automation'], ['Team', 'Individual'], ['Year', '2026'], ['Status', 'Public']],
    whyRated: `Automated discovery, CV based matching, recruiter research, AI generated applications and follow up tracking in one workflow, where a wrong match or a wrong contact costs more than applying by hand.`,
    sections: [
      { heading: "Overview", body: `Internship Desk is a platform built to reduce the repetitive work involved in finding and managing internship applications. It brings job discovery, CV management, personalized applications, recruiter research and follow ups into one workflow.` },
      { heading: "Requirements", body: `Automation could not come at the cost of relevance. Every internship had to match the candidate's profile, while generated emails and cover letters needed to remain specific to the company and position instead of becoming generic AI output.` },
      { heading: "Implementation", body: `I designed and developed the platform as an individual project, combining a web interface with automated workflows for internship discovery, CV based matching, recruiter research, personalized application generation and follow up tracking.` },
      { heading: "My contribution", body: `I handled the full project, from the interface and application flow to the automation architecture and AI assisted features.` },
      { heading: "Technical decisions", body: `The main risk was incorrect automation. Finding the wrong contact, applying to an irrelevant position or generating inaccurate information would make the system less useful than applying manually.` },
      { heading: "What I learned", body: "The workflow keeps candidate matching, recipient selection and application details visible for review." },
    ],
    highlights: ["Internship discovery","CV based matching","Recruiter research","Personalized emails and cover letters","Application tracking","Follow up tracking","Human review of automated steps","One unified application workflow"],
    stack: ["Full stack web","Workflow automation","LLM integration","AI assisted writing"],
  },
  {
    slug: 'ai-investment-platform',
    doorNumber: '08',
    order: 8,
    complexity: 4,
    category: 'fullstack',
    doorKind: 'vault',
    title: 'AI Investment Platform',
    type: 'Financial research platform · Personal project',
    tagline: `An AI powered investment research platform that combines market research, company analysis, portfolio tracking and specialized agents in a single interface.`,
    preview: `Specialized AI agents for market research, company analysis, portfolio monitoring and investment Q&A, feeding one dashboard where sourced data stays separate from generated analysis.`,
    previewStack: 'Multi agent AI · Full stack · Dashboard',
    status: 'Public',
    links: [{ label: 'Repository', href: 'https://github.com/AraGhah/CapitalOS', primary: true }],
    meta: [['Role', 'Full stack development and AI architecture'], ['Team', 'Individual'], ['Year', '2026'], ['Status', 'Public']],
    whyRated: `A multi agent architecture with distinct responsibilities, market and portfolio data feeding one dashboard, and a hard line between sourced information and generated analysis, in a domain where outdated data changes the conclusion.`,
    sections: [
      { heading: "Overview", body: `The AI Investment Platform is designed to organize the large amount of information involved in researching investments. Specialized AI agents analyze companies, financial news and market data while the platform provides a central place to track and examine a portfolio.` },
      { heading: "Requirements", body: `Financial information had to remain traceable and separated from generated analysis. The system needed to help users understand why information mattered instead of simply producing unsupported investment conclusions.` },
      { heading: "Implementation", body: `I designed the platform around multiple specialized AI agents with distinct responsibilities, including market research, company analysis, portfolio monitoring and investment Q&A. These systems are connected through a unified dashboard.` },
      { heading: "My contribution", body: `I designed the multi agent architecture and the main product workflow, including how research, portfolio data, market information and AI generated analysis are organized and presented to the user.` },
      { heading: "Technical decisions", body: `The largest risk was treating AI generated analysis as fact. Financial information changes quickly, and incorrect or outdated information can completely change the interpretation of an investment.` },
      { heading: "What I learned", body: "The dashboard separates source data from generated analysis so users can inspect the information behind a response." },
    ],
    highlights: ["Multi agent architecture","Market research agent","Company analysis agent","Portfolio monitoring","Investment Q&A","Financial news analysis","Sourced data kept separate from generated analysis","Unified research dashboard"],
    stack: ["Full stack web","Multi agent AI","LLM integration","Financial data","Dashboard design"],
  },
  {
    slug: 'urban-crisis-protocol',
    doorNumber: '09',
    order: 9,
    complexity: 5,
    category: 'software',
    doorKind: 'blueprint',
    title: 'Urban Crisis Protocol',
    type: 'AI simulation game · Academic team project',
    tagline: `A real-life simulation game where a human player competes against an AI to develop, manage and protect a town under changing conditions.`,
    preview: `Two towns, one run by the player and one run entirely by an AI, compete under the same conditions while tornadoes, power outages and bandit attacks interrupt both. My part was the crisis events that keep either side from progressing too easily.`,
    previewStack: 'C# · Unity · AI decision-making',
    status: 'Public',
    links: [],
    meta: [['Role', 'Gameplay systems and events'], ['Team', 'Collaborative'], ['Year', '2026'], ['Status', 'Public']],
    whyRated: `Two towns simulated side by side, one of them driven by an AI that makes its own decisions, with crises that cascade through resources, infrastructure and large-scale destruction on both sides while keeping the competition fair, built by a team. Scored on design and scope, not on whether it shipped.`,
    sections: [
      { heading: "Overview", body: `Urban Crisis Protocol is a simulation game built with Unity and C# where two towns compete against each other. One town is managed by the player, while the second is entirely controlled by an AI. The goal is to observe how the AI develops its town, manages resources, reacts to crises and adapts its strategy in order to outperform the human player.` },
      { heading: "Requirements", body: `Both towns needed to operate under comparable conditions so that the competition remained meaningful. The AI had to make its own decisions while reacting to the same types of problems and opportunities as the player.` },
      { heading: "Implementation", body: `Our team developed the simulation in Unity using C#. The project combines town management, resource systems, AI decision-making and disruptive events such as tornadoes, power outages, bandit attacks and large-scale destruction.` },
      { heading: "My contribution", body: `My focus was on making the competition more difficult and unpredictable. I worked on crisis events that interrupt development, force both the player and the AI to adapt and prevent either town from progressing too easily.` },
      { heading: "Technical decisions", body: `The main challenge was creating events that could affect both sides without making the simulation unfair. The AI also needed to react logically to unexpected situations instead of following a completely fixed strategy.` },
      { heading: "What I learned", body: "Shared crisis events test how both the player and computer-controlled town respond to changes in the simulation." },
    ],
    highlights: ["Human versus AI competition","AI-controlled rival town","Town and resource management","Event driven crisis systems","Tornado and power outage events","Bandit attack events","Large-scale destruction","Team based development"],
    stack: ["C#","Unity","AI decision-making","Event driven systems","Gameplay systems"],
  },
  {
    "slug": "sentinelops",
    "doorNumber": "10",
    "order": 10,
    "complexity": 5,
    "category": "software",
    "doorKind": "secure",
    "title": "SentinelOps",
    "type": "Cloud-Native Security & Incident Management Platform",
    "tagline": "A security operations platform designed to collect, normalize, and analyze cloud security events while helping analysts investigate threats and manage incidents.",
    "preview": "Security events arrive from many systems in many formats. SentinelOps normalises them into one model and moves them through a structured incident workflow, so analysts work a ranked queue instead of a firehose.",
    "previewStack": "AWS · ASP.NET Core · Incident response",
    "status": "Public",
    "links": [],
    "meta": [
      [
        "Role",
        "Architecture and full stack"
      ],
      [
        "Year",
        "2026"
      ],
      [
        "Domain",
        "Security operations"
      ],
      [
        "Status",
        "Public"
      ]
    ],
    "whyRated": "Cloud-based security event ingestion, normalized event schemas, ASP.NET Core API architecture, relational data modeling, incident lifecycle management, authentication, input validation, structured logging, error handling, and separation of responsibilities across the system.",
    "sections": [
      {
        "heading": "Overview",
        "body": "SentinelOps is a cloud-native security operations platform that centralizes security event monitoring and incident management. It transforms incoming events into structured records, allowing analysts to review alerts, investigate suspicious activity, prioritize potential threats, and track incidents through a centralized dashboard."
      },
      {
        "heading": "The Problem",
        "body": "Security events come from different systems, each producing logs with different structures and levels of detail. Without a consistent way to process this information, identifying meaningful threats becomes difficult.\n\nThe challenge was designing a system that could standardize incoming security data, preserve important investigation details, and connect events to a structured incident response workflow."
      },
      {
        "heading": "Implementation",
        "body": "I designed a full-stack architecture connecting cloud-based event processing with an ASP.NET Core backend, PostgreSQL database, and React dashboard.\n\nThe platform processes incoming security events through validation and normalization before storing them in a consistent format. Events can then be associated with incidents, allowing analysts to investigate activity, manage priorities, and track incident status."
      },
      {
        "heading": "My Contribution",
        "body": "I designed the overall system architecture, security event schema, backend API structure, database model, and frontend experience.\n\nI focused on separating event ingestion, validation, normalization, storage, and incident management into distinct responsibilities.\n\nI also worked on authentication, API response consistency, logging, error handling, and the structure needed to support future cloud integrations."
      },
      {
        "heading": "Technical Decisions",
        "body": "One of my main architectural decisions was introducing a standardized security event model instead of allowing each data source to define its own structure throughout the application.\n\nThis makes it easier to process events from different sources without constantly changing the backend or dashboard.\n\nI also separated raw event information from incident management data to preserve investigation context while allowing incidents to evolve independently.\n\nAnother important decision was using a relational database to maintain clear relationships between security events, alerts, and incidents."
      },
      {
        "heading": "Challenges",
        "body": "One of the main challenges was designing a flexible event schema that could represent different types of security activity without losing important details.\n\nAnother challenge was maintaining traceability between an incident and the original events that triggered it.\n\nI also had to consider how the platform should handle invalid event data, processing failures, and inconsistent information without compromising the reliability of the incident management workflow."
      },
      {
        "heading": "What I Learned",
        "body": "Building SentinelOps taught me that security systems require a different approach to data integrity and error handling. I learned how important it is to preserve original event information while transforming data into a standardized format.\n\nI also gained a better understanding of designing backend systems around clear responsibilities, particularly when separating event processing from incident management.\n\nOne of the most important lessons was that an alert is only useful if an analyst can understand where it came from, what triggered it, and how it relates to other security activity."
      },
      {
        "heading": "Current Status",
        "body": "SentinelOps is an evolving portfolio project focused on security operations architecture and full-stack development.\n\nThe current foundation covers structured security event processing, incident management, backend APIs, persistent storage, and an analyst-facing dashboard.\n\nFuture development will focus on expanding AWS integrations, introducing automated event enrichment, improving detection capabilities, and strengthening infrastructure automation."
      },
      {
        "heading": "What I'd Improve",
        "body": "I'd expand the event ingestion system to support additional AWS security services and introduce automated enrichment to provide more context around suspicious activity.\n\nI'd also explore event correlation to identify relationships between alerts that might otherwise appear unrelated.\n\nOther improvements would include real-time notifications, infrastructure as code, more detailed audit logging, and automated testing for security-sensitive workflows."
      }
    ],
    "highlights": [
      "Cloud-native security operations architecture",
      "Standardized security event schema",
      "Cloud-based event ingestion and processing",
      "Event validation and normalization",
      "Raw event traceability",
      "Security alert and incident relationships",
      "Incident creation and prioritization",
      "Incident status and lifecycle management",
      "ASP.NET Core REST API",
      "PostgreSQL relational data modeling",
      "React analyst dashboard",
      "API authentication and input validation",
      "Structured error handling and logging",
      "API documentation",
      "Modular architecture for future integrations"
    ],
    "stack": [
      "AWS",
      "ASP.NET Core",
      "C#",
      "React",
      "PostgreSQL",
      "REST APIs"
    ]
  },
];

export function getProjectEn(slug: string) {
  return projectsEn.find((p) => p.slug === slug);
}
