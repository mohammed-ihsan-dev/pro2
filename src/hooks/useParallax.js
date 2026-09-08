import { useState, useEffect } from 'react';

/**
 * Custom hook for subtle mouse parallax effect on containers/cards.
 * Returns { x, y } offset values based on mouse position relative to window center.
 */
export function useParallax(sensitivity = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || 'ontouchstart' in window) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / sensitivity;
        const y = (e.clientY - innerHeight / 2) / sensitivity;
        setOffset({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sensitivity]);

  return offset;
}
