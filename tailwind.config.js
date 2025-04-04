/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',      // for old pages directory (optional)
      './app/**/*.{js,ts,jsx,tsx}',        // for App Router (recommended)
      './components/**/*.{js,ts,jsx,tsx}', // your shared UI components
    ],
    darkMode: 'class', // or 'media'
    theme: {
      extend: {
        colors: {
          primary: '#0f172a',   // slate-900
          accent: '#facc15',    // yellow-400
          background: '#ffffff',
          foreground: '#171717',
        },
        fontFamily: {
          sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        },
      },
    },
    plugins: [],
  };