import TechTag from '@/components/ui/TechTag';
import type { ExperienceDetail } from '@/types';
import { EXPRO_LABELS } from './data';

interface ExperienceCaseStudyProps {
  experience: ExperienceDetail;
  accentColor: string;
  onBack: () => void;
}

/**
 * Reusable, modular layout for an experience detail/case study page.
 * Configurable by data — no hardcoded content.
 * Sections: hero → context → stack → problems → solutions → results → feedback
 */
export default function ExperienceCaseStudy({
  experience,
  accentColor,
  onBack,
}: ExperienceCaseStudyProps) {
  return (
    <>
      <style>{`
        .expro-back-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.1em;
          padding: 0;
          transition: color 0.2s var(--ease-out);
        }
        .expro-back-btn:hover { color: var(--white); }

        .cs-section {
          animation: fadeUp 0.45s var(--ease-out) both;
        }
        .cs-section:nth-child(2)  { animation-delay: 0.05s; }
        .cs-section:nth-child(3)  { animation-delay: 0.10s; }
        .cs-section:nth-child(4)  { animation-delay: 0.15s; }
        .cs-section:nth-child(5)  { animation-delay: 0.20s; }
        .cs-section:nth-child(6)  { animation-delay: 0.25s; }
        .cs-section:nth-child(7)  { animation-delay: 0.30s; }
        .cs-section:nth-child(8)  { animation-delay: 0.35s; }
      `}</style>

      {/* Back button */}
      <button className="expro-back-btn" onClick={onBack}>
        ← RETOUR PARCOURS
      </button>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="cs-section" style={{ marginTop: '36px', marginBottom: '48px' }}>
        {/* Type badge + period */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>{experience.icon}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.14em',
              color: accentColor,
              border: `1px solid ${accentColor}44`,
              padding: '4px 10px',
              borderRadius: '3px',
            }}
          >
            {EXPRO_LABELS.typeBadge[experience.type]}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--muted)',
              letterSpacing: '0.06em',
            }}
          >
            {experience.period} · {experience.location}
          </span>
        </div>

        {/* Company name */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            letterSpacing: '-0.03em',
            color: accentColor,
            margin: '0 0 6px',
            lineHeight: 1,
          }}
        >
          {experience.company}
        </h1>

        {/* Role */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--white)',
            margin: '0 0 20px',
            letterSpacing: '-0.01em',
          }}
        >
          {experience.role}
        </h2>

        {/* Summary */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
            margin: 0,
            maxWidth: '600px',
          }}
        >
          {experience.summary}
        </p>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '48px' }} />

      {/* ── Contexte mission ─────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="CONTEXTE MISSION" color={accentColor} />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {experience.context}
        </p>
      </section>

      {/* ── Stack technique ──────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="STACK TECHNIQUE" color={accentColor} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {experience.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </section>

      {/* ── Missions ─────────────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="MISSIONS" color="var(--blue)" />
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {experience.missions.map((m, i) => (
            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span
                style={{
                  color: accentColor,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  flexShrink: 0,
                  marginTop: '0.2em',
                }}
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--white)',
                  lineHeight: 1.6,
                }}
              >
                {m}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Problématiques ───────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="PROBLÉMATIQUES RENCONTRÉES" color="#f77e7e" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {experience.problems.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '14px 16px',
                background: 'rgba(247,126,126,0.04)',
                border: '1px solid rgba(247,126,126,0.15)',
                borderRadius: '6px',
                borderLeft: `3px solid rgba(247,126,126,0.5)`,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solutions apportées ──────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="SOLUTIONS APPORTÉES" color="#7ef7c2" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {experience.solutions.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '14px 16px',
                background: 'rgba(126,247,194,0.04)',
                border: '1px solid rgba(126,247,194,0.15)',
                borderRadius: '6px',
                borderLeft: `3px solid rgba(126,247,194,0.5)`,
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  color: '#7ef7c2',
                  fontSize: '0.75rem',
                  flexShrink: 0,
                  marginTop: '0.15em',
                }}
              >
                ✓
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Résultats obtenus ────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="RÉSULTATS OBTENUS" color="var(--gold)" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '12px',
          }}
        >
          {experience.results.map((r, i) => (
            <div
              key={i}
              style={{
                padding: '16px',
                background: 'rgba(240,192,96,0.05)',
                border: '1px solid rgba(240,192,96,0.18)',
                borderRadius: '6px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--gold)',
                  marginBottom: '6px',
                  letterSpacing: '0.1em',
                }}
              >
                ★
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--white)',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {r}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '44px' }}>
        <SectionLabel label="ACHIEVEMENTS" color="var(--gold)" />
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {experience.achievements.map((a, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1em' }}>★</span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--white)',
                  lineHeight: 1.55,
                }}
              >
                {a}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Retour d'expérience ──────────────────────────────────── */}
      <section className="cs-section" style={{ marginBottom: '60px' }}>
        <SectionLabel label="RETOUR D'EXPÉRIENCE" color={accentColor} />
        <blockquote
          style={{
            margin: 0,
            padding: '20px 24px',
            borderLeft: `3px solid ${accentColor}`,
            background: `${accentColor}08`,
            borderRadius: '0 6px 6px 0',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--white)',
              lineHeight: 1.75,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            "{experience.feedback}"
          </p>
        </blockquote>
      </section>
    </>
  );
}

// ── Shared section label component ────────────────────────────────────────────
function SectionLabel({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.16em',
        color,
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {label}
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}
