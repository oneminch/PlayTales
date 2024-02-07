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
  // important: "#root",
  // corePlugins: {
  //   preflight: false
  // },
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
          colors: { focus: "#fbbf24" }
        },
        light: {
          colors: { focus: "#fbbf24" }
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
