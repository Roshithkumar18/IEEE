import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../data/events';
import { getIconByName } from './Icons';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getIconByName(event.icon);
  
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${
        event.category === 'Technical'
          ? 'from-indigo-900/50 to-indigo-800/30'
          : 'from-purple-900/50 to-purple-800/30'
      } rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}></div>
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          event.category === 'Technical'
            ? 'from-indigo-900/10 via-transparent to-indigo-800/10'
            : 'from-purple-900/10 via-transparent to-purple-800/10'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Floating Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            {/* Event Number */}
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-[#1a0b2e] rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              {String(event.number).padStart(2, '0')}
            </div>
            
            {/* New Badge */}
            {event.isNew && (
              <div className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                NEW
              </div>
            )}
          </div>
          
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl mb-4 ${
            event.category === 'Technical'
              ? 'bg-indigo-900/20 text-indigo-300'
              : 'bg-purple-900/20 text-purple-300'
          } group-hover:scale-110 transition-all duration-300`}>
            <Icon size={32} className={isHovered ? 'animate-pulse' : ''} />
          </div>
          
          {/* Category */}
          <div className="mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              event.category === 'Technical'
                ? 'bg-indigo-900/20 text-indigo-300 border border-indigo-800/30'
                : 'bg-purple-900/20 text-purple-300 border border-purple-800/30'
            }`}>
              {event.category.toUpperCase()}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-display font-bold text-[#f5f5f5] mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
            {event.title}
          </h3>
          
          {/* Subtitle */}
          <p className="text-sm text-gray-300 mb-2 font-medium">
            {event.subtitle}
          </p>
          
          {/* Tagline */}
          <p className="text-sm text-[#d4af37] font-semibold mb-4 italic">
            {event.tagline}
          </p>
          
          {/* Description */}
          <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
            {event.description}
          </p>
          
          {/* CTA */}
          <Link 
            to={`/events/${event.id}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#f4c842] text-[#d4af37] hover:text-[#1a0b2e] font-bold text-sm rounded-xl border border-white/10 hover:border-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/30"
          >
            <span>VIEW DETAILS</span>
            <svg 
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* External Link Badge */}
          {event.externalLink && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-indigo-300 hover:text-indigo-200 transition-colors duration-300"
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
