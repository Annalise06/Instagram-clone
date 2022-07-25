/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".55rem",
      },
      colors: {
        xblue: "#1fb6ff",
        IgBlue: "#3b82f6",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        lightblack: "#1f2937",
        "gray-dark": "#273444",
        xgray: "#cbd5e1",
        "gray-light": "#d3dce6",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silve: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
