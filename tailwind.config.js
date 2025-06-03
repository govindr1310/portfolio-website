/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Modern, premium color palette inspired by Linear/Vercel/Notion
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // Main primary color - indigo
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", // Slate
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Emerald for accents
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        // Light theme (default)
        light: {
          bg: {
            primary: "#ffffff", // Pure white background
            secondary: "#f9fafb", // Subtle light gray for cards
            tertiary: "#f3f4f6", // Slightly darker for hover states
          },
          text: {
            primary: "#111827", // Near black
            secondary: "#4b5563", // Medium gray
            tertiary: "#9ca3af", // Light gray
          },
          border: "#e5e7eb", // Light border
        },
        // Dark theme
        dark: {
          bg: {
            primary: "#0f172a", // Deep blue-black
            secondary: "#1e293b", // Slightly lighter blue-black
            tertiary: "#334155", // Blue-gray for hover states
          },
          text: {
            primary: "#f9fafb", // Near white
            secondary: "#e2e8f0", // Light gray
            tertiary: "#94a3b8", // Medium gray
          },
          border: "#1e293b", // Dark border
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        // Premium-looking shadows
        'subtle': "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'soft': "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        'medium': "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)",
        'card': "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        'elevated': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        'glow': "0 0 15px 2px rgb(99 102 241 / 0.15)",
        'glow-accent': "0 0 15px 2px rgb(16 185 129 / 0.15)",
        // Dark mode shadows
        'dark-subtle': "0 1px 2px 0 rgb(0 0 0 / 0.2)",
        'dark-card': "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)",
        'dark-elevated': "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'dot-pattern': "radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
        'grid-pattern': "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
        'noise-pattern': "url('/patterns/noise.png')",
        'gradient-radial': "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-down': 'slideDown 0.5s ease-in-out forwards',
        'slide-left': 'slideLeft 0.5s ease-in-out forwards',
        'slide-right': 'slideRight 0.5s ease-in-out forwards',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-subtle': 'pulseSubtle 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'gradient-xy': 'gradientXY 3s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        gradientY: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center'
          }
        },
        gradientXY: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top left'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom right'
          }
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'sizes': 'width, height',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [
    // Add plugin for scrollbar styling
    require('tailwind-scrollbar')({ nocompatible: true }),
    // Add plugin for advanced forms styling
    require('@tailwindcss/forms'),
    // Add typography plugin for rich text
    require('@tailwindcss/typography'),
  ],
};

