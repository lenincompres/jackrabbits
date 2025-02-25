import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import endingSection from "./sections/ending.js";
import greetingsSection from "./sections/greetings.js";
import overviewSection from "./sections/overview.js";
import splashSection from "./sections/splash.js";

const homePage = {
  section: [
    splashSection,
    greetingsSection,
    overviewSection,
    endingSection
  ],
  footer: {
    p: versify(Copy.text({
      es: `<a href="#setup"><b>Preparación</b> del juego</a></br>(Hasta cuatro participantes)`,
      en: `<a href="#setup"><b>Setup</b></a></br>(Up to four players)`,
    })),
  },
};

export default homePage;