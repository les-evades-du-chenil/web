module.exports = {
  purge: [],
  // IN PRODUCTION ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#FFD100",
      white: "#FFFFFF",
      primaryLight: "#FFEE32",
      grey: "#6D6D6D",
      warning: "#f25f4c",
      dark: "#202020",
      dpblue: "#1F2937",
      light: "#f2f2f2",
      lightGrey: "#616161",
      darkIndigo: "#1A237E",
    },
    fontFamily: {
      sans: ["inter", "serif"],
      rancho: ["Rancho", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
