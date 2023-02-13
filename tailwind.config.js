/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        100: "100px",
        200: "230px",
        300: "236px",
      },
      fontFamily: {
        poppins: ["Poppins", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        worksan: ["Work Sans", "sans-serif"],
        secular: ["Secular One", " sans-serif"],
      },
      fontSize: {
        xsm: "12px",
        xmd: "17px",
      },
      borderColor: {
        light: "#FC3CAC",
      },
      colors: {
        dark: {
          100: "#000103",
          200:"#FC3CAC"
        },

        smoke: {
          100: "#31344c",
          200: "#414141",
          300: "#EDE7EC",
          400: "#C2C2C2",
          500: "#999999",
        },
      },
    },
  },
  plugins: [],
};
