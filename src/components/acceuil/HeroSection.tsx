import React from 'react';
import { ACCEUIL_DATA } from './data';

interface HeroSectionProps {
  visible: boolean;
}

export default function HeroSection({ visible }: HeroSectionProps) {
  return (
    <div
      className="hero-container"
      style={{
        position: 'absolute',
        left: '48px',
        top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: '400px',
        textAlign: 'left',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s var(--ease-out)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
          lineHeight: 1.15,
          color: 'var(--white)',
          letterSpacing: '-0.01em',
          marginBottom: '10px',
        }}
      >
        {ACCEUIL_DATA.tagline.split('\n').map((line, i, arr) => (
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
        {ACCEUIL_DATA.bio}
      </div>
    </div>
  );
}
