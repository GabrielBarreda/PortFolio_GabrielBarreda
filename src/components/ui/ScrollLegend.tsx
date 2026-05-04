export default function ScrollLegend() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '22px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '22px',
        alignItems: 'center',
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--blue)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          PROJET
        </span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '9px', height: '9px', background: 'var(--gold)', transform: 'rotate(45deg)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          ACCOMPLISSEMENT
        </span>
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--muted)', opacity: 0.4, letterSpacing: '0.1em' }}>
        ↑↓ SCROLL · HOVER · CLIC
      </div>
    </div>
  );
}

