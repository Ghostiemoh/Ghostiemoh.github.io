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
          DEFAULT: 'rgb(var(--surface-color) / <alpha-value>)',
          bright: 'rgb(var(--surface-bright-color) / <alpha-value>)',
          container: 'rgb(var(--surface-container-color) / <alpha-value>)',
          'container-low': 'rgb(var(--surface-container-low-color) / <alpha-value>)',
          'container-high': 'rgb(var(--surface-container-high-color) / <alpha-value>)',
          'container-highest': 'rgb(var(--surface-container-highest-color) / <alpha-value>)',
        },
        'on-surface': {
          DEFAULT: 'rgb(var(--on-surface-color) / <alpha-value>)',
          variant: 'rgb(var(--on-surface-variant-color) / <alpha-value>)',
          outline: 'rgb(var(--on-surface-outline-color) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary-color) / <alpha-value>)',
          variant: 'rgb(var(--primary-variant-color) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-color) / <alpha-value>)',
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
