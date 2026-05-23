import type { PresentationBlock } from '@/types';
import { DETAIL_DATA } from './data';

interface DetailPresentationProps {
  blocks: PresentationBlock[];
  accentColor: string;
}

export default function DetailPresentation({ blocks, accentColor }: DetailPresentationProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div style={{ marginBottom: '48px' }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          letterSpacing: '0.12em',
          color: 'var(--muted)',
          marginBottom: '20px',
        }}
      >
        {DETAIL_DATA.presentationLabel}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {blocks.map((block, i) =>
          block.type === 'text' ? (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'rgba(220, 238, 255, 0.72)',
                margin: 0,
                borderLeft: `2px solid ${accentColor}33`,
                paddingLeft: '16px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {block.content}
            </p>
          ) : (
            <figure key={i} style={{ margin: 0 }}>
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-2)',
                  maxHeight: '420px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={block.content}
                  alt={block.caption ?? ''}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              {block.caption && (
                <figcaption
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.08em',
                    color: 'var(--muted)',
                    marginTop: '8px',
                    paddingLeft: '4px',
                  }}
                >
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )
        )}
      </div>
    </div>
  );
}
