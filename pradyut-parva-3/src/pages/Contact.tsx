import React from 'react';
import { siteConfig } from '../data/config';
import { studentCoordinators, facultyCoordinators } from '../data/coordinators';
import { MapPinIcon, CalendarIcon } from '../components/Icons';

const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pp-background via-pp-background-deep to-pp-background min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-pp-background via-pp-background-light to-pp-background-deep text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background - unified blue atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pp-primary/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-pp-gold mb-6">
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300">
              Get in touch with the organizing team
            </p>
          </div>
        </div>
      </section>
      
      {/* Event Information */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Venue Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pp-primary/20 rounded-xl flex items-center justify-center">
                      <MapPinIcon className="text-pp-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Venue</h3>
                      <p className="text-gray-300 font-semibold">{siteConfig.institution}</p>
                      <p className="text-gray-400">{siteConfig.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Date Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/30 to-pp-gold-light/30 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pp-gold/20 rounded-xl flex items-center justify-center">
                      <CalendarIcon className="text-pp-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Event Dates</h3>
                      <p className="text-gray-300 font-semibold">{siteConfig.dates}</p>
                      <p className="text-gray-400">Two days of innovation and collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Website Links */}
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Official Links</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">Event Website</p>
                    <a 
                      href={`https://${siteConfig.websiteUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pp-gold hover:text-pp-gold-light font-medium transition-colors break-all"
                    >
                      {siteConfig.websiteUrl}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">Registration</p>
                    <a 
                      href={siteConfig.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pp-gold hover:text-pp-gold-light font-medium transition-colors break-all"
                    >
                      Register Now
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-2">Event Details</p>
                    <a 
                      href={`https://${siteConfig.eventsUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pp-gold hover:text-pp-gold-light font-medium transition-colors break-all"
                    >
                      {siteConfig.eventsUrl}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coordinators */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-pp-primary/5 to-pp-primary/10"></div>
        
        <div className="section-container relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">Contact Coordinators</h2>
          
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Faculty Coordinators */}
            <div>
              <h3 className="text-xl font-bold text-pp-primary mb-6 text-center">Faculty Coordinators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {facultyCoordinators.map((person, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                      <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
                      <p className="text-sm text-pp-gold font-semibold mb-3">{person.role}</p>
                      <p className="text-xs text-gray-400">
                        For queries, please contact through official channels
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Student Coordinators */}
            <div>
              <h3 className="text-xl font-bold text-pp-gold mb-6 text-center">Student Coordinators</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>
      
      {/* QR Code Section */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-4">Quick Access</h2>
            <p className="text-gray-400 text-center mb-12">Scan the QR codes to quickly access our platforms</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Website QR Code */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/30 to-pp-primary/40 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-48 h-48 mx-auto bg-white rounded-xl p-3 mb-4">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`https://${siteConfig.websiteUrl}`)}`}
                      alt="Website QR Code"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Visit Website</h4>
                  <p className="text-sm text-pp-gold font-medium mb-1">{siteConfig.websiteUrl}</p>
                  <p className="text-xs text-gray-400">Scan to explore all event details</p>
                </div>
              </div>
              
              {/* Registration QR Code */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/40 to-pp-gold-light/40 rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-pp-gold/30 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-48 h-48 mx-auto bg-white rounded-xl p-3 mb-4">
                    <img 
                      src="/assets/qr-code.png"
                      alt="Registration QR Code"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">Register Now</h4>
                  <p className="text-sm text-pp-gold font-medium mb-1">Scan QR Code</p>
                  <p className="text-xs text-gray-400">Scan to register for events instantly</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                💡 Tip: Use your phone's camera to scan these QR codes
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-pp-gold/5 to-pp-gold-light/5"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/30 to-pp-gold-light/30 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                <p className="text-gray-300 mb-8">
                  Stay updated with the latest announcements and event information
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {Object.entries(siteConfig.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 hover:bg-pp-gold/20 border border-white/10 hover:border-pp-gold rounded-xl transition-all duration-300 capitalize font-semibold text-gray-300 hover:text-pp-gold hover:scale-105"
                    >
                      {platform}
                    </a>
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

export default Contact;
