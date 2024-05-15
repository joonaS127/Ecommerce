/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red: "#f42c37",
        yellow: "#fdc62e",
        green: "#2dcc6f",
        blue: "#1376f4",
        white: "eeeeee" ,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transition-transform': {
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        },
      });
    },
  ],
}
