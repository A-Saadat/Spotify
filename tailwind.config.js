module.exports = {
  content: ["./Src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        circular : 'Circular Std',
      },
      colors: {
        customIndigo : '#493590',
        primetyGreen: '#1DB954',
        primetyBlack: '#191414',
        primetyWhite: '#F5F5F5',
        primetyGray: '#282828',
        customLightGray: "#b3b3b3",
        lowOpacity: "rgba(0, 0, 0, .1)",
        bgLowOopacity: "rgba(0, 0, 0,.7)"

      }
    },
  },
  plugins: [],
}
