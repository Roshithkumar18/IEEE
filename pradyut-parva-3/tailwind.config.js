/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GLOBAL MASTER PRADYUT PARVA 3 COLOR SYSTEM
        pp: {
          // Backgrounds
          'bg': '#0b1126',
          'bg-deep': '#070d1d',
          'bg-light': '#111b38',
          
          // Surfaces
          'surface': '#111b38',
          'surface-hover': '#172344',
          'surface-light': 'rgba(17, 27, 56, 0.6)',
          
          // Gold - Main Accent
          'gold': '#f2c438',
          'gold-light': '#ffd95a',
          'gold-dark': '#d4a827',
          
          // Blue/Cyan - Supporting Accent
          'blue': '#2f6fff',
          'cyan': '#25c9ff',
          
          // Typography
          'text': '#f5f7fb',
          'text-muted': '#a7afc2',
          'text-dim': '#707896',
          
          // Borders
          'border': 'rgba(130, 155, 210, 0.18)',
          'border-hover': 'rgba(130, 155, 210, 0.35)',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradientX 3s linear infinite',
        'float': 'float linear infinite',
        'float-slow': 'floatSlow 20s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(30px)', opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
