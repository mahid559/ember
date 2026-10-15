import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.75rem',
        lg: '2.5rem',
        xl: '3.5rem',
      },
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        /* Warm near-black base — premium backgrounds */
        ink: {
          DEFAULT: '#0B0A08',
          50: '#F7F4EE',
          700: '#2A241D',
          600: '#3A322A',
          800: '#1E1A15',
          850: '#16130F',
          900: '#100E0B',
          950: '#0B0A08',
        },
        /* Warm cream — readable content areas */
        cream: {
          50: '#FBF8F2',
          100: '#F5EFE3',
          200: '#E9DFCB',
          300: '#D8C9AE',
          400: '#B7A588',
          500: '#8E7C62',
        },
        /* Muted gold — accents, borders, highlights */
        gold: {
          200: '#EFE0B8',
          300: '#E1C989',
          400: '#CEAF66',
          500: '#BC9848',
          600: '#9A7A36',
          700: '#775E2A',
        },
        /* Balanced warm neutrals — secondary content */
        ash: {
          100: '#E5E0D6',
          200: '#CCC5B8',
          300: '#A79F90',
          400: '#827A6A',
          500: '#5E5749',
          600: '#403A30',
          700: '#2A251E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Didot', 'Georgia', 'serif'],
      },
      fontSize: {
        '8xl': ['5.5rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        '9xl': ['7rem', { lineHeight: '0.92', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        widest: '0.28em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 18px 60px -30px rgba(0, 0, 0, 0.9)',
        card: '0 30px 80px -40px rgba(0, 0, 0, 0.95)',
        gold: '0 0 0 1px rgba(188, 152, 72, 0.4), 0 22px 60px -28px rgba(188, 152, 72, 0.45)',
        lift: '0 40px 80px -50px rgba(0, 0, 0, 1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(100deg, #9A7A36 0%, #CEAF66 45%, #E1C989 100%)',
        'gold-hairline':
          'linear-gradient(90deg, transparent, rgba(206,175,102,0.55), transparent)',
        'ink-gradient': 'linear-gradient(180deg, #16130F 0%, #0B0A08 100%)',
        'lattice-lines':
          'linear-gradient(to right, rgba(245,239,227,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,239,227,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        lattice: '72px 72px',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ember-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.9s infinite',
        float: 'float 7s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out both',
        'ember-pulse': 'ember-pulse 3.5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
