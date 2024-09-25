/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
      maxcontainer: '1320px',
      },
      fontFamily: {
        pop: ['Poppins'],
        frank: ['Frank Ruhl Libre'],
        kova: ['Podkova'],
        
      }
    },
  },
  plugins: [],
}

