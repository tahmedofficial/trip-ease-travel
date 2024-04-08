/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: '"Poppins", sans-serif'
      },
      colors:{
        "ctm-primary-color" : "#135D66",
        "ctm-gray-color" : "#EEEEEE",
        "ctm-footer-color" : "#161A30"
      }
    },
  },
  plugins: [require("daisyui")],
}

