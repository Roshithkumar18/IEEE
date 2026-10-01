import React from 'react';

const Guidelines: React.FC = () => {
  const sections = [
    {
      title: 'General Guidelines',
      items: [
        'All participants must carry a valid college ID card at all times during the event.',
        'Registration is mandatory for all participants. Walk-in registrations may be subject to availability.',
        'Participants are expected to maintain decorum and professional behavior throughout the event.',
        'The organizing committee reserves the right to modify event rules and guidelines as necessary.',
        'Decisions made by the judges and organizing committee are final and binding.',
      ]
    },
    {
      title: 'Registration Guidelines',
      items: [
        'Complete all registration fields accurately. Incomplete registrations may not be processed.',
        'Participants will receive confirmation via email after successful registration.',
        'Registration deadlines must be strictly adhered to. Late registrations may not be accepted.',
        'Each participant can register for multiple events, subject to schedule conflicts.',
        'Team registrations must include all team member details at the time of registration.',
      ]
    },
    {
      title: 'Event Participation Guidelines',
      items: [
        'Participants must report to their respective event venues at least 15 minutes before the scheduled start time.',
        'For team events, all team members must be present at the time of the event.',
        'Participants must bring any required materials or equipment as specified in individual event guidelines.',
        'Use of unfair means or plagiarism will lead to immediate disqualification.',
        'Participants must follow specific event rules as communicated by event coordinators.',
      ]
    },
    {
      title: 'Code of Conduct',
      items: [
        'Treat all participants, organizers, and guests with respect and courtesy.',
        'Discriminatory behavior, harassment, or offensive language will not be tolerated.',
        'Follow all instructions given by event coordinators and volunteers.',
        'Maintain cleanliness and do not damage any college property or equipment.',
        'Photography and videography are allowed for personal use only. Commercial use requires prior permission.',
      ]
    },
    {
      title: 'Venue Guidelines',
      items: [
        'Participants must stay within designated event areas unless otherwise instructed.',
        'Food and beverages are allowed only in designated areas.',
        'Smoking and consumption of alcohol or any prohibited substances are strictly forbidden.',
        'Emergency exits must be kept clear at all times.',
        'Follow all safety protocols and instructions provided by the organizing team.',
      ]
    },
    {
      title: 'Important Instructions',
      items: [
        'Keep your registration confirmation and ID readily available for verification.',
        'Mobile phones must be on silent mode during event sessions and presentations.',
        'Participants are responsible for their personal belongings. The organizing committee is not liable for any loss.',
        'In case of any queries or concerns, contact the event coordinators immediately.',
        'Stay updated with event announcements through official communication channels.',
        'Certificates of participation will be provided to all registered participants upon completion of the event.',
      ]
    },
  ];
  
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
              RULES & REGULATIONS
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Guidelines
            </h1>
            <p className="text-lg text-gray-300">
              Important rules and guidelines for all participants
            </p>
          </div>
        </div>
      </section>
      
      {/* Important Notice */}
      <section className="relative py-8 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-academic-gold/5 via-academic-gold/10 to-academic-gold/5"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-academic-gold/10 to-yellow-500/5 backdrop-blur-md border border-academic-gold/30 rounded-2xl p-6 text-center">
                <p className="text-sm md:text-base text-gray-300">
                  <strong className="text-academic-gold">Please read all guidelines carefully.</strong> Adherence to these guidelines 
                  is mandatory for all participants. Violation may result in disqualification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guidelines Sections */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-academic-gold to-yellow-600 text-navy-900 rounded-full flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mt-1">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3 ml-14">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-academic-gold rounded-full mt-2"></span>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-academic-gold/5 to-yellow-500/5"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-academic-gold/30 to-yellow-500/30 rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Need More Information?</h3>
                <p className="text-gray-300 mb-6">
                  For specific event rules, eligibility criteria, or any other queries, 
                  please refer to individual event pages or contact our coordinators.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/events" className="px-8 py-4 bg-gradient-to-r from-academic-gold to-yellow-500 text-navy-900 font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-academic-gold/50 w-full sm:w-auto">
                    VIEW EVENTS
                  </a>
                  <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;
