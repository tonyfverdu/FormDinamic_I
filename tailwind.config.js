/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a'
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

