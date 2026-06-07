import { DATA } from '@/config/data';
import type { PageName } from '@/types';

interface NavProps {
  currentPage: PageName;
  onNavigate: (page: PageName) => void;
  shrink?: boolean;
}

const navLinks: { page: PageName; label: string }[] = [
  { page: 'home', label: 'ACCUEIL' },
  { page: 'expro', label: 'EXPÉRIENCE' },
  { page: 'about', label: 'À PROPOS' },
  { page: 'contact', label: 'CONTACT' },
];

export default function Nav({ currentPage, onNavigate, shrink = false }: NavProps) {
  return (
    <>
      <style>{`
        .nav-link-btn {
          transition: color 0.2s var(--ease-out);
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-link-btn:hover {
          color: var(--blue) !important;
        }
      `}</style>
      <nav
        className="nav-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '18px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(180deg, rgba(2,12,27,0.97) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      >
        <button
          className="nav-logo"
          onClick={() => onNavigate('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            padding: 0,
            pointerEvents: 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: shrink ? '0.85rem' : '2.5rem',
              letterSpacing: '0.04em',
              color: 'var(--white)',
              transition: 'font-size 0.3s ease',
              lineHeight: 1.1,
            }}
          >
            {DATA.name}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: shrink ? '0.85rem' : '2.5rem',
              letterSpacing: '0.04em',
              color: 'var(--white)',
              transition: 'font-size 0.3s ease',
              lineHeight: 1.1,
            }}
          >
            {DATA.surname}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: shrink ? '0.45rem' : '1.25rem',
              color: 'var(--gold)',
              letterSpacing: '0.06em',
              marginTop: '-2px',
              fontWeight: 600,
              transition: 'font-size 0.3s ease',
            }}
          >
            EN RECHERCHE D'ALTERNANCE (RYTHME 1SEM / 2SEM)
          </span>
          <span
            className="nav-title"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: shrink ? '0.45rem' : '1.25rem',
              color: 'var(--blue)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginTop: '2px',
              transition: 'font-size 0.3s ease',
            }}
          >
            {DATA.title}
          </span>
        </button>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', pointerEvents: 'auto' }}>
          {navLinks.map(({ page, label }) => (
            <button
              key={page}
              className="nav-link-btn"
              onClick={() => onNavigate(page)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.63rem',
                letterSpacing: '0.13em',
                color: (currentPage === page || (page === 'expro' && currentPage === 'expro-detail')) ? 'var(--blue)' : 'var(--muted)',
                padding: 0,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

