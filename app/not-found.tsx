import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 28, background: '#fafaf8', color: '#1c2023', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ maxWidth: 480 }}>
          <p style={{ color: '#a84d27', fontSize: 12 }}>404</p>
          <h1 style={{ fontWeight: 550, fontSize: 42, letterSpacing: '-.04em' }}>Page not found.</h1>
          <p style={{ color: '#62696d', lineHeight: 1.8 }}>The page may have moved. You can return to the portfolio below.</p>
          <p lang="fr" style={{ color: '#62696d', lineHeight: 1.8 }}>Cette page est introuvable. Retrouvez mes projets sur le portfolio.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 28 }}>
            <Link href="/" style={{ color: '#a84d27', textUnderlineOffset: 5, textDecoration: 'underline' }}>Back to the portfolio</Link>
            <Link href="/fr" lang="fr" style={{ color: '#a84d27', textUnderlineOffset: 5, textDecoration: 'underline' }}>En français</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
