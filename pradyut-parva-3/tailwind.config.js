/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#e8eaf2',
          100: '#d1d5e5',
          200: '#a3abcb',
          300: '#7581b1',
          400: '#475797',
          500: '#192d7d',
          600: '#142464',
          700: '#0f1b4b',
          800: '#0a1232',
          900: '#050919',
        },
        'institutional-blue': '#003366',
        'ieee-blue': '#00629B',
        'academic-gold': '#C5A572',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'gradient-x': 'gradientX 3s linear infinite',
        'blob': 'blob 7s infinite',
        'float': 'float linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
