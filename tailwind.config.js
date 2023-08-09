const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    "./_includes/*.html",
    "./_layouts/*.html",
    "./{blog,photos}/*.html",
    './assets/**/*.{js,jsx,ts,tsx,vue}',
    "./categories/*.md",
    "./collections/**/*.html",
    "./*.html"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
