module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkChocolate: {
          blue: '#2D3277',
          DEFAULT: '#FFF159',
          gray: '#363636',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
