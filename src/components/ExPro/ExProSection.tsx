import TechTag from '@/components/ui/TechTag';
import { EXPRO_DATA } from './data';

export default function ExProSection() {
  return (
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
        {EXPRO_DATA.headerLabel}
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          letterSpacing: '-0.02em',
          color: 'var(--white)',
          marginBottom: '40px',
          marginTop: 0,
        }}
      >
        {EXPRO_DATA.headerTitle}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {EXPRO_DATA.experiences.map((exp) => (
          <div
            key={exp.id}
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--white)',
                    marginBottom: '4px',
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--blue)',
                  }}
                >
                  {exp.company}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {exp.period}
                </div>
                {exp.location && (
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'var(--muted)',
                      marginTop: '2px',
                    }}
                  >
                    {exp.location}
                  </div>
                )}
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
                margin: '12px 0 0',
              }}
            >
              {exp.desc}
            </p>

            {exp.tech.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                {exp.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
