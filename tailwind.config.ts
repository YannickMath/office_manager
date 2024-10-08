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
        "assistante-bg": "url('/dessin_assistante_1.jpg')",
        "titreJob-bg": "url('/laptop-with-notebook-wooden-table.jpg')",
        "office-manager-main-bg": "url('/office_manager_main.png')",
      }),
      colors: {
        customBrown: "#d2b697",
        customRose: "#E8AEB7",
        customCardBg: "rgb(229, 216, 189)",
      },
      screens: {
        mini: { max: "498px" },
        phone: { max: "640px" },
        laptop: { max: "1024px" },
        desktop: { min: "1025px" },
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
