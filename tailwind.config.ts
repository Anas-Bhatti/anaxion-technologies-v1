import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void:    '#06060A',
        deep:    '#0C0C14',
        surface: '#12121C',
        panel:   '#1C1C2C',
        border:  '#252538',
        muted:   '#38384E',
        ion:     '#00C2FF',
        gold:    '#C9A84C',
        text1:   '#EEEEF8',
        text2:   '#8888A8',
        text3:   '#44445A',
      },
      fontFamily: {
        hero:  ['Bebas Neue', 'sans-serif'],
        brand: ['Orbitron', 'monospace'],
        body:  ['DM Sans', 'sans-serif'],
        mono:  ['Space Mono', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '1'   },
        },
      },
      animation: {
        fadeUp:  'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        ticker:  'ticker 30s linear infinite',
        marquee: 'marquee 20s linear infinite',
        scrollP: 'scrollPulse 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
