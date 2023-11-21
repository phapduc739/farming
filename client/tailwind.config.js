/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#0DA487",
        secondaryRed: "#FF7272",
        darkGreen: "#0E947A",
        lightGreen: "#D6F8F1",
        orange: "#FFA53B",
        yellow: "#FFA53B",
        textBlack: "#212529",
        textGray: "#4A5568",
        backgroundWhite: "#FFFFFF",
        backgroundLightGray: "#F8F8F8",
        backgroundLightYellow: "#F6F5F0",
        lightGray: "#6c757d",
        darkGray: "#e9ecef",
        lineGray: "#ececec",
        text2222: "#222222",
      },
    },
  },
  plugins: [],
};
