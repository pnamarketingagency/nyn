import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070A",
          900: "#0A0B0F",
          800: "#101218",
          700: "#161922",
          600: "#1E2230",
          500: "#262B3B",
          400: "#3A4055",
        },
        chrome: {
          50: "#F7F8FA",
          100: "#EAECF1",
          200: "#D6DAE3",
          300: "#B7BDCB",
          400: "#929AAA",
          500: "#6E7585",
          600: "#525766",
          700: "#3B3F4B",
        },
        platinum: {
          start: "#F4F6FA",
          mid: "#C9CDD6",
          end: "#7C8290",
        },
        accent: {
          glow: "#9FB4D9",
          ice: "#D8E1EE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Sora", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "chrome-gradient":
          "linear-gradient(180deg, #F4F6FA 0%, #C9CDD6 45%, #7C8290 100%)",
        "chrome-radial":
          "radial-gradient(120% 100% at 50% 0%, #F7F8FA 0%, #B7BDCB 40%, #525766 100%)",
        "ink-radial":
          "radial-gradient(60% 50% at 50% 0%, rgba(159,180,217,0.18) 0%, rgba(6,7,10,0) 60%)",
        grid:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        chrome:
          "0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(0,0,0,0.2) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        glow: "0 0 80px -20px rgba(159,180,217,0.4)",
        elevated:
          "0 20px 60px -20px rgba(0,0,0,0.6), 0 4px 12px -4px rgba(0,0,0,0.3)",
      },
      animation: {
        "shine": "shine 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
