import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import transferSections from "./sections/transfers.js";
import turnSections from "./sections/turns.js";
import Song from "../Song.js";
import paginate from "../aux/paginate.js";

const introPage = {
  article: [{
    header: {
      h2: versify(Copy.text({
        es: "Turno en cuatro FASES",
        en: "Four PHASES of each turn",
      })),
      p: versify(Copy.text({
        es: `Comprende el material preliminar.
          Ya luego aprenderás el regular.`,
        en: `Learn each phase’s role and name. 
          Then attempt the <a href="#full"><b>standard game</b></a>.`,
      })),
    },
    section: turnSections,
    footer: {
      a_button_song: Song.List[2].link,
      article: {
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
        footer: {
          a_button_song: {
            marginBottom: "0.5rem",
            content: Song.List[3].link,
          },
          p: versify(Copy.text({
            es: `El <a href="#full"><b><big>juego completivo</big></b></a> es desafiante.
      Domina de primero el principiante.`,
            en: `First this intro’s understood.
      Then the <a href="#full"><b><big>standard game</big></b></a>’s pursued.`,
          })),
        },
        ondone: elt => paginate(elt, 1),
      }
    },
    ondone: elt => paginate(elt),
  }],
};

export default introPage;