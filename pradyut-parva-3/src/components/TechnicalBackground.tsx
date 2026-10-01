import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface TechnicalBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  showGrid?: boolean;
  showParticles?: boolean;
  showCircuits?: boolean;
  className?: string;
}

/**
 * Animated technical background with grid, particles, and circuit-like elements
 * Optimized for performance with canvas rendering
 */
export const TechnicalBackground: React.FC<TechnicalBackgroundProps> = ({
  density = 'medium',
  showGrid = true,
  showParticles = true,
  showCircuits = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Draw static background only
      drawStaticBackground(ctx, canvas);
      return;
    }

    // Resize canvas to match container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeParticles();
    };

    const initializeParticles = () => {
      const particleCount = {
        low: 15,
        medium: 25,
        high: 40,
      }[density];

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const drawGrid = () => {
      if (!showGrid) return;

      ctx.strokeStyle = 'rgba(0, 102, 204, 0.05)';
      ctx.lineWidth = 1;

      const gridSize = 40;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawCircuits = () => {
      if (!showCircuits) return;

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 1;

      // Draw some random circuit-like paths
      const paths = 8;
      for (let i = 0; i < paths; i++) {
        ctx.beginPath();
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        ctx.moveTo(x, y);

        const segments = 3 + Math.floor(Math.random() * 3);
        for (let j = 0; j < segments; j++) {
          const direction = Math.floor(Math.random() * 4);
          const length = 50 + Math.random() * 100;

          switch (direction) {
            case 0: y -= length; break; // up
            case 1: x += length; break; // right
            case 2: y += length; break; // down
            case 3: x -= length; break; // left
          }

          ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw node at end
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
        ctx.fill();
      }
    };

    const drawParticles = () => {
      if (!showParticles) return;

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw subtle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(0, 212, 255, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const drawStaticBackground = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawCircuits();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawCircuits();
      drawParticles();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [density, showGrid, showParticles, showCircuits]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};

/**
 * Simpler CSS-based technical background for lighter sections
 */
export const TechnicalPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0, 102, 204, 0.03) 1px, transparent 1px),
          linear-gradient(rgba(0, 102, 204, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  );
};

/**
 * Animated light field background
 */
export const LightField: React.FC<{
  color?: 'blue' | 'cyan' | 'purple' | 'magenta';
  className?: string;
}> = ({ color = 'cyan', className = '' }) => {
  const colors = {
    blue: 'from-blue-500/10 via-blue-400/5 to-transparent',
    cyan: 'from-cyan-500/10 via-cyan-400/5 to-transparent',
    purple: 'from-purple-500/10 via-purple-400/5 to-transparent',
    magenta: 'from-pink-500/10 via-pink-400/5 to-transparent',
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <div
        className={`absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial ${colors[color]} blur-3xl animate-blob opacity-30`}
      />
      <div
        className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial ${colors[color]} blur-3xl animate-blob animation-delay-2000 opacity-20`}
      />
    </div>
  );
};
