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
        primary: {
          DEFAULT: "#1a6fa3",
          dark: "#0d4f7a",
          light: "#2b8fc7",
          50: "#e8f4fa",
          100: "#c5e3f3",
          200: "#9ecfea",
          300: "#74bae0",
          400: "#4fa8d7",
          500: "#1a6fa3",
          600: "#155e8c",
          700: "#0d4f7a",
          800: "#083d60",
          900: "#042b47",
        },
        accent: {
          DEFAULT: "#00bcd4",
          dark: "#0097a7",
          light: "#4dd0e1",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
