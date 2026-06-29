import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#050816',
        surface2: '#0b1223',
        surface3: '#111a33',
        glow: '#22d3ee',
        accent: '#60a5fa',
        accent2: '#22c55e',
        border: 'rgba(56, 189, 248, 0.12)',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(34, 211, 238, 0.14)',
        card: '0 20px 60px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(34,211,238,0.18), transparent 38%), radial-gradient(circle at bottom right, rgba(96,165,250,0.1), transparent 25%)',
        'panel-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(15,23,42,0.72))',
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
        display: ['"Geist Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config
