import type { Config } from "tailwindcss";

const config: Config = {

  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mintOcean: {
          light: "#DAF1EF",
          DEFAULT: "#47B9AE",
        },
        pink:{
          DEFAULT: "#EC80A2"
        }
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
};

export default config;