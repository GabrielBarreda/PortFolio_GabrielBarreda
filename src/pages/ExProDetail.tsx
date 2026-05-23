import type { ExperienceDetail } from '@/types';
import ExperienceCaseStudy from '@/components/expPro/ExperienceCaseStudy';

interface ExProDetailProps {
  experience: ExperienceDetail;
  onBack: () => void;
}

export default function ExProDetail({ experience, onBack }: ExProDetailProps) {
  const accentColor = experience.color;

  return (
    <div
      className="page-in"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        background: 'var(--bg)',
        zIndex: 10,
      }}
    >
      {/* Stars background */}
      <div aria-hidden="true" className="expro-stars" />

      {/* Accent glow at top */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '200px',
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}18 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '90px 48px 120px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <ExperienceCaseStudy
          experience={experience}
          accentColor={accentColor}
          onBack={onBack}
        />
      </div>
    </div>
  );
}
