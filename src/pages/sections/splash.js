import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const splashSection = {
  class: "carded",
  img: ASSETS.jackRabbits,
  p: versify(Copy.text({
    es: `El juego de tablero en el que viajas
      al reino de conejos y barajas.`,
    en: `The board game for playing cards
      on a land of wooden shards`,
  })),
  a_button_buy: {
    target: "_blank",
    href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
    text: Copy.text({
      es: "Adquiere el juego",
      en: "Buy the game",
    }),
  },
};

export default splashSection;