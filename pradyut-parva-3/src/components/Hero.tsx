import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { CalendarIcon, MapPinIcon, SparklesIcon } from './Icons';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background - Exact colors from screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d2463] via-[#1e2a47] to-[#0f0f0f] animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
      
      {/* Animated Mesh Gradient Overlay with warmer tones */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-[#5a3d7a] rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-0 right-4 w-[500px] h-[500px] bg-[#8b7355] rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-[#2a4a7c] rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles - More visible */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Mouse Follow Glow - Warmer tone */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-[#8b7355]/10 blur-[100px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container py-20">
        <div className="max-w-6xl mx-auto">
          {/* Organizer Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-gray-400 tracking-wider hover:bg-white/[0.05] transition-all duration-300">
              {siteConfig.organizer.toUpperCase()} PRESENT
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8dcc4] via-[#d4af37] to-[#e8dcc4] animate-gradient-x inline-block hover:scale-105 transition-transform duration-300" style={{ backgroundSize: '200% auto' }}>
                {siteConfig.eventName}
              </span>
              {/* Glowing underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent blur-sm"></div>
            </h1>
          </div>

          {/* Theme Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {siteConfig.theme.split('|').map((word, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full text-[#d4af37] font-bold text-lg hover:scale-110 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {word.trim()}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            {siteConfig.tagline}
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b7355]/0 via-[#8b7355]/10 to-[#8b7355]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CalendarIcon size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Date</p>
                  <p className="text-lg font-bold text-white">{siteConfig.dates}</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 hover:bg-white/[0.06] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b7355]/0 via-[#8b7355]/10 to-[#8b7355]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon size={24} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Venue</p>
                  <p className="text-lg font-bold text-white">{siteConfig.venue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#f4c842] text-[#1a0f2e] font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                REGISTER NOW
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>

            <Link 
              to="/events"
              className="group px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                EXPLORE EVENTS
                <SparklesIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-20 text-center">
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Ideas Unite • Communities Thrive • Technology | People | Purpose
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
