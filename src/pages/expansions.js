import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import classicSections from "./sections/neoclassic.js";
import frontierSections from "./sections/frontier.js";
import nauticalSections from "./sections/nautical.js";
import paginate from "../aux/paginate.js";

const expansionPage = {
  article_shuffle: [{
    header: {
      h2: Copy.text({
        en: "Frontier expansions",
        es: "Expansiones fronterizas",
      }),
      p: versify(Copy.text({
        en: `Suits include their cards and tiles;
          plus a rodent with new styles.`,
        es: `Los palos con sus cartas de nobleza,
          te añaden un rodente con sus piezas.`,
      })),
    },
    section: frontierSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Hexes have a sea-blue side—
          leave it open to the tide.
          Circles have a suit inside—
          these grant transfers from outside.`,
        es: `Los bordes en azul de sus hexágonos,
          se deben mantener desconectados.
          Los pagos con un círculo en sus palos
          se aceptan de lugares alejados.`,
      })),
    },
    ondone: elt => paginate(elt),
  }, {
    header: {
      h2: Copy.text({
        en: "Nautical Expansions",
        es: "Expansiones navales",
      }),
      p: versify(Copy.text({
        en: `Suits include their cards and tiles;
          plus a rodent with new styles.`,
        es: `Los palos con sus cartas de nobleza,
          te añaden un rodente con sus piezas.`,
      })),
    },
    section: nauticalSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Hexes have a sea-blue side—
          leave it open to the tide.
          Circles have a suit inside—
          these grant transfers from outside.`,
        es: `Los bordes en azul de sus hexágonos,
          se deben mantener desconectados.
          Los pagos con un círculo en sus palos
          se aceptan de lugares alejados.`,
      })),
    },
    ondone: elt => paginate(elt),
  }, {
    header: {
      h2: Copy.text({
        en: "Neoclassic expansions",
        es: "Expansiones neoclásicas",
      }),
    },
    section: classicSections.sort(() => Math.random() - 0.5),
    ondone: elt => paginate(elt),
  }],
};

export default expansionPage;