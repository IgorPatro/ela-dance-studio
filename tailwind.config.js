/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sulphur Point", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#D899A2",
        accent: "#FEE5EB",
      },
      maxWidth: {
        320: "80rem",
      },
      width: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
