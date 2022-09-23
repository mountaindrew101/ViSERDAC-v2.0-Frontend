const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      Metropolis: ["metropolis", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        thicknearwhite: "3px 4px 2px rgba(255, 255, 255, 0.15)",
        thicknear: "3px 4px 2px rgba(0, 0, 0, 0.45)",
        thickmd: "3px 4px 5px rgba(0, 0, 0, 0.25)",
        thick: "3px 6px 3px rgba(0, 0, 0, 0.35)",
      },
      transitionProperty: {
        width: "width",
      },
      display: ["group-hover"],
      //colors from UI Design
      colors: {
        "green-nav": "#388E3C",
        "green-nav-div-top": "#003D00",
        "white-80%": "rgba(255, 255, 255, 0.9)",
      },
    },
    screens: {
      xxl: { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
      "min-xxl": { min: "1536px" },
      "min-xl": { min: "1280px" },
      "min-lg": { min: "1024px" },
      "min-md": { min: "768px" },
      "min-sm": { min: "640px" },
      "min-xs": { min: "480px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [backfaceVisibility],
};
