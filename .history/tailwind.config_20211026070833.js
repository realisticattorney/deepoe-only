module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepoe: {
          cream: '#2D3277',
          chocolate: '#302E2F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}