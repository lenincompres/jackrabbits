import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const overviewSection = {
  h2: Copy.text({
    es: "Visión General",
    en: "Overview",
  }),
  p: versify(
    Copy.text({
      es: [
        `Irás a transitar por los caminos
      cargando con tus cartas numerales.
      La meta es que regreses al castillo
      luciéndote con tres de las reales.`,
        `Dirígete a las casas de monarcas
      a hacer <b>la adquisición</b> en su presencia.
      Con diez de los puntitos de sus marcas,
      recibes su real correspondencia. `,
      ],
      en: [
        `Go through the realm turn by turn,
      making stops on royal land.
      Win the game when you return
      with three royal cards in hand.`,
        `<b>the acquisition</b> requires
      ten points of a royal’s suit—
      with every turn that transpires,
      you will be scoring more loot.`,
      ]
    }),
    ASSETS.royals,
    Copy.text({
      es: [
        `Es gratis completar <b>la travesía</b>
      si viajas por las vías carreteras.
      Se pagan <b>los traslados</b> de las vías:
      transporte, pasadizo o madrigueras.`,
        `Detente en los hexágonos que llegues
      y toma <b>el incremento</b> de tus cartas,
      a menos que te salgas o <i>destierres</i>
      por fuera de las piezas y sin barcas.`,
      ],
      en: [
        `Make <b>the journey</b> hex to hex—
      it's free if you stick to roads.
      Only pay to take the treks, 
      or to ride horses and boats.`,
        `Stop when you reach a hex tile,
      and unless you're off the board,
      draw a new card from the pile—
      that's <b>the increment</b> you scored.`,
      ],
    })),
};

export default overviewSection;