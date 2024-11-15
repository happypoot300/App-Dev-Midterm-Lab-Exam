/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        text: "##333333",
        background: "#f7f7f7",
        primary: "#4b91e2",
        secondary: "#8daa8d",
        accent: "#f5a524",
      },
    },
  },
  plugins: [],
};
