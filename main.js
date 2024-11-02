import {
  versify
} from "./auxiliary.js";
import Copy from "./classes/Copy.js";
import Pager from "./classes/Pager.js";
import ASSETS from "./assets.js";
import "./copy.js";
import "./pages.js";
import "./lightbox.js";
import CardFloating from "./classes/CardFloating.js";

let cardNum = window.innerWidth * window.innerHeight / window.devicePixelRatio;
cardNum = Math.floor(Math.sqrt(cardNum) / 250);
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
    onready: e => popUp('mailingList'),
  },
  aside: cards,
});