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
      si aquí en la <i>Ciudadela</i> te regresas.
      Y llegas con las cartas del concejo: 
      tus tres representantes de nobleza.`,
      en: `Reach this place where you begin, 
      with three royal cards in hand.
      You must be the first to win—
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
      Set its circle as a mark,
      for the trio's condition:`,
    })),
  ul_exception: {
    li: versify(Copy.text({
      es: [
        `El <b>simple</b>: con reales cualesquiera;`,
        `<b>diverso</b>: que varíen en sus palos;`,
        `<b>monárquico</b>: distintas en sus letras;`,
        `<b>monárquico</b> y <b>diverso</b>: combinados;`,
        `<b>tribal</b>: con las de palo que concuerdan.
        El último es difícil de lograrlo.`,
      ],
      en: [
        `<b>simple</b>: any royal cards.`,
        `Or <b>diverse</b>: distinct in suits.`,
        `Or <b>monarchic</b>: <b>k</b>ing-<b>q</b>ueen-<b>j</b>ack.`,
        `Or <b>diverse</b> <b>monarchic</b> too.`,
        `Or the <b>tribal</b>, which is hard:
        royals in one suit pursuit.`,
      ]
    })),
  }
};

export default endingSection;