import TechTag from '@/components/ui/TechTag';
import type { ExperienceDetail } from '@/types';
import { EXPRO_LABELS } from './data';

interface ExperienceCardProps {
  experience: ExperienceDetail | null;
  onOpenDetail: (exp: ExperienceDetail) => void;
  visible: boolean;
}

export default function ExperienceCard({ experience, onOpenDetail, visible }: ExperienceCardProps) {
  return (
    <div
      style={{
        opacity: visible && experience ? 1 : 0,
        transform: visible && experience ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out)',
        pointerEvents: visible && experience ? 'auto' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        height: '100%',
      }}
    >
      {experience && (
        <>
          {/* Type badge + icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{experience.icon}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                letterSpacing: '0.14em',
                color: experience.color,
                border: `1px solid ${experience.color}44`,
                padding: '3px 8px',
                borderRadius: '3px',
              }}
            >
              {EXPRO_LABELS.typeBadge[experience.type]}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
              }}
            >
              {experience.location}
            </span>
          </div>

          {/* Company */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              color: experience.color,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '4px',
            }}
          >
            {experience.company}
          </div>

          {/* Role */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'var(--white)',
              marginBottom: '4px',
            }}
          >
            {experience.role}
          </div>

          {/* Period */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              marginBottom: '18px',
            }}
          >
            {experience.period}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--border)',
              marginBottom: '18px',
            }}
          />

          {/* Summary */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'var(--muted)',
              lineHeight: 1.65,
              margin: '0 0 18px',
            }}
          >
            {experience.summary}
          </p>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {experience.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>

          {/* Missions */}
          <div style={{ marginBottom: '18px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                color: 'var(--blue)',
                marginBottom: '8px',
              }}
            >
              MISSIONS
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {experience.missions.map((m, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: experience.color, marginTop: '0.15em', flexShrink: 0 }}>▸</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                marginBottom: '8px',
              }}
            >
              ACHIEVEMENTS
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {experience.achievements.map((a, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--gold)', marginTop: '0.15em', flexShrink: 0 }}>★</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={() => onOpenDetail(experience)}
            className="expro-detail-btn"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              padding: '10px 20px',
              borderRadius: '4px',
              border: `1px solid ${experience.color}`,
              color: experience.color,
              background: 'transparent',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.22s var(--ease-out)',
            }}
          >
            {EXPRO_LABELS.detailCta} →
          </button>
        </>
      )}
    </div>
  );
}
