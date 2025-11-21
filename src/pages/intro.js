import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import transferSections from "./sections/transfers.js";
import turnSections from "./sections/turns.js";
import Song from "../Song.js";
import paginate from "../aux/paginate.js";

let song1 = new Song("home", Copy.text({
  es: "songs/Turno en cuatro fases.mp3",
  en: "songs/Four Phases of a Turn.mp3",
}));
let song2 = new Song("home", Copy.text({
  es: "songs/Los traslados y el destierro.mp3",
  en: "songs/Off the Roads and Off-board.mp3",
}));

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
      a_button_song: song1.link,
    },
    ondone: elt => paginate(elt),
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
    footer: {
      a_button_song: {
        marginBottom: "0.5rem",
        content: song2.link,
      },
      p: versify(Copy.text({
        es: `El <a href="#full"><b><big>juego completivo</big></b></a> es desafiante.
      Domina de primero el principiante.`,
        en: `First this intro’s understood.
      Then the <a href="#full"><b><big>standard game</big></b></a>’s pursued.`,
      })),
    },
    ondone: elt => paginate(elt),
  }],
};

export default introPage;