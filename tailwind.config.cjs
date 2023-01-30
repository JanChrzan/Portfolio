module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Navy": "#0a192f",
        "Oxford-Blue": "#112240",
        "Space-Cadet": "#233554",
        "Cool-Grey": "#8892b0",
        "Wild-Blue-Yonder": "#a8b2d1",
        "Periwinkle-Crayola": "#ccd6f6",
        "Alice-Blue": "#e6f1ff",
        "Aquamarine": "#64ffda",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

