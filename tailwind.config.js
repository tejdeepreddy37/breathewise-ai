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
          50: '#FDFEFC',
          100: '#FAFBF8',
          200: '#F3F5F0',
          300: '#E6EAE2',
        },
        slatecharcoal: {
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        forest: {
          50: '#F2F8F5',
          100: '#DBEDE4',
          200: '#BFDFCF',
          400: '#40916C',
          500: '#2D6A4F',
          600: '#1B4332',
          700: '#081C15',
        },
        sage: {
          50: '#F5F8F6',
          100: '#E3EDE7',
          200: '#C7DCD0',
          500: '#52796F',
          700: '#2F3E46',
        },
        skyair: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        aqi: {
          good: '#2D6A4F',
          moderate: '#D97706',
          poor: '#EA580C',
          unhealthy: '#DC2626',
          severe: '#991B1B',
          hazardous: '#4A154B',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(15, 23, 42, 0.03), 0 1px 3px rgba(15, 23, 42, 0.02)',
        'float': '0 12px 32px -4px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'elevated': '0 20px 40px -8px rgba(15, 23, 42, 0.08), 0 6px 16px -4px rgba(15, 23, 42, 0.04)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
