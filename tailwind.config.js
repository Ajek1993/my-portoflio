const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
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
  plugins: [nextui()],
};
