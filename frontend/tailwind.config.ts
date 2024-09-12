import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "thai-milk-tea" : "#b98c64",
        "thai-green-tea": "#3c6558",
        "taro-milk-tea": "#a18eae",
        "mango-green-tea": "#bc9f82",
        "strawberry-green-tea": "#a67580",
        "ube-milk-tea": "#1c1b21"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inknut': ['Inknut Antiqua', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
    
  plugins: [],
};
export default config;
