/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Crang"', 'sans-serif'],
      'coolvetica': ['"Coolvetica"'],
    },
    extend: {
      colors: {
        'primary': '#3A2E99',
        'nav-color': '#2E2B44',
      },
      backgroundImage:{
        'slider-hero': "linear-gradient(to right , rgb(46, 43, 68, 2), rgb(46, 43, 68,.5), rgb(46, 43, 68,.0)), url('./assets/img/tsushima_napr.jpg')"
      },
    }
  },
  plugins: [],
}

