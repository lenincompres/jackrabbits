import Copy from "../../../lib/Copy.js";
import RoyalTrio from "../../elements/RoyalTrio.js";
import versify from "../../aux/versify.js";
import Song from "../../elements/Song.js";

const overviewSection = {
  a_button_play_song: Song.List[0].btn,
  h3: Copy.text({
    es: "Visión General",
    en: "Overview",
  }),
  p: versify(
    Copy.text({
      es: [
        `Saldrás a transitar por los caminos
        cargando con tus cartas numerales.
        La meta es que regreses al castillo
        luciéndote con tres de las reales.`,
        `Harás <b>la adquisición</b> de la nobleza
        con diez de los puntitos de sus marcas.
        Quizás <b>la lotería</b> te compensa
        con cartas que llevar a sus monarcas.`,
      ],
      en: [
        `Visit houses turn by turn,
        bringing numbered cards in hand.
        Claim their royals and return,
        holding three to rule the land.`,
        `To fulfill <b>the acquisition</b>, 
        add ten points that match their suit.
        With <b>the lottery</b>’s provision,
        you’ll be drawing cards as loot.`,
      ]
    }), 
    new RoyalTrio(),
    Copy.text({
      es: [
        `Es gratis completar <b>la travesía</b>
        si viajas solamente en carretera.
        Se pagan <b>los traslados</b> de las vías:
        transporte, vericueto o madriguera.`,
        `Detente en los destinos del sendero,
        y toma <b>el incremento</b> de tus cartas,
        a menos de acabar en <b>el destierro</b>,
        por fuera de las piezas y sin barcas.`,
      ],
      en: [
        `Make <b>the journey</b> hex to hex—
        every road is free to course.
        Pay <b>the transfers</b> for the treks:
        hikes off-road, by boat or horse.`,
        `Rest upon a hex-shaped tile,
        if you don't end up <b>off-board</b>. 
        Draw the card atop the pile—
        that’s <b>the increment</b> reward.`,
      ],
    })),
};

export default overviewSection;