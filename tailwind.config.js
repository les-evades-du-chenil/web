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
