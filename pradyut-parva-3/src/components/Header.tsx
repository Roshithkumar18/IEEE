import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'EVENTS', href: '/events' },
    { name: 'SCHEDULE', href: '/schedule' },
    { name: 'ABOUT', href: '/about' },
    { name: 'NAVIGATION', href: 'https://navigation-sairam.vercel.app/', external: true },
    { name: 'GUIDELINES', href: '/guidelines' },
    { name: 'CONTACT', href: '/contact' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  
  return (
    <>
      {/* Top Institutional Bar - Hides on scroll */}
      <div className={`bg-gradient-to-r from-pp-background-deep via-pp-background-light to-pp-background-deep text-white py-2 text-sm border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left space-y-1 md:space-y-0">
            <div className="font-medium text-gray-400">
              {siteConfig.institution} • {siteConfig.location}
            </div>
            <div className="hidden md:block text-gray-700">|</div>
            <div className="font-medium text-gray-400">
              {siteConfig.organizer}
            </div>
            <div className="hidden md:block text-gray-700">|</div>
            <div className="flex items-center justify-center md:justify-end space-x-2">
              <span className="font-semibold text-pp-gold">{siteConfig.eventName}</span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">{siteConfig.dates}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header - Transforms on scroll */}
      <header className={`sticky top-0 z-40 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-pp-background-deep/98 backdrop-blur-xl border-b border-pp-primary/20 shadow-lg shadow-pp-primary/10' 
          : 'bg-pp-background-deep/95 backdrop-blur-md border-b border-white/5 shadow-lg'
      }`}>
        <div className="section-container">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-4'
          }`}>
            {/* Left: College Logo and Name */}
            <div className="flex items-center space-x-4">
              <img 
                src={siteConfig.logos.college} 
                alt="Sri Sairam College of Engineering Logo" 
                className={`object-contain transition-all duration-500 ${
                  scrolled ? 'h-10 w-10' : 'h-12 w-12'
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%23192d7d"/%3E%3Ctext x="24" y="28" font-family="Arial" font-size="16" fill="white" text-anchor="middle"%3ESSCE%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="hidden lg:block">
                <div className={`font-semibold text-gray-200 transition-all duration-500 ${
                  scrolled ? 'text-xs' : 'text-sm'
                }`}>{siteConfig.institution}</div>
                <div className={`text-gray-500 transition-all duration-500 ${
                  scrolled ? 'text-[10px]' : 'text-xs'
                }`}>{siteConfig.location}</div>
              </div>
            </div>
            
            {/* Center: Navigation (Desktop) with enhanced hover */}
            <nav className="hidden xl:flex items-center space-x-5">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-all duration-300 relative py-1 group text-gray-400 hover:text-gray-200 whitespace-nowrap"
                  >
                    {item.name}
                    {/* Hover underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pp-primary/50 to-pp-gold/50 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-all duration-300 relative py-1 group whitespace-nowrap ${
                      isActive(item.href)
                        ? 'text-pp-gold'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {item.name}
                    {/* Active indicator with glow */}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pp-primary to-transparent animate-pulse"></span>
                    )}
                    {/* Hover underline animation */}
                    {!isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pp-primary/50 to-pp-gold/50 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </Link>
                )
              ))}
            </nav>
            
            {/* Right: IEEE Logo and Register Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <img 
                  src={siteConfig.logos.ieee} 
                  alt="IEEE Logo" 
                  className={`object-contain transition-all duration-500 ${
                    scrolled ? 'h-10 w-auto' : 'h-12 w-auto'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%2300629B"/%3E%3Ctext x="24" y="28" font-family="Arial" font-size="14" fill="white" text-anchor="middle"%3EIEEE%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className={`text-gray-400 max-w-[100px] transition-all duration-500 ${
                  scrolled ? 'text-[10px]' : 'text-xs'
                }`}>
                  IEEE Student Branch & Societies
                </div>
              </div>
              
              {/* WHITE Register Button - CRITICAL */}
              <a 
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-register"
              >
                <span className="relative">REGISTER NOW</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-gray-300 hover:text-pp-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation - Enhanced animations */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/5 bg-pp-background-deep/98 backdrop-blur-md animate-slide-down">
            <nav className="section-container py-4 space-y-2">
              {navigation.map((item, index) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-gray-400 hover:bg-white/5 hover:text-gray-200 hover:translate-x-1"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-pp-gold/20 text-pp-gold border border-pp-gold/30 shadow-lg shadow-pp-gold/10'
                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 hover:translate-x-1'
                    }`}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
