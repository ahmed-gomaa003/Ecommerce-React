/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#10b981", // Example: Emerald 600
        "brand-strong": "#059669",
        "brand-medium": "#34d399",
        "brand-softer": "#ecfdf5",
        heading: "#0f172a", // Gray 900
        "neutral-primary-soft": "#f9fafb", // Gray 50
        "fg-yellow": "#fbbf24", // Changing this to yellow to match stars
      },
      borderRadius: { 
        base: "0.5rem",
      },
    },
  },
  plugins: [],
};
