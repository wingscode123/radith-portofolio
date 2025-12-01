/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Warna background gelap (slate-900)
        secondary: "#334155", // Warna aksen
        accent: "#38bdf8", // Warna biru muda untuk highlight
      }
    },
  },
  plugins: [],
}