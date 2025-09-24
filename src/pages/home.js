import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import endingSection from "./sections/ending.js";
import greetingsSection from "./sections/greetings.js";
import overviewSection from "./sections/overview.js";
import splashSection from "./sections/splash.js";

const homePage = {
  article: {
    section: [
      splashSection,
      greetingsSection,
      overviewSection,
      endingSection
    ],
    footer: {
      p: versify(Copy.text({
        es: `Dirígete al <a href="#setup"><b><big>Inicio</big></b> de partida</a>.
        Un máximo de cuatro participa.`,
        en: `Let's begin the <a href="#setup"><b><big>Setup</big></b></a> phase. 
        Up to four contenders race.`,
      })),
    },
  },
};

export default homePage;