import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'scale' | 'reveal';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Reusable animated section component
 * Triggers animation when scrolled into view
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'slideUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce });

  const animationClass = {
    fade: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    scale: 'animate-scale-in',
    reveal: 'animate-reveal',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className}`}
    >
      {children}
    </div>
  );
};

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  threshold?: number;
}

/**
 * Component for staggered list animations
 */
export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 80,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};
