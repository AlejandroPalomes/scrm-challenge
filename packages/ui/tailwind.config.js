/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/css");
const Colors = require("./src/utils/colors");

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: Colors
  },
	plugins: [nativewind()]
}
