const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const flatWhite = {
  50: "#F9F9F9",
  100: "#DADADA",
  200: "#BBBBBB",
  300: "#9C9C9C",
  400: "#7C7C7C",
  500: "#5D5D5D",
  600: "#3E3E3E",
  700: "#1F1F1F",
};

const light = {
  light: colors.white,
  DEFAULT: flatWhite[50],
  dark: flatWhite[100],
  ...flatWhite,
};

const dark = {
  light: "#363748",
  DEFAULT: "#191A2E",
  dark: "#131423",
  ...colors.gray,
};

const neonGreen = {
  50: "#C1EAD0",
  100: "#ADE3C1",
  200: "#98DBB1",
  300: "#84D4A1",
  400: "#70CD92",
  500: "#5BC682",
  600: "#50AD72",
  700: "#449562",
  800: "#397C51",
  900: "#2D6341",
};

const primary = {
  light: neonGreen[400],
  DEFAULT: neonGreen[500],
  dark: neonGreen[600],
  ...neonGreen,
};

const lightPurple = {
  50: "#ddd8f1",
  100: "#d6d0ee",
  200: "#cfc8eb",
  300: "#c8c0e9",
  400: "#c1b8e6",
  500: "#bab0e3",
  600: "#a79ecc",
  700: "#958db6",
  800: "#827b9f",
  900: "#706a88",
};

const secondary = {
  light: lightPurple[400],
  DEFAULT: lightPurple[500],
  dark: lightPurple[600],
};

const rubin = {
  50: "#bf809d",
  100: "#b26689",
  200: "#a54d75",
  300: "#993361",
  400: "#8c1a4e",
  500: "#7F003A",
  600: "#720034",
  700: "#66002e",
  800: "#590029",
  900: "#4c0023",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light,
        dark,
        primary,
        secondary,
      },
      fontFamily: {
        sans: ["Aeonik", ...defaultTheme.fontFamily.sans],
        accent: ['"GT Super"'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
