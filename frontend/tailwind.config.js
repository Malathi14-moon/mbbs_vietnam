/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {


        brand: {
          red:    '#CC1B1B',
          yellow: '#F5C518',
          dark:   '#1a1a1a',
        },
      },

      


      fontFamily: {
        sans:  ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
       
      },
    },
  },
  plugins: [],
}