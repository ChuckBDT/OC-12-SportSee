/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // If you modify this list, also modify the variable list in App.css
        red: "#FF0000",
        lightRed: "rgba(255,0,0,0.1)",
        blue: "#4AB8FF",
        lightBlue: "rgba(74,184,255,0.1)",
        yellow: "#F9CE23",
        lightYellow: "rgba(249, 206, 35, 0.1)",
        pink: "#FD5181",
        lightPink: "rgba(253,81,129,0.1)",
        grayLight: "#FBFBFB",
        grayMedium: "#74798C",
        grayDark: "#282D30",
      },
      screens: {
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
