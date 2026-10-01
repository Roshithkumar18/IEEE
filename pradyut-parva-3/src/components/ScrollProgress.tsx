import { useEffect, useState } from 'react';

/**
 * Thin scroll progress indicator
 * Shows at the top of the viewport with electric blue to cyan gradient
 */
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initialize

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      style={{
        background: 'transparent',
      }}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #0066cc 0%, #00d4ff 100%)',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
        }}
      />
    </div>
  );
};
