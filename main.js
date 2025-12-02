import versify from "./src/aux/versify.js";
import Copy from "./lib/Copy.js";
import Pager from "./lib/Pager.js";
import ASSETS from "./src/assets.js";
import CardFloating from "./src/CardFloating.js";
import "./src/copy.js";
import morePage from "./src/pages/more.js";
import fullPage from "./src/pages/full.js";
import introPage from "./src/pages/intro.js";
import setupPage from "./src/pages/setup.js";
import homePage from "./src/pages/home.js";
import "./src/lightbox.js";
import expansionPage from "./src/pages/expansions.js";
import { mixColor } from "./src/aux/color.js";

Pager.add({
  home: homePage,
  setup: setupPage,
  intro: introPage,
  full: fullPage,
  more: morePage,
  expansion: expansionPage,
});

const CardNum = Math.min(3, Math.floor(Math.sqrt(window.innerWidth * window.innerHeight / window.devicePixelRatio) / 250));

const suitColor = (key, suit, match) => (match && match != key) ? `transparent` : suit && key === "full" ? mixColor(suit.symbol, 30) : `var(--${key})`;

DOM.set({
  link: "style.css",
  header: {
    h1: {
      a: {
        position: "relative",
        href: "#home",
        small_logoSuper: "Lenino’s",
        span_logoName: "Jack Rabbits",
        small_logoSub: Copy.at.header,
      },
    },
    menu_bulletMenu: {
      id: "languageMenu",
      content: Copy.getLinkMenu(),
    }
  },
  main: {
    nav_main: Pager.getLinkMenu(key => ({
      transition: '0.3s ease',
      color: Pager._key.as(val => val === key ? 'black' : `var(--${key})`),
      backgroundColor: Pager._key.with(CardFloating._forcedSuit).as((k, s) => suitColor(k, s, key)),
      name: key,
      html: Copy.at[key],
    })),
    figure: {
      position: 'relative',
      padding: '1em 1em 0',
      backgroundColor:  Pager._key.with(CardFloating._forcedSuit).as(suitColor),
      img: {
        width: '100%',
        alt: 'Jack Rabbits boardgame photo',
        src: Pager._key.as({
          home: 'images/photo00.png',
          setup: 'images/photo01.png',
          intro: 'images/photo02.png',
          full: 'images/photo03.png',
          more: 'images/photo04.png',
        }),
        width: '100%',
        maxWidth: '65rem',
        maxHeight: '16rem',
        height: '54vw',
        objectFit: 'cover',
        borderRadius: '.5rem',
        boxShadow: '1px 1px 3px black',
        overflow: 'hidden',
      },
      a_button_video: {
        display: Pager._key.as(val => val === 'home' ? 'block' : 'none'),
        position: 'absolute',
        text: Copy.text({
          es: "Video tutorial",
          en: "Video tutorial",
        }) + " ▶",
        click: e => popUp("video"),
      },
    },
    article: {
      id: "content",
      backgroundColor: Pager._key.with(CardFloating._forcedSuit).as(suitColor),
      content: Pager._content,
    },
  },
  footer: {
    p: versify(Copy.at.subscribe),
    menu_bulletMenu: DOM.linkMenu({
      class: ["button", "buy"],
      marginTop: "-1em",
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
      text: Copy.at.buy,
    }, {
      /*
            href: "http://instagram.com/lenino.jackrabbits",
            target: "_blank",
            text: "Instagram",
          }, {*/
      class: "button song",
      marginTop: "-1em",
      target: "_blank",
      text: Copy.text({
        es: "Disfruta del Album",
        en: "Experience the Music",
      }),
      onclick: () => popUp('playlist'),
    }, {
      class: "button",
      marginTop: "-1em",
      href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
      text: Copy.at.novel,
    }),
    section: {
      marginTop: "1em",
      markdown: Copy.text({
        es: "Creado por [Lenin Comprés](https://lenino.net) usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
        en: "Created by [Lenin Comprés](https://lenino.net) using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
      }),
    },
    onready: () => popUp('mailingList'),
  },
  div: Array(CardNum).fill().map(() => new CardFloating({
    root: 'suityourself/',
  })),
});