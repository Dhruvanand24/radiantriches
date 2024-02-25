/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        dark: ['#212731'],
        heading: ['#2C384A'],
        textprime: ['#4B5665'],
        blueprime: ['#1B88F4']
      }
    },
  },
  plugins: [require("daisyui")],
}