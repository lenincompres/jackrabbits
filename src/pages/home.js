import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import HandSection from "../HandSection.js";
import Song from "../Song.js";
import endingSection from "./sections/ending.js";
import greetingsSection from "./sections/greetings.js";
import overviewSection from "./sections/overview.js";
import splashSection from "./sections/splash.js";

const homePage = {
  section: new HandSection({
    section: [
      splashSection,
      greetingsSection,
      overviewSection,
      endingSection
    ],
    footer: {
      a_button_song: {
        marginBottom: "1em",
        content: Song.List[0].link,
      },
      p: versify(Copy.text({
        es: `Dirígete al <a href="#setup"><b><big>Inicio</big></b> de partida</a>.
        De un máximo de cuatro es permitida.`,
        en: `Let's review the <a href="#setup"><b><big>Setup</big></b></a> phase. 
        Up to four contenders race.`,
      })),
    },
  }, 1),
};

export default homePage;