module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      font-fami
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
