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
          50: "#ffffff",
          100: "#f5f5f5",
          200: "#e6e6e6",
          300: "#d6d6d6",
          400: "#c7c7c7",
          500: "#b8b8b8",
          600: "#a0a0a0",
          700: "#787878",
          800: "#505050",
          900: "#282828",
          950: "#141414",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#212121",
          950: "#121212",
        },
        tertiary: "#151030",
        dark: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#262626",
          900: "#121212",
          950: "#050816",
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
        'neon': "0 0 5px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)",
        'neon-purple': "0 0 5px rgba(200, 200, 200, 0.7), 0 0 20px rgba(150, 150, 150, 0.5)",
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

