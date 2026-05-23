import { useEffect, useRef, useState } from 'react';

/**
 * Tracks scroll progress (0–1) within a scrollable container element.
 * Returns a smoothed progress value updated on every scroll event.
 */
export function useScrollProgress(containerRef: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const rawProgress = useRef(0);
  const smoothed = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollHeight - el.clientHeight;
      rawProgress.current = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
    };

    // Smooth interpolation via rAF to avoid layout thrashing
    const tick = () => {
      smoothed.current += (rawProgress.current - smoothed.current) * 0.08;
      setProgress(smoothed.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  return progress;
}
