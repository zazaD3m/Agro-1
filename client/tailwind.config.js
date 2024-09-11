/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");
const fontFamily = defaultTheme.fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          light: "hsl(var(--background-light) / <alpha-value>)",
          green: "hsl(var(--background-green) / <alpha-value>)",
        },
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          light: "hsl(var(--primary-light) / <alpha-value>)",
        },
        action: {
          DEFAULT: "hsl(var(--action) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          dark: "hsla(var(--accent-dark) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Noto Sans Georgian", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      fontSize: {
        xxs: ["0.625rem", "0.8rem"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDown: {
          "0%": {
            opacity: "0",
            transform: "rotateX(-100deg)",
            "transform-origin": "top",
          },
          "50%": {
            opacity: "0.5",
            transform: "rotateX(-50deg)",
            "transform-origin": "top",
          },
          to: {
            opacity: "1",
            transform: "rotateX(0deg)",
            "transform-origin": "top",
          },
        },
        slideUp: {
          from: {
            opacity: "1",
            transform: "rotateX(0deg)",
            "transform-origin": "top",
          },
          to: {
            opacity: "0",
            transform: "rotateX(-100deg)",
            "transform-origin": "top",
          },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        progress: {
          from: {
            right: "0%",
          },
          to: {
            right: "100%",
          },
        },
        width: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        widthMobile1: {
          "0%": {
            width: "0%",
          },
          "20%": {
            width: "33%",
          },
          "40%": {
            width: "66%",
          },
          "60%": {
            width: "100%",
          },
          "80%": {
            width: "100%",
          },
          "100%": {
            width: "100%",
          },
        },
        widthMobile2: {
          "0%": {
            width: "0%",
          },
          "20%": {
            width: "0%",
          },
          "40%": {
            width: "0%",
          },
          "50%": {
            width: "0%",
          },
          "75%": {
            width: "50%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        slideDown: "slideDown 300ms linear both",
        slideUp: "slideUp 300ms linear both",
        progress: "progress 5s linear forwards",
        width: "width 5s linear infinite",
        widthMobile1: "widthMobile1 5s linear infinite",
        widthMobile2: "widthMobile2 5s linear infinite",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      transitionDelay: {
        3000: "3000ms",
        5000: "5000ms",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen lg": {
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
