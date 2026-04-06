'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="fi">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '0.75rem',
              }}
            >
              Jokin meni pieleen
            </h1>
            <p
              style={{
                color: '#64748B',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              Pahoittelemme, sivuston lataamisessa tapahtui odottamaton virhe. Yritä ladata sivu uudelleen.
            </p>
            <button
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.75rem',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#0891B2',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Yritä uudelleen
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
