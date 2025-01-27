import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        standartGreen: "#43A149",
        lightGray: "#44423D",
      },
    },
  },
  plugins: [],
} satisfies Config;
