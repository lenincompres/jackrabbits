import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";

const morePage = {
  section_optional: [{
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
        en: `Visit our online store and get 
        a physical copy of the game.`,
      })
    ),
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
        en: "Play <b>Jack Rabbits</b> online with your friends."
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
        en: `This test will reveal the suit
        that best fits your personality.`,
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
        es: `El novel manuscrito en el que viajas 
        al reino de conejos y barajas.`,
        en: `There's a manuscript of a novel
        inspired in this same land of wonders.`,
      })
    ),
  }]
};

export default morePage;