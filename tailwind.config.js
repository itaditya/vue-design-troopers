const colorsCustom = require('./src/colorsCustom.js');

module.exports = {
  prefix: 'dt-',
  theme: {
    extend: {
      colors: colorsCustom,
    }
  },
  variants: {
    textColor: ['hover', 'focus', 'active'],
    backgroundColor: ['hover', 'focus', 'active'],
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
