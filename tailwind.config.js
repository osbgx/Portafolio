import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0B0B0C',
        obsidian: '#1A1A1D',
        white: '#FFFFFF',
        hylian: '#3FAF6C',
        purple: {
          DEFAULT: '#7D3CEE',
          light: 'rgb(179,143,235)',
          vivid: '#a855f7',
        },
        hero: '#D4AF37',
        beige: '#a8927a',
        cream: '#fcf6f0',
        brown: {
          DEFAULT: '#6b5545',
          dark: '#2d1b12',
          deeper: '#1a100c',
          deep: '#120a08',
          darker: '#100a08',
          darkest: '#0d0907',
          base: '#0d0806',
        },
        'dark-surface': '#0f0f16',
        'web-bg': '#080a0c',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'ibm-plex-sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        reading: '720px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
};
