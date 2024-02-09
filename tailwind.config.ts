import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: "#FF8B00",
        black: "#000000",
        pantoneOrange: "#FF5500",
        wheelOrange: "#FE7D00",
        princetonOrange: "#FE9200",
        semiWhite: "#ECECEC",
        semiGray: "#B9B9B9",
        white: "#FEFEFE"
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
