/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        qwigley: ["Qwigley", "cursive"],
      },
      colors: {
        sodaOrange: "#F05A3B",
        primary: "#1A2B56",
        lightOrange: "#FEF8F2",
        // 'primary-5': 'rgba(26, 43, 86, 0.5)'
      },
    },
  },
  plugins: [],
};
