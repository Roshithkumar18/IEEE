import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: Record<string, FooterLink[]> = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'Events', href: '/events' },
      { name: 'Schedule', href: '/schedule' },
      { name: 'About', href: '/about' },
    ],
    'Events': [
      { name: 'Technical Events', href: '/events?category=technical' },
      { name: 'Non-Technical Events', href: '/events?category=non-technical' },
      { name: 'Guidelines', href: '/guidelines' },
      { name: 'Register', href: siteConfig.registrationUrl, external: true },
    ],
    'Contact': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-pp-background via-pp-background-deep to-[#05070f] text-white overflow-hidden">
      {/* Background Elements - unified blue atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pp-primary/5 rounded-full blur-3xl"></div>
      
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-display font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-pp-gold">
                {siteConfig.eventName}
              </h3>
              <p className="text-pp-gold font-semibold">{siteConfig.theme}</p>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-semibold text-white">{siteConfig.institution}</p>
              <p className="text-gray-400">{siteConfig.location}</p>
              <p className="font-semibold text-pp-gold">{siteConfig.organizer}</p>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase mb-4 text-pp-gold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold uppercase mb-3 text-pp-gold">Connect With Us</h4>
              <div className="flex space-x-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-pp-gold/20 border border-white/10 hover:border-pp-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={platform}
                  >
                    <span className="text-xs uppercase font-bold text-gray-400 hover:text-pp-gold">{platform.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">Event Website</p>
              <p>{siteConfig.websiteUrl}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="relative bg-[#05070f] border-t border-white/5">
        <div className="section-container py-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500">
            <div>
              <p className="text-gray-400">© {currentYear} {siteConfig.institution}</p>
              <p className="text-gray-500">{siteConfig.organizer}</p>
              <p className="mt-1 text-xs">All Rights Reserved.</p>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src={siteConfig.logos.college} 
                alt="SSCE Logo" 
                className="h-8 w-8 object-contain opacity-50 hover:opacity-75 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-gray-700">•</span>
              <img 
                src={siteConfig.logos.ieee} 
                alt="IEEE Logo" 
                className="h-8 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
