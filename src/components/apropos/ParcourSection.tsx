import { APROPOS_DATA } from './data';

export default function ParcourSection() {
  // Séparer par branche
  const mainItems = APROPOS_DATA.parcours.filter(item => item.branch === 'main');
  const leftItems = APROPOS_DATA.parcours.filter(item => item.branch === 'left');
  const rightItems = APROPOS_DATA.parcours.filter(item => item.branch === 'right');

  const TimelineItem = ({ item, isLeft = false, isSplit = false }) => (
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
  );

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

      {/* Timeline principale (avant la bifurcation) */}
      <div
        style={{
          borderLeft: '1px solid var(--border)',
          paddingLeft: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          position: 'relative',
          marginBottom: '32px',
        }}
      >
        {mainItems.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>

      {/* Bifurcation en deux branches */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', position: 'relative' }}>
        {/* Branche gauche - Alternance */}
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
          {leftItems.map((item) => (
            <TimelineItem key={item.id} item={item} isLeft={true} isSplit={true} />
          ))}
        </div>

        {/* Branche droite - Études */}
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
          {rightItems.map((item) => (
            <TimelineItem key={item.id} item={item} isLeft={false} isSplit={true} />
          ))}
        </div>
      </div>
    </>
  );
}
