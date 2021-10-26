const colors = require('tailwindcss/colors');

const light = {
  DEFAULT: colors.white,
  ...colors.gray,
};
const dark = {
  light: colors.gray[700],
  DEFAULT: colors.gray[800],
  dark: colors.gray[900],
  ...colors.gray,
};

const primaryColor = colors.sky;
const primary = {
  light: primaryColor[500],
  DEFAULT: primaryColor[600],
  dark: primaryColor[700],
  ...primaryColor,
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
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // https://github.com/tailwindlabs/tailwindcss-typography/issues/32#issuecomment-663045275
  important: "html",
};
