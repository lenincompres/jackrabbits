import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const endingSection = {
  h2: Copy.text({
    es: "Fin del juego",
    en: "Ending the Game",
  }),
  p: versify(
    Copy.text({
      es: `Serás protagonista del festejo 
      si aquí en la <a class="pop" onclick="popUp('citadel')"><i>ciudadela</i></a> te regresas,
      cargando con las cartas del concejo: 
      tus tres representantes de nobleza.`,
      en: `Reach this place where you begin, 
      with three royal cards in hand.
      Be the first and you shall win—
      hailed as champion of the land.`,
    }),
    ASSETS.thumbnailOf("citadel", "6em", e => popUp("citadel")),
    Copy.text({
      es: `Tan pronto se repartan los conejos,
      se exige al colectivo de la mesa:
      que escoja, de lo simple a lo complejo,
      la clase de final que le interesa.`,
      en: `But before the quest may start, 
    choose a challenge for the mission.
    Use the circle as a mark 
    to display the win condition.`,
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
        `<b>monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b> (any suits).`,
        `<b>diverse + monarchic</b>: get a <b>K</b> + <b>Q</b> + <b>J</b>, of three different suits.`,
        `<b>tribal</b>: get the three of the same suit.`,
      ]
    }),
  }
};

export default endingSection;