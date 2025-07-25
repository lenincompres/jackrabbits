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
        es: `Añade los artículos restantes
          al <a href="#intro"><b>juego introductorio</b></a> principiante.`,
        en: `Now the challenge is afoot—
          Add these strategies per suit.`
      })),
    },
    section: strategySections.sort(() => Math.random() - 0.5),
  }, {
    header: {
      h3: Copy.text({
        es: "Reglas Opcionales",
        en: "Optional Rules",
      }),
      p: versify(Copy.text({
        es: `Renueva tus partidas habituales
          jugando con las reglas opcionales</a>.`,
        en: `Try these  additional options
          once you have gone through the motions.`
      })),
    },
    section_optional: optionalSections,
  }],
};

export default fullPage;