const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./_includes/*.html",
    "./_layouts/*.html",
    "./{blog,photos}/*.html",
    './assets/**/*.{js,jsx,ts,tsx,vue}',
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
