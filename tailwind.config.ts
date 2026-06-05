import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A",
        "primary-90": "#132136",
        "primary-mid": "#1E3352",
        accent: "#E07B2A",
        "accent-dark": "#C96A22",
        surface: "#F5F7FA",
        "surface-2": "#E8ECF1",
        success: "#10B981",
        ink: "#0D1B2A",
        "ink-muted": "#4A5568",
        "ink-light": "#718096",
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(13, 27, 42, 0.06)",
        medium: "0 4px 20px rgba(13, 27, 42, 0.1)",
        premium: "0 20px 48px rgba(13, 27, 42, 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
