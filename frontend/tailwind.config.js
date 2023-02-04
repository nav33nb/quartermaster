/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#037AC5',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#378F71',
      'yellow': '#ffc82c',
      'trans-yellow': '#ffc82c44',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black':'#000000'
    },
    fontFamily: {
      sans: ['Avenir Lt Std', 'sans-serif'],
      mono: ['Cascadia Code', 'mono']
    },
    extend: {},
  },
  plugins: [],
}
