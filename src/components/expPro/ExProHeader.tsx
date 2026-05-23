import { EXPRO_LABELS } from './data';

export default function ExProHeader() {
  return (
    <div style={{ marginBottom: '36px' }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.16em',
          color: 'var(--blue)',
          marginBottom: '8px',
        }}
      >
        {EXPRO_LABELS.headerLabel}
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          marginBottom: '10px',
          marginTop: 0,
          lineHeight: 1.05,
        }}
      >
        {EXPRO_LABELS.headerTitle}
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          color: 'var(--muted)',
          lineHeight: 1.6,
          margin: 0,
          maxWidth: '480px',
        }}
      >
        {EXPRO_LABELS.headerSub}
      </p>
    </div>
  );
}
