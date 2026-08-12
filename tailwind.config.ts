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
        // Palette ECOS — estratta a colore esatto dai mockup ufficiali (PDF strategia +
        // grafica) via campionamento pixel. Non modificare senza aggiornare anche la skill.
        mist: "#FBFAF7", // crema di sfondo
        "mist-warm": "#F3F0E8", // crema calda alternativa (sezioni "aree tematiche")
        "mist-cool": "#F5F6F7", // grigio-azzurro alternativo (sezioni network/eventi)
        "mist-pink": "#F7F2F6", // rosa tenue alternativo (sezione eventi/cinema)
        surface: "#FFFFFF",
        ink: "#0F2A47", // testo principale / titoli (= navy-dark)
        "ink-soft": "#4C5F72", // testo secondario
        navy: {
          DEFAULT: "#153B62",
          dark: "#0F2A47",
          light: "#E7ECF1",
        },
        pink: {
          DEFAULT: "#EA2F8C",
          dark: "#C21F72",
          light: "#FCE4F0",
        },
        purple: {
          DEFAULT: "#8E3A98",
          dark: "#6E2B76",
          light: "#F1E3F3",
        },
        orange: {
          DEFAULT: "#F29A33",
          dark: "#D97F1A",
          light: "#FDECD4",
        },
        line: "#DEE4EA",
      },
      fontFamily: {
        // Titoli: Fraunces (serif variabile, self-hosted via
        // @fontsource-variable/fraunces) — dà carattere editoriale ai titoli,
        // evitando l'estetica "sans geometrico" tipica dei siti generati con IA.
        // Testo: Manrope resta per corpo, form e UI, per leggibilità.
        display: [
          "Fraunces Variable",
          "Fraunces",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        sans: [
          "Manrope Variable",
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
        soft: "0 20px 45px -25px rgba(15, 42, 71, 0.35)",
        card: "0 12px 30px -18px rgba(15, 42, 71, 0.28)",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out both",
        "fade-in": "fade-in 1.8s ease-out 0.15s both",
        "fade-in-fast": "fade-in 0.2s ease-out both",
        "slide-in": "slide-in 0.35s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
