import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered reveal animations
 * Uses IntersectionObserver for optimal performance
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Changed to true for instant visibility

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Instant visibility - no observer needed for first paint
    // This ensures content appears immediately
    setIsVisible(true);

  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

/**
 * Hook for staggered children animations
 */
export const useStaggeredReveal = (count: number, options: ScrollRevealOptions = {}) => {
  const { ref, isVisible } = useScrollReveal(options);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    if (!isVisible) {
      setVisibleItems([]);
      return;
    }

    // Stagger the reveal of children
    const delays = Array.from({ length: count }, (_, i) => i * 80);
    const timeouts: NodeJS.Timeout[] = [];

    delays.forEach((delay, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible, count]);

  return { ref, isVisible, visibleItems };
};
