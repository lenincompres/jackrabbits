import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import strategySections from "./sections/strategies.js";
import optionalSections from "./sections/options.js";
import HandSection from "../elements/HandSection.js";

const fullPage = {
  section_shuffle_suits: new HandSection({
    header: {
      h2: versify(Copy.text({
        es: "Estrategias de cada palo",
        en: "Four Well-Suited Strategies",
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
        skip <b>the increment</b> this round.
        When your turn begins off-board,
        end <b>the journey</b> underground.`
      })),
      section_handSection: {
        class: "menu",
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
      }
    },
  }),
};

export default fullPage;