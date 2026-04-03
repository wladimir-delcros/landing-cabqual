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
          DEFAULT: "#1B2B4B",
          50: "#E8EDF5",
          100: "#C5D1E5",
          200: "#9FB2D3",
          300: "#7993C1",
          400: "#5B7BB4",
          500: "#3D63A7",
          600: "#2D4F8C",
          700: "#1B2B4B",
          800: "#142038",
          900: "#0C1425",
        },
        accent: {
          DEFAULT: "#C8A96E",
          50: "#FAF5EC",
          100: "#F3E8D0",
          200: "#E8D4A8",
          300: "#DEC080",
          400: "#C8A96E",
          500: "#B8914E",
          600: "#9A7539",
          700: "#7A5C2B",
          800: "#5A431F",
          900: "#3A2B13",
        },
        navy: {
          DEFAULT: "#0F1C35",
          light: "#1B2B4B",
          mid: "#243654",
          border: "#2D3F5E",
        },
        slate: {
          corporate: "#64748B",
          light: "#94A3B8",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
