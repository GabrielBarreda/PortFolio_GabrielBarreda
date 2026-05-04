import type { SpiralItem } from '@/types';
import TechTag from '@/components/ui/TechTag';
import Badge from '@/components/ui/Badge';

interface ProjectDetailProps {
  project: SpiralItem;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
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
        .project-link-btn {
          display: inline-block;
          border: 1px solid ${project.color};
          color: ${project.color};
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 10px 24px;
          border-radius: 4px;
          text-decoration: none;
          cursor: pointer;
          background: transparent;
          transition: all 0.2s var(--ease-out);
          letter-spacing: 0.08em;
        }
        .project-link-btn:hover {
          background: ${project.color};
          color: #020c1b;
        }
      `}</style>

      <div
        className="page-in"
        style={{
          minHeight: '100vh',
          padding: '90px 48px 60px',
          overflowY: 'auto',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <button className="back-btn" onClick={onBack}>
            ← RETOUR
          </button>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
            {project.cat && <Badge label={project.cat} variant="blue" />}
            <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem' }}>
              {project.year}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '20px',
              marginTop: 0,
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              width: '52px',
              height: '3px',
              background: project.color,
              borderRadius: '2px',
              marginBottom: '30px',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'rgba(220, 238, 255, 0.78)',
              marginBottom: '40px',
              marginTop: 0,
            }}
          >
            {project.desc}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '48px',
            }}
          >
            {/* GAUCHE — POINTS FORTS */}
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '22px 20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                  marginBottom: '16px',
                }}
              >
                POINTS FORTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights?.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: project.color, lineHeight: 1.5 }}>▸</span>
                    <span
                      style={{
                        color: 'var(--white)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {hl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DROITE — STACK TECHNIQUE */}
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '22px 20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                  marginBottom: '16px',
                }}
              >
                STACK TECHNIQUE
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {project.tech?.map((t, i) => (
                  <TechTag key={i} label={t} />
                ))}
              </div>
            </div>
          </div>

          {/* BOUTON LIEN */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              VOIR LE PROJET →
            </a>
          )}
        </div>
      </div>
    </>
  );
}

