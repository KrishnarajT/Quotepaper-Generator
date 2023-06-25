/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.{html,js, jsx, ts, tsx, md, mdx}",
    "./src/*/*.{html,js, jsx, ts, tsx, md, mdx}",
    "./*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
