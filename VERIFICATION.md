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

The TradeCatch revision was reviewed again after the production build and type
check passed. It uses a capture of the live business website, plain business
copy, a dedicated primary section, and a founder entry in experience.

Additional checks for this revision:

- Select each TradeCatch workflow step; only its associated panel is shown.
- Navigate the workflow using arrow, Home and End keys in English and French.
- Switch both home pages and the TradeCatch case study between languages,
  preserving the current project.
- Verify the portrait and real product image load at desktop and phone widths.
- Confirm the reading progress indicator responds to scrolling.
- Check the rebuilt development preview has no browser console errors.
- Copy the email address and receive the successful confirmation again.

The development preview now uses `.next-dev/`, separate from production output.
The animation components preserve visible server-rendered content and respect
the reduced-motion preference. No Angular application or additional animation
library was introduced into the existing React application.

Reviewed the default desktop layout and explicit 960px, 390px and 320px
viewports, including French text on the smallest screen. The inspected layouts
had matching document and viewport widths, with no horizontal overflow.

Checked these interactions:

- Expand the native project archive.
- Filter full-stack work: three archive projects.
- Filter software and games: four archive projects.
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
