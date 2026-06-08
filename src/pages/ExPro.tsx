import { useRef } from 'react';
import ExProHeader from '@/components/expPro/ExProHeader';
import SpaceRoad from '@/components/expPro/SpaceRoad';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import type { ExperienceDetail, PageName, SpiralItem } from '@/types';

interface ExProProps {
  onNavigate: (page: PageName) => void;
  onOpenDetail: (exp: ExperienceDetail) => void;
  onOpenProject: (item: SpiralItem) => void;
}

// Total scroll height: the more vh, the slower the rover moves
// 900vh means ~8 full viewport scrolls to reach the end
const SCROLL_HEIGHT = '900vh';

export default function ExPro({ onNavigate: _onNavigate, onOpenDetail, onOpenProject }: ExProProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(scrollRef as React.RefObject<HTMLElement | null>);

  return (
    <>
      <style>{`
        .expro-detail-btn:hover {
          background: var(--expro-btn-color, var(--blue));
          color: var(--bg) !important;
        }
        .mission-dot {
          animation: missionDotPulse 1.4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .expro-road-layout {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .expro-road-layout > div:first-child {
            flex: none !important;
            height: 260px !important;
          }
          .expro-road-layout > div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border) !important;
            padding-top: 20px !important;
          }
        }
      `}</style>

      {/* Scroll container — same pattern as About.tsx */}
      <div
        ref={scrollRef}
        className="page-in"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflowY: 'scroll',
          background: 'var(--bg)',
        }}
      >
        {/* Stars background layer */}
        <div aria-hidden="true" className="expro-stars" />

        {/* Page header */}
        <div
          style={{
            padding: '90px 48px 0',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <ExProHeader />
        </div>

        {/* ── Scroll trigger section ─────────────────────────────── */}
        {/* This div is tall — the sticky child stays in view while user scrolls */}
        <div
          style={{
            height: SCROLL_HEIGHT,
            position: 'relative',
          }}
        >
          {/* Sticky road container */}
          <div
            style={{
              position: 'sticky',
              top: '80px',
              height: 'calc(100vh - 80px)',
              padding: '0 48px 24px',
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SpaceRoad progress={progress} onOpenDetail={onOpenDetail} onOpenProject={onOpenProject} />
          </div>
        </div>

        {/* ── Footer after scroll section ───────────────────────── */}
        <div
          style={{
            padding: '60px 48px 80px',
            maxWidth: '760px',
            margin: '0 auto',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.14em',
              color: 'var(--blue)',
              marginBottom: '12px',
            }}
          >
            EN RECHERCHE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: 'var(--white)',
              marginBottom: '14px',
              marginTop: 0,
            }}
          >
            La suite s'écrit maintenant.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            3 ans chez Actulog m'ont forgé comme développeur Client Lourd spécialisé en C# / WPF / .NET sur un ERP métier.
            C'est l'école, les projets de groupe et mes développements personnels (TaskManager, CheerzUp, CRM) qui m'ont apporté les compétences Fullstack, React, NestJS et CICD.
            Je suis aujourd'hui en recherche d'alternance pour continuer à developper mes compétences au sein d'une nouvelle équipe
          </p>
        </div>
      </div>
    </>
  );
}
