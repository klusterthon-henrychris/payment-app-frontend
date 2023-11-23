import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "neutral-black": "#1E1E1E",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        primary: {
          DEFAULT: "#008678",
          soft: "#CCE7E4",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "#F3F3F3",
        },
        grey: {
          DEFAULT: "#747A88",
          light: "#9A9A9A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
