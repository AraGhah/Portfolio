import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const enPath = path.join(root, 'content', 'projects.en.ts');
const overridesPath = path.join(root, 'scripts', 'fr-overrides.json');
const outPath = path.join(root, 'content', 'projects.fr.ts');

const enSource = fs.readFileSync(enPath, 'utf8');
const arrayMatch = enSource.match(
  /export const projectsEn: Project\[\] = (\[[\s\S]*?\n\]);/,
);
if (!arrayMatch) {
  throw new Error('Could not parse projects.en.ts');
}

// eslint-disable-next-line no-eval
const projectsEn = eval(arrayMatch[1]);
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

const projectsFr = projectsEn.map((p) => {
  const o = overrides[p.slug];
  if (!o) throw new Error(`Missing FR override for ${p.slug}`);
  return {
    ...p,
    ...o,
    links: o.links ?? p.links,
    meta: o.meta ?? p.meta,
    sections: o.sections ?? p.sections,
    highlights: o.highlights ?? p.highlights,
  };
});

const lines = [];
lines.push(`import type { Project } from '@/lib/types';`);
lines.push('');
lines.push('export const projectsFr: Project[] = [');

for (const p of projectsFr) {
  lines.push('  {');
  lines.push(`    slug: ${JSON.stringify(p.slug)},`);
  lines.push(`    doorNumber: ${JSON.stringify(p.doorNumber)},`);
  lines.push(`    order: ${p.order},`);
  lines.push(`    complexity: ${p.complexity},`);
  lines.push(`    doorKind: ${JSON.stringify(p.doorKind)},`);
  lines.push(`    title: ${JSON.stringify(p.title)},`);
  lines.push(`    type: ${JSON.stringify(p.type)},`);
  lines.push(`    tagline: \`${esc(p.tagline)}\`,`);
  lines.push(`    preview: \`${esc(p.preview)}\`,`);
  lines.push(`    previewStack: ${JSON.stringify(p.previewStack)},`);
  lines.push(`    status: ${JSON.stringify(p.status)},`);
  if (p.statusNote) lines.push(`    statusNote: \`${esc(p.statusNote)}\`,`);
  lines.push(
    `    links: [${p.links.map((l) => `{ label: ${JSON.stringify(l.label)}, href: ${JSON.stringify(l.href)}${l.primary ? ', primary: true' : ''} }`).join(', ')}],`,
  );
  lines.push(
    `    meta: [${p.meta.map((m) => `[${JSON.stringify(m[0])}, ${JSON.stringify(m[1])}]`).join(', ')}],`,
  );
  lines.push(`    whyRated: \`${esc(p.whyRated)}\`,`);
  lines.push('    sections: [');
  for (const s of p.sections) {
    lines.push(
      `      { heading: ${JSON.stringify(s.heading)}, body: \`${esc(s.body)}\` },`,
    );
  }
  lines.push('    ],');
  if (p.result) lines.push(`    result: \`${esc(p.result)}\`,`);
  lines.push(`    highlights: ${JSON.stringify(p.highlights)},`);
  lines.push(`    stack: ${JSON.stringify(p.stack)},`);
  lines.push('  },');
}

lines.push('];');
lines.push('');
lines.push('export function getProjectFr(slug: string) {');
lines.push('  return projectsFr.find((p) => p.slug === slug);');
lines.push('}');
lines.push('');

fs.writeFileSync(outPath, lines.join('\n'));
console.log('Wrote', outPath);
