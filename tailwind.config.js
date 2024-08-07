/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      scale: {
        "y-150": "1.5", // 높이를 1.5배로
        "y-200": "2", // 높이를 2배로
      },
      height: {
        custom: "150%", // 원하는 높이 비율로 변경
      },
    },
    fontFamily: {
      NOTO: ["Noto Sans KR"],
      GOTHIC: ["Gothic A1"],
      DONGLE: ["Dongle"],
    },
    screens: {
      mobile: { min: "320px", max: "767px" },
      tablet: { min: "768px", max: "1534px" },
      note: { max: "1536px" },
    },
  },
  variants: {
    extend: {
      scale: ["hover"], // 호버 시 scale 유틸리티 사용 가능
    },
  },
  plugins: [],
};
