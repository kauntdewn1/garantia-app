/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#233069",
        secondary: "#0e3e7d",
        gray: {
          150: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}