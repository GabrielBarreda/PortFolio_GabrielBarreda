import type { SpiralItem } from '@/types';
import Badge from './Badge';

interface ProjectCardProps {
  item: SpiralItem;
  onOpen: (item: SpiralItem) => void;
}

import TechTag from './TechTag';

export default function ProjectCard({ item, onOpen }: ProjectCardProps) {
  return (
    <div
      className="card-in"
      onClick={() => onOpen(item)}
      style={{
        position: 'absolute',
        left: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '380px',
        background: 'var(--surface-1)',
        backdropFilter: 'blur(24px)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${item.color}`,
        borderRadius: '2px 8px 8px 2px',
        padding: '20px',
        zIndex: 50,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <Badge label={item.cat || 'PROJET'} variant="blue" />
        <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem' }}>
          {item.year}
        </span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--white)', lineHeight: 1.25, margin: '0 0 8px 0' }}>
        {item.title}
      </h3>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.65, margin: '0 0 16px 0' }}>
        {item.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {item.tech?.slice(0, 4).map(t => (
          <TechTag key={t} label={t} />
        ))}
      </div>
      
      <div style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.05em' }}>
        VOIR LE DÉTAIL →
      </div>
    </div>
  );
}
