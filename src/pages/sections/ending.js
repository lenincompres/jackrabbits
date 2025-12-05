import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const endingSection = {
  h3: Copy.text({
    es: "Fin del juego",
    en: "Objective",
  }),
  p: versify(
    Copy.text({
      es: `Serás protagonista del festejo 
      si aquí en la <i>Ciudadela</i> te regresas, 
      cargando con las cartas del concejo: 
      tus tres representantes de nobleza.`,
      en: `Reach this place where you begin, 
      with three royal cards in hand.
      You must be the first to win,
      hailed as champion of the land.`,
    }),
    ASSETS.thumbnailOf("citadel", "8.4em", e => popUp("citadel")),
    Copy.text({
      es: `Tan pronto se repartan los conejos,
que escoja el colectivo de la mesa,
listado de lo simple a lo complejo,
la clase de final que le interesa:`,
      en: `But before the quest may start, 
      choose a challenge for the mission.
      Set its circle as a mark,
      for the trio's win condition:`,
    })),
  ul_exception: {
    li: versify(Copy.text({
      es: [
        `<b>sencillo</b>: con reales cualesquiera;`,
        `<b>diverso</b>: si varían en su palo;`,
        `<b>monárquico</b>: distintas en su letra;`,
        `<b>monárquico</b> y <b>diverso</b> combinado;`,
        `<b>tribal</b>: con las de palo que concuerda, 
        que al fin es desafiante de lograrlo.`,
      ],
      en: [
        `<b>simple</b>: any royal cards.`,
        `Or <b>diverse</b>: distinct in suits.`,
        `Or <b>monarchic</b>: <b>k</b>ing-<b>q</b>ueen-<b>j</b>ack.`,
        `Or <b>diverse</b>-<b>monarchic</b> too.`,
        `Or the <b>tribal</b>, which is hard:
        royals in one suit pursuit.`,
      ]
    })),
  }
};

export default endingSection;