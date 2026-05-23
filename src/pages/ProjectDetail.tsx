import type { SpiralItem } from '@/types';
import DetailHeader from '@/components/detail/DetailHeader';
import DetailBody from '@/components/detail/DetailBody';

interface ProjectDetailProps {
  project: SpiralItem;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const accentColor = project.color || 'var(--blue)';

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
          border: 1px solid ${accentColor};
          color: ${accentColor};
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
          background: ${accentColor};
          color: #020c1b;
        }
      `}</style>

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
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', paddingBottom: '100px' }}>
          <DetailHeader project={project} accentColor={accentColor} onBack={onBack} />
          <DetailBody project={project} accentColor={accentColor} />
        </div>
      </div>
    </>
  );
}
