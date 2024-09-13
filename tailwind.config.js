/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { //extends supported list of fonts
        title: ['"Pacifico"', 'cursive'] //wir haben jetzt eine font-title Klasse
      }
    },
  },
  plugins: [],
}

