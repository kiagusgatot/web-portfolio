/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          bg: '#050505',
          card: '#1A1A1A',
          cardHover: '#222222',
          surface: '#262626',
          border: '#333333',
          borderHover: '#4A4A4A',
          text: '#FAFAFA',
          muted: '#A3A3A3',
          orange: '#FF5E1A',
          orangeHover: '#FF7A40',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
