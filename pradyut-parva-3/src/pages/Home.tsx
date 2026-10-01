import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { technicalEvents, nonTechnicalEvents } from '../data/events';
import { siteConfig } from '../data/config';
import { leadership, eventStudentCoordinators } from '../data/coordinators';
import { SparklesIcon } from '../components/Icons';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#3d2463] via-[#1e2a47] to-[#0f0f0f]">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full text-sm font-bold text-[#d4af37] mb-6">
                ABOUT THE EVENT
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f5f5f5] mb-6">
                About Pradyut Parva 3
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
            </div>

            {/* Content Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-900/30 to-amber-800/20 rounded-3xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
                  Pradyut Parva 3 is a celebration of technology, talent and togetherness, bringing students 
                  together through technical challenges, innovation activities, competitions, networking and 
                  creative experiences.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {['Ideas Unite', 'Communities Thrive', 'Technology | People | Purpose'].map((text, idx) => (
                    <div key={idx} className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full">
                      <span className="text-sm font-bold text-[#d4af37]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: '14+', label: 'Events' },
                { number: '2', label: 'Days' },
                { number: '500+', label: 'Participants' },
                { number: '₹1L+', label: 'Prizes' },
              ].map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Events Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/30 rounded-full text-sm font-bold text-indigo-300 mb-6">
              TECHNICAL CATEGORY
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f5f5f5] mb-6">
              Technical Events
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Challenge your technical skills and engineering expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {technicalEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events?category=technical" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/50">
              <span>VIEW ALL TECHNICAL EVENTS</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Non-Technical Events Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-800/30 rounded-full text-sm font-bold text-purple-300 mb-6">
              NON-TECHNICAL CATEGORY
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f5f5f5] mb-6">
              Non-Technical Events
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Unleash your creativity and connect with peers
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events?category=non-technical" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/50">
              <span>VIEW ALL NON-TECHNICAL EVENTS</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-800/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-amber-900/20 blur-2xl rounded-full"></div>
              <SparklesIcon size={64} className="relative text-[#d4af37]" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f5f5f5] mb-6">
              Ready to Be Part of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#f4c842]">
                Pradyut Parva 3?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Register now and join us for two days of technology, innovation, and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#f4c842] text-[#1a0b2e] font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  REGISTER NOW
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
              
              <Link 
                to="/contact" 
                className="group px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  CONTACT US
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Coordination Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a0b2e] to-[#0a0e27]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-academic-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full text-sm font-bold text-[#d4af37] mb-6">
                OUR LEADERSHIP
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#f5f5f5] mb-6">
                Leadership & Coordination
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
            </div>

            {/* Leadership Hierarchy */}
            <div className="space-y-12">
              {/* Chairman & CEO */}
              {leadership.filter(l => l.level === 1).map((leader, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-3xl opacity-50 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Photo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-academic-gold/20 to-yellow-500/10 backdrop-blur-sm border-4 border-academic-gold/30 rounded-2xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-academic-gold text-5xl font-bold mb-1">
                              {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <div className="text-xs text-gray-400">Photo</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-4 py-1 bg-academic-gold/20 border border-academic-gold/30 rounded-full text-xs font-bold text-academic-gold mb-3">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-lg text-academic-gold font-semibold">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-academic-gold/50 to-transparent"></div>
              </div>

              {/* COO */}
              {leadership.filter(l => l.level === 2).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-amber-500/20 to-orange-500/10 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-amber-300 text-3xl font-bold mb-1">
                              {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <div className="text-xs text-gray-400">Photo</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-gray-300 font-medium">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
              </div>

              {/* Principal */}
              {leadership.filter(l => l.level === 3).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-blue-300 text-3xl font-bold mb-1">
                              {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <div className="text-xs text-gray-400">Photo</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-bold text-blue-300 mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-gray-300 font-medium">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              </div>

              {/* Branch Counsellor & HOD */}
              {leadership.filter(l => l.level === 4).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-500/20 to-pink-500/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-purple-300 text-3xl font-bold mb-1">
                              {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <div className="text-xs text-gray-400">Photo</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-bold text-purple-300 mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-gray-300 font-medium">
                          {leader.title}
                          {leader.department && <span className="text-academic-gold"> • {leader.department}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              </div>

              {/* Faculty Coordinators */}
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Faculty Coordinators
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {leadership.filter(l => l.level === 5).map((leader, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          {/* Photo Placeholder */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-indigo-300 text-xl font-bold">
                                  {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Info */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {leader.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {leader.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
              </div>

              {/* Student Coordinators */}
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Student Coordinators
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {eventStudentCoordinators.map((coordinator, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                        {/* Photo Placeholder */}
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-academic-gold/20 to-yellow-500/10 backdrop-blur-sm border border-academic-gold/30 rounded-lg flex items-center justify-center">
                          <div className="text-academic-gold text-lg font-bold">
                            {coordinator.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                          </div>
                        </div>
                        
                        {/* Info */}
                        <h4 className="text-sm font-bold text-white mb-1">
                          {coordinator.name}
                        </h4>
                        {coordinator.department && (
                          <p className="text-xs text-gray-400">
                            {coordinator.department}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
