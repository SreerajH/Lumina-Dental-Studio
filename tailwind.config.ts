import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#F8F7F4",
        enamel: "#FFFFFF",
        ink: "#14232B",
        "slate-soft": "#5C6E76",
        glacier: "#7FB8C9",
        "glacier-deep": "#2E6E80",
        gleam: "#E4EEF1",
        "gold-hint": "#C9A96A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(20,35,43,0.04), 0 24px 48px -28px rgba(46,110,128,0.25)",
        nav: "0 1px 0 0 rgba(20,35,43,0.05), 0 10px 24px -18px rgba(46,110,128,0.22)",
        lift: "0 2px 0 0 rgba(20,35,43,0.04), 0 36px 64px -30px rgba(46,110,128,0.35)",
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
