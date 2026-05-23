import TechTag from '@/components/ui/TechTag';
import { APROPOS_DATA } from './data';

export default function SkillsSection() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
        marginBottom: '52px',
      }}
    >
      {Object.entries(APROPOS_DATA.skills).map(([category, skills]) => (
        <div
          key={category}
          style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.12em',
              color: 'var(--blue)',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((skill) => (
              <TechTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
