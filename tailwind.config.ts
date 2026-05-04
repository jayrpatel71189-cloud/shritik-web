import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2d6a4f",
          dark: "#1a472a",
          light: "#52b788",
          xlight: "#b7e4c7",
        },
        accent: {
          DEFAULT: "#d4a017",
          light: "#f0c040",
          dark: "#a07810",
        },
        surface: {
          DEFAULT: "#f8fdf9",
          dark: "#f0f7f2",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "count-up": "countUp 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(29, 100, 64, 0.10)",
        "card-hover": "0 8px 40px rgba(29, 100, 64, 0.18)",
        gold: "0 4px 24px rgba(212, 160, 23, 0.25)",
        nav: "0 2px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
