import { useEffect, useRef, useState } from 'react';
import TechTag from '@/components/ui/TechTag';
import RoverVehicle from './RoverVehicle';
import { ROAD_PATH, ROAD_VIEWBOX, MILESTONES, EXPERIENCES, EXPRO_LABELS } from './data';
import { ITEMS } from '@/config/data';
import type { ExperienceDetail, SpiralItem } from '@/types';

interface RoverPos { x: number; y: number; angle: number; }

interface SpaceRoadProps {
  progress: number;
  onOpenDetail: (exp: ExperienceDetail) => void;
  onOpenProject: (item: SpiralItem) => void;
}

const VB_W = ROAD_VIEWBOX.width;
const VB_H = ROAD_VIEWBOX.height;

export default function SpaceRoad({ progress, onOpenDetail, onOpenProject }: SpaceRoadProps) {
  const pathRef      = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pathLength, setPathLength]         = useState(0);
  const [roverPos, setRoverPos]             = useState<RoverPos>({ x: 50, y: 100, angle: 0 });
  // Actual path fractions computed from SVG coordinates — overrides data.ts estimates
  const [realFractions, setRealFractions]   = useState<number[]>([]);

  // Compute total path length AND real milestone fractions once SVG is mounted
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();
    setPathLength(total);

    // Sample the path at N points and find which length is closest to each
    // milestone's (svgX, svgY) coordinate → gives us the true pathFraction
    const STEPS = 1200;
    const fractions = MILESTONES.map((ms) => {
      let bestLen  = 0;
      let bestDist = Infinity;
      for (let s = 0; s <= STEPS; s++) {
        const len = (s / STEPS) * total;
        const pt  = path.getPointAtLength(len);
        const d   = (pt.x - ms.svgX) ** 2 + (pt.y - ms.svgY) ** 2;
        if (d < bestDist) { bestDist = d; bestLen = len; }
      }
      return bestLen / total;
    });

    setRealFractions(fractions);
  }, []);

  // Move rover along path based on progress
  useEffect(() => {
    const path = pathRef.current;
    if (!path || pathLength === 0) return;
    const len     = progress * pathLength;
    const pt      = path.getPointAtLength(len);
    const nextLen = Math.min(len + 5, pathLength);
    const nextPt  = path.getPointAtLength(nextLen);
    const angle   = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);
    setRoverPos({ x: pt.x, y: pt.y, angle });
  }, [progress, pathLength]);

  // Use computed fractions when ready, fall back to data estimates
  const fractions = realFractions.length === MILESTONES.length
    ? realFractions : MILESTONES.map((m) => m.pathFraction);

  // Active milestone: last one whose fraction <= current progress
  const activeIndex = fractions.reduce<number>((acc, f, i) =>
    progress >= f ? i : acc, -1);

  const activeExp = activeIndex >= 0
    ? EXPERIENCES.find((e) => e.id === MILESTONES[activeIndex].experienceId) ?? null
    : null;

  // stroke-dashoffset reveals the traveled portion
  const dashOffset = pathLength > 0 ? pathLength * (1 - progress) : pathLength;

  const roverLeft = `${(roverPos.x / VB_W) * 100}%`;
  const roverTop  = `${(roverPos.y / VB_H) * 100}%`;

  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'stretch',
        height: '100%',
        minHeight: 0,
      }}
    >
      {/* ── Left column: road (wider) ───────────────────────────── */}
      <div
        style={{
          flex: '0 0 66%',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Status bar */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.56rem',
            letterSpacing: '0.14em',
            color: 'var(--blue)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span>{EXPRO_LABELS.missionLogLabel}</span>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span style={{ color: 'var(--muted)' }}>
            {activeIndex >= 0 ? `${activeIndex + 1} / ${MILESTONES.length}` : '—'} étapes
          </span>
          <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* SVG road */}
        <div
          ref={containerRef}
          style={{ position: 'relative', width: '100%', flex: 1, minHeight: 0 }}
        >
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            width="100%"
            height="100%"
            style={{ display: 'block', overflow: 'visible' }}
            aria-hidden="true"
          >
            <defs>
              <filter id="progressGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <linearGradient id="progressGrad" gradientUnits="userSpaceOnUse"
                x1="50" y1="100" x2={roverPos.x} y2={roverPos.y}>
                <stop offset="0%"   stopColor="#3a6fa8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7eb8f7" stopOpacity="1"   />
              </linearGradient>
            </defs>

            {/* Dim background path */}
            <path d={ROAD_PATH} fill="none"
              stroke="rgba(100,160,230,0.10)" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" />

            {/* Traveled path (revealed by dashoffset) */}
            <path d={ROAD_PATH} fill="none"
              stroke="url(#progressGrad)" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray={pathLength || 10000}
              strokeDashoffset={dashOffset}
              filter="url(#progressGlow)" />

            {/* Hidden path for getTotalLength measurement */}
            <path ref={pathRef} d={ROAD_PATH} fill="none" stroke="transparent" strokeWidth="0" />

            {/* Start dot */}
            <circle cx="50" cy="100" r="4" fill="var(--bg)" stroke="rgba(100,160,230,0.35)" strokeWidth="1.5" />
            <circle cx="50" cy="100" r="1.8" fill="rgba(100,160,230,0.45)" />

            {/* End dot */}
            <circle cx="850" cy="490" r="4" fill="var(--bg)" stroke="rgba(100,160,230,0.18)" strokeWidth="1.5" />

            {/* Milestone nodes */}
            {MILESTONES.map((ms, i) => {
              const exp        = EXPERIENCES.find((e) => e.id === ms.experienceId);
              const color      = exp?.color ?? 'var(--blue)';
              const fraction   = fractions[i] ?? ms.pathFraction;
              const isReached  = progress >= fraction;
              const isActive   = i === activeIndex;
              // Proximity halo ramps up within ±5% of the real fraction, fades at passage
              const proximity  = Math.max(0, 1 - Math.abs(progress - fraction) / 0.05);
              const glowOpacity = isReached ? 0 : proximity * 0.55;

              return (
                <g key={ms.experienceId}>
                  {/* Proximity halo (fades in as rover approaches, off once reached) */}
                  <circle cx={ms.svgX} cy={ms.svgY} r="18"
                    fill="none" stroke={color} strokeWidth="1.5"
                    opacity={glowOpacity}
                    style={{ transition: 'opacity 0.3s ease' }} />

                  {/* Active pulse ring */}
                  {isActive && (
                    <circle cx={ms.svgX} cy={ms.svgY} r="14"
                      fill="none" stroke={color} strokeWidth="1"
                      opacity="0.35" className="milestone-pulse" />
                  )}

                  {/* Outer ring */}
                  <circle cx={ms.svgX} cy={ms.svgY} r="9"
                    fill="var(--bg)"
                    stroke={isReached ? color : 'rgba(100,160,230,0.18)'}
                    strokeWidth="1.5"
                    filter={isReached ? 'url(#dotGlow)' : undefined}
                    style={{ transition: 'stroke 0.8s var(--ease-out), filter 0.8s var(--ease-out)' }} />

                  {/* Inner filled dot */}
                  <circle cx={ms.svgX} cy={ms.svgY} r="4"
                    fill={isReached ? color : 'rgba(100,160,230,0.12)'}
                    style={{ transition: 'fill 0.8s var(--ease-out)' }} />

                  {/* Step number */}
                  <text x={ms.svgX} y={ms.svgY + 0.5}
                    textAnchor="middle" dominantBaseline="middle"
                    fill={isReached ? 'var(--bg)' : 'rgba(100,160,230,0.25)'}
                    fontSize="5" fontFamily="var(--font-mono)"
                    style={{ transition: 'fill 0.8s var(--ease-out)', userSelect: 'none' }}>
                    {i + 1}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Rover overlaid on SVG via absolute % positioning */}
          <div
            style={{
              position: 'absolute',
              left: roverLeft,
              top: roverTop,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <RoverVehicle angle={roverPos.angle} size={38} />
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: '2px', background: 'var(--border)', borderRadius: '1px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, var(--blue-d), var(--blue))',
            borderRadius: '1px',
          }} />
        </div>
      </div>

      {/* ── Right column: compact preview ──────────────────────── */}
      <div
        style={{
          flex: '1 1 34%',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderLeft: '1px solid var(--border)',
          paddingLeft: '24px',
          overflowY: 'auto',
        }}
      >
        {/* Empty state */}
        {activeIndex < 0 && (
          <div style={{ animation: 'fadeUp 0.4s var(--ease-out) both' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              marginBottom: '16px',
            }}>
              {EXPRO_LABELS.startMessage}
            </p>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="mission-dot" style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'var(--blue-d)', animationDelay: `${i * 0.18}s`,
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Active compact card */}
        {activeExp && (
          <CompactCard
            key={activeExp.id}
            experience={activeExp}
            onOpenDetail={onOpenDetail}
            onOpenProject={onOpenProject}
          />
        )}

        {/* Mission complete badge */}
        {progress >= 0.97 && (
          <div style={{
            marginTop: '16px', padding: '12px 14px',
            background: 'rgba(240,192,96,0.05)',
            border: '1px solid rgba(240,192,96,0.18)', borderRadius: '6px',
            animation: 'fadeUp 0.4s var(--ease-out) both',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
              letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '5px',
            }}>
              PARCOURS COMPLET
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.76rem',
              color: 'var(--muted)', lineHeight: 1.5, margin: 0,
            }}>
              {EXPRO_LABELS.completeDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Compact preview card ──────────────────────────────────────────────────────
function CompactCard({
  experience,
  onOpenDetail,
  onOpenProject,
}: {
  experience: ExperienceDetail;
  onOpenDetail: (e: ExperienceDetail) => void;
  onOpenProject: (item: SpiralItem) => void;
}) {
  const linkedProject = experience.linkedProjectId
    ? ITEMS.find((item) => item.id === experience.linkedProjectId) ?? null
    : null;

  return (
    <div style={{ animation: 'fadeUp 0.35s var(--ease-out) both' }}>
      {/* Type + period */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em',
          color: experience.color, border: `1px solid ${experience.color}44`,
          padding: '2px 7px', borderRadius: '3px',
        }}>
          {EXPRO_LABELS.typeBadge[experience.type]}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.54rem', color: 'var(--muted)' }}>
          {experience.location}
        </span>
      </div>

      {/* Company */}
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
        color: experience.color, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '3px',
      }}>
        {experience.company}
      </div>

      {/* Role */}
      <div style={{
        fontFamily: 'var(--font-body)', fontWeight: 500,
        fontSize: '0.82rem', color: 'var(--white)', marginBottom: '2px',
      }}>
        {experience.role}
      </div>

      {/* Period */}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
        color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '14px',
      }}>
        {experience.period}
      </div>

      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '14px' }} />

      {/* Summary (2-3 lines max) */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '0.76rem',
        color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 14px',
        display: '-webkit-box', WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {experience.summary}
      </p>

      {/* Tech (first 4 tags only) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
        {experience.tech.slice(0, 4).map((t) => <TechTag key={t} label={t} />)}
        {experience.tech.length > 4 && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--muted)', padding: '5px 4px',
          }}>
            +{experience.tech.length - 4}
          </span>
        )}
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          onClick={() => onOpenDetail(experience)}
          className="expro-detail-btn"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
            padding: '8px 16px', borderRadius: '4px',
            border: `1px solid ${experience.color}`,
            color: experience.color, background: 'transparent',
            cursor: 'pointer', transition: 'all 0.22s var(--ease-out)',
          }}
        >
          {EXPRO_LABELS.detailCta} →
        </button>

        {linkedProject && (
          <button
            onClick={() => onOpenProject(linkedProject)}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em',
              padding: '8px 16px', borderRadius: '4px',
              border: '1px solid rgba(232, 133, 58, 0.5)',
              color: '#e8853a', background: 'transparent',
              cursor: 'pointer', transition: 'all 0.22s var(--ease-out)',
            }}
          >
            Voir le projet : {linkedProject.title} →
          </button>
        )}
      </div>
    </div>
  );
}
