import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../data/events';
import { getIconByName } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const Icon = getIconByName(event.icon);
  
  return (
    <div 
      ref={ref}
      className="group relative opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Glow Effect - Unified blue accent */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-pp-primary/30 via-pp-primary/20 to-pp-primary/30 rounded-2xl blur transition-all duration-500 ${
        isHovered ? 'opacity-100 animate-gradient-x' : 'opacity-0'
      }`}
      style={{ backgroundSize: '200% 100%' }}
      ></div>
      
      {/* Card with lift effect - unified pp-card system */}
      <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border rounded-2xl p-6 overflow-hidden transition-all duration-500 ${
        isHovered 
          ? 'border-pp-primary/30 shadow-2xl shadow-pp-primary/10 -translate-y-2 scale-[1.02]' 
          : 'border-white/5'
      }`}>
        {/* Light Sweep Effect on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>
        
        {/* Animated Background Gradient - unified blue tone */}
        <div className={`absolute inset-0 bg-gradient-to-br from-pp-primary/5 via-transparent to-pp-background-light/50 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        {/* Floating Circles with enhanced movement */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl transition-all duration-700 ${
          isHovered ? 'scale-150 opacity-50' : 'scale-100 opacity-20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl transition-all duration-700 ${
          isHovered ? 'scale-150 opacity-50' : 'scale-100 opacity-20'
        }`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            {/* Event Number with enhanced animation - gold accent */}
            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pp-gold to-pp-gold-dark text-pp-background-deep rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-6 shadow-pp-gold/50' : 'scale-100 rotate-0'
            }`}>
              {String(event.number).padStart(2, '0')}
            </div>
            
            {/* New Badge */}
            {event.isNew && (
              <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                NEW
              </div>
            )}
          </div>
          
          {/* Icon with enhanced hover - unified blue accent */}
          <div className={`inline-flex p-4 rounded-xl mb-4 transition-all duration-300 bg-pp-primary/10 text-pp-primary ${
            isHovered ? 'scale-110 shadow-lg shadow-pp-primary/20' : 'scale-100'
          }`}>
            <Icon size={32} className={isHovered ? 'animate-pulse' : ''} />
          </div>
          
          {/* Category - unified blue badge */}
          <div className="mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 bg-pp-primary/10 text-pp-primary border border-pp-border ${
              isHovered ? 'shadow-lg shadow-pp-primary/20' : ''
            }`}>
              {event.category.toUpperCase()}
            </span>
          </div>
          
          {/* Title with smooth color transition - white to gold */}
          <h3 className={`text-2xl font-display font-bold mb-2 transition-all duration-300 ${
            isHovered ? 'text-pp-gold translate-x-1' : 'text-pp-text'
          }`}>
            {event.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm text-pp-text-muted mb-2 font-medium">
            {event.subtitle}
          </p>
          
          {/* Tagline with glow on hover - gold emphasis */}
          <p className={`text-sm font-semibold mb-4 italic transition-all duration-300 ${
            isHovered ? 'text-pp-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]' : 'text-pp-gold'
          }`}>
            {event.tagline}
          </p>
          
          {/* Description */}
          <p className="text-sm text-pp-text-dim mb-6 line-clamp-3 leading-relaxed">
            {event.description}
          </p>
          
          {/* CTA with light sweep - unified gold button */}
          <Link 
            to={`/events/${event.id}`}
            className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-pp-gold hover:to-pp-gold-light text-pp-gold hover:text-pp-background-deep font-bold text-sm rounded-xl border border-white/10 hover:border-pp-gold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pp-gold/30 hover:-translate-y-1 overflow-hidden"
          >
            {/* Light sweep on button hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            <span className="relative">VIEW DETAILS</span>
            <svg 
              className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* External Link Badge - unified blue accent */}
          {event.externalLink && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-pp-primary hover:text-pp-gold hover:translate-x-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="font-medium">Visit Event Page</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
