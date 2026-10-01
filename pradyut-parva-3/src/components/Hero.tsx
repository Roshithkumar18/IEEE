import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { CalendarIcon, MapPinIcon, SparklesIcon } from './Icons';
import { TechnicalBackground } from './TechnicalBackground';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxOffset = useParallax({ speed: 0.3 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--pp-background)' }}>
      {/* Unified Deep Navy Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(180deg, var(--pp-background-deep) 0%, var(--pp-background) 50%, var(--pp-background-light) 100%)',
        }}
      />
      
      {/* Technical Background with parallax */}
      <div 
        className={`absolute inset-0 transition-opacity duration-800 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      >
        <TechnicalBackground density="low" showCircuits={true} showParticles={true} />
      </div>
      
      {/* Unified Primary Blue Atmospheric Light */}
      <div className={`absolute inset-0 transition-opacity duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20" style={{ background: 'var(--pp-primary)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15" style={{ background: 'var(--pp-primary)' }}></div>
      </div>

      {/* Subtle Gold Light Near Title Area */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[100px] opacity-10 transition-opacity duration-1000 delay-400 ${isLoaded ? 'opacity-10' : 'opacity-0'}`} style={{ background: 'var(--pp-gold)' }}></div>

      {/* Remove local particles - using global particles now */}

      {/* Unified Technical Grid Pattern - already global, keep for visual layering */}
      <div className={`absolute inset-0 tech-pattern transition-opacity duration-800 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Mouse Follow Glow - Unified Primary Blue */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-500 ease-out opacity-10"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          background: 'var(--pp-primary)',
        }}
      />

      {/* Content with cinematic entrance */}
      <div className="relative z-10 section-container py-20">
        <div className="max-w-6xl mx-auto">
          {/* Organizer Badge */}
          <div className={`flex justify-center mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            <div className="px-6 py-2 backdrop-blur-sm rounded-full text-xs font-medium tracking-wider transition-all duration-300" style={{ 
              background: 'var(--pp-surface)',
              border: '1px solid var(--pp-border)',
              color: 'var(--pp-text-secondary)'
            }}>
              {siteConfig.organizer.toUpperCase()} PRESENTS
            </div>
          </div>

          {/* Main Title - Gold Gradient */}
          <div className={`text-center mb-8 transition-all duration-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-4 relative">
              <span className="bg-clip-text text-transparent animate-gradient-x inline-block hover:scale-105 transition-transform duration-300" style={{ 
                backgroundImage: `linear-gradient(90deg, var(--pp-gold-light), var(--pp-gold), var(--pp-gold-light))`,
                backgroundSize: '200% auto'
              }}>
                {siteConfig.eventName}
              </span>
              {/* Glowing underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 blur-sm" style={{
                background: `linear-gradient(90deg, transparent, var(--pp-gold), transparent)`
              }}></div>
            </h1>
          </div>

          {/* Theme Pills - Unified Gold */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
          >
            {siteConfig.theme.split('|').map((word, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 backdrop-blur-md rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 cursor-default"
                style={{
                  background: 'var(--pp-surface)',
                  border: '1px solid var(--pp-border)',
                  color: 'var(--pp-gold)'
                }}
              >
                {word.trim()}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className={`text-center text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed transition-all duration-1400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '900ms', color: 'var(--pp-text-secondary)' }}
          >
            {siteConfig.tagline}
          </p>

          {/* Info Cards - Unified System */}
          <div className={`grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 transition-all duration-1400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '900ms' }}
          >
            <div className="group relative overflow-hidden rounded-2xl p-6 hover:scale-105 transition-all duration-300 pp-card">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
                  background: 'var(--pp-gold-glow)'
                }}>
                  <CalendarIcon size={24} style={{ color: 'var(--pp-gold)' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--pp-text-muted)' }}>Date</p>
                  <p className="text-lg font-bold" style={{ color: 'var(--pp-text)' }}>{siteConfig.dates}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-6 hover:scale-105 transition-all duration-300 pp-card">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
                  background: 'var(--pp-gold-glow)'
                }}>
                  <MapPinIcon size={24} style={{ color: 'var(--pp-gold)' }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--pp-text-muted)' }}>Venue</p>
                  <p className="text-lg font-bold" style={{ color: 'var(--pp-text)' }}>{siteConfig.venue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - WHITE Register Button */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '1100ms' }}
          >
            <a 
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register w-full sm:w-auto"
            >
              <span>REGISTER NOW</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>

            <Link 
              to="/events"
              className="btn-secondary group inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>EXPLORE EVENTS</span>
              <SparklesIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>

          {/* Bottom Tagline */}
          <div className={`mt-20 text-center transition-all duration-800 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1400ms' }}
          >
            <p className="text-sm md:text-base font-medium" style={{ color: 'var(--pp-text-muted)' }}>
              Ideas Unite • Communities Thrive • Technology | People | Purpose
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-800 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: '1600ms' }}
      >
        <div className="w-6 h-10 rounded-full flex justify-center" style={{ border: '2px solid var(--pp-border)' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ background: 'var(--pp-primary)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
