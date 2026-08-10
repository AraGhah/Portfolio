'use client';

import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      aria-labelledby="hero-name"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px clamp(20px, 7vw, 110px) 80px',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: 'min(680px, 90vw)',
          height: 'min(680px, 70vh)',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(50% 42% at 50% 32%, rgba(201,164,101,.16), transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-40% -30% -60%',
          height: '46vh',
          perspective: '520px',
          opacity: 0.5,
          transform: 'rotateX(72deg)',
          backgroundImage:
            'linear-gradient(rgba(201,164,101,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'linear-gradient(to top, #000 5%, transparent 62%)',
          WebkitMaskImage: 'linear-gradient(to top, #000 5%, transparent 62%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '34vh',
          background: 'linear-gradient(to top, #08090b 18%, transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 720 }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--t-mono-nav)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--ink-label)',
            margin: '0 0 20px',
            animation: 'fadeIn 1.1s var(--ease-out) 0.1s both',
          }}
        >
          {t('location')}
        </p>
        <h1
          id="hero-name"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--t-hero)',
            lineHeight: 0.86,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            margin: '0 0 12px',
            animation: 'riseIn 1.3s var(--ease-out) 0.15s both',
          }}
        >
          Ara
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--t-mono-role)',
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            margin: '0 0 28px',
            animation: 'riseIn 1.3s var(--ease-out) 0.3s both',
          }}
        >
          {t('role')}
        </p>
        <p
          style={{
            fontSize: 'var(--t-lead)',
            lineHeight: 1.68,
            color: 'var(--ink-dim)',
            margin: '0 auto 36px',
            maxWidth: '34rem',
            animation: 'riseIn 1.3s var(--ease-out) 0.45s both',
          }}
        >
          {t('paragraph')}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 14,
            justifyContent: 'center',
            animation: 'riseIn 1.3s var(--ease-out) 0.6s both',
          }}
        >
          <a
            href="#hall"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-nav)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              background: 'var(--acc-12)',
              border: '1px solid rgba(201,164,101,.5)',
              color: 'var(--acc)',
            }}
          >
            {t('enterHall')}
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--t-mono-nav)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              border: '1px solid var(--line)',
              color: 'var(--ink-muted)',
            }}
          >
            {t('hireMe')}
          </a>
        </div>
      </div>
    </section>
  );
}
