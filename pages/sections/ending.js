import Copy from "../../lib/Copy.js";
import ASSETS from "../../src/assets.js";
import { versify } from "../../src/auxiliary.js";

const endingSection = {
  h2: Copy.text({
    es: "Fin del juego",
    en: "Ending the Game",
  }),
  p: versify(
    Copy.text({
      es: `Serás protagonista del festejo 
      si a nuestra <a class="pop" onclick="popUp('citadel')"><b>ciudadela</b></a> te regresas,
      trayéndonos las cartas del concejo: 
      tus tres representates de nobleza.`,
      en: `Return to the <a class="pop" onclick="popUp('citadel')"><b>citadel</b></a>  
      with three royal cards in hand. 
      In this race you must excel
      to be the champ of the land.`,
    }),
    ASSETS.thumbnailOf("citadel", 45, e => popUp("citadel")),
    Copy.text({
      es: `Tan pronto se repartan los conejos,
      se exige al colectivo de la mesa
      que escoja, de lo simple a lo complejo,
      la clase de final que le interesa:`,
      en: `Before the royal quest starts, 
    choose a challenge for the mission;
    look for the circular marks
    that set the winning condition.`,
    })),
  ul_exception: {
    li: Copy.text({
      es: [
        `<b>simple</b>: traer tres cartas reales, 
        con cualquier letras o <i>palos</i> (símbolos);`,
        `<b>diverso</b>: las tres serán de palos distintos;`,
        `<b>monárquico</b>: traer exactamente una <b>K</b> + una <b>Q</b> + una <b>J</b>, sin importar sus palos;`,
        `<b>diverso y monárquico</b>: traer una <b>K</b> + una <b>Q</b> + una <b>J</b>, de tres palos distintos;`,
        `<b>tribal</b>: traer las tres de un mismo palo.`,
      ],
      en: [
        `<b>simple</b>: get three royal cards of any title (letter) or <i>suit</i> (symbol).`,
        `<b>diverse</b>: get three royal cards of any title, but with three different suits.`,
        `<b>monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b>, of any suit.`,
        `<b>diverse + monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b>, of three different suits.`,
        `<b>tribal</b>: get the three of the same suit.`,
      ]
    }),
  }
};

export default endingSection;