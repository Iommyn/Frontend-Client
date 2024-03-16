/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "320px", max: "369px" },

      tablet: { min: "400px", max: "900px" },

      sl: { min: "900px", max: "1190px" },

      laptop: { min: "1000px", max: "1200px" },

      lg: { min: "1200px", max: "1396px" },

      sm: { min: "1400px", max: "1600px" },

      desktop: "1700px",
    },

    extend: {
      transitionDuration: {
        "0.3s": "0.3s",
      },
      translate: {
        "-25": "-25%", // Добавляет пользовательское значение для трансформации -25%
        "-50": "-50%", // Добавляет пользовательское значение для трансформации -50%
      },
      width: {
        "calc-100": "calc(calc(100% - 40px) / 2);",
      },
      spacing: {
        "calc-620": "calc(620px)",
        "calc-820": "calc(820px)",
      },
      backgroundImage: {
        "footer-gradient":
          "linear-gradient(161.43deg, rgba(111, 127, 168, 0.25) 3.86%, rgba(93, 107, 143, 0.15) 138.82%)",
        "socials-gradient-vk":
          "linear-gradient(90deg, #002357 0%, rgba(0, 32, 82, 0.7) 100%)",
        "socials-gradient-ds":
          "linear-gradient(161.43deg,rgba(111,127,168,0.4) 3.86%,rgba(93,107,143,0.24) 138.82%)",
        "download-icon":
          "linear-gradient(90deg, #FF43BF 0%, rgba(0, 0, 0, 0) 424.22%)",
        "download-links":
          "linear-gradient(161.43deg, rgba(111, 127, 168, 0.6) 3.86%, rgba(93, 107, 143, 0.36) 138.82%)",
        "download-help":
          "linear-gradient(161.43deg, rgba(111, 127, 168, 0.15) 3.86%, rgba(93, 107, 143, 0.09) 138.82%)",
        "dies-help":
          "linear-gradient(161.43deg,rgba(23,30,36,2) 8.86%,rgba(93,107,143,0.24) 138.82%)",
        "dies-border":
          "linear-gradient(161.43deg,rgba(0,118,255) 100%,rgba(210,0,189) 100%,rgba(255,70,74) 100%))",
      },
      colors: {
        "progress-online": "rgba(255, 255, 255, 0.3)",
        "footer-color": "rgba(255, 255, 255, 0.6)",
        "online-amount": "#43ff83",
        "server-status": "#00ff09",
        "link-gradient": "#FF005D",
        "item-title": "#ff2372",
        "item-title-hover": "#fc4e8c",
        "online-amount-rgba": "rgba(13,27,55,.2)",
        "download-link": "#516DFF",
        "dropdowns-bg": "#141417",
        "webview-link": "rgba(40, 140, 255, 1)",
        "input-border": "rgba(111, 127, 168, 0.4)",
      },
      fontFamily: {
        ProximBold: ["ProximBold"],
        ProximExtraBold: ["ProximExtraBold"],
        ProximSemiBold: ["ProximSemiBold"],
        ProximRegular: ["ProximRegular"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "ProximExtraBold",
          src: 'url(/fonts/proxima-nova/ProximaNova-Extrabld.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "ProximBold",
          src: 'url(/fonts/proxima-nova/ProximaNova-Bold.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "ProximSemiBold",
          src: 'url(/fonts/proxima-nova/ProximaNova-Semibold.woff) format("woff")',
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "ProximRegular",
          src: 'url(/fonts/proxima-nova/ProximaNova-Regular.woff) format("woff")',
        },
      });
    }),
  ],
};
