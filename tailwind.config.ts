import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-raleway)",
        alt: "var(--font-league-spartan)",
      },
      backgroundImage: {
        grain: "url('/bg1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
