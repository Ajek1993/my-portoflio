const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          blue: "#0070f0",
          light: "#3b8ff0",
          dark: "#0058c4",
        },
        text: {
          main: "#1a1a2e",
          secondary: "#64748b",
        },
        border: "#e2e8f0",
        bg: {
          alt: "#edf2ff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        iconSocials: "30px",
        iconMobile: "50px",
        iconSmall: "55px",
        iconMedium: "60px",
        iconLarge: "65px",
        iconButtonMobile: "36px",
        iconButtonSmall: "40px",
        iconButtonMedium: "44px",
        iconButtonLarge: "48px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
