import React, { useState } from 'react';
import { allEvents } from '../data/events';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    college: '',
    department: '',
    year: '',
    email: '',
    phone: '',
    events: [] as string[],
    teamName: '',
    teamMembers: '',
    city: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleEventChange = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(id => id !== eventId)
        : [...prev.events, eventId]
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Registration submitted:', formData);
    alert('Registration form submitted! (This is a demo - in production, this would send data to a backend)');
  };
  
  return (
    <div className="bg-gradient-to-b from-pp-background via-pp-background-deep to-pp-background min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-pp-background via-pp-background-light to-pp-background-deep text-white py-16 md:py-20 overflow-hidden">
        {/* Animated Background - unified blue/gold atmosphere */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pp-gold/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pp-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-pp-gold mb-6">
              JOIN US
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Register for Pradyut Parva 3
            </h1>
            <p className="text-lg text-gray-300">
              Be part of the celebration of technology, talent and togetherness
            </p>
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="relative py-12 md:py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Important Note */}
            <div className="relative group mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-gold/30 to-pp-gold-light/30 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-pp-gold/10 to-pp-gold-light/5 backdrop-blur-md border border-pp-gold/30 rounded-2xl p-6">
                <p className="text-sm text-gray-300">
                  <strong className="text-pp-gold">Important:</strong> Please verify your details before submitting your registration. 
                  All fields marked with an asterisk (*) are required.
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Personal Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>
                </div>
              </div>
              
              {/* Academic Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Academic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      College / Institution *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your college name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Department *
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Computer Science"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Year *
                      </label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="" className="bg-pp-background-deep text-gray-400">Select Year</option>
                        <option value="1" className="bg-pp-background-deep">First Year</option>
                        <option value="2" className="bg-pp-background-deep">Second Year</option>
                        <option value="3" className="bg-pp-background-deep">Third Year</option>
                        <option value="4" className="bg-pp-background-deep">Fourth Year</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
                </div>
              </div>
              
              {/* Event Selection */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Select Events *</h2>
                <p className="text-sm text-gray-400 mb-4">
                  Choose the events you'd like to participate in
                </p>
                
                <div className="space-y-6">
                  {/* Technical Events */}
                  <div>
                    <h3 className="text-sm font-bold text-pp-primary mb-3 uppercase tracking-wider">Technical Events</h3>
                    <div className="space-y-2">
                      {allEvents.filter(e => e.category === 'Technical').map(event => (
                        <label key={event.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer transition-all duration-300">
                          <input
                            type="checkbox"
                            checked={formData.events.includes(event.id)}
                            onChange={() => handleEventChange(event.id)}
                            className="mt-1 w-4 h-4 text-pp-gold rounded focus:ring-2 focus:ring-pp-gold bg-white/5 border-white/20"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-white">{event.title}</div>
                            <div className="text-sm text-gray-400">{event.subtitle}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Non-Technical Events */}
                  <div>
                    <h3 className="text-sm font-bold text-pp-gold mb-3 uppercase tracking-wider">Non-Technical Events</h3>
                    <div className="space-y-2">
                      {allEvents.filter(e => e.category === 'Non-Technical').map(event => (
                        <label key={event.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer transition-all duration-300">
                          <input
                            type="checkbox"
                            checked={formData.events.includes(event.id)}
                            onChange={() => handleEventChange(event.id)}
                            className="mt-1 w-4 h-4 text-pp-gold rounded focus:ring-2 focus:ring-pp-gold bg-white/5 border-white/20"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-white">
                              {event.title}
                              {event.isNew && (
                                <span className="ml-2 text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-0.5 rounded-full font-bold">NEW</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-400">{event.subtitle}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </div>
              
              {/* Team Information */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pp-primary/20 to-pp-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Team Information</h2>
                <p className="text-sm text-gray-400 mb-4">
                  If participating as a team, please provide team details
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Team Name (if applicable)
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300"
                      placeholder="Enter your team name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Team Members (if applicable)
                    </label>
                    <textarea
                      name="teamMembers"
                      value={formData.teamMembers}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pp-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter team member names (one per line)"
                    />
                  </div>
                </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="group flex-1 px-10 py-4 bg-gradient-to-r from-pp-gold to-pp-gold-light text-pp-background-deep font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pp-gold/50"
                >
                  <span className="flex items-center justify-center gap-2">
                    REGISTER NOW
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex-1 px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
