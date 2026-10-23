import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 28, background: '#f8f7f4', color: '#252b26', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ maxWidth: 480 }}>
          <p style={{ color: '#315d45', fontSize: 12, letterSpacing: '.1em' }}>404 / A SMALL DETOUR</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: 48, letterSpacing: '-.04em' }}>Nothing here. Yet.</h1>
          <p style={{ color: '#62685e', lineHeight: 1.8 }}>This page couldn’t be found. There’s more to explore back at the portfolio.</p>
          <p lang="fr" style={{ color: '#62685e', lineHeight: 1.8 }}>Cette page est introuvable. Retrouvez mes projets sur le portfolio.</p>
          <div style={{ display: 'flex', gap: 24, marginTop: 28 }}>
            <Link href="/" style={{ color: '#315d45', textUnderlineOffset: 5, textDecoration: 'underline' }}>Back to the portfolio ↗</Link>
            <Link href="/fr" lang="fr" style={{ color: '#315d45', textUnderlineOffset: 5, textDecoration: 'underline' }}>En français ↗</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
