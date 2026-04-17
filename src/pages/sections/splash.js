import Copy from "../../../lib/Copy.js";
import versify from "../../aux/versify.js";
import MediaFigure from "../../elements/MediaFigure.js";

const buyURL = "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits";

window.gotoRules = () => {
  let handSection = document.querySelector("hand-section");
  handSection.nextPage();
  handSection.open();
  handSection.children[2].scrollIntoView();
}

const splashSection = {
  dataProse: true,
  class: "carded link",
  section: {
    cursor: "pointer",
    a_button_buy: {
      target: "_blank",
      href: buyURL,
      text: Copy.text({
        es: "Adquiere el juego",
        en: "Purchase the game",
      }),
    },
    img: new MediaFigure("jackRabbits"),
    p: versify(Copy.text({
      es: `El juego de tablero en el que viajas
      al reino de conejos y barajas.`,
      en: `Hop on—board a game of cards.
      Wander lands of wooden shards.`,
    })),
    onclick: e => window.open(buyURL, "_blank"),
  },
  footer_footnote: versify(Copy.text({
    es: `Apréndete las <a onclick="gotoRules()">reglas en la guía</a>,
      o anímate a <a onclick="popUp('playlist')">escucharlas en canción</a>.
      Se explican en heroica poesía,
      con suma claridad y precisión.`,
    en: `<a onclick="gotoRules()">Read the rules</a> in metered rhyme,
      or indulge and <a onclick="popUp('playlist')">play their song</a>.
      They’ll delight and save you time,
      and perhaps you’ll sing along.`,
  })),
};

export default splashSection;