import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";
import classicSections from "./sections/neoclassic.js";
import frontierSections from "./sections/frontier.js";
import nauticalSections from "./sections/nautical.js";
import HandSection from "../elements/HandSection.js";
import Song from "../elements/Song.js";

const expansionPage = {
  menu: {
    span: [{
      label: "Autoplay: ",
      input: {
        type: "checkbox",
        checked: Song._autoplay,
        onchange: (e) => Song.autoplay = e.target.checked,
      },
    }, {
      marginLeft: "1rem",
      label: "Repeat: ",
      input: {
        type: "checkbox",
        checked: Song._repeat,
        onchange: (e) => Song.repeat = e.target.checked,
      }
    }, {
      marginLeft: "1rem",
      label: "Shuffle: ",
      input: {
        type: "checkbox",
        checked: Song._shuffle,
        onchange: (e) => Song.shuffle = e.target.checked,
      }
    }],
  },
  section_shuffle_suits: [new HandSection({
    header: {
      h2: Copy.text({
        en: "Frontier expansions",
        es: "Expansiones fronterizas",
      }),
      p: versify(Copy.text({
        en: `Suits include their cards and tiles;
          plus a rodent with new styles.`,
        es: `Sus palos incrementan nobleza,
          y añaden un rodente con sus piezas.`,
      })),
    },
    section: frontierSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Hexes have a sea-blue side—
          leave it open to the tide.
          Circles have a suit inside—
          these grant transfers from outside.`,
        es: `Respétales el puerto en sus hexágonos;
          se deben mantener desconectados.
          Y fíjate en los círculos con palos;
          se pagan de lugares alejados.`,
      })),
    },
  }), new HandSection({
    header: {
      h2: Copy.text({
        en: "Nautical Expansions",
        es: "Expansiones navales",
      }),
      p: versify(Copy.text({
        en: `Suits include their cards and tiles;
          plus a rodent with new styles.`,
        es: `Sus palos incrementan nobleza,
          y añaden un rodente con sus piezas.`,
      })),
    },
    section: nauticalSections.sort(() => Math.random() - 0.5),
    footer: {
      p: versify(Copy.text({
        en: `Hexes have a sea-blue side—
          leave it open to the tide.
          Circles have a suit inside—
          these grant transfers from outside.`,
        es: `Respétales el puerto en sus hexágonos;
          se deben mantener desconectados.
          Y fíjate en los círculos con palos;
          se pagan de lugares alejados.`,
      })),
    },
  }), new HandSection({
    header: {
      h2: Copy.text({
        en: "Neoclassic expansion",
        es: "Expansión neoclásica",
      }),
    },
    section: classicSections.sort(() => Math.random() - 0.5),
  })],
};

export default expansionPage;