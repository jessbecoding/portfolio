/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
         peach: "#e6c2a8",
         darkGrey: "#282823",
         offWhite: "#f5f2e6",
         green: "#95a595",
         greyBrown: "#7a746c",
         grey: "#888681",
         cream: "#f4e5d1",
         redBrown: "#745b4d",
         brown: "#79644c",
      }
    },
  },
  plugins: [],
}
