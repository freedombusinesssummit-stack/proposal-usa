import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        lime: {
          DEFAULT: "#ADFF2F",
          dark: "#8FD400",
          light: "#D4FF7A",
        },
        carbon: {
          DEFAULT: "#0A0A0A",
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#D0D0D0",
          300: "#A0A0A0",
          400: "#707070",
          500: "#505050",
          600: "#303030",
          700: "#1A1A1A",
          800: "#111111",
          900: "#0A0A0A",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "scale-in": "scaleIn 0.5s ease forwards",
        "count-up": "countUp 1s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-lime": "pulseLime 2s ease-in-out infinite",
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
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLime: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(173,255,47,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(173,255,47,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
