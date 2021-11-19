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
        '1.2': '0.275rem',
        '1.3': ' 0.375rem',
        '1.1': '0.2625rem',
        '1.4': ' 0.35rem',
      },
      borderWidth: {
        DEFAULT: '0.5px',
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
