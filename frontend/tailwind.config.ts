import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Manrope", "system-ui", "sans-serif"],
        brand: ["Cloick", "Space Grotesk", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(139, 92, 246, 0.22), transparent 42%), radial-gradient(circle at bottom right, rgba(217, 119, 6, 0.10), transparent 28%)",
        "aurora-gradient":
          "linear-gradient(135deg, hsl(270 80% 56%), hsl(300 70% 60%), hsl(35 95% 56%))",
      },
      boxShadow: {
        panel: "0 20px 60px -30px rgba(120, 60, 200, 0.25)",
        glow: "0 0 40px -12px rgba(139, 92, 246, 0.3)",
        "glow-amber": "0 0 40px -12px rgba(217, 119, 6, 0.2)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [forms],
};

export default config;
