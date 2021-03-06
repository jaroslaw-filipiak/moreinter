module.exports = {
  purge: [
    "./index.html",
    "./portfolio.html",
    "./*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Gotham", "system-ui"],
      book: ["Gotham Book", "system-ui"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".938rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      "main-blue": "#497EC0",
      "main-orange": "#E87D00",
      "gray-7070": "#707070",
      "gray-f8": "#f8f8f8",
      "gray-f7": "#f7f7f7",
      "gray-ef": "#efefef",
      black: "#000",
      white: "#fff",
    },
    extend: {
      screens: {
        "3xl": "1900px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
