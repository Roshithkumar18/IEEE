import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

/**
 * Custom hook for parallax scroll effects
 * Returns offset value based on scroll position
 */
export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, disabled]);

  return offset;
};
