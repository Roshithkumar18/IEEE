import React from 'react';
import { siteConfig } from '../data/config';
import { studentCoordinators, facultyCoordinators, leadership } from '../data/coordinators';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0e27] via-[#0f1419] to-[#0a0e27] min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1419] text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-academic-gold/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-academic-gold mb-6">
              ABOUT US
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About Pradyut Parva 3
            </h1>
            <p className="text-lg text-academic-gold font-semibold">
              {siteConfig.theme}
            </p>
          </div>
        </div>
      </section>
      
      {/* About Event */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">About The Event</h2>
            
            <div className="relative group mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/20 to-academic-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Pradyut Parva 3 is a celebration of technology, talent and togetherness, bringing students 
                  together through technical challenges, innovation activities, competitions, networking and 
                  creative experiences. The event embodies the spirit of collaboration and innovation that 
                  defines the IEEE student community.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With the theme <strong className="text-academic-gold">{siteConfig.theme}</strong>, 
                  Pradyut Parva 3 aims to inspire students to ignite their passion for technology, 
                  innovate with creative solutions, and make a lasting impact on the engineering community.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                  <span className="px-6 py-3 bg-academic-gold/10 border border-academic-gold/30 text-academic-gold rounded-full font-semibold hover:bg-academic-gold/20 transition-all duration-300">
                    Ideas Unite
                  </span>
                  <span className="text-academic-gold text-2xl">•</span>
                  <span className="px-6 py-3 bg-academic-gold/10 border border-academic-gold/30 text-academic-gold rounded-full font-semibold hover:bg-academic-gold/20 transition-all duration-300">
                    Communities Thrive
                  </span>
                  <span className="text-academic-gold text-2xl">•</span>
                  <span className="px-6 py-3 bg-academic-gold/10 border border-academic-gold/30 text-academic-gold rounded-full font-semibold hover:bg-academic-gold/20 transition-all duration-300">
                    Technology | People | Purpose
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Institution */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-academic-gold/5 to-yellow-500/5"></div>
        
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">Leadership</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {leadership.map((person, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-sm text-academic-gold font-semibold">{person.role}</p>
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
            <h3 className="text-xl font-bold text-blue-400 text-center mb-6">Faculty Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {facultyCoordinators.map((person, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
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
            <h3 className="text-xl font-bold text-purple-400 text-center mb-6">Student Coordinators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {studentCoordinators.map((person, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
                    <p className="text-sm text-academic-gold font-semibold">{person.department}</p>
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
