import styles from './Proof.module.css';

export const TECH = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'React',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'Oracle',
  'PL/SQL',
  'ASP.NET Core',
  'C#',
  'AWS',
  'Cloudflare Workers',
  'Supabase',
  'Docker',
  'JWT',
  'Git',
  'n8n',
  'Unity',
];

export function Proof() {
  return (
    <div id="proof" className={styles.proof}>
      <div className={styles.marquee}>
        <ul className={styles.marqueeTrack}>
          {[...TECH, ...TECH].map((tech, i) => (
            <li key={`${tech}-${i}`} aria-hidden={i >= TECH.length || undefined}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
