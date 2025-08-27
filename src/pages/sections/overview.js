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
        `Visit houses turn by turn,
        bringing numbered cards in hand.
        Claim their royals and return,
        holding three to rule the land.`,
        `To fulfill <b>the acquisition</b>, 
        gather ten points in their suit.
        On your turns along the mission,
        you’ll be drawing cards as loot.`,
      ]
    }), 
    ASSETS.royals,
    Copy.text({
      es: [
        `Es gratis completar <b>la travesía</b>
        si viajas por las vías carreteras.
        Se pagan <b>los traslados</b> de las vías:
        transporte, matorral o madrigueras.`,
        `Detente en los hexágonos que llegues
        y toma <b>el incremento</b> de tus cartas,
        a menos que te salgas o <i>destierres</i>
        por fuera de las piezas y sin barcas.`,
      ],
      en: [
        `Make <b>the journey</b> hex to hex—
        every road is free to course.
        Pay to hike the off-road treks,
        or to ride a boat or horse.`,
        `Rest upon a hex-shaped tile,
        if you’re standing on the board. 
        Draw the card atop the pile—
        that’s <b>the increment</b> reward.`,
      ],
    })),
};

export default overviewSection;