import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import strategySections from "./sections/strategies.js";
import optionalSections from "./sections/options.js";

const fullPage = {
  article_shuffle: [{
    header: {
      h2: versify(Copy.text({
        es: "Las estrategias de cada palo",
        en: "The 4 Well-Suited Strategies",
      })),
      p: versify(Copy.text({
        es: `Añades el capítulo restante.
          Con este jugarás en lo adelante.`,
        en: `Now the challenge is afoot.
          Add these strategies per suit.`
      })),
    },
    section: strategySections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        es: `Si sales en tu turno del tablero,
        terminas sin tomar el <b>incremento</b>.
        Si empiezas con el turno en el destierro,
        tu fin de <b>travesía</b> es el subsuelo.`,
        en: `If your turn falls off the board,
        get no <b>increment</b> this round.
        When a turn begins off-board,
        end your <b>journey</b> underground.`
      })),
    },
  }, {
    header: {
      h3: Copy.text({
        es: "+ Reglas Opcionales",
        en: "+ Optional Rules",
      }),
      p: versify(Copy.text({
        es: `Renueva tus partidas habituales.
          Añádeles las reglas opcionales</a>.`,
        en: `Try these optional additions.
          They'll refresh your future missions.`
      })),
    },
    section_optional: optionalSections,
  }],
};

export default fullPage;