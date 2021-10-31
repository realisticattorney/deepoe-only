const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        mono: ["'Public Sans'", ...defaultTheme.fontFamily.mono] ,
        sans: ["'TiffanyStd'", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        deepoe: {
          cream: '#F5F3EE',
          chocolate: '#302E2F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
