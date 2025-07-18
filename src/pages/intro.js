import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import transferSections from "./sections/transfers.js";
import turnSections from "./sections/turns.js";

const introPage = {
  article: [{
    header: {
      h2: versify(Copy.text({
        es: "Las 4 FASES de cada turno",
        en: "The 4 PHASES of each turn",
      })),
      p: versify(Copy.text({
        es: `Comprende el material preliminar
          al <a href="#full"><b>juego completivo</b></a> regular.`,
        en: `Learn each phase's role and name, 
          then advance to a <a href="#full"><b>full game</b></a>.`,
      })),
    },
    section: turnSections,
  }, {
    header: {
      a: {
        name: "intro/tranfers",
      },
      h3: Copy.text({
        es: "Los traslados",
        en: "The Transfers",
      }),
    },
    section: transferSections,
  }],
  footer: {
    p: versify(Copy.text({
      es: `El <a href="#full"><b><big>juego completivo</big></b></a> es desafiante,
        con reglas que usarás en lo adelante.`,
      en: `The <a href="#full"><b><big>full game</big></b></a> is introduced
      once the intro’s understood.`,
    })),
  },
};

export default introPage;