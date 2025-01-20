/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'rotate-label': 'rotateLabel 10s linear infinite', // Define the animation name and timing
      },
      keyframes: {
        rotateLabel: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
    },

 
  },
  plugins: [],
}}