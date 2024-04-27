/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./*.{html,js}"],
  darkMode: ['selector', 'body:has(.darkMode :checked)'],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px'
      },
      colors: {
        body: '#222327'
      },
      boxShadow: {
        shadowIndicatorlight: `0px -10px 0 0 white`,
        shadowIndicatorblack: `0px -10px 0 0 #000`,
      }
    },
  },
  plugins: []
}

