import type { SpiralItem } from '@/types';

interface AccomplishmentDetailProps {
  accomplishment: SpiralItem;
  onBack: () => void;
  onNavigateToExPro?: () => void;
}

export default function AccomplishmentDetail({ accomplishment, onBack, onNavigateToExPro }: AccomplishmentDetailProps) {
  const accentColor = accomplishment.color || 'var(--gold)';

  return (
    <>
      <style>{`
        .back-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.1em;
          margin-bottom: 44px;
          padding: 0;
          transition: color 0.2s var(--ease-out);
        }
        .back-btn:hover {
          color: var(--white);
        }
      `}</style>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', overflowY: 'auto', background: 'var(--bg)', padding: '48px', zIndex: 1000 }}>
        <button onClick={onBack} className="back-btn">
          ← RETOUR
        </button>

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.14em',
              color: accentColor,
              border: `1px solid ${accentColor}44`,
              padding: '4px 10px',
              borderRadius: '3px',
            }}>
              ACCOMPLISSEMENT
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)' }}>
              {accomplishment.year}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--white)',
            marginBottom: '32px',
            marginTop: 0,
            lineHeight: 1.1,
          }}>
            {accomplishment.title}
          </h1>

          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            marginTop: '32px',
          }}>
            {(accomplishment.desc || '').split('<br><br>').map((paragraph, idx) => (
              <p key={idx} style={{
                margin: idx === 0 ? '0 0 20px 0' : '20px 0 0 0',
                color: idx === 0 ? 'var(--white)' : 'var(--muted)',
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          {(accomplishment.id === 'acc-2024-1' || accomplishment.id === 'acc-2025-1') && (
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={onNavigateToExPro}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  border: '1px solid var(--gold)',
                  color: 'var(--gold)',
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s var(--ease-out)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.color = '#020c1b';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                }}
              >
                {accomplishment.id === 'acc-2024-1' ? 'Voir les stages en détail →' : 'Voir l\'alternance en détail →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
