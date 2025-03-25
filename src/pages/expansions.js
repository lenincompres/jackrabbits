import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import classicSections from "./sections/classic.js";
import frontierSections from "./sections/frontier.js";
import nauticalSections from "./sections/nautical.js";

const expansionPage = {
  header: {
    h2: Copy.text({
      en: "Frontier expansions",
      es: "Expansiones terrestres",
    }),
    p: versify(Copy.text({
      en: `Each suit comes with cards and tiles;
        plus a rabbit with new styles.
        Their hexes have sea-blue sides;
        keep these open to the tides.`,
      es: `Un palo adicional es equipado
        con piezas y un conejo incorporados.
        Los bordes en azul de sus hexágonos,
        se deben mantener desconectados.`,
    })),
  },
  section: frontierSections,
  header_1: {
    h2: Copy.text({
      en: "Nautical Expansions",
      es: "Expansiones marítimas",
    }),
    p: versify(Copy.text({
      en: `Each suit comes with cards and tiles;
        plus a rabbit with new styles.
        Their hexes have sea-blue sides;
        keep these open to the tides.`,
      es: `Un palo adicional es equipado
        con piezas y un conejo incorporados.
        Los bordes en azul de sus hexágonos,
        se deben mantener desconectados.`,
    })),
  },
  section_: nauticalSections,
  header_2: {
    h2: Copy.text({
      en: "Neoclassic expansions",
      es: "Expansiones neoclásicas",
    }),
    p: versify(Copy.text({
      en: `Read the first line on these guides
        to find out what each provides.
        Their hexes have sea-blue sides;
        keep these open to the tides.`,
      es: `Los palos de expansión de la nobleza
        te incluyen un conejo con sus piezas.
        Los bordes en azul de los hexágonos
        se deben mantener desconectados.`,
    })),
  },
  section_2: classicSections,
};

export default expansionPage;