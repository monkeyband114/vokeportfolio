/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F0F0F6",
        secondary: "rgba(255, 180, 0, 0.95)",
        halfBlack: "#2B2B2B",
        darken: "#3A3B3C",
        fullBlack: "#242526",
        brightyellow: "#FFB400",
        greyWhite: "#E4E6EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
