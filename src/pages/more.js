import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";

const morePage = {
  article_shuffle: {
    section: [{
      h3: {
        a: {
          text: Copy.at.buy,
          target: "_blank",
          href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
        }
      },
      p: versify(
        Copy.text({
          es: `Visítanos al vínculo de arrriba
          y adquiere la edición en exclusiva.`,
          en: `Your own copy is here to claim.
          Get a new <b>Jack Rabbits</b> game.`,
        })
      ),
    }, {
      h3: {
        a: {
          text: Copy.text({
            en: "Educational Dossier",
            es: "Dossier Educativo",
          }),
          target: "_blank",
          href: Copy.text({
            en: "./educationalDossier.pdf",
            es: "./dossierEducativo.pdf",
          }),
        }
      },
      p: versify(Copy.text({
        es: `<b>Jack Rabbits</b>  en un rol educativo,
          con miras al análisis creativo.`,
        en: `Let's promote critical thinking.
          Play with stories and world-building.`,
      })),
    }, {
      h3: {
        a: {
          text: Copy.text({
            es: "Listado de correo",
            en: `Mailing list`,
          }),
          click: e => popUp("mailingList"),
        },
      },
      p: versify(Copy.at.subscribe),
    }, {
      h3: {
        a: {
          text: Copy.at.virtual,
          target: "_blank",
          href: "https://tabletopia.com/games/jack-rabbits",
        }
      },
      p: versify(
        Copy.text({
          es: `El juego de <b>Jack Rabbits</b> digital,
          en línea y sin costo adicional.`,
          en: `Start a game for free online.
          Play with friends in real-time`,
        })
      ),
    }, {
      h3: {
        a: {
          text: Copy.text({
            es: "Echa tus cartas",
            en: "Suit yourself",
          }),
          click: e => popUp("suitYourself"),
        }
      },
      p: versify(
        Copy.text({
          es: `El test revelará tu identidad
        y el símbolo de más afinidad.`,
          en: `Click this link to take the test.
          See what suit would suit you best.`,
        })
      ),
    }, {
      h3: {
        a: {
          text: Copy.at.novel,
          target: "_blank",
          href: Copy.text({
            es: 'https://sites.google.com/view/masallaterrafirma',
            en: "https://www.yonderlands.net",
          }),
        }
      },
      p: versify(
        Copy.text({
          es: `El nuevo manuscrito en el que viajas 
          al reino de conejos y barajas.`,
          en: `Venture through a tale untold:
          wonders, bloodlines, swords, and gold.`,
        })
      ),
    }],
  },
};

export default morePage;