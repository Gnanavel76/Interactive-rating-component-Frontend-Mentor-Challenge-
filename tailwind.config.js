/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px"
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: {
          200: "hsl(213, 19%, 21%)",
          400: "hsl(213, 19%, 18%)",
          600: "hsl(213, 19%, 13%)",
        },
        veryDarkBlue: "hsl(216, 12%, 8%)",
      }
    },
    fontFamily: {
      overpass: "'Overpass', sans-serif"
    },
  },
  plugins: [],
}
