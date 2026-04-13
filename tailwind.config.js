/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0056b3",
        "on-surface": "#191c1d",
        "on-surface-variant": "#5a6370",
        "surface": "#f4f7f9",
        "outline-variant": "#e1e3e4",
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "lg": "0.5rem"
      }
    },
  },
  plugins: [],
}