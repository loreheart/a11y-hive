/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/components/**/*.{js,jsx,ts,tsx,vue}",
    "./src/pages/**/*.{js,jsx,ts,tsx,vue}",
    "./src/*.{js,jsx,ts,tsx,vue}",
    "./src/@/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          100: "#f76e02",
          200: "#f68002",
          300: "#f79101",
          400: "#f59e02",
          500: "#f2b104",
        },
        "hive-green-blue": {
          100: "#A4C638",
          200: "#83A246",
          300: "#627F54",
          400: "#425B62",
          500: "#213870",
          600: "#00147E",
          650: "#04007F",
          700: "#0c0c30",
        },

        "hive-green-lightest": "#00db00",
        "hive-green-light": "#00b100",
        "hive-green-base": "#058905",
        "hive-green-dark": "#006200",
        "hive-green-darkest": "#003000",

        "hive-blue-lightest": "#00b7b7",
        "hive-blue-light": "#008585",
        "hive-blue-base": "#046767",
        "hive-blue-dark": "#004a4a",
        "hive-blue-darkest": "#002424",

        "hive-orange-lightest": "#ff7400",
        "hive-orange-light": "#de6500",
        "hive-orange-base": "#ac5106",
        "hive-orange-dark": "#7b3800",
        "hive-orange-darkest": "#3c1b00",

        "hive-red-lightest": "#ff0000",
        "hive-red-light": "#de0000",
        "hive-red-base": "#ac0606",
        "hive-red-dark": "#7b0000",
        "hive-red-darkest": "#3c0000",

        "hive-purple-lightest": "#790cc4",
        "hive-purple-light": "#5c0995",
        "hive-purple-base": "#490b73",
        "hive-purple-dark": "#330552",
        "hive-purple-darkest": "#190228",

        "hive-pink-lightest": "#da0080",
        "hive-pink-light": "#b00067",
        "hive-pink-base": "#890552",
        "hive-pink-dark": "#620039",
        "hive-pink-darkest": "#2f001c",

        "hive-indigo-lightest": "#3619c8",
        "hive-indigo-light": "#2a1399",
        "hive-indigo-base": "#231377",
        "hive-indigo-dark": "#170b55",
        "hive-indigo-darkest": "#0b0529",

        "hive-gold-lightest": "#fffa00",
        "hive-gold-light": "#deda00",
        "hive-gold-base": "#aca906",
        "hive-gold-dark": "#7b7900",
        "hive-gold-darkest": "#3c3a00",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(hive|honey)-(green-blue|green|blue|orange|red|purple|pink|indigo|gold)?(-)?(lightest|light|base|dark|darkest)?(100|200|300|400|500|600)?/,
    },
  ],
}
