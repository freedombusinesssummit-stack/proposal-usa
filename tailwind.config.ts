import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          50:  "#f3ffe3",
          100: "#e4ffc0",
          200: "#c8ff80",
          300: "#9ef01a",
          400: "#80cc10",
          500: "#70e000",
          600: "#5ab800",
          700: "#3d8000",
        },
        green: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        carbon: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50:  "#f9fafb",
        },
      },
      maxWidth: { container: "1000px" },
    },
  },
  plugins: [],
};
export default config;
