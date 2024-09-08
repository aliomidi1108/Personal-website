/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily : {
      "DanaRegular" : "Dana Regular ",
      "DanaMedium" : "Dana Medium ",
      "DanaBold" : "Dana Bold  ",
      "Morabbabold" : "Morabba bold",
      "MorabbaLight" : "Morabba Light",
      "MorabbaMedium" : "Morabba Medium",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

