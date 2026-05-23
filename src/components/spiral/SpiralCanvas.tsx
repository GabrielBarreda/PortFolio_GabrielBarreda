import { useState, useRef, useCallback } from 'react';
import { useSpiral } from '@/hooks/useSpiral';
import { ITEMS } from '@/config/data';
import { SPIRAL_SECTIONS, SPIRAL_DEFAULT_SUMMARY } from './data';

interface SpiralCanvasProps {
  onHover: (idx: number) => void;
  onClick: (idx: number) => void;
}

export default function SpiralCanvas({ onHover, onClick }: SpiralCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string>('');
  const [hoveredIdx, setHoveredIdx] = useState<number>(-1);

  const handleHover = useCallback((idx: number) => {
    setHoveredIdx(idx);
    onHover(idx);
  }, [onHover]);
  const handleClick = useCallback((idx: number) => onClick(idx), [onClick]);
  const handleSectionChange = useCallback((year: string | number) => {
    setActiveYear(year.toString());
  }, []);

  useSpiral({
    mountRef,
    items: ITEMS,
    onHover: handleHover,
    onClick: handleClick,
    onSectionChange: handleSectionChange,
  });

  const displayYear = hoveredIdx >= 0 ? ITEMS[hoveredIdx].year.toString() : activeYear;
  const section = displayYear ? SPIRAL_SECTIONS[displayYear] : null;
  const bgTint = section?.bgTint ?? 'rgba(0,0,0,0)';
  const periodLabel = section?.period ?? '';
  const summary = section?.summary ?? SPIRAL_DEFAULT_SUMMARY;

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>

      {/* FOND TEINTÉ PAR PÉRIODE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: bgTint,
          transition: 'background 1.2s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }} />

      {/* TOOLTIP DE PÉRIODE */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% + 260px)',
          right: '48px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          opacity: displayYear ? 1 : 0,
          transition: 'opacity 0.8s var(--ease-out)',
          zIndex: 2,
        }}
      >
        {/* Année fantôme */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '6rem',
          fontWeight: 800,
          lineHeight: 0.9,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(126, 184, 247, 0.18)',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
          userSelect: 'none',
        }}>
          {displayYear}
        </span>

        {/* Label de période */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--blue)',
          letterSpacing: '0.22em',
          opacity: 0.9,
          marginBottom: '14px',
        }}>
          {periodLabel}
        </span>

        {/* Résumé */}
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--muted)',
            lineHeight: 1.65,
            letterSpacing: '0.01em',
            borderLeft: '1px solid rgba(126, 184, 247, 0.3)',
            paddingLeft: '18px',
            maxWidth: '420px',
          }}
        >
          {summary}
        </div>
      </div>
    </div>
  );
}
