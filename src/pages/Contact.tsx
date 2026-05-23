import { DATA } from '@/config/data';

const contactMethods = [
  { key: 'email', symbol: '◉', label: 'EMAIL' },
  { key: 'github', symbol: '◇', label: 'GITHUB' },
  { key: 'linkedin', symbol: '◈', label: 'LINKEDIN' },
];

export default function Contact() {
  const handleClick = (key: string, value: string) => {
    if (key === 'email') {
      window.open(`mailto:${value}`);
    } else {
      window.open(value.startsWith('http') ? value : `https://${value}`, '_blank');
    }
  };

  return (
    <div
      className="page-in"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        padding: '90px 48px 60px',
        overflowY: 'scroll',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '520px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            color: 'var(--blue)',
            marginBottom: '8px',
          }}
        >
          CONTACT
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: '16px',
            marginTop: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {"Travaillons\nensemble."}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
            marginBottom: '44px',
            marginTop: 0,
          }}
        >
          Disponible pour des missions freelance, opportunités en CDI, ou simplement pour échanger
          autour d'un projet.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {contactMethods.map((method) => {
            const value = DATA.contact[method.key as keyof typeof DATA.contact];
            if (!value) return null;

            return (
              <div
                key={method.key}
                className="contact-row"
                onClick={() => handleClick(method.key, value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '18px 22px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'var(--blue)',
                    width: '20px',
                    flexShrink: 0,
                    marginRight: '16px',
                    textAlign: 'center',
                  }}
                >
                  {method.symbol}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.56rem',
                      letterSpacing: '0.12em',
                      color: 'var(--muted)',
                      marginBottom: '3px',
                    }}
                  >
                    {method.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      color: 'var(--white)',
                    }}
                  >
                    {value}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    color: 'var(--muted)',
                    fontSize: '0.75rem',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

