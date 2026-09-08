import type { Config } from 'tailwindcss';

/**
 * Todos os tokens apontam para CSS variables definidas em `src/app/globals.css`.
 * As cores usam canais RGB (`--color-*-rgb`) para que os modificadores de opacidade
 * do Tailwind funcionem: `bg-primary/10`, `text-white/70`, `border-primary/20`...
 */
const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: withAlpha('--color-background-rgb'),
        foreground: withAlpha('--color-foreground-rgb'),
        primary: {
          DEFAULT: withAlpha('--color-primary-rgb'),
          dark: withAlpha('--color-primary-dark-rgb'),
          light: withAlpha('--color-primary-light-rgb'),
          deep: withAlpha('--color-primary-deep-rgb'),
        },
        accent: withAlpha('--color-accent-rgb'),
        surface: withAlpha('--color-surface-rgb'),
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala fluida — o segundo argumento define o leading/tracking padrão.
        hero: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.25rem, 4vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        body: ['clamp(0.875rem, 1vw, 1rem)', { lineHeight: '1.7' }],
      },
      maxWidth: {
        container: '80rem', // espelha o max-w-7xl do container base
      },
      spacing: {
        section: 'var(--section-rhythm)',
      },
      blur: {
        light: '100px',
        glow: '150px',
      },
      boxShadow: {
        // Profundidade vem de luz, nunca de sombra difusa escura.
        glow: '0 10px 30px -10px rgb(var(--color-primary-rgb) / 0.2)',
        'glow-strong': '0 20px 50px -12px rgb(var(--color-primary-rgb) / 0.35)',
      },
      transitionDuration: {
        sweep: '1000ms',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        'light-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.08)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'light-drift': 'light-drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
