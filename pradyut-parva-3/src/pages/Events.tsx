import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { allEvents } from '../data/events';
import { SearchIcon } from '../components/Icons';

const Events: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };
  
  const filteredEvents = allEvents.filter((event) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      event.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = 
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1419] to-[#0a0e27]">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold text-academic-gold mb-6">
              DISCOVER
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              All Events
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Explore the technical and non-technical events of Pradyut Parva 3
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-academic-gold to-transparent mx-auto mt-6"></div>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="sticky top-[112px] z-30 py-6 backdrop-blur-xl bg-[#0a0e27]/80 border-y border-white/10">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-academic-gold to-yellow-500 text-navy-900 shadow-lg shadow-academic-gold/50'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                ALL ({allEvents.length})
              </button>
              <button
                onClick={() => handleCategoryChange('technical')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === 'technical'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                TECHNICAL ({allEvents.filter(e => e.category === 'Technical').length})
              </button>
              <button
                onClick={() => handleCategoryChange('non-technical')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === 'non-technical'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                NON-TECHNICAL ({allEvents.filter(e => e.category === 'Non-Technical').length})
              </button>
            </div>
            
            {/* Search */}
            <div className="relative lg:w-80">
              <SearchIcon 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                size={20} 
              />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academic-gold/50 focus:border-academic-gold/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Grid */}
      <section className="py-16 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="section-container relative z-10">
          {filteredEvents.length > 0 ? (
            <>
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-sm text-gray-400">
                    Showing <span className="text-white font-bold">{filteredEvents.length}</span> {filteredEvents.length === 1 ? 'event' : 'events'}
                    {searchQuery && <span className="text-academic-gold"> matching "{searchQuery}"</span>}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl mb-6">
                <SearchIcon className="text-gray-600" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No events found</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                {searchQuery 
                  ? `No events match your search "${searchQuery}"`
                  : 'No events available in this category'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-academic-gold to-yellow-500 text-navy-900 font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-academic-gold/50"
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
