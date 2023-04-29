/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albertus: 'Albertus',
        copper: 'Copper'
      },
      colors: {
        orng: '#FEB228'
      }
    },
  },
  plugins: [],
}