interface BadgeProps {
  label: string;
  variant?: 'blue' | 'gold';
}

export default function Badge({ label, variant = 'blue' }: BadgeProps) {
  const isBlue = variant === 'blue';
  
  return (
    <span
      style={{
        padding: '2px 8px',
        borderRadius: '3px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.58rem',
        letterSpacing: '0.1em',
        color: isBlue ? 'var(--blue)' : 'var(--gold)',
        border: `1px solid ${isBlue ? 'rgba(100,160,230,0.28)' : 'rgba(240,192,96,0.28)'}`,
      }}
    >
      {label}
    </span>
  );
}

