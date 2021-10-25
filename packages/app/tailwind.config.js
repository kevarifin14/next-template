const colors = require('tailwindcss/colors');

const light = {
  DEFAULT: '#FFFFFF',
  ...colors.gray,
};
const dark = '#111827';

const primary = {
  light: colors.indigo[500],
  DEFAULT: colors.indigo[600],
  dark: colors.indigo[700],
  ...colors.indigo,
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light,
        dark,
        primary,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
