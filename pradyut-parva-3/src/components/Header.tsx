import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/config';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'EVENTS', href: '/events' },
    { name: 'TECHNICAL', href: '/events?category=technical' },
    { name: 'NON-TECHNICAL', href: '/events?category=non-technical' },
    { name: 'SCHEDULE', href: '/schedule' },
    { name: 'ABOUT', href: '/about' },
    { name: 'GUIDELINES', href: '/guidelines' },
    { name: 'CONTACT', href: '/contact' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  
  return (
    <>
      {/* Top Institutional Bar */}
      <div className="bg-gradient-to-r from-[#1a0b2e] via-[#2a1544] to-[#1a0b2e] text-white py-2 text-sm border-b border-white/5">
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
              <span className="font-semibold text-[#d4af37]">{siteConfig.eventName}</span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">{siteConfig.dates}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-[#1a0b2e]/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 shadow-lg">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            {/* Left: College Logo and Name */}
            <div className="flex items-center space-x-4">
              <img 
                src={siteConfig.logos.college} 
                alt="Sri Sairam College of Engineering Logo" 
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%23192d7d"/%3E%3Ctext x="24" y="28" font-family="Arial" font-size="16" fill="white" text-anchor="middle"%3ESSCE%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="hidden lg:block">
                <div className="text-sm font-semibold text-gray-200">{siteConfig.institution}</div>
                <div className="text-xs text-gray-500">{siteConfig.location}</div>
              </div>
            </div>
            
            {/* Center: Navigation (Desktop) */}
            <nav className="hidden xl:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive(item.href)
                      ? 'text-[#d4af37]'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37]"></span>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Right: IEEE Logo and Register Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <img 
                  src={siteConfig.logos.ieee} 
                  alt="IEEE Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%2300629B"/%3E%3Ctext x="24" y="28" font-family="Arial" font-size="14" fill="white" text-anchor="middle"%3EIEEE%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="text-xs text-gray-400 max-w-[100px]">
                  IEEE Student Branch & Societies
                </div>
              </div>
              
              <a 
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f4c842] text-[#1a0b2e] font-bold text-sm rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/50"
              >
                REGISTER NOW
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-gray-300 hover:text-[#d4af37] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/5 bg-[#1a0b2e]/98 backdrop-blur-md">
            <nav className="section-container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-amber-900/20 text-[#d4af37] border border-amber-800/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
