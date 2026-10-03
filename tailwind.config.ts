import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        calm: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        happy: {
          light: "#fef3c7",
          main: "#f59e0b",
          dark: "#b45309",
          glow: "rgba(245, 158, 11, 0.15)",
        },
        sad: {
          light: "#e0f2fe",
          main: "#38bdf8",
          dark: "#0369a1",
          glow: "rgba(56, 189, 248, 0.15)",
        },
        exciting: {
          light: "#ffe4e6",
          main: "#f43f5e",
          dark: "#be123c",
          glow: "rgba(244, 63, 94, 0.15)",
        },
        fantasy: {
          light: "#f3e8ff",
          main: "#a855f7",
          dark: "#7e22ce",
          glow: "rgba(168, 85, 247, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
