import { DATA } from '@/config/data';
import TechTag from '@/components/ui/TechTag';

export default function About() {
  return (
    <div
      className="page-in"
      style={{
        minHeight: '100vh',
        padding: '90px 48px 60px',
        overflowY: 'auto',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            color: 'var(--blue)',
            marginBottom: '8px',
          }}
        >
          À PROPOS
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
          Qui je suis.
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
          {DATA.bio}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            marginBottom: '52px',
          }}
        >
          {Object.entries(DATA.skills).map(([category, skills]) => (
            <div
              key={category}
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  color: 'var(--blue)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skills.map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--white)',
            marginTop: '52px',
            marginBottom: '28px',
          }}
        >
          Parcours
        </h2>

        <div
          style={{
            borderLeft: '1px solid var(--border)',
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'relative',
          }}
        >
          {DATA.accomplishments.map((acc) => (
            <div key={acc.id} style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '-28.5px',
                  top: '6px',
                  width: '8px',
                  height: '8px',
                  background: 'var(--gold)',
                  transform: 'rotate(45deg)',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--gold)',
                  marginBottom: '4px',
                }}
              >
                {acc.year}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--white)',
                  marginBottom: '4px',
                  marginTop: 0,
                }}
              >
                {acc.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {acc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

