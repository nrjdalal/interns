module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      'small': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'middle': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'large': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xlarge': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
    },
    extend: {},
  },
  plugins: [],

}