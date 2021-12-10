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
      inset: {
        '1/5': '20%',
        '1/9': '11.11%',
        '1/6': '16.67%',
        '1/7': '14.28%',
        '1/11': '9.01%',
        '1/13': '7.7%',
        '2/5': '40%',
        '2/9': '22.22%',
        '3/7': '42.82%',
        '3/11': '27.27%',
        "5/8": '62.5%',
        '1/20': '5%',
      },

      spacing: {
        6: '1.5rem',
        1.2: '0.275rem',
        1.3: ' 0.3rem',
        1.1: '0.2625rem',
        1.4: ' 0.35rem',
        0.9: ' 0.23rem',
        0.8: ' 0.21rem',
        0.7: ' 0.19rem',
        0.1: ' 0.04rem',
        2.7: ' 0.7rem',
        18: '4.5rem',
        '2%': '2%',
        '40%': '40%'
      },
      height: {
        120: '60rem',
        90: '22rem',

        71: '17.75rem',
        95: '23.625rem',
        100: '26rem',
        105: '28rem',
        110: '31.67rem',
        65: '16.25rem',
        66: '16.75rem',
        111: '33.67rem',
      },
      maxHeight: {
        75: '19rem',
        100: '26rem',
        105: '28rem',
        110: '31.67rem',
        111: '34.67rem',
        115: '35.67rem',
        120: '37rem',
        130: '40rem',
      },
      width: {
        150: '50rem',
        53: '12.563rem',
        65: '16.25rem',
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
          teal: '#a6e0c7',
          mustard: '#fcdf50',
          moss: '#A8A425',
          tangerine: '#E9610E',
        },
        deepoe_default: {
          black: '#302e2f',
        },
      },
      fontSize: {
        xs: ' 0.625rem',
        lg2: '1.25rem',
        xl2: '2rem',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
