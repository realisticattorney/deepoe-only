const defaultTheme = require('tailwindcss/defaultTheme');
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];

      const colorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: {borderTopColor: colors[color]},
          [`.border-r-${color}`]: {borderRightColor: colors[color]},
          [`.border-b-${color}`]: {borderBottomColor: colors[color]},
          [`.border-l-${color}`]: {borderLeftColor: colors[color]},
        }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Public Sans'", ...defaultTheme.fontFamily.mono],
        sans: ["'TiffanyStd-Demi'", ...defaultTheme.fontFamily.sans],
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
