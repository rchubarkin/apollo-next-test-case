const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        root: ["var(--font-root)", ...fontFamily.sans],
      },
    },
    colors: {
      neutral: {
        DEFAULT: "#EBEBEB",
        dark: "#8B8B8B",
        darker: "#606060",
      },
      stone: {
        light: "#313131",
        DEFAULT: "#252525",
        dark: "#1E1E1E",
      },
    },
    borderWidth: {
      1: "1px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
