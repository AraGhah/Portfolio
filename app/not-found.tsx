import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#08090b',
          color: '#f2efe8',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 400, fontSize: 48, margin: '0 0 16px' }}>404</h1>
          <p style={{ color: '#a8a49b', margin: '0 0 24px' }}>This door does not exist.</p>
          <Link href="/" style={{ color: '#c9a465' }}>
            Return to the hall
          </Link>
        </div>
      </body>
    </html>
  );
}
