# Verification — 23 October 2026

## Production and source checks

- `npm run build`: passed with Next.js 16.4.3, OpenNext 1.20.13 and
  Wrangler 4.152.0, producing `.open-next/worker.js` on Windows.
- `npm run next:build`: passed as part of the Cloudflare build.
  The build compiled, checked types, and generated all 26 static entries,
  including both home pages and all 20 localized project pages.
- `npx tsc --noEmit`: passed.
- `npm run lint`: completed with zero errors and two existing warnings:
  the anonymous default export in `open-next.config.ts` and an unused lint
  suppression in `scripts/build-projects-fr.mjs`.
- English and French interface translation keys were compared successfully.
- `git diff --check`: passed.
- No animation-library imports remain in the application.

The original portfolio production checks used `PORTFOLIO_BUILD_DIR=.next-verify`.
The final Cloudflare packaging check used the normal `.next/` output. The
development server's `.next-dev/` output remains separate.

## Browser review

The three featured case studies now use Ara’s supplied Dossier, TradeCatch and
SentinelOps content, with matching French translations. Dossier and SentinelOps
have nine narrative sections; TradeCatch has ten. Their technical highlights
contain 12, 15 and 14 items respectively. Current status and result sections
appear once, in the supplied order, and multi-paragraph sections retain their
paragraph breaks. All six pages were inspected in the browser; the French
pages have no horizontal overflow at 320px. The production build passed.
Content comparisons confirmed that all seven other projects remain unchanged.
The French generator now has complete translation entries for all ten projects.

The latest refinement removes decorative stars, the flower, portrait tape and
drawn arrow, and handwritten annotations while preserving the warm layout.
About Me now follows Ara’s supplied personal introduction, in English and French.
Banking System API belongs to the new API category; the French content generator
also preserves project categories. The production build and type check passed.
The English API filter shows only Banking System API (one result); software and
games now has three results, and all seven archive projects remain available.
The French API filter also shows one result at a 320px phone width, with no
horizontal overflow. All three About Me paragraphs render in both languages.

The personal-portfolio revision restores the earlier warm visual design and
three equal featured project cards. The standalone TradeCatch sales feature,
cross-project promotional banner and business contact copy have been removed.
English and French contact sections now address recruiters and internships.
The Globo-before-Dossier experience ordering is preserved.

After this revision, the Next.js production build passed and generated all 27
static entries. TypeScript passed. Browser checks confirmed the three featured
projects at desktop width, recruiter contact copy in both languages, no
horizontal overflow at 960px desktop and 320px French phone widths, and
navigation to the French Dossier case study without a business promotion banner.
Section entrances, reduced-motion support and reading progress remain.

The development preview uses `.next-dev/`, separate from production output.

Reviewed the default desktop layout and explicit 960px, 390px and 320px
viewports, including French text on the smallest screen. The inspected layouts
had matching document and viewport widths, with no horizontal overflow.

Checked these interactions:

- Expand the native project archive.
- Filter full-stack work: three archive projects.
- Filter software and games: three archive projects.
- Filter API: Banking System API, one archive project.
- Keep all seven remaining projects reachable alongside the three featured ones.
- Open a case study from the project list.
- Read the French Dossier case study on a phone layout.
- Switch the same case study from French to English.
- Follow the return-to-projects link.
- Copy the email address and receive the successful confirmation.
- Use the footer link to return to the main content.
- Confirm page changes do not focus the skip link.
- Verify the portrait loads and visible contact links use the supplied details.
- Verify case-study canonical URLs include the correct locale and project.
- Confirm unavailable repositories render as text instead of placeholder links.

The complete page and an introduction preview were captured for visual review.
No automated browser test suite was added for these presentation changes.

## Cloudflare build and runtime verification

Next.js 15 reached OpenNext's two-year support cutoff on 21 October 2026.
The project now uses Next.js and `eslint-config-next` 16.4.3, OpenNext 1.20.13,
and Wrangler 4.152.0. The lockfile records the updated dependency tree. Wrangler
requires Node.js 22 or newer; verification used Node.js 24.13.0.

Production explicitly uses Webpack. ESLint uses Next.js 16's native flat
configuration and ignores generated Next.js, OpenNext and Wrangler directories.
TypeScript uses the required React automatic JSX runtime and includes the
Next.js 16 development route types.

OpenNext 1.20.13 includes the Next.js 16.4 `preview-props.json` compatibility
fix required for the packaged server to start. The existing Edge middleware
preserves language routing while OpenNext's Node.js proxy support remains
experimental. The middleware deprecation warning and OpenNext's Windows warning
remain informational; the full build succeeds without a support-policy bypass.

An OpenNext preview ran locally in the Cloudflare Workers runtime. HTTP checks
confirmed:

- All 22 localized pages return 200, with the correct HTML language and a title.
- French language detection redirects `/` to `/fr`.
- The English `/en` prefix redirects to `/`.
- An unknown project returns 404.
- The sitemap, portrait and a generated client JavaScript asset return 200.

The temporary preview was stopped after verification. No deployment or remote
Git push was performed.

## Deployment target correction

Cloudflare's deployment history confirms the `portfolio` Worker has an active
deployment from 23 October 2026. Both deployment logs from that day list only
`https://portfolio.ara-ghahramanyan07.workers.dev`; the local Wrangler
configuration previously had no custom domain mapping. Direct inspection of
`araghah.com` was blocked by the execution environment's network filter, so the
domain's existing destination could not be independently confirmed.

The attempted custom domain attachment failed because Cloudflare reported that
the `araghah.com` zone does not exist in the Worker's account. Following the
user's instructions, the custom domain mapping was removed. The configuration
keeps `workers_dev: true`, the OpenNext entry point and assets, and all existing
bindings. Canonical URLs, the sitemap and `robots.txt` now use
`https://portfolio.ara-ghahramanyan07.workers.dev`.

The final mapping removal is local; the user will run the deployment command.
