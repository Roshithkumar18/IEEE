import { useEffect, useRef } from 'react';

/**
 * GlobalParticles - Falling white and blue particles throughout ENTIRE website
 * This component creates the continuous particle effect from the reference
 */
const GlobalParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      isGlowing: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 2 + 0.5; // 0.5-2.5px
        this.speedY = Math.random() * 0.5 + 0.3; // Slow fall
        this.speedX = (Math.random() - 0.5) * 0.3; // Slight sideways drift
        this.opacity = Math.random() * 0.6 + 0.2; // 0.2-0.8
        
        // 70% white, 30% blue particles
        const isBlue = Math.random() < 0.3;
        this.color = isBlue ? '47, 111, 255' : '255, 255, 255';
        this.isGlowing = isBlue && Math.random() < 0.3; // Some blue particles glow
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Reset when particle goes off screen
        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width || this.x < 0) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;

        // Draw glow for glowing particles
        if (this.isGlowing) {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
          );
          gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(${this.color}, 0)`);
          ctx.fillStyle = gradient;
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles - reduced for faster load
    const particleCount = window.innerWidth > 768 ? 50 : 25;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number | undefined;
    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      animate();
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="global-particles"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default GlobalParticles;
