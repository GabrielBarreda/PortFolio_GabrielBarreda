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
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--muted)', opacity: 0.4, letterSpacing: '0.1em' }}>
        ↑↓ SCROLL · HOVER · CLIC
      </div>
    </div>
  );
}

