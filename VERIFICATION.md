# Verification — 23 October 2026

## Production and source checks

- `npm run next:build`: passed on the final application source.
  The build compiled, checked types, and generated all 27 static entries,
  including both home pages and all 20 localized project pages.
- `npx tsc --noEmit`: passed.
- `npm run lint`: completed with zero errors and two existing warnings:
  the anonymous default export in `open-next.config.ts` and an unused lint
  suppression in `scripts/build-projects-fr.mjs`.
- English and French interface translation keys were compared successfully.
- `git diff --check`: passed.
- No animation-library imports remain in the application.

The production check used `PORTFOLIO_BUILD_DIR=.next-verify` to avoid interfering
with the already running development server.

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

## Cloudflare packaging limitation

`npm run build` reaches the existing OpenNext adapter, which rejects the
installed Next.js 15.5.27 release under its framework support policy. It stops
before creating a Cloudflare deployment package. The adapter also reports its
existing Windows compatibility warning.

The plain Next.js production build passes. Cloudflare packaging requires a
separate framework compatibility update. No unsupported-version bypass was
added, and no deployment or remote Git push was performed.
