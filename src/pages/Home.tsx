import { useState, useCallback } from 'react';
import SpiralCanvas from '@/components/spiral/SpiralCanvas';
import ProjectCard from '@/components/ui/ProjectCard';
import AccomplishmentCard from '@/components/ui/AccomplishmentCard';
import ScrollLegend from '@/components/ui/ScrollLegend';
import HeroSection from '@/components/acceuil/HeroSection';
import { ITEMS } from '@/config/data';
import type { SpiralItem, PageName } from '@/types';

interface HomeProps {
  onNavigate: (page: PageName) => void;
  onOpenProject: (item: SpiralItem) => void;
}

export default function Home({ onNavigate: _onNavigate, onOpenProject }: HomeProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number>(-1);

  const handleHover = useCallback((idx: number) => {
    setHoveredIdx(idx);
  }, []);

  const handleClick = useCallback((idx: number) => {
    const item = ITEMS[idx];
    if (item) {
      onOpenProject(item);
    }
  }, [onOpenProject]);

  return (
    <div className="page-in" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <SpiralCanvas
        onHover={handleHover}
        onClick={handleClick}
      />

      <HeroSection visible={hoveredIdx < 0} />

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
