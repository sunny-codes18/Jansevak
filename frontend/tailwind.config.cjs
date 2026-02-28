/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          light: '#FFB366',
          DEFAULT: '#FF9933',
          dark: '#E67E00',
        },
        navy: {
          light: '#333333',
          DEFAULT: '#1A1A1A',
          dark: '#0D0D0D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
