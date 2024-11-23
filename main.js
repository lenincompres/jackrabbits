import versify from "./src/aux/versify.js";
import Copy from "./lib/Copy.js";
import Pager from "./lib/Pager.js";
import ASSETS from "./src/assets.js";
import "./src/copy.js";
import "./src/lightbox.js";
import CardFloating from "./src/CardFloating.js";

import morePage from "./src/pages/more.js";
import fullPage from "./src/pages/full.js";
import introPage from "./src/pages/intro.js";
import setupPage from "./src/pages/setup.js";
import homePage from "./src/pages/home.js";

Pager.add({
  home: homePage,
  setup: setupPage,
  intro: introPage,
  full: fullPage,
  more: morePage,
});

const cardNum = Math.floor(Math.sqrt(window.innerWidth * window.innerHeight / window.devicePixelRatio) / 250);
const cards = Array(cardNum).fill().map(() => new CardFloating({
  root: 'suityourself/',
}));

DOM.set({
  title: "Lenino's Jack Rabbits - " + Copy.get("header"),
  description: "Lenino's Jack Rabbits: The board game for playing cards on a land of wooden shards.",
  keywords: "lenino, jack rabbits, board game, boardgame, alice in wonderlan, card game, playing cards",
  image: {
    src: ASSETS.jackRabbits.src,
    alt: "Jack Rabbits' logo",
  },
  icon: "./images/icon.png",
  link: "style.css",
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
    nav_main: Pager.getLinkMenu(key => ({
      transition: '0.3s ease',
      color: Pager._key.as(val => val === key ? 'black' : `var(--${key})`),
      backgroundColor: Pager._key.as(val => val === key ? `var(--${key})` : 'transparent'),
      name: key,
      html: Copy.get(key),
    })),
    article_main: {
      backgroundColor: Pager._key.as(key => `var(--${key})`),
      content: Pager._content,
    },
  },
  footer: {
    p: versify(Copy.get("subscribe")),
    menu_bulletMenu: DOM.linkMenu({
      text: Copy.get("buy"),
      class: "buy",
      position: "relative",
      margin: 0,
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
    }, {
      text: "Instagram",
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: Copy.get("virtual"),
      href: "https://tabletopia.com/games/jack-rabbits",
      target: "_blank",
    }, {
      text: Copy.get("novel"),
      href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
    }),
    section: {
      marginTop: "1em",
      markdown: Copy.text({
        es: "Creador por [Lenin Comprés](https://lenino/net) usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
        en: "Created by [Lenin Comprés](https://lenino/net) using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
      }),
    },
    onready: e => popUp('mailingList'),
  },
  aside: cards,
});