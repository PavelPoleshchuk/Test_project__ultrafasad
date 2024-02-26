/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      // screens: {
      //   s: { max: "435px" },
      //   ss: { max: "520px" },
      //   sm: { min: "360px", max: "768px" },
      //   md: { min: "768px", max: "1024px" },
      //   lg: { min: "1024px", max: "1440px" },
      // },
      fontFamily: {
        body: ['Roboto','Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
