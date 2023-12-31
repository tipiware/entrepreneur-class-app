/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "gray-20": "#F8F4EB",
          "gray-50": "#EFE6E6",
          "gray-100": "#DFCCCC",
          "gray-500": "#5E0000",
          "primary-100": "#60d4e0",
          "primary-300": "#60ade0",
          "primary-500": "#6096e0",
          "secondary-400": "#FFCD5B",
          "secondary-500": "#FFC132",
        },
        backgroundImage: (theme) => ({
          "gradient-yellowred":
            "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./assets/HomePageGraphic.png')",
        }),
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          alegreya: ["Alegreya", "sans-serif"],
        },
        content: {
          evolvetext: "url('./assets/EvolveText.png')",
          spartantext: "url('./assets/SpartanText.png')",
          abstractwaves: "url('./assets/AbstractWaves.png')",
          sparkles: "url('./assets/Sparkles.png')",
          circles: "url('./assets/Circles.png')",
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    plugins: [],
  };