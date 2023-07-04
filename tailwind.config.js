/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1250px",
    },
    extend: {
      colors: {
        brown: "#231709",
        coffee: "#4b371c",
        mocha: "#3c280d",
        peanut: "#7d5c34",
        carab: "#362511",
        hickory: "#371d10",
        wood: "#432616",
        pecan: "#4a2511",
        walnut: "#432616",
        caramel: "#65350f",
        gingerbread: "#5e2c04",
        syrup: "#481f01",
        chocolate: "#2e1503",
        tortilla: "#9a784f",
        umber: "#352315",
        tawny: "#80471c",
        brunette: "#3b1e08",
        cinnamon: "#652a0e",
        penny: "#532915",
        cedar: "#4a3728",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
