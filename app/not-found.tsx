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
          background: '#0a0e17',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 400, fontSize: 48, margin: '0 0 16px' }}>404</h1>
          <p style={{ color: '#9aa8bd', margin: '0 0 24px' }}>This door does not exist.</p>
          <Link href="/" style={{ color: '#60a5fa' }}>
            Return to the hall
          </Link>
        </div>
      </body>
    </html>
  );
}
