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
          50: "#e3f8eb",
          100: "#c6f2d6",
          200: "#a9ecb8",
          300: "#7ce39a",
          400: "#4ed97c",
          500: "#1DB954", // Spotify green
          600: "#18a349",
          700: "#14833a",
          800: "#106831",
          900: "#0c4c24",
          950: "#07331a",
        },
        secondary: {
          50: "#efefef",
          100: "#e1e1e1",
          200: "#c8c8c8",
          300: "#acacac",
          400: "#919191",
          500: "#818181", // Spotify medium gray
          600: "#535353",
          700: "#434343",
          800: "#333333",
          900: "#1a1a1a",
          950: "#121212", // Spotify dark gray (card backgrounds)
        },
        tertiary: "#1DB954", // Spotify green
        dark: {
          50: "#ffffff", // White text
          100: "#f0f0f0",
          200: "#e6e6e6",
          300: "#b3b3b3", // Spotify light gray text
          400: "#727272",
          500: "#535353",
          600: "#333333",
          700: "#282828", // Spotify darker gray
          800: "#181818", // Spotify darker panel
          900: "#121212", // Spotify main background
          950: "#000000", // Black
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ['Circular', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Circular', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'monospace'], // Spotify-like code styling
      },
      boxShadow: {
        card: "0px 8px 24px rgba(0, 0, 0, 0.5)",
        'subtle': "0 2px 5px rgba(0, 0, 0, 0.3)", // Spotify subtle shadow
        'elevated': "0 8px 16px rgba(0, 0, 0, 0.3)",
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

