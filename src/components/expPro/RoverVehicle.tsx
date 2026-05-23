interface RoverVehicleProps {
  /** Rotation angle in degrees (0 = facing right) */
  angle?: number;
  size?: number;
}

/**
 * Top-down view of a space rover.
 * Float animation and rotation are on separate wrappers so CSS animation
 * `transform` does not override the path-following inline `rotate`.
 * Outer div: floats in screen space (translateY).
 * Inner div: rotates to match path tangent.
 */
export default function RoverVehicle({ angle = 0, size = 44 }: RoverVehicleProps) {
  return (
    <div
      className="rover-float"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 0 8px rgba(126,184,247,0.8))',
        willChange: 'transform',
      }}
    >
      <div style={{ transform: `rotate(${angle}deg)`, display: 'flex' }}>
        <svg
          viewBox="0 0 44 28"
          width={size}
          height={Math.round(size * 28 / 44)}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <ellipse cx="5" cy="14" rx="3.5" ry="5" fill="#7ef7c2" opacity="0.35" />
          <ellipse cx="5" cy="14" rx="2"   ry="3" fill="#7ef7c2" opacity="0.6"  />

          <rect x="8" y="2" width="10" height="6" rx="1.5" fill="#3a6fa8" opacity="0.85" />
          <line x1="11" y1="2" x2="11" y2="8" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.5" />
          <line x1="14" y1="2" x2="14" y2="8" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.5" />

          <rect x="8" y="20" width="10" height="6" rx="1.5" fill="#3a6fa8" opacity="0.85" />
          <line x1="11" y1="20" x2="11" y2="26" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.5" />
          <line x1="14" y1="20" x2="14" y2="26" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.5" />

          <rect x="8" y="7" width="26" height="14" rx="3" fill="#040f22" stroke="#7eb8f7" strokeWidth="1.2" />

          <ellipse cx="27" cy="14" rx="6"   ry="5"   fill="#7eb8f7" opacity="0.15" />
          <ellipse cx="27" cy="14" rx="4.5" ry="3.5" fill="#b8d8ff" opacity="0.2"  />
          <ellipse cx="27" cy="14" rx="3"   ry="2.2" fill="#7eb8f7" opacity="0.35" />

          <line x1="36" y1="14" x2="42" y2="14" stroke="#b8d8ff" strokeWidth="1.2" />
          <circle cx="42" cy="14" r="1.5" fill="#7eb8f7" />

          <circle cx="34" cy="14" r="1.8" fill="#7ef7c2" opacity="0.9" />
          <circle cx="34" cy="14" r="1"   fill="#ffffff"  opacity="0.6" />

          <line x1="16" y1="7" x2="16" y2="21" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.25" />
          <line x1="22" y1="7" x2="22" y2="21" stroke="#7eb8f7" strokeWidth="0.6" opacity="0.25" />
        </svg>
      </div>
    </div>
  );
}
