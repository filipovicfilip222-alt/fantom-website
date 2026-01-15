import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        foreground: '#ffffff',
        muted: 'rgba(255, 255, 255, 0.5)',
        'line-primary': 'rgba(255, 255, 255, 0.15)',
        'line-secondary': 'rgba(255, 255, 255, 0.08)',
        'line-glow': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.15em',
      },
      animation: {
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotateY(0deg) rotateX(15deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
    },
  },
  plugins: [],
}

export default config
