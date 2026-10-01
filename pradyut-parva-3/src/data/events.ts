export interface Event {
  id: string;
  number: number;
  title: string;
  category: 'Technical' | 'Non-Technical';
  subtitle: string;
  tagline: string;
  description: string;
  icon: string;
  isNew?: boolean;
  externalLink?: string;
  details?: {
    date?: string;
    venue?: string;
    room?: string;
    format?: string;
    rules?: string[];
    eligibility?: string;
    teamSize?: string;
    prizes?: string;
    prizeBreakdown?: {
      first: string;
      second: string;
      third?: string;
    };
    facultyCoordinator?: string;
    eventLeader?: {
      name: string;
      phone?: string;
    };
    coordinators?: string[];
    studentCoordinators?: Array<{
      name: string;
      phone?: string;
      isLeader?: boolean;
    }>;
    themes?: string[];
  };
}

export const technicalEvents: Event[] = [
  {
    id: 'codex',
    number: 1,
    title: 'CODEX',
    category: 'Technical',
    subtitle: 'Code Debugging',
    tagline: 'Find. Fix. Optimize.',
    description: 'A code debugging challenge focused on finding, fixing and optimizing programming problems.',
    icon: 'code',
    details: {
      date: '7th October 2026',
      venue: 'SSCE, Anekal, Bangalore',
      room: '325',
      format: 'Individual participation',
      eligibility: 'Open to all engineering students',
      teamSize: 'Individual only',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. D Selvarani',
      eventLeader: {
        name: 'Shreyas',
        phone: '8904796886',
      },
      rules: [
        'Participants have to bring their own laptops and use of mobile for event is prohibited',
        'Competition format: Total questions: 30, Questions type: MCQ, Timings: 40 minutes, Language: Python',
        'Use of AI is strictly prohibited',
        'In case if use of AI is seen, team will be disqualified',
        'Event coordinators will strictly monitor the event',
        'It is an Individual participant event. No teams allowed',
      ],
    }
  },
  {
    id: 'webnova',
    number: 2,
    title: 'WEBNOVA',
    category: 'Technical',
    subtitle: 'Webathon',
    tagline: 'Design. Develop. Deploy.',
    description: 'Web development competition. Build innovative websites with theme announced one week before the event.',
    icon: 'globe',
    details: {
      date: '8th October 2026, 10:15 AM',
      venue: 'ISE Lab',
      format: 'GitHub submission with live demo',
      eligibility: 'Open to all engineering students',
      teamSize: '1-2 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. D Selvarani',
      eventLeader: {
        name: 'Rohit',
        phone: '7397190780',
      },
      rules: [
        'Team size: 1-2 members',
        'Theme released one week before event via @ieee.ssce Instagram',
        'Upload final project to GitHub repository',
        'Submit link one day before event (October 14, 11:59PM)',
        'Repository must include: source code, ReadMe (details, setup, team info), screenshots/demo link',
        'Late submissions not accepted',
        'Any language/framework/library can be used',
        'Code must be original; plagiarism is not allowed',
        'External resources/templates allowed with proper credits',
        'AI tools can assist but no direct copy-paste projects',
        'Judging: Innovation & Creativity, Functionality, Design (UI & UX) & User Experience, Code Quality & Documentation, Presentation & Communication',
      ],
    }
  },
  {
    id: 'wavenova',
    number: 3,
    title: 'WAVENOVA',
    category: 'Technical',
    subtitle: 'Antenna Design',
    tagline: 'Design. Simulate. Radiate.',
    description: 'Antenna design challenge focused on designing, simulating and developing communication-oriented solutions.',
    icon: 'antenna',
    details: {
      date: '7th & 8th October 2026',
      venue: 'ECE IOT Lab',
      format: 'Design and simulation challenge',
      eligibility: 'Open to ECE and related branches',
      teamSize: 'Team event',
      prizes: '1st Prize: ₹5,000 | 2nd Prize: ₹3,000 | 3rd Prize: ₹2,000',
      prizeBreakdown: {
        first: '₹5,000',
        second: '₹3,000',
        third: '₹2,000',
      },
      facultyCoordinator: 'Dr. Ahila A, Dr. Hosanna Princye',
      eventLeader: {
        name: 'K Abinaya',
        phone: '8667477120',
      },
    }
  },
  {
    id: 'technova',
    number: 4,
    title: 'TECHNOVA',
    category: 'Technical',
    subtitle: 'Technical Quiz',
    tagline: 'Think. Question. Conquer.',
    description: 'Technical quiz competition conducted using Mentimeter platform. Test your technical knowledge across engineering domains.',
    icon: 'question',
    details: {
      date: '7th October 2026, 11:15 AM',
      venue: 'Seminar Hall',
      room: '213',
      format: 'Conducted using Mentimeter platform',
      eligibility: 'Open to all engineering students',
      teamSize: '2-3 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Dr. P. Sumathi',
      eventLeader: {
        name: 'Kavya',
        phone: '7892280126',
      },
      rules: [
        'Each team must have 2–3 members',
        'The quiz will be conducted using Mentimeter',
        'Each team should use one device to submit their answers',
        'Ensure stable internet connection for smooth participation',
        'No external assistance or use of search engines allowed',
        'Any malpractice leads to on-spot disqualification',
        'All answers must be submitted within the given time limit',
        'Instructions will be provided by coordinators at the event',
      ],
    }
  },
  {
    id: 'roborush',
    number: 5,
    title: 'ROBORUSH',
    category: 'Technical',
    subtitle: 'Robo Race',
    tagline: 'Build. Race. Conquer.',
    description: 'Autonomous robot racing competition. Navigate through challenging tracks with curves and obstacles.',
    icon: 'robot',
    details: {
      date: '7th October 2026, 3:00 PM',
      venue: 'E Yantra Lab',
      format: 'Autonomous robot racing',
      eligibility: 'Open to all engineering students',
      teamSize: 'Maximum 2 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Dr. Madhu B',
      eventLeader: {
        name: 'Savarinathan K',
        phone: '9611461970',
      },
      rules: [
        'Maximum team size: 2 members; each team must bring their own robot',
        'Only onboard batteries allowed (max voltage 12V); no external power',
        'Robots must be fully autonomous; manual remote control not allowed',
        'Pre-programming required; spot programming allowed but must be completed before race',
        'Track: black line on white surface (or vice versa) with straight paths, curves, T-junctions, crossings, and obstacles',
        'No human intervention allowed during race',
        'Each robot gets 2 attempts; best timing will be considered',
        'Timing measured from start line to finish line',
        'Judging: Speed, Accuracy (staying on track with minimal errors), Obstacle Handling (smooth crossing), Design & Innovation',
        'Judges decision is final',
      ],
    }
  },
  {
    id: 'circuitx',
    number: 6,
    title: 'CIRCUITX',
    category: 'Technical',
    subtitle: 'Circuit Debugging',
    tagline: 'Trace. Test. Troubleshoot.',
    description: 'Circuit debugging challenge with three rounds: MCQ, circuit creation, and circuit debugging.',
    icon: 'chip',
    details: {
      date: '8th October 2026, 11:15 AM',
      venue: 'SSCE, Anekal, Bangalore',
      room: '306',
      format: 'Three rounds: MCQ, Circuit Creation, Circuit Debugging',
      eligibility: 'Open to all engineering students',
      teamSize: '3 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. Dhamarai Selvi K.V',
      eventLeader: {
        name: 'Nandhini',
      },
      studentCoordinators: [
        { name: 'Bhoomika M', phone: '8660099369' },
        { name: 'Vaishali B', phone: '9739371609' },
        { name: 'Pallavi S', phone: '9901381770' },
      ],
      rules: [
        'Team must contain 3 members',
        'Three rounds: 1) MCQ based, 2) circuit creation, 3) circuit debugging',
        'Arrive to venue before 10 minutes',
        'Rules of each round explained before event starts',
        'For 2nd and 3rd rounds, explain solution steps to judges',
        'Conduct: Only use provided tools and equipment, Personal phones and laptops not allowed, Handle all components carefully to avoid penalties',
        'Judges decisions are final',
      ],
    }
  },
  {
    id: 'hacknova',
    number: 7,
    title: 'HACKNOVA',
    category: 'Technical',
    subtitle: '24-Hour Hackathon',
    tagline: 'Ideate. Build. Impact.',
    description: 'A 24-hour hackathon where participants transform innovative ideas into working solutions. Choose from 14 technology domains and build impactful projects.',
    icon: 'lightbulb',
    externalLink: 'https://terraquest-20.vercel.app/',
    details: {
      date: '7th October 2026, 12:30 PM (24 hours)',
      venue: 'Seminar Hall',
      format: '24-hour continuous hackathon',
      eligibility: 'Open to all students',
      teamSize: '2-4 members',
      prizes: '1st Prize: ₹10,000 | 2nd Prize: ₹7,000 | 3rd Prize: ₹5,000',
      prizeBreakdown: {
        first: '₹10,000',
        second: '₹7,000',
        third: '₹5,000',
      },
      facultyCoordinator: 'Dr. Rupa Ezhil Arasi P (9791372550), Mrs. Nancy Vaish (9044310224)',
      eventLeader: {
        name: 'Sakthi shylesh P K',
        phone: '7708139276',
      },
      studentCoordinators: [
        { name: 'Prasanna raj r', phone: '7810096862' },
        { name: 'Manas Singh' },
        { name: 'Utsav Chandra' },
        { name: 'Anjanaa B' },
        { name: 'Nikhil reddy N V' },
      ],
      rules: [
        'Team size: 2-4 members',
        'Select any one domain from provided list and choose related problem statement',
        'Only one problem statement per team; no mid-event changes',
        'Abstract must be submitted via registration form',
        'Abstract deadline: October 5, 2K25',
        'After abstract review, confirmation mail will be sent',
        'Proceed with fee payment and complete registration',
        'Work must be original (no plagiarism); NO pre code allowed',
        'Project completion mandatory during evaluation within 24 hours',
        'Power, Wi-Fi, and basic facilities provided by organizers',
        'Laptops with pre-installed software required (bring your own)',
        'External resources, tools, APIs, and datasets may be used',
        'Ready-made projects or direct copy work not allowed',
        'Food, Refreshments & accommodation provided',
        'Fully pre-built projects not allowed',
        'Once registered and payment completed, withdrawal requires waiting for refund',
        'No extra time will be provided',
        '3 round format with strict time enforcement',
        'Final project submission via designated GitHub repository required',
        'Judging criteria: creativity, functionality, pitching',
      ],
      themes: [
        '1) Artificial Intelligence (AI)',
        '2) Blockchain & Web3',
        '3) Cybersecurity',
        '4) EdTech (Education Technology)',
        '5) HealthTech (Healthcare Technology)',
        '6) E-Commerce & Retail',
        '7) IoT (Software Integration Layer)',
        '8) AgriTech (Agriculture Technology)',
        '9) Smart Cities & Urban Tech',
        '10) Logistics & Supply Chain Tech',
        '11) Human-Centered Design & Assistive Tech',
        '12) Media & Content Tech',
        '13) Social Impact & Sustainability',
        '14) Carbon Tracking / Offset Platforms',
      ],
    }
  },
  {
    id: 'techtalk',
    number: 8,
    title: 'TECHTALK',
    category: 'Technical',
    subtitle: 'Technical Debate',
    tagline: 'Argue. Reason. Convince.',
    description: 'Technical debate competition where teams argue for and against technology-related motions.',
    icon: 'presentation',
    details: {
      date: '8th October 2026, 10:45 AM',
      venue: 'SSCE, Anekal, Bangalore',
      room: '203',
      format: 'Team debate with opening and rebuttal rounds',
      eligibility: 'Open to all engineering students',
      teamSize: '2-4 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. Kavya K M',
      eventLeader: {
        name: 'Anaya Sha',
        phone: '9164967099',
      },
      rules: [
        'Each team must have 2-4 members',
        'One team will speak for the motion and other against the motion',
        'Teams will be assigned their side by coin toss before debate',
        'Opening statement and Rebuttal round: Each team 10-15 minutes to present main arguments clearly and directly address opposing points',
        'Respectful Conduct: No interruptions, personal attacks, or offensive language',
        'Judging based on: content & knowledge, argument & reasoning, communication & clarity, confidence & delivery, time management, creativity & innovation',
        'Judges decisions are final',
      ],
    }
  },
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 'promptx',
    number: 1,
    title: 'PROMPTX',
    category: 'Non-Technical',
    subtitle: 'Prompt',
    tagline: 'Think. Prompt. Create.',
    description: 'Prompt engineering challenge focused on crafting effective AI prompts to generate creative outputs.',
    icon: 'brain',
    details: {
      date: '7th & 8th October 2026',
      venue: 'AV HALL',
      format: 'AI image generation challenge',
      eligibility: 'Open to all students',
      teamSize: 'Individual participation',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. Hema Shubraja J',
      eventLeader: {
        name: 'Divya S',
        phone: '9698517007',
      },
      rules: [
        '30 Seconds Observation: The reference AI-generated image will be displayed for only 30 seconds and will not be shown again',
        '10 Minutes Creation: Participants get 10 minutes to recreate the reference image using an AI image-generation tool',
        'Individual Participation: Participants must work individually. Sharing prompts, ideas, or outputs with others is not allowed',
        'No Reference Image Usage: Participants cannot upload, screenshot, trace, or use the reference image as an input. The image must be recreated through prompting',
        'Scoring & Submission: Each round will be judged based on visual similarity, composition, elements, colours, details, and overall accuracy. The final submission must be made within the allotted time',
      ],
    }
  },
  {
    id: 'techtrek',
    number: 2,
    title: 'TECHTREK',
    category: 'Non-Technical',
    subtitle: 'Treasure Hunt',
    tagline: 'Explore. Solve. Discover.',
    description: 'Exciting treasure hunt combining clues, puzzles, and challenges. First team to reach the treasure wins.',
    icon: 'search',
    details: {
      date: '7th October 2026, 2:00 PM',
      venue: 'SSCE Campus',
      format: 'Two rounds with clues and puzzles',
      eligibility: 'Open to all students',
      teamSize: '4 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mr. Raja G V, Mr. Santosh Kumar N',
      eventLeader: {
        name: 'Naveenkumar N',
        phone: '8015467781',
      },
      rules: [
        'Team size must be 4 members',
        'Event conducted in two rounds',
        'Instructions for each round announced before event starts',
        'Teams must solve the given tasks/clues to progress; skipping not allowed',
        'No tampering with other teams\' clues or solving process',
        'Only one mobile phone per team allowed',
        'Clues must be found and solved in the correct sequence',
        'Skipping ahead or solving out of order not permitted',
        'First team to solve all clues and reach final treasure location wins',
      ],
    }
  },
  {
    id: 'gameon',
    number: 3,
    title: 'GAMEON',
    category: 'Non-Technical',
    subtitle: 'Gaming Tournament',
    tagline: 'Play. Compete. Dominate.',
    description: 'Mobile gaming tournaments featuring Free Fire and BGMI. Battle royale squad competitions with exciting prizes.',
    icon: 'gamepad',
    details: {
      date: '7th October 2026, 12:00 PM',
      venue: 'Room 307',
      format: 'Squad-based battle royale',
      eligibility: 'Open to all students',
      teamSize: 'Squad (4 players)',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Dr. Anitha V',
      eventLeader: {
        name: 'Prajwal',
        phone: '7619146515',
      },
      rules: [
        'Players must join custom room on time – no late entries',
        'Teams must be properly registered before event',
        'Match restarted only if 50%+ players face issues within first 2 minutes',
        'Free Fire: Mode - Battle Royale Squad, Map - Bermuda',
        'BGMI: Mode - Squad (4 players per team), Map - Erangel (TPP)',
        'All players must use latest game version',
        'Device: Only mobile phones allowed (no emulators or controllers)',
        'Headphones/earphones recommended for fair play',
        'No teaming with outside squads – violation = disqualification',
        'All weapons allowed (including grenades & launchers)',
        'Organizers may spectate and review gameplay',
        'Any dispute, restart, or disqualification at final discretion of organizers',
        'Strictly no hacking, cheating, or use of unauthorized apps',
        'Players must respect referees and follow timings strictly',
        'Only online registrations allowed',
      ],
    }
  },
  {
    id: 'mindx',
    number: 4,
    title: 'MINDX',
    category: 'Non-Technical',
    subtitle: 'AI vs Human',
    tagline: 'Human Intellect vs AI.',
    description: 'Challenge yourself to identify whether content is AI-generated or human-created. Test your ability to distinguish between artificial intelligence and human creativity across text, images, and videos.',
    icon: 'brain',
    details: {
      date: '8th October 2026, 10:45 AM',
      venue: 'SSCE, Anekal, Bangalore',
      room: '208',
      format: 'Content identification challenge',
      eligibility: 'Open to all students',
      teamSize: '2 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Dr. P. Sumathi',
      eventLeader: {
        name: 'Thamizhian',
      },
      rules: [
        'Each team must consist of exactly 2 participants',
        'The event will feature text, image, and video content created by either AI or humans',
        'Teams must identify whether the presented content is AI-generated or human-created within the given time limit',
        'Use of external AI tools, search engines, detection software, or other forms of assistance is strictly prohibited',
        'Participants must follow the instructions provided by the event coordinators throughout the event',
        'The decision of the organizing committee regarding the conduct and results of the event shall be final',
      ],
    }
  },
  {
    id: 'connectx',
    number: 5,
    title: 'CONNECTX',
    category: 'Non-Technical',
    subtitle: 'Connection',
    tagline: 'Connect. Identify. Win.',
    description: 'A connection-based quiz where teams identify links between technical concepts, programming, technology, famous tech personalities, and innovations. Multiple rounds featuring clues, visual/audio connections, and rapid-fire questions.',
    icon: 'network',
    details: {
      date: '7th & 8th October 2026',
      venue: 'SSCE, Anekal, Bangalore',
      room: '214',
      format: 'Multiple rounds with different connection challenges',
      eligibility: 'Open to all students',
      teamSize: '2-3 members',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Dr. P. Sumathi',
      eventLeader: {
        name: 'Pradish',
        phone: '9386592571',
      },
      rules: [
        'Each team can have 2–3 members',
        'The event will have multiple rounds based on technical concepts',
        'Participants must identify the connection between the given clues',
        'Questions may include programming, technology, computer science, electronics, famous tech personalities, companies, and inventions',
        'Each question will have a limited time to answer',
        'No mobile phones, internet, or external assistance are allowed',
        'Answers must be submitted before the time limit',
        'Correct answers receive points; incorrect answers receive no points',
        'In case of a tie, a tie-breaker round will be conducted',
        'The decision of the event coordinators/judges will be final',
        'Participants must maintain discipline and fair play throughout the event',
      ],
      themes: [
        'Round 1: Identify the Connection',
        'Round 2: Technical Clues',
        'Round 3: Visual/Audio Connection',
        'Final Round: Rapid-Fire Connection',
      ],
    }
  },
  {
    id: 'pixelverse',
    number: 6,
    title: 'PIXELVERSE',
    category: 'Non-Technical',
    subtitle: 'Photography',
    tagline: 'Capture. Create. Inspire.',
    description: 'Photography competition during the event. Capture memorable moments with creativity and storytelling.',
    icon: 'camera',
    details: {
      date: '7th & 8th October 2026 (October 14 & 15)',
      venue: 'SSCE Campus',
      format: 'Individual photography',
      eligibility: 'Open to all students',
      teamSize: 'Individual only',
      prizes: '1st Prize: ₹1,000 | 2nd Prize: ₹500',
      prizeBreakdown: {
        first: '₹1,000',
        second: '₹500',
      },
      facultyCoordinator: 'Mrs. Dhamarai Selvi K.V',
      eventLeader: {
        name: 'Amith Jose C',
        phone: '8748093450',
      },
      studentCoordinators: [
        { name: 'Udhay N', phone: '9345520849' },
        { name: 'Gokulakrishnan', phone: '9789138574' },
        { name: 'Lekhana S', phone: '7892987831' },
      ],
      rules: [
        'Team size: must be Individual',
        'Photos must be captured during the event dates (October 14 & October 15)',
        'All photos should include a visible watermark with date and time',
        'Editing, filters, or modifications of any kind are not allowed',
        'Only original work will be accepted',
        'Use of cameras, camera accessories, or external phone camera lenses is prohibited',
        'Photos must be taken only with mobile phones',
        'Submission instructions will be intimated in the event hall',
      ],
    }
  },
];

export const allEvents: Event[] = [...technicalEvents, ...nonTechnicalEvents];
