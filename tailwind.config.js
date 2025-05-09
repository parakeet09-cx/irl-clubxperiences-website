// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    // Grid col/row starts (1-8)
    { pattern: /col-start-(1|2|3|4|5|6|7|8)/ },
    { pattern: /col-end-(2|3|4|5|6|7|8|9)/ },
    { pattern: /row-start-(1|2|3|4|5|6|7|8)/ },
    { pattern: /row-end-(2|3|4|5|6|7|8|9)/ },

    // Slide-in animation classes
    { pattern: /animate-slide-in-(left|right|top|bottom)/ },

    // Optional: if you're dynamically using text/bg colors via props
    { pattern: /bg-(primary|accent|complement|secondary)/ },
    { pattern: /text-(primary|accent|complement|secondary)/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5800FF",
        accent: "#FFBB00",
        complement: "#A7FF00",
        secondary: "#010034",
      },
    },
  },
  plugins: [],
};
