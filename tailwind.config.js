/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#019a4a",
            "secondary": "#ff6600",
            "accent": "#9DCDC1",
            "neutral": "#191D24",
            "base-100": "#2A303C",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          "axle": {
          "50": "#33cc7c",
          "100": "#29c272",
          "200": "#1fb868",
          "300": "#15ae5e",
          "400": "#0ba454",
          "500": "#019a4a",
          "600": "#009040",
          "700": "#008636",
          "800": "#007c2c",
          "900": "#007222"
        },
        "cartage": {
          "50": "#ff9832",
          "100": "#ff8e28",
          "200": "#ff841e",
          "300": "#ff7a14",
          "400": "#ff700a",
          "500": "#ff6600",
          "600": "#f55c00",
          "700": "#eb5200",
          "800": "#e14800",
          "900": "#d73e00"
        }
          },
        },
      ],
    },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar')
  ],
}
