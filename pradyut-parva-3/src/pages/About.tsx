import React from 'react';
import { siteConfig } from '../data/config';
import { studentCoordinators, facultyCoordinators, leadership } from '../data/coordinators';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pp-background via-pp-background-deep to-pp-background min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-pp-background via-pp-background-light to-pp-background-deep text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background - unified blue atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-gold/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-pp-gold mb-6">
              ABOUT US
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About Pradyut Parva 3
            </h1>
            <p className="text-lg text-pp-gold font-semibold">
              {siteConfig.theme}
            </p>
          </div>
        </div>
      </section>
      
      {/* About Event */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Event Poster */}
            <div className="mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pp-gold/30 to-pp-primary/30 rounded-3xl opacity-50 group-hover:opacity-75 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 overflow-hidden">
                  <img 
                    src="/assets/event-poster.png"
                    alt="Pradyut Parva 3 - Event Poster"
                    className="w-full h-auto rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              🌟 Get Ready for PRADYUT PARVA 3! 🌟
            </h2>
            
            <div className="relative group mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/20 to-pp-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-pp-gold mb-4">IEEE Day 2026</h3>
                  <h4 className="text-xl font-semibold text-white mb-2">💫 PRADYUT PARVA 3 – "A Light of Brilliance"</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Following the success of our previous editions, Pradyut Parva 3 returns with renewed energy, creativity and enthusiasm. This year's celebration brings together students from different colleges to showcase their technical skills, creativity, teamwork and innovative thinking.
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pp-gold/20 to-pp-primary/20 border border-pp-gold/30 rounded-2xl">
                    <span className="text-2xl">✨</span>
                    <span className="text-xl font-bold text-pp-gold">Ignite • Innovate • Impact</span>
                    <span className="text-2xl">✨</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>⚡</span>
                  <span>What Awaits You?</span>
                </h3>

                {/* Technical Events */}
                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm border border-pp-primary/30 rounded-xl">
                  <h4 className="text-xl font-bold text-pp-primary mb-4 flex items-center gap-2">
                    <span>💻</span>
                    <span>Technical Events</span>
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>CODEX</strong> – Code Debugging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>WEBNOVA</strong> – Webathon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>WAVENOVA</strong> – Antenna Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>TECHNOVA</strong> – Technical Quiz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>ROBORUSH</strong> – Robo Race</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>CIRCUITX</strong> – Circuit Debugging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>HACKNOVA</strong> – 24-Hour Hackathon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-gold mt-1">•</span>
                      <span><strong>TECHTALK</strong> – Technical Debate</span>
                    </li>
                  </ul>
                </div>

                {/* Non-Technical Events */}
                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm border border-pp-gold/30 rounded-xl">
                  <h4 className="text-xl font-bold text-pp-gold mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    <span>Non-Technical Events</span>
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>PROMPTX</strong> – Prompt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>TECHTREK</strong> – Treasure Hunt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>GAMEON</strong> – Gaming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>MINDX</strong> – AI vs Human</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>CONNECTX</strong> – Connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pp-primary mt-1">•</span>
                      <span><strong>PIXELVERSE</strong> – Photography</span>
                    </li>
                  </ul>
                </div>

                {/* Event Highlights */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-pp-gold/10 border border-pp-gold/30 rounded-xl">
                    <div className="text-2xl mb-2">🏆</div>
                    <div className="font-bold text-white">Cash Prizes</div>
                    <div className="text-sm text-gray-400">& Certificates</div>
                  </div>
                  <div className="text-center p-4 bg-pp-primary/10 border border-pp-primary/30 rounded-xl">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="font-bold text-white">Connect</div>
                    <div className="text-sm text-gray-400">Compete • Collaborate</div>
                  </div>
                  <div className="text-center p-4 bg-pp-gold/10 border border-pp-gold/30 rounded-xl">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="font-bold text-white">Explore</div>
                    <div className="text-sm text-gray-400">Showcase • Impact</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="text-center space-y-4 mb-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-2xl">📅</span>
                    <span className="text-lg font-semibold text-white">7th & 8th October 2026</span>
                  </div>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-2xl">📍</span>
                    <span className="text-lg font-semibold text-white">Sri Sairam College of Engineering, Anekal, Bengaluru</span>
                  </div>
                </div>

                <div className="text-center text-xl font-bold text-pp-gold">
                  🌟 Where Ideas Unite, Communities Thrive! 🌟
                </div>

                <p className="text-center text-gray-300 mt-6 text-lg">
                  Join us for two exciting days of technology, talent, creativity and togetherness. Come, participate, compete and make your mark at PRADYUT PARVA 3! ⚡✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Institution */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pp-primary/5 to-pp-primary/10"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center">
                <img 
                  src={siteConfig.logos.college} 
                  alt="Sri Sairam College of Engineering" 
                  className="h-24 w-24 mx-auto mb-6 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"%3E%3Crect width="96" height="96" fill="%23192d7d"/%3E%3Ctext x="48" y="56" font-family="Arial" font-size="24" fill="white" text-anchor="middle"%3ESSCE%3C/text%3E%3C/svg%3E';
                  }}
                />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{siteConfig.institution}</h2>
                <p className="text-lg text-gray-400 mb-6">{siteConfig.location}</p>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Sri Sairam College of Engineering is committed to providing quality education in engineering 
                  and technology, fostering innovation, research, and holistic development of students to meet 
                  the evolving needs of industry and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About IEEE */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center">
                <img 
                  src={siteConfig.logos.ieee} 
                  alt="IEEE" 
                  className="h-24 w-auto mx-auto mb-6 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="96" viewBox="0 0 120 96"%3E%3Crect width="120" height="96" fill="%2300629B"/%3E%3Ctext x="60" y="56" font-family="Arial" font-size="28" fill="white" text-anchor="middle"%3EIEEE%3C/text%3E%3C/svg%3E';
                  }}
                />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">About IEEE</h2>
                <p className="text-lg text-gray-400 mb-6">Institute of Electrical and Electronics Engineers</p>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  IEEE is the world's largest technical professional organization dedicated to advancing 
                  technology for the benefit of humanity. The IEEE Student Branch and associated societies 
                  provide a platform for students to explore technology, innovation, collaboration and 
                  professional development through various technical and networking activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pp-gold/5 to-pp-gold-light/5"></div>
        
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">Leadership</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {leadership.map((person, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/30 to-pp-gold-light/30 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-sm text-pp-gold font-semibold">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coordinators */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">Event Coordinators</h2>
          
          {/* Faculty Coordinators */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-pp-primary text-center mb-6">Faculty Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {facultyCoordinators.map((person, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
                    <p className="text-sm text-gray-400">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Student Coordinators */}
          <div>
            <h3 className="text-xl font-bold text-pp-gold text-center mb-6">Student Coordinators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {studentCoordinators.map((person, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/20 to-pp-gold-light/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
                    <p className="text-sm text-pp-gold font-semibold">{person.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
