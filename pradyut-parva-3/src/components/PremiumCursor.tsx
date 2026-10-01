import React, { useEffect, useState } from 'react';

/**
 * Premium cursor effect - Desktop only
 * Subtle cyan glow that follows the cursor
 * Magnetic attraction on interactive elements (optional)
 */
export const PremiumCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only enable on desktop (not touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track hover over interactive elements
    const handleInteractiveHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null;
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleInteractiveHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleInteractiveHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Subtle cyan glow */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer glow */}
        <div
          className={`w-10 h-10 rounded-full transition-all duration-300 ${
            isHovering
              ? 'bg-cyan-500/30 scale-150'
              : 'bg-cyan-500/20 scale-100'
          }`}
          style={{
            filter: 'blur(10px)',
          }}
        />
        
        {/* Inner dot */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
            isHovering
              ? 'bg-cyan-400 scale-150'
              : 'bg-cyan-500 scale-100'
          }`}
        />
      </div>
    </>
  );
};
