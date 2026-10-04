import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social card for every route; generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        background:
          'radial-gradient(900px 500px at 85% 0%, rgba(109,105,255,0.35), transparent 70%), #07080b',
        color: '#eef0f4',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            border: '3px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: '3px solid #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 4, background: '#6d69ff' }} />
          </div>
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 1 }}>SMR</div>
        <div style={{ fontSize: 30, color: '#a1a7b4' }}>Core Technologies</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -3,
            maxWidth: 980,
          }}
        >
          We build software that moves business forward.
        </div>
        <div style={{ fontSize: 28, color: '#a1a7b4' }}>
          Web · Mobile · Desktop · AI · SaaS · Cloud
        </div>
      </div>
    </div>,
    size,
  );
}
