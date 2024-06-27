/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      NOTO: ["Noto Sans KR"],
      GOTHIC: ["Gothic A1"],
      DONGLE: ["Dongle"],
    },
  },
  plugins: [],
};
