import type { Config } from "tailwindcss";

// Theme values copied from the approved Bell Oak design.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#102A22",
          light: "#183C31",
          dark: "#0A1C16",
          muted: "#1F493C",
        },
        brass: {
          DEFAULT: "#B89558",
          light: "#CEAE75",
          dark: "#96763E",
          subtle: "#F4EFE6",
        },
        alabaster: "#FAF9F6",
        charcoal: "#1E293B",
        slatebody: "#475569",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        institutional:
          "0 10px 35px -5px rgba(16, 42, 34, 0.06), 0 4px 12px -2px rgba(16, 42, 34, 0.03)",
        "institutional-hover":
          "0 20px 45px -10px rgba(16, 42, 34, 0.12), 0 8px 20px -4px rgba(184, 149, 88, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
