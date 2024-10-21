/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23A6F0",
        secondary: "#23856D",
        muted: "#BDBDBD",
        success: "#2DC071",
        lightblue: "#8EC2F2",
        red: "#E74040",
        lightGray: "#E6E6E6",
        text: {
          default: "#252B42",
          secondary: "#737373",
          light: "#FFFFFF",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          lg: "60px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
