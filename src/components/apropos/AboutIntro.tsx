import { APROPOS_DATA } from './data';

export default function AboutIntro() {
  return (
    <>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.16em',
          color: 'var(--blue)',
          marginBottom: '8px',
        }}
      >
        {APROPOS_DATA.headerLabel}
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          marginBottom: '28px',
          marginTop: 0,
        }}
      >
        {APROPOS_DATA.headerTitle}
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.9,
          color: 'rgba(220, 238, 255, 0.78)',
          maxWidth: '520px',
          marginBottom: '52px',
        }}
      >
        {APROPOS_DATA.bio}
      </p>
    </>
  );
}
