interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        padding: '5px 11px',
        background: 'rgba(100,160,230,0.07)',
        border: '1px solid rgba(100,160,230,0.2)',
        borderRadius: '4px',
        color: 'var(--blue-l)',
      }}
    >
      {label}
    </span>
  );
}

