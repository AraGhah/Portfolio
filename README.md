# Ara Ghahramanyan — Portfolio

A personal, bilingual portfolio for recruiters, with a warm paper-and-ink design,
three featured software projects, a filterable archive, and individual case studies.

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

The Cloudflare commands are `npm run build`, `npm run preview`,
`npm run upload`, and `npm run deploy`. These use OpenNext with Next.js 16
and require Node.js 22 or newer. Production builds explicitly use Webpack.

`npm run deploy` publishes the `portfolio` Worker at
`https://portfolio.ara-ghahramanyan07.workers.dev`. No custom domain is configured.
`npm run upload` creates a version without making it the active deployment.

Language routing keeps Edge middleware because OpenNext's Node.js proxy support
is experimental. Next.js reports a middleware deprecation warning, and OpenNext
reports its Windows compatibility warning; neither prevents the build.

To check a production build while keeping an existing development server running,
use a separate build directory. In PowerShell:

```powershell
$env:PORTFOLIO_BUILD_DIR = '.next-verify'
npm run next:build
Remove-Item Env:PORTFOLIO_BUILD_DIR
```

`.next-verify/` is ignored by Git. Development uses `.next-dev/` and production
uses `.next/`, so building the site does not overwrite the running preview.

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

Dossier, TradeCatch and SentinelOps share the selected-work section. TradeCatch
is presented as engineering experience, without a sales feature or business
contact section. Seven additional projects remain in the expandable archive.

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

System fonts avoid external font requests. The warm palette, personal portrait
and project illustrations restore the earlier visual direction. Illustrations
are diagrams rather than product screenshots or usage metrics.

React components use the browser’s Web Animations API for section entrances.
The reading indicator updates once per animation frame. Motion respects reduced
motion preferences, and content remains visible without JavaScript.

The interface includes visible keyboard focus, a skip link, labelled category
buttons, live filter counts, email-copy feedback, responsive layouts and print
styles. Language switching preserves the current project. The contact section
addresses recruiters and internship opportunities; all contact details are Ara’s.

## Verification

See `VERIFICATION.md` for the checks performed and Cloudflare packaging notes.
