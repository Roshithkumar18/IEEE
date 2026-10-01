# Pradyut Parva 3 - Official Event Website

Official website for **Pradyut Parva 3**, an IEEE Student Branch and Societies event at Sri Sairam College of Engineering, Anekal, Bangalore.

**Event Dates:** 7th & 8th October 2026  
**Theme:** IGNITE | INNOVATE | IMPACT

## Features

- 🎯 Professional institutional design with IEEE branding
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and modern (React + TypeScript + Tailwind CSS)
- 🎨 Restrained navy/white/gold color scheme
- 📋 13 events (6 Technical + 7 Non-Technical)
- 🔍 Event search and filtering
- 📝 Registration form
- 📅 Event schedule
- 📖 Guidelines and contact pages
- ♿ Accessibility-focused design

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Fonts:** Inter (body), Manrope (headings)

## Project Structure

```
pradyut-parva-3/
├── public/
│   └── assets/
│       └── logos/          # Official logos (to be replaced)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── EventCard.tsx
│   │   ├── Footer.tsx
│   │   └── Icons.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── Events.tsx
│   │   ├── EventDetail.tsx
│   │   ├── Register.tsx
│   │   ├── About.tsx
│   │   ├── Schedule.tsx
│   │   ├── Guidelines.tsx
│   │   └── Contact.tsx
│   ├── data/               # Event data and configuration
│   │   ├── events.ts       # All event information
│   │   ├── coordinators.ts # Coordinator information
│   │   └── config.ts       # Site configuration
│   ├── styles/
│   │   └── index.css       # Global styles and Tailwind
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd pradyut-parva-3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Logo Assets

**IMPORTANT:** Replace placeholder logos with official assets.

Place the following files in `public/assets/logos/`:

1. `ssce-logo.png` - Sri Sairam College of Engineering logo
2. `ieee-logo.png` - IEEE official logo
3. `ieee-day-logo.png` - IEEE Day logo (optional)
4. `pradyut-parva-logo.png` - Event logo (optional)

See `public/assets/logos/README.md` for details.

## Configuration

Edit `src/data/config.ts` to update:

- Event URLs
- Social media links
- SEO metadata
- Institution details

## Customizing Event Data

All event information is centralized in `src/data/events.ts`. To update event details:

1. Open `src/data/events.ts`
2. Locate the event object
3. Update fields like `format`, `rules`, `eligibility`, `teamSize`, `prizes`, etc.
4. Save and the changes will reflect across all pages

## Adding New Events

To add a new event:

1. Add event object to `technicalEvents` or `nonTechnicalEvents` array in `src/data/events.ts`
2. Follow the existing event structure
3. Choose an appropriate icon name from `src/components/Icons.tsx`

## Design Philosophy

This website follows these design principles:

### ✅ DO
- Institutional, academic, IEEE-professional styling
- Navy + white + gold + subtle blue color palette
- Clean, modern, trustworthy design
- Subtle technical background patterns
- Professional typography
- Strong accessibility
- Mobile-first responsive design

### ❌ DON'T
- Excessive gradients or neon effects
- Gaming website aesthetics
- Startup/commercial marketing styles
- Fake or modified institutional logos
- Excessive animations
- Rainbow color schemes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Events

### Technical Events (6)
1. **CODEX** - Code Debugging Challenge
2. **CIRCUIT** - Circuit Debugging Challenge
3. **WEBNOVA** - Web Innovation Challenge
4. **ANTENNA INNOVATE** - Antenna Design Challenge
5. **TECHNOVA QUEST** - Technical Treasure Hunt
6. **INNOVATE-X** - Research Paper Presentation

### Non-Technical Events (7)
1. **MINDWARS** - AI vs Human Challenge
2. **QUIZORA** - Quiz Challenge
3. **CONNECTX** - Networking & Icebreaker
4. **PIXEL PERFECT** - Photography Challenge
5. **INNOVATION 24** - 24-Hour Hackathon
6. **ROBO RUSH** - Robotics Race
7. **GAMEPROMPT** - Prompt Engineering + Gaming (NEW)

## Coordinators

### Faculty Coordinators
- Dr. Narmatha P
- Dr. Ahila A

### Student Coordinators
- Santhosh P (III ECE)
- Shreehitha E (II ECE)
- Vikas S (III ECE)
- Suman (I ESE)
- Parshad A (CSE)
- Bhoomika (AIML)

### Leadership
- **Principal:** Dr. B. Shadaksharappa
- **Head of Department:** Dr. A. Poonguzhali

## License

© 2026 Sri Sairam College of Engineering - IEEE Student Branch & Societies. All Rights Reserved.

## Contact

For queries regarding the website or event, please visit the Contact page or reach out to the event coordinators.

---

**Built with ❤️ for Pradyut Parva 3**
