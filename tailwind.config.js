/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        body:'#222327'
      },
      boxShadow:{
        shadowIndicator: `0px -10px 0 0 #222327`
      }
    },
  },
  plugins: [],
}
