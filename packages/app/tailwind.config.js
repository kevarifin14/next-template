const colors = require('tailwindcss/colors');

const light = {
  DEFAULT: '#FFFFFF',
  ...colors.gray,
};
const dark = {
  light: colors.gray[700],
  DEFAULT: colors.gray[800],
  dark: colors.gray[900],
  ...colors.gray,
};

const primary = {
  light: colors.indigo[500],
  DEFAULT: colors.indigo[600],
  dark: colors.indigo[700],
  ...colors.indigo,
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
