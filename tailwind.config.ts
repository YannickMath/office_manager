import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "teamwork-bg": "url('/teamwork.jpg')",
        "efficiency-bg": "url('/efficiency.jpg')",
        "titreJob-bg": "url('/laptop-with-notebook-wooden-table.jpg')",
      }),
      colors: {
        customBrown: "#d2b697",
        customRose: "#E8AEB7",
      },
      screens: {
        mini: { max: "498px" },
        phone: { max: "640px" },
        // => @media (min-width: 480px) { ... }
        laptop: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
