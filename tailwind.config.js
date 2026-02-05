/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6366f1",
        "slate-dark": "#0f172a",
        "slate-card": "#1e293b",
        "slate-border": "#334155"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.375rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
    },
  },
  plugins: [],
}

