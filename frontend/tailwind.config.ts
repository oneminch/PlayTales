import defaultTheme from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.mono]
      }
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            focus: "#fab005",
            background: "#212529",
            foreground: "#f1f3f5",
            primary: {
              DEFAULT: "#343a40",
              foreground: "#adb5bd"
            },
            secondary: {
              DEFAULT: "#495057"
            }
          }
        },
        light: {
          colors: {
            focus: "#fab005",
            background: "#f1f3f5",
            foreground: "#212529",
            primary: {
              DEFAULT: "#ffffff",
              foreground: "#495057"
            },
            secondary: {
              DEFAULT: "#dee2e6"
            }
          }
        }
      },
      layout: {
        radius: {
          small: "0.25rem",
          medium: "0.5rem",
          large: "0.75rem"
        }
      }
    })
  ]
};
