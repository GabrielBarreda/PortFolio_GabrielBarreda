import { APROPOS_DATA } from './data';

export default function ParcourSection() {
  return (
    <>
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
        {APROPOS_DATA.parcoursSectionTitle}
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
        {APROPOS_DATA.parcours.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
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
              {item.year}
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
              {item.title}
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
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
