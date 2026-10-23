# Ara Ghahramanyan — Portfolio

A personal, bilingual portfolio with a paper-and-ink design, three featured
project stories, a filterable archive, and individual case studies.

## Run locally

```sh
npm ci
npm run dev
```

Open the address printed by Next.js, normally http://localhost:3000.

```sh
npm run next:build  # Next.js production build
npm run start      # Serve the Next.js production build
npm run lint
npx tsc --noEmit
```

The existing Cloudflare commands are `npm run build`, `npm run preview`,
`npm run upload`, and `npm run deploy`. These use OpenNext.

**Current deployment limitation:** the installed OpenNext adapter rejects the
existing Next.js 15.5.27 installation under its framework support policy.
The Next.js production build succeeds; Cloudflare packaging needs a separate
framework compatibility update before deployment. No bypass flag was added.

To check a production build while keeping an existing development server running,
use a separate build directory. In PowerShell:

```powershell
$env:PORTFOLIO_BUILD_DIR = '.next-verify'
npm run next:build
Remove-Item Env:PORTFOLIO_BUILD_DIR
```

`.next-verify/` is ignored by Git. The regular build directory remains `.next/`.

## Edit content

| Content | Location |
| --- | --- |
| Name, contact links, canonical site URL | `content/profile.ts` |
| English project case studies | `content/projects.en.ts` |
| French project case studies | `content/projects.fr.ts` |
| Featured selection and short introductions | `content/featured.ts` |
| English and French interface copy | `messages/en.json`, `messages/fr.json` |
| Colours, spacing and type | `app/globals.css` |
| Portrait | `public/ara.jpg` |
| Design references and direction | `DESIGN.md` |

The selected projects are Dossier, Trade Catch, and SentinelOps. The other seven
projects remain in the expandable archive. Changing the featured slug list
automatically updates the archive without duplicating projects.

The existing French project generation script uses
`scripts/fr-overrides.json`. Update those overrides when maintaining generated
French case studies; interface copy and featured summaries are maintained
separately in the files above.

## Languages and navigation

- English: `/`
- French: `/fr`
- Case studies: `/projects/[slug]` and `/fr/projects/[slug]`
- The language switch keeps the current project.
- The existing locale detection may remember a visitor’s selected language.

Case studies use ordinary links and have previous-directory and next-project
navigation. The archive uses native `details` and `summary` elements; without
JavaScript, all archive links remain accessible when expanded. Category filters
and email copying are small client-side enhancements.

## Design and accessibility

System fonts avoid external font requests. The project visuals are illustrative
diagrams made in HTML and CSS, not product screenshots or usage metrics.
The portrait and a few small annotations add personality without hiding content
behind scroll animations.

The interface includes visible keyboard focus, a skip link, labelled category
buttons, live filter counts, email-copy feedback, reduced-motion support,
responsive layouts, and print styles. Email, phone, GitHub, and LinkedIn are
ordinary links.

## Verification

See `VERIFICATION.md` for the checks performed and the Cloudflare packaging
limitation. The redesign is saved in focused commits on
`codex/personal-portfolio`; the first commit preserves the pre-existing edits.
