import React, { useState, useCallback } from 'react';
import SpiralCanvas from '@/components/spiral/SpiralCanvas';
import ProjectCard from '@/components/ui/ProjectCard';
import AccomplishmentCard from '@/components/ui/AccomplishmentCard';
import ScrollLegend from '@/components/ui/ScrollLegend';
import { ITEMS, DATA } from '@/config/data';
import type { SpiralItem, PageName } from '@/types';

interface HomeProps {
  onNavigate: (page: PageName) => void;
  onOpenProject: (item: SpiralItem) => void;
}

export default function Home({ onNavigate, onOpenProject }: HomeProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(-1);

  const handleHover = useCallback((idx: number) => {
    setHoveredIdx(idx);
  }, []);

  const handleClick = useCallback((idx: number) => {
    const item = ITEMS[idx];
    if (item && item.kind === 'project') {
      onOpenProject(item);
    }
  }, [onOpenProject]);

  return (
    <div className="page-in" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <SpiralCanvas
        onHover={handleHover}
        onClick={handleClick}
      />

      <div
        className="hero-container"
        style={{
          position: 'absolute',
          left: '48px',
          top: '50%',
          transform: 'translateY(-50%)',
          maxWidth: '400px',
          textAlign: 'left',
          opacity: hoveredIdx >= 0 ? 0 : 1,
          transition: 'opacity 0.6s var(--ease-out)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            lineHeight: 1.08,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          {DATA.tagline.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
          }}
        >
          {DATA.bio}
        </div>
      </div>

      {hoveredIdx >= 0 && ITEMS[hoveredIdx] && (
        ITEMS[hoveredIdx].kind === 'project' ? (
          <ProjectCard
            item={ITEMS[hoveredIdx]}
            onOpen={onOpenProject}
          />
        ) : (
          <AccomplishmentCard item={ITEMS[hoveredIdx]} />
        )
      )}

      <ScrollLegend />
    </div>
  );
}

