import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#F6F8F3",
        surface: "#FFFFFF",
        ink: "#152922",
        "ink-soft": "#43594F",
        forest: {
          DEFAULT: "#1F6F5C",
          dark: "#134B3D",
          light: "#DCEBE4",
        },
        coral: {
          DEFAULT: "#F0603A",
          dark: "#C94B2A",
          light: "#FDE3D8",
        },
        sun: {
          DEFAULT: "#FFC94A",
          light: "#FFF3D6",
        },
        sky: {
          DEFAULT: "#2F6FED",
          light: "#E1EAFD",
        },
        line: "#E1E7DE",
      },
      fontFamily: {
        // Font di produzione previsti: "Fraunces" (display) e "Manrope" (testo).
        // Sostituire con next/font/google (o file self-hosted) non appena la rete di build
        // consente il download da fonts.googleapis.com / fonts.gstatic.com.
        display: [
          "Fraunces",
          "Iowan Old Style",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        sans: [
          "Manrope",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.75rem",
        blob: "42% 58% 55% 45% / 45% 40% 60% 55%",
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(21, 41, 34, 0.35)",
        card: "0 12px 30px -18px rgba(21, 41, 34, 0.28)",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
