/**
 * Global Animation System
 * Centralized animation constants, timing, and easing functions
 */

// Animation Durations (in milliseconds)
export const DURATION = {
  INSTANT: 150,
  FAST: 250,
  NORMAL: 350,
  MODERATE: 500,
  SLOW: 800,
  VERY_SLOW: 1200,
  HERO: 1600,
} as const;

// Animation Delays (in milliseconds)
export const DELAY = {
  NONE: 0,
  TINY: 50,
  SMALL: 100,
  MEDIUM: 200,
  LARGE: 400,
  HERO_TITLE: 400,
  HERO_SUBTITLE: 700,
  HERO_INFO: 900,
  HERO_CTA: 1100,
} as const;

// Stagger Delays (for sequential animations)
export const STAGGER = {
  FAST: 50,
  NORMAL: 80,
  SLOW: 100,
  CARDS: 80,
  ITEMS: 60,
} as const;

// Custom Easing Functions
export const EASING = {
  // Smooth premium easing
  SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // For entrances
  ENTRANCE: 'cubic-bezier(0, 0, 0.2, 1)',
  // For exits
  EXIT: 'cubic-bezier(0.4, 0, 1, 1)',
  // For emphasized movements
  EMPHASIZED: 'cubic-bezier(0.4, 0, 0.6, 1)',
  // For bouncy effects (use sparingly)
  SPRING: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  // For elastic effects (use very sparingly)
  ELASTIC: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// Transition Strings (ready to use in CSS/Tailwind)
export const TRANSITION = {
  FAST: `all ${DURATION.FAST}ms ${EASING.SMOOTH}`,
  NORMAL: `all ${DURATION.NORMAL}ms ${EASING.SMOOTH}`,
  SLOW: `all ${DURATION.SLOW}ms ${EASING.SMOOTH}`,
  TRANSFORM: `transform ${DURATION.NORMAL}ms ${EASING.SMOOTH}`,
  OPACITY: `opacity ${DURATION.NORMAL}ms ${EASING.SMOOTH}`,
  COLOR: `color ${DURATION.FAST}ms ${EASING.SMOOTH}`,
} as const;

// Animation Distances (for transforms)
export const DISTANCE = {
  TINY: 2,
  SMALL: 4,
  NORMAL: 6,
  MEDIUM: 12,
  LARGE: 20,
  XLARGE: 40,
} as const;

// Color Palette for Animations (from official poster)
export const ANIMATION_COLORS = {
  NAVY: '#192d7d',
  ELECTRIC_BLUE: '#0066cc',
  CYAN: '#00d4ff',
  PURPLE: '#9333ea',
  MAGENTA: '#e91e63',
  GREEN: '#10b981',
  GOLD: '#fbbf24',
} as const;

// Animation Variants for Framer Motion (if needed later)
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: DISTANCE.LARGE },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -DISTANCE.LARGE },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: DISTANCE.LARGE },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -DISTANCE.LARGE },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: STAGGER.NORMAL / 1000,
      },
    },
  },
} as const;

/**
 * Generate stagger delay for nth child
 */
export const getStaggerDelay = (index: number, staggerAmount: number = STAGGER.NORMAL): number => {
  return index * staggerAmount;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get safe animation duration (respects reduced motion)
 */
export const getSafeDuration = (duration: number): number => {
  return prefersReducedMotion() ? 0 : duration;
};

/**
 * Create staggered animation class names
 */
export const getStaggerClass = (index: number, baseDelay: number = 0): string => {
  const delay = baseDelay + getStaggerDelay(index);
  return `animate-delay-[${delay}ms]`;
};
