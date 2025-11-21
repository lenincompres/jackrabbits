import Copy from "../../lib/Copy.js";
import paginate from "../aux/paginate.js";
import versify from "../aux/versify.js";
import Song from "../Song.js";
import endingSection from "./sections/ending.js";
import greetingsSection from "./sections/greetings.js";
import overviewSection from "./sections/overview.js";
import splashSection from "./sections/splash.js";

let song = new Song("home", Copy.text({
  es: "songs/Finales posibles.mp3",
  en: "songs/The Royal Quest.mp3",
}));

const homePage = {
  article: {
    section: [
      splashSection,
      greetingsSection,
      overviewSection,
      endingSection
    ],
    footer: {
      a_button_song: {
        marginBottom: "1em",
        content: song.link,
      },
      p: versify(Copy.text({
        es: `Dirígete al <a href="#setup"><b><big>Inicio</big></b> de partida</a>.
        De un máximo de cuatro es permitida.`,
        en: `Let's review the <a href="#setup"><b><big>Setup</big></b></a> phase. 
        Up to four contenders race.`,
      })),
    },
    ondone: elt => paginate(elt, 1),
  },
};

export default homePage;