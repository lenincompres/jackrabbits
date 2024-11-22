import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import transferSections from "./sections/transfers.js";
import turnSections from "./sections/turns.js";

const introPage = {
  header: {
    h2: versify(Copy.text({
      es: "Las FASES de cada turno",
      en: "The PHASES of each turn",
    })),
    p: versify(Copy.text({
      es: `Comprende el material preliminar
        al <a href="#full"><b>juego completivo</b></a> regular.`,
      en: `Learn these phases' rules and names, 
        then advance to a <a href="#full"><b>full game</b></a>.`,
    })),
  },
  section: turnSections,
  header_ : {
    tag: "header",
    a: {
      name: "intro/tranfers",
    },
    h3: Copy.text({
      es: "Los traslados",
      en: "The Transfers",
    }),
  },
  section_: transferSections,
  footer: {
    p: versify(Copy.text({
      es: `El <a href="#full"><b>juego completivo</b></a> es desafiante,
        con reglas que usarás en lo adelante.`,
      en: `For a <a href="#full"><b>full game</b></a> you'll include 
        the strategies of each suit.`,
    })),
  },
};

export default introPage;