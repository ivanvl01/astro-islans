/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#54BD95",
        dark: "#161C28",
        gray: "#707070",
      },
    },
  },
  plugins: [],
};
