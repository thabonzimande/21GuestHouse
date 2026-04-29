import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        "cream-dark": "var(--cream-dark)",
        "cream-mid": "var(--cream-mid)",
        charcoal: "var(--charcoal)",
        "charcoal-mid": "var(--charcoal-mid)",
        "charcoal-light": "var(--charcoal-light)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-pale": "var(--gold-pale)"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        elevated: "var(--shadow-elevated)"
      }
    }
  },
  plugins: []
};

export default config;
