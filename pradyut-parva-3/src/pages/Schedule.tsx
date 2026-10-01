import React from 'react';
import { siteConfig } from '../data/config';

const Schedule: React.FC = () => {
  const days = [
    {
      date: '7th October 2026',
      events: [
        { time: 'TBA', title: 'Opening Ceremony', type: 'Special', venue: 'TBA' },
        { time: 'TBA', title: 'Technical Events - Day 1', type: 'Technical', venue: 'TBA' },
        { time: 'TBA', title: 'Non-Technical Events - Day 1', type: 'Non-Technical', venue: 'TBA' },
      ]
    },
    {
      date: '8th October 2026',
      events: [
        { time: 'TBA', title: 'Technical Events - Day 2', type: 'Technical', venue: 'TBA' },
        { time: 'TBA', title: 'Non-Technical Events - Day 2', type: 'Non-Technical', venue: 'TBA' },
        { time: 'TBA', title: 'Closing Ceremony & Prize Distribution', type: 'Special', venue: 'TBA' },
      ]
    },
  ];
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Technical': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Non-Technical': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Special': return 'bg-academic-gold/20 text-academic-gold border-academic-gold/30';
      default: return 'bg-white/10 text-gray-300 border-white/20';
    }
  };
  
  return (
    <div className="bg-gradient-to-b from-[#0a0e27] via-[#0f1419] to-[#0a0e27] min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1419] text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-academic-gold mb-6">
              SCHEDULE
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Event Schedule
            </h1>
            <p className="text-lg text-gray-300">
              {siteConfig.dates} • {siteConfig.venue}
            </p>
          </div>
        </div>
      </section>
      
      {/* Note */}
      <section className="relative py-8 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-academic-gold/5 via-academic-gold/10 to-academic-gold/5"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-academic-gold/10 to-yellow-500/5 backdrop-blur-md border border-academic-gold/30 rounded-2xl p-6 text-center">
                <p className="text-sm md:text-base text-gray-300">
                  <strong className="text-academic-gold">Note:</strong> Detailed event timings will be announced soon. 
                  Please check back regularly for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {days.map((day, dayIndex) => (
              <div key={dayIndex}>
                {/* Day Header */}
                <div className="mb-8">
                  <div className="inline-block relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-academic-gold to-yellow-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
                    <div className="relative px-6 py-3 bg-gradient-to-r from-[#1a1f3a] to-[#0f1419] border border-academic-gold/30 rounded-2xl">
                      <h2 className="text-2xl font-display font-bold text-white">
                        Day {dayIndex + 1} • <span className="text-academic-gold">{day.date}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-academic-gold via-blue-500 to-purple-500 opacity-30"></div>
                  
                  {/* Events */}
                  <div className="space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative flex items-start space-x-6">
                        {/* Dot */}
                        <div className="flex-shrink-0 w-16 flex justify-center">
                          <div className="w-4 h-4 bg-academic-gold rounded-full border-4 border-[#0f1419] shadow-lg shadow-academic-gold/50 relative z-10 animate-pulse"></div>
                        </div>
                        
                        {/* Event Card */}
                        <div className="flex-1 relative group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <span className="text-lg font-bold text-white">
                                    {event.time}
                                  </span>
                                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getTypeColor(event.type)}`}>
                                    {event.type.toUpperCase()}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                  <span className="text-academic-gold">Venue:</span> {event.venue}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Legend */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-white mb-6 text-center">Event Categories</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold border ${getTypeColor('Technical')}`}>
                      TECHNICAL
                    </span>
                    <span className="text-sm text-gray-400">Technical Events</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold border ${getTypeColor('Non-Technical')}`}>
                      NON-TECHNICAL
                    </span>
                    <span className="text-sm text-gray-400">Non-Technical Events</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold border ${getTypeColor('Special')}`}>
                      SPECIAL
                    </span>
                    <span className="text-sm text-gray-400">Ceremonies & Special Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
