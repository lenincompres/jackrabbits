import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import classicSections from "./sections/neoclassic.js";
import frontierSections from "./sections/frontier.js";
import nauticalSections from "./sections/nautical.js";

const expansionPage = {
  article_shuffle: [{
    header: {
      h2: Copy.text({
        en: "Frontier expansions",
        es: "Expansiones fronterizas",
      }),
      p: versify(Copy.text({
        en: `Each suit comes with cards and tiles;
          plus a rabbit with new styles.`,
        es: `Los palos con sus cartas de nobleza,
          te añaden un conejo con sus piezas.`,
      })),
    },
    section: frontierSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Their hexes have sea-blue sides—
          keep these open to the tides.
          Circles mark payments <i>off-site</i>:
          away from where they reside.`,
        es: `Los bordes en azul de sus hexágonos,
          se deben mantener desconectados.
          Los pagos con un círculo en sus palos
          se aceptan de lugares alejados.`,
      })),
    },
  }, {
    header: {
      h2: Copy.text({
        en: "Nautical Expansions",
        es: "Expansiones navales",
      }),
      p: versify(Copy.text({
        en: `Each suit comes with cards and tiles;
          plus a rabbit with new styles.`,
        es: `Los palos con sus cartas de nobleza,
          te añaden un conejo con sus piezas.`,
      })),
    },
    section: nauticalSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Their hexes have sea-blue sides—
          keep these open to the tides.
          Circles mark payments <i>off-site</i>:
          away from where they reside.`,
        es: `Los bordes en azul de sus hexágonos,
          se deben mantener desconectados.
          Los pagos con un círculo en sus palos
          se aceptan de lugares alejados.`,
      })),
    }
  }, {
    header: {
      h2: Copy.text({
        en: "Neoclassic expansions",
        es: "Expansiones neoclásicas",
      }),
      p: versify(Copy.text({
        en: `Read the first line on these guides
          to find out what each provides.`,
        es: `Los palos de la corte original
          se expanden con un vínculo especial.`,
      })),
    },
    section: classicSections.sort(() => Math.random() - 0.5),
  }],
};

export default expansionPage;