/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f5fe",
          100: "#d4edfd",
          200: "#a8dafc",
          300: "#7dc9fa",
          400: "#51b7f9",
          500: "#1DA1F2", // Twitter blue
          600: "#1a81c2",
          700: "#146191",
          800: "#0d4061",
          900: "#072030",
          950: "#051018",
        },
        secondary: {
          50: "#f7f9f9",
          100: "#e7eaeb",
          200: "#d0d6d9",
          300: "#a9b5bb",
          400: "#8496a0",
          500: "#657786", // Twitter secondary blue-gray
          600: "#505f6c",
          700: "#3c4853",
          800: "#283039",
          900: "#141920",
          950: "#0a0d10",
        },
        tertiary: "#151030",
        dark: {
          50: "#E7E9EA", // Twitter text color
          100: "#d1d9df",
          200: "#a5b5c0",
          300: "#7991a0",
          400: "#536d7d",
          500: "#3a4a54",
          600: "#2F3336", // Twitter border/divider color
          700: "#263238",
          800: "#1D2A35",
          900: "#15202B", // Twitter background
          950: "#000000", // Black
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // Changed to Fira Code for a more developer-focused look
      },
      boxShadow: {
        card: "0px 35px 120px -15px #000000",
        'neon': "0 0 5px rgba(29, 161, 242, 0.7), 0 0 20px rgba(29, 161, 242, 0.5)", // Twitter blue glow
        'neon-purple': "0 0 5px rgba(29, 161, 242, 0.7), 0 0 20px rgba(29, 161, 242, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'cyber-grid': "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

