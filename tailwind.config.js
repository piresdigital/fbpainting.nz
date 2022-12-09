/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'stripe-pattern': "url('/images/header-svg.svg')"
      },
      colors: {
        'brand-red': {
          500: '#e40100',
          600: '#B80F0F'
        },
        'brand-yellow': '#e8c204',
        'brand-blue': '#006eb1',
        'brand-green': '#006c40'
      }
    }
  },
  plugins: []
};
