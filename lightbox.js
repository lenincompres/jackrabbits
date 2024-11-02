import ASSETS from "./assets.js";
import { versify } from "./auxiliary.js";
import Copy from "./classes/Copy.js";
import LightBox from "./classes/LightBox.js";
import Pager from "./classes/Pager.js";


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
    h3: Copy.get("popup"),
    img: ASSETS.citadel,
    p: versify(Copy.next()),
  },
  underground: {
    h3: Copy.next(),
    img: ASSETS.underground,
    p: versify(Copy.next())
  },
  advancedCitadel: {
    h3: Copy.next(),
    img: ASSETS.advancedCitadel,
    p: versify(Copy.next())
  },
  roadTiles: {
    h3: Copy.next(),
    img: ASSETS.roadTiles,
  },
  sample: {
    h3: Copy.next(),
    img: ASSETS.sample,
  },
  endings: {
    content: Pager.map.home.section[3],
  },
  board: {
    h3: Copy.next(),
    p: versify(Copy.next()),
    img: ASSETS.guides,
  },
  price: {
    h4: Copy.next(),
    p: versify(Copy.next())
  },
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
    h2: Copy.next(),
    p: {
      textAlign: "left",
      content: Copy.next(),
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
window.popUp = key => LightBox.open(key);