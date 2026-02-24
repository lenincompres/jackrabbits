import versify from "./aux/versify.js";
import Copy from "../lib/Copy.js";
import LightBox from "../lib/LightBox.js";
import Pager from "../lib/Pager.js";
import homePage from "./pages/home.js";
import boardSection from "./pages/sections/board.js";
import Song from "./elements/Song.js";
import endingSection from "./pages/sections/ending.js";
import MediaFigure from "./elements/MediaFigure.js";

window.popUp = key => LightBox.open(key);

LightBox.add(new Pager({
  playlist: {
    div_playlist: {
      header: {
        h3: Copy.text({
          es: "Conejos Y Barajas",
          en: "Jack Rabbits",
        }),
        p: Copy.text({
          es: "El albúm musical",
          en: "The musical experience",
        }),
      },
      section: {
        img: {
          alt: "Four suits banners",
          src: "images/albumCover.jpg",
        },
        ul: {
          li: Song.getAlbum(0).map(song => ({
            a: {
              class: {
                playing: Song._currentSong.as(v => v === song),
              },
              html: song.title,
              onclick: Song._currentSong.as(v => () => v === song ? song.end() : song.start(true)),
            }
          })),
        }
      },
      footer: {
        fontSize: "0.8rem",
        menu: {
          span: [{
            label: Copy.text({
              en: "Autoplay: ",
              es: "Continuo: ",
            }),
            input: {
              type: "checkbox",
              checked: Song._autoplay,
              onchange: (e) => Song.autoplay = e.target.checked,
            },
          }, {
            label: Copy.text({
              en: "Repeat: ",
              es: "Repetición: ",
            }),
            input: {
              type: "checkbox",
              checked: Song._repeat,
              onchange: (e) => Song.repeat = e.target.checked,
            }
          }, {
            label: Copy.text({
              en: "Shuffle: ",
              es: "Aleatorio: ",
            }),
            input: {
              type: "checkbox",
              checked: Song._shuffle,
              onchange: (e) => Song.shuffle = e.target.checked,
            }
          }],
        },
        div: Copy.text({
          en: `Music generated with Suno AI under a paid user account.`,
          es: `Música generada con Suno AI bajo una cuenta de usuario paga.`,
        }),
      },
    }
  },
  video: {
    iframe: {
      attributes: {
        width: "100%",
        height: 315,
        title: "YouTube video player",
        frameborder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true,
        src: "https://www.youtube.com/embed/" + Copy.text({
          es: "8pG2yxqUMC0?si=A3_b6yIdTcc25p86",
          en: "DtIm9UwRWW0?si=qeO5ySSubQGNFo27",
        }),
      }
    }
  },
  citadel: {
    h3: Copy.text({
      es: "Ciudadela",
      en: "Citadel",
    }),
    img: new MediaFigure("citadel"),
    p: versify(Copy.text({
      es: `La pieza hexagonal en la que empiezas.
        Aquí regrezarás con la nobleza.`,
      en: `This is where the story starts.
        Here you'll bring three royal cards.`
    })),
  },
  underground: {
    h3: Copy.text({
      es: "Subsuelo",
      en: "underground",
    }),
    img: new MediaFigure("underground"),
    p: versify(Copy.text({
      es: `La pieza hexagonal en la que esperas.
        Es gratis al cruzar las madrigueras.`,
      en: `Here is where you wait for free.
        Reach the caves without a fee. `,
    })),
  },
  advancedCitadel: {
    h3: Copy.text({
      es: "Ciudadela Avanzada",
      en: "Advanced Citadel",
    }),
    img: new MediaFigure("advancedCitadel"),
    p: versify(Copy.text({
      es: `La ficha del inicio es reforzada.
        La torre es un palacio con su plaza.`,
      en: `Give the Citadel more power.
        It's a palace-plaza-tower.`
    }))
  },
  price: {
    h3: Copy.text({
      es: "El precio",
      en: "The price",
    }),
    p: versify(Copy.text({
      es: [
        `Las vías con los símbolos de cartas
      te ofrecen un <i>traslado</i> de lugar.
      La suma de los dados es la tasa
      o el mínimo que tienes que pagar. 
      Se pierde el sobrepago si te pasas;
      los símbolos se pueden combinar.
      El precio de reales en sus casas
      es siempre su valor original.`,
        `Las cartas se <i>descartan</i> al usarse,
      dejándolas a un lado de la mesa.
      Es <b>1</b> lo que cuentas por los ases,
      y <b>10</b> por las reales o con letras.
      En caso de que gastes las reales,
      saldrá tu zanahoria de sus piezas,
      y en vez de que la carta la descartes,
      regrésala a la corte en la que empieza.`
      ],
      en: [
        `For the transfers on the way,
      pay the total on the dice. 
      But in case you overpay, 
      then consider that the price.
      Use as many cards to pay,
      check each symbol qualifies.
      Royals' value never sway—
      note their price remains precise. `,
        `Set aside the cards you spend—
      they’re <i>discarded</i> once you’re done. 
      Royals may be spent as <b>10</b>,
      and the <b>a</b>ces are worth <b>1</b>.
      When a royal card is spent, 
      put it back where it begun.
      And remove your carrot then,
      since your claim has been undone.`
      ]
    })),
    img: new MediaFigure("roadTiles"),
  },
  roadTiles: {
    h3: Copy.text({
      es: "Vías carreteras",
      en: "Road tiles",
    }),
    img: new MediaFigure("roadTiles"),
    p: versify(Copy.text({
      es: `Las piezas de los rombos y los triángulos.
        Las cruzas al moverte a los hexágonos.`,
      en: `These will take you hex to hex.
And they offer rides and treks.`
    })),
  },
  sample: {
    h3: Copy.text({
      es: "Tablero de ejemplo",
      en: "Sample board",
    }),
    p: versify(Copy.text({
      es: `Empléalo en tu juego introductorio.
        Reanudas con <a class="pop" onclick="popUp('board')"><b>un nuevo territorio</b></a>.`,
      en: `Start your first game nice and steady.
        <a class="pop" onclick="popUp('board')"><b>Build the land</b></a> when you feel ready.`,
    })),
    img: new MediaFigure("sample"),
  },
  endings: {
    content: endingSection,
  },
  board: boardSection,
  mailingList: {
    id: "mailingList",
    img: {
      margin: '0 auto',
      width: '11rem',
      height: '12rem',
      alt: Copy.text({
        es: 'Caja de juego de JackRabbits',
        en: 'JackRabbits game box',
      }),
      src: 'https://i.etsystatic.com/52679041/r/il/c0dc16/6069187861/il_794xN.6069187861_a4dz.jpg',
    },
    h2: Copy.text({
      es: "Listado de correo",
      en: "Mailing list",
    }),
    p: {
      content: versify(Copy.text({
        es: `Suscríbete al listado de correos.
          Apoya las campañas que tendremos.`,
        en: `Join the list on this domain.
          Stay in touch for our campaigns.`,
      })),
    },
    iframe: {
      overflow: "hidden",
      width: "100%",
      height: "14rem",
      src: "../mailinglist.html",
    },
    menu_bulletMenu: {
      id: "languageMenu",
      content: Copy.getLinkMenu(),
    },
  },
  suitYourself: {
    iframe: {
      src: "suityourself/",
      width: "100%",
      height: "45rem",
    }
  },
  store: {
    iframe: {
      src: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      width: "100%",
      height: "50rem",
    }
  }
}));