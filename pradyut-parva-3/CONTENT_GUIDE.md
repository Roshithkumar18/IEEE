# Content Update Guide

This guide helps you update event information, dates, coordinators, and other content without touching the code structure.

## Quick Reference

| What to Update | File to Edit |
|----------------|-------------|
| Event details, rules, prizes | `src/data/events.ts` |
| Coordinators, faculty, leadership | `src/data/coordinators.ts` |
| Dates, venue, URLs, social links | `src/data/config.ts` |
| Official logos | `public/assets/logos/` |

## Updating Event Information

**File:** `src/data/events.ts`

### To Update Event Details

Find the event in either `technicalEvents` or `nonTechnicalEvents` array and modify its properties:

```typescript
{
  id: 'codex',
  number: 1,
  title: 'CODEX',
  category: 'Technical',
  subtitle: 'Code Debugging Challenge',
  tagline: 'Find. Fix. Optimize.',
  description: 'Full description here...',
  icon: 'code',
  details: {
    date: '7th October 2026, 10:00 AM',           // Update timing
    venue: 'Lab 301, Computer Science Block',     // Update venue
    format: 'Individual competition, 2 rounds',   // Add format details
    eligibility: 'Open to all engineering students', // Add eligibility
    teamSize: 'Individual participation',         // Add team size
    prizes: 'Winner: ₹5000, Runner-up: ₹3000',   // Add prize details
    rules: [                                       // Add rules
      'Rule 1: ...',
      'Rule 2: ...',
      'Rule 3: ...',
    ],
    coordinators: ['Name 1', 'Name 2'],          // Add coordinators
  }
}
```

### To Add a New Event

1. Copy an existing event object
2. Change the `id` to a unique kebab-case name
3. Update `number` to the next sequential number
4. Update all other fields
5. Add to the appropriate array (`technicalEvents` or `nonTechnicalEvents`)

Available icon names: `code`, `chip`, `globe`, `antenna`, `search`, `presentation`, `brain`, `question`, `network`, `camera`, `lightbulb`, `robot`, `gamepad`

## Updating Coordinators

**File:** `src/data/coordinators.ts`

### Student Coordinators

```typescript
export const studentCoordinators: Coordinator[] = [
  { name: 'Full Name', role: 'Student Coordinator', department: 'III ECE' },
  // Add more...
];
```

### Faculty Coordinators

```typescript
export const facultyCoordinators: Coordinator[] = [
  { name: 'Dr. Name', role: 'Faculty Coordinator' },
  // Add more...
];
```

### Leadership

```typescript
export const leadership: Coordinator[] = [
  { name: 'Dr. Name', role: 'Principal' },
  { name: 'Dr. Name', role: 'Head of the Department' },
];
```

## Updating Event Configuration

**File:** `src/data/config.ts`

### Basic Information

```typescript
export const siteConfig = {
  eventName: 'PRADYUT PARVA 3',                    // Event name
  theme: 'IGNITE | INNOVATE | IMPACT',             // Theme
  tagline: 'A Celebration of...',                  // Tagline
  dates: '7th & 8th October 2026',                 // Event dates
  venue: 'SSCE, Anekal, Bangalore',                // Venue
  institution: 'Sri Sairam College of Engineering', // Institution name
  location: 'Anekal, Bangalore',                   // Location
  organizer: 'IEEE Student Branch & Societies',    // Organizer
```

### URLs

```typescript
  websiteUrl: 'ssceieeeday2026.in',               // Main website URL
  registrationUrl: 'ssceieeeday2026.in/register', // Registration URL
  eventsUrl: 'ssceieeeday2026.in/events',         // Events URL
```

### Social Media Links

```typescript
  social: {
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourpage',
    facebook: 'https://facebook.com/yourpage',
    youtube: 'https://youtube.com/@yourchannel',
  },
```

### SEO Metadata

```typescript
  seo: {
    title: 'Your Page Title',
    description: 'Your meta description for search engines',
    keywords: 'keyword1, keyword2, keyword3',
  },
```

## Updating Logos

**Location:** `public/assets/logos/`

### Required Files

1. `ssce-logo.png` - College logo
2. `ieee-logo.png` - IEEE logo
3. `ieee-day-logo.png` - IEEE Day logo (optional)
4. `pradyut-parva-logo.png` - Event logo (optional)

### Logo Requirements

- Format: PNG with transparent background
- Size: At least 500x500px (or appropriate aspect ratio)
- Keep original colors - do not modify

### Steps to Replace Logos

1. Get the official high-resolution logo files
2. Name them exactly as listed above
3. Place them in `public/assets/logos/`
4. Refresh the website - logos will automatically display

## Updating Schedule

**File:** `src/pages/Schedule.tsx`

Find the `days` array and update:

```typescript
const days = [
  {
    date: '7th October 2026',
    events: [
      { 
        time: '09:00 AM',                    // Event time
        title: 'Opening Ceremony',           // Event title
        type: 'Special',                     // Type: Technical/Non-Technical/Special
        venue: 'Main Auditorium'            // Venue
      },
      // Add more events...
    ]
  },
  // Add more days...
];
```

## Updating Guidelines

**File:** `src/pages/Guidelines.tsx`

Find the `sections` array and update or add sections:

```typescript
const sections = [
  {
    title: 'General Guidelines',
    items: [
      'Guideline point 1',
      'Guideline point 2',
      // Add more...
    ]
  },
  // Add more sections...
];
```

## Common Scenarios

### Scenario 1: Event Date Changed

1. Open `src/data/config.ts`
2. Update the `dates` field
3. Save the file

### Scenario 2: New Prize Information Available

1. Open `src/data/events.ts`
2. Find your event
3. Update the `prizes` field in `details`
4. Save the file

### Scenario 3: Adding Event Rules

1. Open `src/data/events.ts`
2. Find your event
3. Add or update the `rules` array in `details`:
```typescript
rules: [
  'Each team can have maximum 4 members',
  'Laptops must be brought by participants',
  'No external help allowed',
],
```

### Scenario 4: Update Social Media Links

1. Open `src/data/config.ts`
2. Find the `social` object
3. Replace `#` with actual URLs:
```typescript
social: {
  instagram: 'https://instagram.com/pradyutparva',
  linkedin: 'https://linkedin.com/company/ssce-ieee',
  facebook: 'https://facebook.com/pradyutparva',
  youtube: 'https://youtube.com/@pradyutparva',
},
```

### Scenario 5: New Coordinator Added

1. Open `src/data/coordinators.ts`
2. Add to the appropriate array:
```typescript
{ name: 'New Coordinator', role: 'Student Coordinator', department: 'IV CSE' },
```

## After Making Changes

1. **Save all files**
2. **Test locally** (run `npm run dev`)
3. **Verify changes** display correctly
4. **Build for production** (`npm run build`)
5. **Deploy** to hosting platform

## Tips

- Always use exact spelling for names (double-check)
- Keep descriptions concise and clear
- Use consistent formatting (dates, times, etc.)
- Test on mobile after major content updates
- Keep backups before making large changes

## Need Help?

If you're unsure about updating content:
1. Check this guide first
2. Look at existing examples in the files
3. Ask the development team
4. Make a backup before editing

---

**Remember:** All content updates are centralized in the `/src/data/` folder. You rarely need to touch component files.
