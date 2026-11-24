/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFDFB',
          100: '#F9FAF8',
          200: '#F1F4EE',
          300: '#E4EAE0',
        },
        slatecharcoal: {
          800: '#232B38',
          900: '#1A202C',
        },
        forest: {
          50: '#F0F7F4',
          100: '#D8EBE2',
          500: '#2D6A4F',
          600: '#1B4332',
          700: '#081C15',
        },
        aqi: {
          good: '#2D6A4F',
          moderate: '#D97706',
          poor: '#E65100',
          unhealthy: '#C0392B',
          severe: '#880E4F',
          hazardous: '#4A154B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
