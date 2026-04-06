import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Valitse — Vertaa kaikkea yhdestä paikasta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B1F3F 0%, #0E2A52 50%, #0891B2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            V
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Valitse
          </span>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 500,
          }}
        >
          Vertaa kaikkea yhdestä paikasta
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '48px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <span>Sähkö</span>
          <span>·</span>
          <span>Lainat</span>
          <span>·</span>
          <span>Vakuutukset</span>
          <span>·</span>
          <span>Telecom</span>
          <span>·</span>
          <span>Asunnot</span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          valitse.fi
        </div>
      </div>
    ),
    { ...size }
  );
}
