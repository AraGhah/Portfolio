# A more personal portfolio

The portfolio is a personal introduction for recruiters. It restores the warm
paper-and-ink palette, personal portrait and project-card layout. Dossier,
TradeCatch and SentinelOps receive equal treatment as engineering projects.

TradeCatch is current professional experience, rather than the purpose of the
site. There is no standalone sales section, business contact invitation or
promotion across unrelated case studies. Contact copy focuses on internships
and development opportunities. React entrances and reading progress remain,
with support for reduced motion.

## References

- [Ratnesh Chipre](https://ratneshc.com/): compact introduction, personal voice,
  and a clear path from projects to experience.
- [Developer portfolios](https://github.com/emmabostian/developer-portfolios):
  a collection to explore individual approaches, rather than a template to copy.
- [Brittany Chiang](https://brittanychiang.com/): meaningful project context
  and a readable account of experience.

## Original commit-sized work

1. Preserve the existing working design.
2. Record the design direction.
3. Simplify font loading.
4. Establish the paper-and-ink foundation.
5. Replace the sidebar with compact navigation.
6. Write a personal introduction in both languages.
7. Add a portrait and personal annotations.
8. Give the page a shorter reading order.
9. Curate featured projects without losing the archive.
10. Give the projects their own visual language.
11. Present featured work as readable project stories.
12. Make the remaining work a compact archive.
13. Simplify project filters and feedback.
14. Make case-study introductions clear and consistent.
15. Improve long-form reading and technical notes.
16. Connect case-study pages back to the work.
17. Add a more personal about section.
18. Make experience and education easy to scan.
19. Turn the skills grid into a concise toolkit.
20. Make contact direct and easy to use.
21. Finish the page with a quiet footer.
22. Add a personal site icon and sharing metadata.
23. Improve keyboard use and motion preferences.
24. Review responsive layouts and interaction details.
25. Document the finished site and verification.

Browser review also led to two focused navigation fixes: declare smooth scroll
behaviour to Next.js, and keep route focus on the page content. These were saved
as additional commits, bringing the completed sequence to 27 commits including
the initial preservation commit and final documentation.

## Guardrails

Keep the English and French experiences equivalent. Preserve supplied projects,
work history, and contact information. Product diagrams are illustrative, not
screenshots or measured results. Do not invent clients, testimonials, or metrics.
Use ordinary links for case studies so they work without JavaScript. Keep the
existing Next.js and Cloudflare setup. Run the production build, type check, and
browser checks before handing over.
