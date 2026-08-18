import Copy from "../../lib/Copy.js";
import versify from "../aux/versify.js";

const morePage = {
  section_shuffle_menu_handSection: [
    {
      header: {
        h2: Copy.text({
          es: "Compra",
          en: "Buy",
        }),
      },
      section: [
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Edición oficial",
                en: "Complete Edition",
              }),
              target: "_blank",
              href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
            },
          },
          p: versify(
            Copy.text({
              es: `Adquiere tu ejemplar original.
              Ordénalo y repárate a jugar.`,
              en: `Here's a box for you to claim.
              Get a new <b>Jack Rabbits</b> game.`,
            }),
          ),
        },/*
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Piezas Componentes",
                en: "Component Pieces",
              }),
              target: "_blank",
              href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
            },
          },
          p: versify(
            Copy.text({
              es: `Repone componentes que se pierdan.
                  O adquiere y colecciona los que quieras.`,
              en: `Get a piece you may have lost.
                  Or collect what you like most.`,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Kit de creación",
                en: `Maker's Kit`,
              }),
              target: "_blank",
              href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
            },
          },
          p: versify(
            Copy.text({
              es: `Construye por tu cuenta un ejemplar.
                Adquiere las plantillas y el manual.`,
              en: `Craft the pieces for <b>Jack Rabbit's</b>.
                Get directions and schematics.`,
            }),
          ),
        },*/
      ],
    },
    {
      header: {
        h2: Copy.text({
          es: "Juega",
          en: "Play",
        }),
      },
      section: [
        {
          h3: {
            a: {
              text: Copy.at.virtual,
              target: "_blank",
              href: "https://tabletopia.com/games/jack-rabbits",
            },
          },
          p: versify(
            Copy.text({
              es: `El juego de <b>Jack Rabbits</b> digital,
              en línea y sin costo adicional.`,
              en: `Start a game for free online.
              Play with friends in real-time`,
            }),
          ),
        },/*
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Tableros imprimibles",
                en: "Printable Boards",
              }),
              href: "f",
            },
          },
          p: versify(
            Copy.text({
              es: `Descarga los diseños que decidas.
                Y juega con tus cartas y tus fichas.`,
              en: `Choose from multiple presets.
                Use your cards and token sets.`,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Instructivo",
                en: "Instruction booklet",
              }),
              target: "_blank",
              href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
            },
          },
          p: versify(
            Copy.text({
              es: `Tu copia digital del reglamento.
                Descárgala o imprime el documento.`,
              en: `Print the rules to read offline.
                Custom letter-size design.`,
            }),
          ),
        },*/
      ],
    },
    {
      header: {
        h2: Copy.text({
          es: "Explora",
          en: "Explore",
        }),
      },
      section: [
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Echa tus cartas",
                en: "Suit yourself",
              }),
              click: (e) => popUp("suitYourself"),
            },
          },
          p: versify(
            Copy.text({
              es: `El test revelará tu identidad
          y el símbolo de más afinidad.`,
              en: `See what suit would suit you best.
          Click this link to take the test.`,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Disfruta del Album",
                en: "Experience the Music",
              }),
              click: () => popUp("playlist"),
            },
          },
          p: versify(
            Copy.text({
              es: `Prepárate a ambientar tu travesía,
          con cantos de aventura y fantasía.`,
              en: `Rules relate an epic song.
          Set the mood and sing along.`,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.at.novel,
              target: "_blank",
              href: Copy.text({
                es: "https://sites.google.com/view/masallaterrafirma",
                en: "https://www.yonderlands.net",
              }),
            },
          },
          p: versify(
            Copy.text({
              es: `Embárcate en un cuento novedoso,
              de vuelta en un país maravilloso.`,
              en: `Venture through a tale untold:
              wonders, bloodlines, swords, and gold.`,
            }),
          ),
        },
        {
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
            },
          },
          p: versify(
            Copy.text({
              es: `<b>Jack Rabbits</b>  en un rol educativo,
              con miras al análisis creativo.`,
              en: `Let's promote critical thinking.
              Play with stories and world-building.`,
            }),
          ),
        },
      ],
    },
    {
      header: {
        h2: Copy.text({
          es: "Conecta",
          en: "Connect",
        }),
      },
      section: [
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Listado de correo",
                en: `Mailing list`,
              }),
              click: (e) => popUp("mailingList"),
            },
          },
          p: versify(Copy.at.subscribe),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Redes sociales",
                en: `Social Media`,
              }),
              target: "_blank",
              href: "http://instagram/jackrabbits.lenino",
            },
          },
          p: versify(
            Copy.text({
              es: `Descubre contenido y tutoriales.
                Taguéanos, suscríbete y comparte.`,
              en: `Find our clips, events and more.
                Follow, tag, and share your boards. `,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                es: "Visita a Lenino",
                en: "Visit Lenino",
              }),
              target: "_blank",
              href: "http://lenino.net",
            },
          },
          p: versify(
            Copy.text({
              es: `Conoce al inventor de la experienca:
            polímata del arte y de la ciencia.`,
              en: `Meet the mind behind the game.
            See the face who bears the name.`,
            }),
          ),
        },
        {
          h3: {
            a: {
              text: Copy.text({
                en: "E-mail us",
                es: "Correo Electrónico",
              }),
              target: "_blank",
              href: "mailto:leninosjackrabbits@gmail.com",
            },
          },
          p: versify(
            Copy.text({
              es: `Si tienes un mensaje que contarnos,
              escribe y nos pondremos en contacto.`,
              en: `If you have something to say,
              please contact us right away.`,
            }),
          ),
        },
      ],
    },
  ],
};

export default morePage;
