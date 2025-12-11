/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        background: 'var(--bg-body)',
        card: 'var(--bg-card)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          secondary: 'var(--accent-secondary)',
        },
        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        border: 'var(--border)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    }
  },
  plugins: [],
}