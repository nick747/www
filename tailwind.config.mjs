/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        name: "2.25rem",
        subtitle: "2rem",
        body: "1rem",
        focus: "1.5rem",
      },
      textColor: {
        normal: "#DEDEDE",
        highlighted: "#B3A7FF",
      },
    },
  },
  plugins: [],
};
