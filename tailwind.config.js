
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FEF9EF',
          dark: '#FFFBEB'
        },
        charcoal: '#1C1917',
        softgray: '#57534E',
        mood: {
          yellow: '#FACC15',
          green: '#22C55E',
          blue: '#3B82F6',
          red: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
