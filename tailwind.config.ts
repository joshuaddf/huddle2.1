import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "pink": "hsl(322, 100%, 66%)",
      "lightPink": " hsl(321, 100%, 78%)",
      "lightRed": " hsl(0, 100%, 63%)",
      "white": "hsl(0, 0%, 100%)",
      "veryDarkCyan": "hsl(192, 100%, 9%)",
      "veryPaleBlue": "hsl(207, 100%, 98%)",
    },
    extend: {
      screens: {
        'xs': '400px',   // Extra small devices
        'sm': '640px',   // Small devices (phones)
        'md': '768px',   // Medium devices (tablets)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1280px',  // Extra large devices (large desktops)
      }
    },
  },
  plugins: [],
};
export default config;
