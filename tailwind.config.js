/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#15202f',
        secondary: '#a7dded',
        accent: '#e16f54',
        error: '#F53F2F',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'], // Use double quotes for fonts with spaces
      },
    },
  },
  plugins: [],
};
