import type { SpiralItem } from '@/types';
import Badge from '@/components/ui/Badge';
import { DETAIL_DATA } from './data';

interface DetailHeaderProps {
  project: SpiralItem;
  accentColor: string;
  onBack: () => void;
}

export default function DetailHeader({ project, accentColor, onBack }: DetailHeaderProps) {
  const isProject = project.kind === 'project';

  return (
    <>
      <button className="back-btn" onClick={onBack}>
        {DETAIL_DATA.backLabel}
      </button>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
        <Badge
          label={isProject ? (project.cat || DETAIL_DATA.projectBadge) : DETAIL_DATA.accomplishmentBadge}
          variant={isProject ? 'blue' : 'gold'}
        />
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
          background: accentColor,
          borderRadius: '2px',
          marginBottom: '30px',
        }}
      />
    </>
  );
}
