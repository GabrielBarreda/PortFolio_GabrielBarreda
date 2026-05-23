import type { SpiralItem } from '@/types';
import TechTag from '@/components/ui/TechTag';
import DetailPresentation from './DetailPresentation';
import { DETAIL_DATA } from './data';

interface DetailBodyProps {
  project: SpiralItem;
  accentColor: string;
}

export default function DetailBody({ project, accentColor }: DetailBodyProps) {
  return (
    <>
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

      {(project.highlights || project.tech) && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {project.highlights && (
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
                {DETAIL_DATA.highlightsLabel}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: accentColor, lineHeight: 1.5 }}>▸</span>
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
          )}

          {project.tech && (
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
                {DETAIL_DATA.techLabel}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {project.tech.map((t, i) => (
                  <TechTag key={i} label={t} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {project.presentation && (
        <DetailPresentation blocks={project.presentation} accentColor={accentColor} />
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
        >
          {DETAIL_DATA.linkLabel}
        </a>
      )}
    </>
  );
}
