import {
  versify
} from "./auxiliary.js";
import LightBox from "./classes/LightBox.js";
import Copy from "./classes/Copy.js";
import Pager from "./classes/Pager.js";
import ASSETS from "./assets.js";
import "./copy.js";
import "./pages.js";
import CardFloating from "./CardFloating.js";

let lightBox = new LightBox(new Pager({
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
window.popUp = key => lightBox.open(key);

let cardNum = window.innerWidth * window.innerHeight / window.devicePixelRatio;
cardNum = Math.floor(Math.sqrt(cardNum) / 300);
let cards = Array(cardNum).fill().map((_, i) => new CardFloating({
  root: 'suityourself/',
}));

DOM.set({
  title: "Lenino's Jack Rabbits - " + Copy.get("header"),
  description: "Lenino's Jack Rabbits: The board game for playing cards on a land of wooden shards.",
  keywords: "lenino, jack rabbits, board game, boardgame, alice in wonderlan, card game, playing cards",
  image: {
    src: ASSETS.jackRabbits.src,
    alt: "Jack Rabbits and it logo"
  },
  icon: "./images/icon.png",
  link: "style.css",
  lightBox: lightBox,
  div: {

  },
  position: "relative",
  width: "100vw",
  overflowX: "hidden",
  header: {
    h1: {
      small: [{
        class: "logo-super",
        text: "Lenino's",
      }, {
        tag: "a",
        text: "Jack Rabbits",
        href: "#home",
      }, {
        class: "logo-sub",
        text: Copy.get("header"),
      }],
    },
    menu_bulletMenu: Copy.getLinkMenu(),
  },
  main: {
    nav: {
      id: "main_nav",
      content: Pager.getLinkMenu((key, i) => ({
        transition: '0.3s ease',
        color: Pager._key.as(val => val === key ? 'black' : `var(--${key})`),
        backgroundColor: Pager._key.as(val => val === key ? `var(--${key})` : 'transparent'),
        name: key,
        html: Copy.get("nav", i),
      })),
    },
    article: {
      id: "pageArticle",
      backgroundColor: Pager._key.as(key => `var(--${key})`),
      content: Pager._content,
    },
  },
  footer: {
    p: versify(Copy.get("footer")),
    menu_bulletMenu: DOM.linkMenu({
      text: Copy.next(),
      class: "buy",
      position: "relative",
      margin: 0,
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
    }, {
      text: Copy.next(),
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: Copy.next(),
      href: "https://tabletopia.com/games/jack-rabbits",
      target: "_blank",
    }, {
      text: Copy.next(),
      href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
    }),
    section: {
      marginTop: "1em",
      markdown: Copy.text({
        es: "Creador por Lenin Comprés usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
        en: "Created by Lenin Comprés using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
      }),
    },
    onready: e => lightBox.open('mailingList'),
  },
  aside: cards,
});