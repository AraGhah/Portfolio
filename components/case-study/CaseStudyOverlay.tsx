'use client';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from '@/lib/useReducedMotion';

type CaseStudyOverlayProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function CaseStudyOverlay({
  open,
  onClose,
  title,
  children,
}: CaseStudyOverlayProps) {
  const t = useTranslations('hall');
  const reducedMotion = useReducedMotion();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [leavesOpen, setLeavesOpen] = useState(false);
  const [spillVisible, setSpillVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setMounted(false);
      setLeavesOpen(false);
      setSpillVisible(false);
      return;
    }

    setMounted(true);
    setLeavesOpen(false);
    setSpillVisible(false);

    if (reducedMotion) {
      setLeavesOpen(true);
      setSpillVisible(true);
      return;
    }

    const swingTimer = window.setTimeout(() => {
      setLeavesOpen(true);
      setSpillVisible(true);
    }, 70);

    return () => window.clearTimeout(swingTimer);
  }, [open, reducedMotion]);

  useEffect(() => {
    if (!mounted) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled'));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const nodes = focusable();
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [mounted, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!open && !mounted) return null;

  const leafDuration = reducedMotion ? '0.01ms' : '1.2s';
  const spillDuration = reducedMotion ? '0.01ms' : '1.2s';
  const leafTransform = leavesOpen ? 'rotateY(-96deg)' : 'rotateY(0deg)';
  const leafTransformRight = leavesOpen ? 'rotateY(96deg)' : 'rotateY(0deg)';

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'var(--bg)',
        opacity: mounted ? 1 : 0,
        transition: reducedMotion ? 'none' : 'opacity 300ms var(--ease-out)',
      }}
    >
      <div
        data-spill
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: spillVisible ? 1 : 0,
          transition: `opacity ${spillDuration} linear`,
          background:
            'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(201,164,101,.18), transparent 68%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          overflow: 'auto',
          opacity: leavesOpen ? 1 : 0,
          transition: reducedMotion
            ? 'none'
            : `opacity 400ms var(--ease-out) ${leavesOpen ? '0.4s' : '0s'}`,
        }}
        onClick={handleBackdropClick}
      >
        <div
          style={{
            maxWidth: 'var(--w-case)',
            margin: '0 auto',
            padding: 'clamp(100px, 12vh, 140px) clamp(20px, 5vw, 48px) 80px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span id={titleId} className="sr-only">
            {title}
          </span>
          {children}
        </div>
      </div>

      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label={t('closeOverlay')}
        style={{
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 8,
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--t-mono-nav)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '12px 18px',
          border: '1px solid var(--line-strong)',
          background: 'rgba(8,9,11,.92)',
          color: 'var(--ink-muted)',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
        }}
      >
        {t('closeOverlay')}
      </button>

      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 5,
          pointerEvents: leavesOpen ? 'none' : 'auto',
          perspective: '2200px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            left: 0,
            width: '50.4%',
            background: 'var(--bg-panel)',
            boxShadow: 'var(--shadow-inner)',
            transformOrigin: 'left center',
            transform: leafTransform,
            transition: `transform ${leafDuration} var(--ease-door)`,
            borderRight: '1px solid var(--line-faint)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            left: 'auto',
            right: 0,
            width: '50.4%',
            background: 'var(--bg-panel)',
            boxShadow: 'var(--shadow-inner)',
            transformOrigin: 'right center',
            transform: leafTransformRight,
            transition: `transform ${leafDuration} var(--ease-door)`,
            borderLeft: '1px solid var(--line-faint)',
          }}
        />
      </div>
    </div>
  );
}
