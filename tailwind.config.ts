import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        standartGreen: "#43A149",
        lightGray: "#44423D",
      },
      screens: {
        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "539px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
