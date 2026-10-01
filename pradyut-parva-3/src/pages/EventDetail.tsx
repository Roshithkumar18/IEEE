import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { allEvents } from '../data/events';
import { getIconByName, CalendarIcon, MapPinIcon } from '../components/Icons';

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = allEvents.find(e => e.id === eventId);
  
  if (!event) {
    return <Navigate to="/events" replace />;
  }
  
  const Icon = getIconByName(event.icon);
  
  return (
    <div className="bg-gradient-to-b from-[#0a0e27] via-[#0f1419] to-[#0a0e27] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1419]"></div>
        <div className={`absolute inset-0 ${
          event.category === 'Technical'
            ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
            : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
        }`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-400 hover:text-academic-gold transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link to="/events" className="text-gray-400 hover:text-academic-gold transition-colors">Events</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">{event.title}</span>
            </div>
            
            {/* Event Number Badge */}
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold">
                EVENT {String(event.number).padStart(2, '0')}
              </span>
              {event.isNew && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold animate-pulse">
                  NEW
                </span>
              )}
            </div>
            
            {/* Category */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                event.category === 'Technical'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }`}>
                {event.category.toUpperCase()}
              </span>
            </div>
            
            {/* Icon and Title */}
            <div className="flex items-start space-x-6 mb-6">
              <div className="flex-shrink-0 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:scale-110 transition-all duration-300">
                <Icon size={48} />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-academic-gold">
                  {event.title}
                </h1>
                <p className="text-xl text-gray-200 mb-3">{event.subtitle}</p>
                <p className="text-lg text-academic-gold font-semibold italic">
                  {event.tagline}
                </p>
              </div>
            </div>
            
            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <CalendarIcon size={18} className="text-academic-gold" />
                <span>{event.details?.date || 'TBA'}</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <MapPinIcon size={18} className="text-academic-gold" />
                <span>{event.details?.venue || 'TBA'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="relative py-12 md:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                About This Event
              </h2>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-academic-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Format */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-academic-gold mb-3">Event Format</h3>
                  <p className="text-gray-300">{event.details?.format || 'Details will be announced soon.'}</p>
                </div>
              </div>
              
              {/* Eligibility */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-academic-gold mb-3">Eligibility</h3>
                  <p className="text-gray-300">{event.details?.eligibility || 'Details will be announced soon.'}</p>
                </div>
              </div>
              
              {/* Team Size */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-academic-gold mb-3">Team Size</h3>
                  <p className="text-gray-300">{event.details?.teamSize || 'Details will be announced soon.'}</p>
                </div>
              </div>
              
              {/* Prizes */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-academic-gold/10 to-yellow-500/5 backdrop-blur-md border border-academic-gold/30 rounded-2xl p-6 hover:bg-academic-gold/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-academic-gold mb-3">Prizes</h3>
                  <p className="text-white font-semibold">{event.details?.prizes || 'Details will be announced soon.'}</p>
                </div>
              </div>
            </div>
            
            {/* Rules */}
            {event.details?.rules && event.details.rules.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Rules & Regulations
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-academic-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <ul className="space-y-3">
                      {event.details.rules.map((rule, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-academic-gold/20 text-academic-gold border border-academic-gold/30 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-300">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Coordinators */}
            {(event.details?.facultyCoordinator || event.details?.eventLeader || (event.details?.studentCoordinators && event.details.studentCoordinators.length > 0)) && (
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Event Coordinators
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-academic-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    {event.details.facultyCoordinator && (
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <h3 className="text-sm font-bold text-academic-gold mb-3 uppercase tracking-wider">Faculty Coordinator</h3>
                        <div className="px-4 py-3 bg-academic-gold/10 border border-academic-gold/30 text-white rounded-xl font-medium">
                          {event.details.facultyCoordinator}
                        </div>
                      </div>
                    )}
                    
                    {event.details.eventLeader && (
                      <div className={`${event.details.studentCoordinators && event.details.studentCoordinators.length > 0 ? 'mb-6 pb-6 border-b border-white/10' : ''}`}>
                        <h3 className="text-sm font-bold text-academic-gold mb-3 uppercase tracking-wider">Event Leader</h3>
                        <div className="px-4 py-3 bg-academic-gold/10 border border-academic-gold/30 rounded-xl">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{event.details.eventLeader.name}</span>
                            {event.details.eventLeader.phone && (
                              <a 
                                href={`tel:${event.details.eventLeader.phone}`}
                                className="text-academic-gold hover:text-yellow-500 font-semibold text-sm transition-colors"
                              >
                                {event.details.eventLeader.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {event.details.studentCoordinators && event.details.studentCoordinators.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Student Coordinators</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {event.details.studentCoordinators.map((coordinator, index) => (
                            <div 
                              key={index} 
                              className={`px-4 py-3 ${coordinator.isLeader ? 'bg-academic-gold/20 border-2 border-academic-gold/50' : 'bg-white/5 border border-white/10'} rounded-xl transition-all duration-300 hover:bg-white/10`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className={`${coordinator.isLeader ? 'text-academic-gold font-bold' : 'text-gray-300'} font-medium`}>
                                    {coordinator.name}
                                  </span>
                                  {coordinator.isLeader && (
                                    <span className="ml-2 text-xs bg-academic-gold/30 text-academic-gold px-2 py-0.5 rounded-full font-bold">
                                      LEADER
                                    </span>
                                  )}
                                </div>
                                {coordinator.phone && (
                                  <a 
                                    href={`tel:${coordinator.phone}`}
                                    className="text-academic-gold hover:text-yellow-500 font-semibold text-sm transition-colors"
                                  >
                                    {coordinator.phone}
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Legacy Coordinators Display (for backward compatibility) */}
            {event.details?.coordinators && event.details.coordinators.length > 0 && !event.details?.studentCoordinators && (
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Event Coordinators
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-academic-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                    <div className="flex flex-wrap gap-3">
                      {event.details.coordinators.map((coordinator, index) => (
                        <span key={index} className="px-4 py-2 bg-academic-gold/10 border border-academic-gold/30 text-academic-gold rounded-full text-sm font-medium hover:bg-academic-gold/20 transition-all duration-300">
                          {coordinator}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
