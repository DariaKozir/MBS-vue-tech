module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mainFont: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2xxl": "1.75rem",
      "3xl": "1.875rem",
    },
    extend: {
      colors: {
        main: "#444",
        label: "#aaa",
        gray: {
          default: "#777",
          light: "#e7e7e7",
          border: "#ddd",
        },
        background: "#f2f2f2",
        white: "#ffffff",
        black: "#000000",
        pink: "#ec7b78",
      }
    },
  },
};