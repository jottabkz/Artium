/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Artium"
        artium: {
          primary: "#B08D57",    // bronze envelhecido
          secondary: "#7D9D7D",  // verde musgo
          background: "#F6F1EB", // fundo principal
          accent: "#4B2E2E",     // dourado suave
      }
    },
  },
  plugins: [],
}
}
