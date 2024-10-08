import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "customGrey": "#636363"
      },
      boxShadow: {
        'custom-inset': 'rgb(181, 203, 223) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
        'full-inset': 'rgb(181, 203, 223) 0px 0px 6px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 6px 1px inset',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft:{
          "0%":{transform: "translateX(-100%)"},
          "100%":{transform:"translateX(0%)"},
        }
      },
      animation: {
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
};
export default config;
