/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          bright: '#F8F9FA',
          container: '#F0F2F5',
          'container-low': '#F3F4F6',
          'container-high': '#E5E7EB',
          'container-highest': '#D1D5DB',
        },
        'on-surface': {
          DEFAULT: '#000000',
          variant: '#4B5563',
          outline: '#9CA3AF',
        },
        primary: {
          DEFAULT: '#000000',
          variant: '#333333',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold for the Altman "High Impact" feel
          variant: '#B8860B',
        },
        accent: {
          DEFAULT: '#007AFF', // Apple Blue
          glass: 'rgba(0, 122, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'slow-fade': 'fadeIn 1.5s ease-out',
        'subtle-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
