import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { technicalEvents, nonTechnicalEvents } from '../data/events';
import { siteConfig } from '../data/config';
import { leadership, eventStudentCoordinators } from '../data/coordinators';
import { SparklesIcon } from '../components/Icons';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pp-background-deep via-pp-background to-pp-background-light">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <AnimatedSection animation="slideUp" threshold={0.2}>
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements - unified blue atmosphere */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pp-primary/15 rounded-full blur-3xl"></div>
          
          <div className="section-container relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full text-sm font-bold text-pp-gold mb-6">
                  ABOUT THE EVENT
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-pp-text mb-6">
                  About Pradyut Parva 3
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pp-gold to-transparent mx-auto mb-8"></div>
              </div>

              {/* Content Card - unified pp-card system */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-gold/10 rounded-3xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-pp-gold/20 transition-all duration-500">
                  <p className="text-lg md:text-xl text-pp-text-muted leading-relaxed mb-8 text-center">
                    Pradyut Parva 3 is a celebration of technology, talent and togetherness, bringing students 
                    together through technical challenges, innovation activities, competitions, networking and 
                    creative experiences.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {['Ideas Unite', 'Communities Thrive', 'Technology | People | Purpose'].map((text, idx) => (
                      <div key={idx} className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full hover:border-pp-gold/30 hover:scale-105 transition-all duration-300">
                        <span className="text-sm font-bold text-pp-gold">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Grid - unified blue glow */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {[
                  { number: '14+', label: 'Events' },
                  { number: '2', label: 'Days' },
                  { number: '500+', label: 'Participants' },
                  { number: '₹1L+', label: 'Prizes' },
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-pp-gold mb-2">{stat.number}</div>
                      <div className="text-sm text-pp-text-dim font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Technical Events Section */}
      <AnimatedSection animation="slideUp" threshold={0.15}>
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background - unified blue atmosphere */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-pp-primary/15 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-pp-primary/20 backdrop-blur-sm border border-pp-border rounded-full text-sm font-bold text-pp-primary mb-6">
                TECHNICAL CATEGORY
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-pp-text mb-6">
                Technical Events
              </h2>
              <p className="text-lg text-pp-text-dim max-w-2xl mx-auto">
                Challenge your technical skills and engineering expertise
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pp-primary to-transparent mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {technicalEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/events?category=technical" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pp-primary to-pp-primary/80 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pp-primary/50 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative">VIEW ALL TECHNICAL EVENTS</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Non-Technical Events Section */}
      <AnimatedSection animation="slideUp" threshold={0.15}>
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background - same unified blue */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pp-primary/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-pp-primary/20 backdrop-blur-sm border border-pp-border rounded-full text-sm font-bold text-pp-primary mb-6">
                NON-TECHNICAL CATEGORY
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-pp-text mb-6">
                Non-Technical Events
              </h2>
              <p className="text-lg text-pp-text-dim max-w-2xl mx-auto">
                Unleash your creativity and connect with peers
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pp-primary to-transparent mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {nonTechnicalEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/events?category=non-technical" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pp-primary to-pp-primary/80 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pp-primary/50 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative">VIEW ALL NON-TECHNICAL EVENTS</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection animation="scale" threshold={0.3}>
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background - unified gold glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pp-gold/5 via-transparent to-pp-gold/10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-4 bg-pp-gold/20 blur-2xl rounded-full animate-pulse-subtle"></div>
                <SparklesIcon size={64} className="relative text-pp-gold animate-float-slow" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold text-pp-text mb-6">
                Ready to Be Part of{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pp-gold to-pp-gold-light animate-gradient-x" style={{ backgroundSize: '200% auto' }}>
                  Pradyut Parva 3?
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-pp-text-dim mb-12 max-w-2xl mx-auto">
                Register now and join us for two days of technology, innovation, and collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-register w-full sm:w-auto text-lg px-10 py-5"
                >
                  <span>REGISTER NOW</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                
                <Link 
                  to="/contact" 
                  className="btn-secondary w-full sm:w-auto text-lg px-10 py-5"
                >
                  <span>CONTACT US</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Leadership & Coordination Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-pp-background-light via-pp-background-deep to-pp-background">
        {/* Background Elements - unified blue/gold atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pp-primary/5 rounded-full blur-3xl"></div>

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-full text-sm font-bold text-pp-gold mb-6">
                OUR LEADERSHIP
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-pp-text mb-6">
                Leadership & Coordination
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pp-gold to-transparent mx-auto mb-8"></div>
            </div>

            {/* Leadership Hierarchy */}
            <div className="space-y-12">
              {/* Chairman & CEO */}
              {leadership.filter(l => l.level === 1).map((leader, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pp-gold/30 to-pp-gold-light/30 rounded-3xl opacity-50 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        {leader.photoPath ? (
                          <img 
                            src={leader.photoPath} 
                            alt={leader.name}
                            className="w-32 h-32 md:w-40 md:h-40 object-cover object-top rounded-2xl border-4 border-pp-gold/30 shadow-xl"
                            style={{ objectPosition: '50% 20%' }}
                          />
                        ) : (
                          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pp-gold/20 to-pp-gold-light/10 backdrop-blur-sm border-4 border-pp-gold/30 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-pp-gold text-5xl font-bold mb-1">
                                {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                              </div>
                              <div className="text-xs text-pp-text-dim">Photo</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-4 py-1 bg-pp-gold/20 border border-pp-gold/30 rounded-full text-xs font-bold text-pp-gold mb-3">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-lg text-pp-gold font-semibold">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-pp-gold/50 to-transparent"></div>
              </div>

              {/* COO */}
              {leadership.filter(l => l.level === 2).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        {leader.photoPath ? (
                          <img 
                            src={leader.photoPath} 
                            alt={leader.name}
                            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl border-2 border-pp-primary/30 shadow-lg"
                            style={{ objectPosition: '50% 20%' }}
                          />
                        ) : (
                          <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pp-primary/20 to-pp-primary/10 backdrop-blur-sm border-2 border-pp-primary/30 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-pp-primary text-3xl font-bold mb-1">
                                {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                              </div>
                              <div className="text-xs text-pp-text-dim">Photo</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-pp-primary/20 border border-pp-border rounded-full text-xs font-bold text-pp-primary mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-pp-text-muted font-medium">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-pp-primary/50 to-transparent"></div>
              </div>

              {/* Principal */}
              {leadership.filter(l => l.level === 3).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        {leader.photoPath ? (
                          <img 
                            src={leader.photoPath} 
                            alt={leader.name}
                            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl border-2 border-pp-primary/30 shadow-lg"
                            style={{ objectPosition: '50% 20%' }}
                          />
                        ) : (
                          <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pp-primary/20 to-pp-primary/10 backdrop-blur-sm border-2 border-pp-primary/30 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-pp-primary text-3xl font-bold mb-1">
                                {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                              </div>
                              <div className="text-xs text-pp-text-dim">Photo</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-pp-primary/20 border border-pp-border rounded-full text-xs font-bold text-pp-primary mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-pp-text-muted font-medium">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-pp-primary/50 to-transparent"></div>
              </div>

              {/* Branch Counsellor & HOD */}
              {leadership.filter(l => l.level === 4).map((leader, idx) => (
                <div key={idx} className="relative max-w-4xl mx-auto">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        {leader.photoPath ? (
                          <img 
                            src={leader.photoPath} 
                            alt={leader.name}
                            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl border-2 border-pp-primary/30 shadow-lg"
                            style={{ objectPosition: '50% 20%' }}
                          />
                        ) : (
                          <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pp-primary/20 to-pp-primary/10 backdrop-blur-sm border-2 border-pp-primary/30 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-pp-primary text-3xl font-bold mb-1">
                                {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                              </div>
                              <div className="text-xs text-pp-text-dim">Photo</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-pp-primary/20 border border-pp-border rounded-full text-xs font-bold text-pp-primary mb-2">
                          {leader.role.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-base text-pp-text-muted font-medium">
                          {leader.title}
                          {leader.department && <span className="text-pp-gold"> • {leader.department}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical Connection Line */}
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-pp-primary/50 to-transparent"></div>
              </div>

              {/* Faculty Coordinators */}
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Faculty Coordinators
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {leadership.filter(l => l.level === 5).map((leader, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          {/* Photo */}
                          <div className="flex-shrink-0">
                            {leader.photoPath ? (
                              <img 
                                src={leader.photoPath} 
                                alt={leader.name}
                                className="w-16 h-16 object-cover rounded-lg border border-pp-primary/30 shadow-md"
                                style={{ objectPosition: '50% 20%' }}
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gradient-to-br from-pp-primary/20 to-pp-primary/10 backdrop-blur-sm border border-pp-primary/30 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-pp-primary text-xl font-bold">
                                    {leader.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Info */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {leader.name}
                            </h4>
                            <p className="text-sm text-pp-text-dim">
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
                <div className="w-1 h-12 bg-gradient-to-b from-pp-primary/50 to-transparent"></div>
              </div>

              {/* Student Coordinators */}
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Student Coordinators
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {eventStudentCoordinators.map((coordinator, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/20 to-pp-gold-light/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                        {/* Photo */}
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-pp-gold/20 to-pp-gold-light/10 backdrop-blur-sm border border-pp-gold/30 rounded-lg flex items-center justify-center overflow-hidden">
                          {coordinator.photoPath ? (
                            <img 
                              src={coordinator.photoPath} 
                              alt={coordinator.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: '50% 20%' }}
                            />
                          ) : (
                            <div className="text-pp-gold text-lg font-bold">
                              {coordinator.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                          )}
                        </div>
                        
                        {/* Info */}
                        <h4 className="text-sm font-bold text-white mb-1">
                          {coordinator.name}
                        </h4>
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
