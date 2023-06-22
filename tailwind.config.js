const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_includes/*.html",
    "./_layouts/*.html",
    "./blog/*.html",
    "./photos/*.html",
    "./collections/**/*.html",
    "./*.html"
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
