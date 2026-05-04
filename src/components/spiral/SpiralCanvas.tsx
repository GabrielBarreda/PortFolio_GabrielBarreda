import { useState, useRef, useCallback } from 'react';
import { useSpiral } from '@/hooks/useSpiral';
import { ITEMS } from '@/config/data';

interface SpiralCanvasProps {
  onHover: (idx: number) => void;
  onClick: (idx: number) => void;
}

const sectionSummaries: Record<string, string> = {
  "2020": "Fondations Académiques & Débuts Open Source",
  "2021": "Diplômes & Premières Armes en Entreprise",
  "2022": "Mobilité & Expériences Web Modernes",
  "2023": "Consolidation Desktop & Outils de Productivité",
  "2024": "Expansion FullStack & Innovation Interactive",
  "2025": "Écosystèmes Sécurisés & Open Source Global",
  "2026": "Vision Future & Interfaces Quantiques"
};

export default function SpiralCanvas({ onHover, onClick }: SpiralCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string | number>('');

  const handleHover = useCallback((idx: number) => onHover(idx), [onHover]);
  const handleClick = useCallback((idx: number) => onClick(idx), [onClick]);
  const handleSectionChange = useCallback((year: string | number) => setActiveYear(year), []);

  useSpiral({
    mountRef,
    items: ITEMS,
    onHover: handleHover,
    onClick: handleClick,
    onSectionChange: handleSectionChange,
  });

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* TOOLTIP DE SECTION (ANNÉE + RÉSUMÉ) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% + 100px)',
          right: '48px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          opacity: activeYear ? 1 : 0,
          transition: 'opacity 0.8s var(--ease-out)',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--blue)',
          letterSpacing: '0.4em',
          marginBottom: '10px',
          opacity: 0.6
        }}>
          ARCHIVES
        </span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '6rem',
          fontWeight: 800,
          lineHeight: 0.9,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(126, 184, 247, 0.15)',
          letterSpacing: '-0.02em',
          marginBottom: '15px'
        }}>
          {activeYear}
        </span>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            lineHeight: 1.6,
            letterSpacing: '0.02em',
            borderLeft: '1px solid rgba(126, 184, 247, 0.3)',
            paddingLeft: '20px',
            marginTop: '10px',
            marginLeft: '140px',
            maxWidth: '500px'
          }}
        >
          {sectionSummaries[activeYear.toString()] || "Période d'exploration technique"}
        </div>
      </div>
    </div>
  );
}

