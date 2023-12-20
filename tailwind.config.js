/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "false",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" }
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("dark", ".dark &");
      //addVariant("dark", "@media not print .dark &");
      //addVariant("dark", "@media not print", ".dark $");
      /* addVariant(
        "dark",
        ({ args, modifySelectors, container, separator, wrap, format }) => {
          console.log(
            args,
            modifySelectors,
            container,
            separator,
            wrap,
            format,
            "--------------------"
          );
          modifySelectors(({ className }) => {
            return `@media not print {.dark .${e(
              `dark${separator}${className}`
            )}}`;
          });
        } 
      );*/
    })
  ]
};
