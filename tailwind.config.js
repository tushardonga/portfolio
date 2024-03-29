/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ["Big Shoulders Text", "sans-serif"],
      },
      colors: {
        type: "light",
        primary: "#000000",
        primary400: "#000000",
        primary600: "#000000",
        primary80: "#000000cc",
        primary50: "#00000080",
        primary30: "#0000004d",
        secondary: "#EAEAEA",
        secondary70: "#EAEAEAb3",
        secondary50: "#EAEAEA80",
        tertiary: "#212121",
        tertiary80: "#212121cc",
        tertiary70: "#212121b3",
        tertiary50: "#21212180",
      },
    },
    screens: {
      xsm: "490px",
      sm: "640px",
      md: "768px",
      tab: "990px",
      lg: "1024px",
      laptop: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
