import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(214 24% 20%)",
        input: "hsl(214 24% 20%)",
        ring: "hsl(190 100% 62%)",
        background: "hsl(220 32% 8%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(190 100% 62%)",
          foreground: "hsl(220 40% 8%)"
        },
        secondary: {
          DEFAULT: "hsl(220 20% 16%)",
          foreground: "hsl(210 40% 96%)"
        },
        muted: {
          DEFAULT: "hsl(220 18% 15%)",
          foreground: "hsl(214 20% 72%)"
        },
        accent: {
          DEFAULT: "hsl(220 24% 18%)",
          foreground: "hsl(210 40% 96%)"
        },
        card: {
          DEFAULT: "hsl(222 28% 11%)",
          foreground: "hsl(210 40% 98%)"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(38, 213, 255, 0.16)",
        panel: "0 14px 40px rgba(7, 10, 18, 0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        float: "float 7s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
