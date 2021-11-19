const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Public Sans'", ...defaultTheme.fontFamily.mono],
        sans: ["'TiffanyStd-Demi'", ...defaultTheme.fontFamily.sans],
      },

      spacing: {
        1.2: '0.275rem',
        1.3: ' 0.3rem',
        1.1: '0.2625rem',
        1.4: ' 0.35rem',
        0.9: ' 0.23rem',
        0.8: ' 0.21rem',
        0.7: ' 0.19rem',
        2.7: ' 0.19rem',
      },
      height: {
        120: '30rem',
      },
      borderWidth: {
        DEFAULT: '0.8px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      colors: {
        deepoe: {
          cream: '#F5F3EE',
          chocolate: '#302E2F',
          pink: '#dfd0e1',
        },
        deepoe_default: {
          black: '#302e2f',
        },
      },
      fontSize: {
        xs: ' 0.625rem',
        lg2: '1.25rem',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
