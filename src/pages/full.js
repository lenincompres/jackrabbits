import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import strategySections from "./sections/strategies.js";
import optionalSections from "./sections/options.js";

const fullPage = {
  header: {
    h2: versify(Copy.text({
      es: "Las estrategias de cada palo",
      en: "The strategies of each suit",
    })),
    p: versify(Copy.text({
      es: `Añade los artículos restantes
        al <a href="#intro"><b>juego introductorio</b></a> principiante.`,
      en: `This frame should be introduced 
        once the <a href="#intro"><b>intro</b></a>'s understood.`
    })),
  },
  section: strategySections,
  header_: {
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
};

export default fullPage;