import Copy from "../../../lib/Copy.js";
import ASSETS from "../../aux/assets.js";
import versify from "../../aux/versify.js";

const splashSection = {
  class: "carded link",
  cursor: "pointer",
  a_button_buy: {
    target: "_blank",
    href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
    text: Copy.text({
      es: "Adquiere el juego",
      en: "Purchase the game",
    }),
  },
  img: ASSETS.jackRabbits,
  p: versify(Copy.text({
    es: `El juego de tablero en el que viajas
      al reino de conejos y barajas.`,
    en: `Board the game of playing cards.
      Wander lands of wooden shards.`,
  })),
  onclick: e => window.open("https://www.etsy.com/listing/1724318334/leninos-jack-rabbits","_blank"),
};

export default splashSection;