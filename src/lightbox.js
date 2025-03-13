import ASSETS from "./assets.js";
import versify from "./aux/versify.js";
import Copy from "../lib/Copy.js";
import LightBox from "../lib/LightBox.js";
import Pager from "../lib/Pager.js";
import homePage from "./pages/home.js";
import boardSection from "./pages/sections/board.js";
import priceSection from "./pages/sections/price.js";

window.popUp = key => LightBox.open(key);

LightBox.add(new Pager({
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
    img: ASSETS.citadel,
    p: versify(Copy.text({
      es: `La pieza hexagonal en la que empiezas
        y acabas al traer a la nobleza.`,
      en: `The hex where the journey starts
        and ends with three royal cards.`
    })),
  },
  underground: {
    h3: Copy.text({
      es: "Subsuelo",
      en: "underground",
    }),
    img: ASSETS.underground,
    p: versify(Copy.text({
      es: `La pieza hexagonal en la que esperas
        si vas a atravesar las madrigueras.`,
      en: `The hex where you wait around
        to reach caves in the next round.`
    }))
  },
  advancedCitadel: {
    h3: Copy.text({
      es: "Ciudadela Avanzada",
      en: "Advanced Citadel",
    }),
    img: ASSETS.advancedCitadel,
    p: versify(Copy.text({
      es: `La ficha del inicio es reforzada:
        con torre, con palacio y con su plaza.`,
      en: `This citadel has more power:
        a palace, plaza and tower.`
    }))
  },
  roadTiles: {
    h3: Copy.text({
      es: "Piezas viales",
      en: "Road tiles",
    }),
    img: ASSETS.roadTiles,
  },
  sample: {
    h3: Copy.text({
      es: "Tablero de ejemplo",
      en: "Sample board",
    }),
    img: ASSETS.sample,
  },
  endings: {
    content: homePage.section[3],
  },
  board: boardSection,
  price: priceSection,
  mailingList: {
    id: "mailingList",
    img: {
      margin: '1rem auto',
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
      textAlign: "left",
      content: Copy.text({
        es: "Lenino está preparando una campaña para <b>Jack Rabbits</b> y puede avisarte cuando esté lista.",
        en: "Lenino is preparing a launch campaign for <b>Jack Rabbits</b>, and can notify you when it's ready."
      }),
    },
    iframe: {
      width: "100%",
      height: "13rem",
      src: "../mailinglist.html",
    }
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