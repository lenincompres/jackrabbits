import Copy from "../../lib/Copy.js";

const morePage = {
  section_optional: [{
    h3: {
      a: {
        text: Copy.at.buy,
        target: "_blank",
        href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      }
    },
    p: Copy.text({
      es: `Visita nuestra tienda en línea y adquiere la copia física del juego.`,
      en: `Visit our online store and get a physical copy of the game.`,
    }),
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
    p: Copy.at.subscribe,
  }, {
    h3: {
      a: {
        text: Copy.at.virtual,
        target: "_blank",
        href: "https://tabletopia.com/games/jack-rabbits",
      }
    },
    p: Copy.text({
      es: "Juega <b>Jack Rabbits</b> con tus amistades en línea.",
      en: "Play <b>Jack Rabbits</b> online with your friends."
    }),
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
    p: Copy.text({
      es: `Este test revelará el símbolo que mejor se ajusta a tu personalidad.`,
      en: `This test will reveal the suit that best fits your personality.`,
    }),
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
    p: Copy.text({
      es: `Existe un manuscrito de novela inspirado en este mundo de maravillas.`,
      en: `There's a manuscript of a novel inspired in this same land of wonders.`,
    }),
  }]
};

export default morePage;