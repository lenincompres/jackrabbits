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

Pager.add({
  home: homePage,
  setup: setupPage,
  intro: introPage,
  full: fullPage,
  more: morePage,
  expansion: expansionPage,
});

const cardNum = Math.floor(Math.sqrt(window.innerWidth * window.innerHeight / window.devicePixelRatio) / 250);

DOM.set({
  title: "Lenino's Jack Rabbits - " + Copy.at.header,
  description: "Lenino's Jack Rabbits: The board game for playing cards on a land of wooden shards.",
  keywords: "lenino, jack rabbits, board game, boardgame, alice in wonderlan, card game, playing cards",
  author: "Lenin Compres",
  image: {
    src: ASSETS.jackRabbits.src,
    alt: "Jack Rabbits' logo",
  },
  icon: "./images/icon.png",
  link: "style.css",
  header: {
    h1: {
      a: {
        position: "relative",
        href: "#home",
        small_logoSuper: "Lenino's",
        span_logoName: "Jack Rabbits",
        small_logoSub: Copy.at.header,
      },
    },
    menu_bulletMenu: Copy.getLinkMenu(),
  },
  main: {
    nav_main: Pager.getLinkMenu(key => ({
      transition: '0.3s ease',
      color: Pager._key.as(val => val === key ? 'black' : `var(--${key})`),
      backgroundColor: Pager._key.as(val => val === key ? `var(--${key})` : 'transparent'),
      name: key,
      html: Copy.at[key],
    })),
    figure: {
      position: 'relative',
      padding: '1em 1em 0',
      backgroundColor: Pager._key.as(key => `var(--${key})`),
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
        maxWidth: '1000px',
        height: '16em',
        objectFit: 'cover',
        borderRadius: '.5em',
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
    article_main: {
      backgroundColor: Pager._key.as(key => `var(--${key})`),
      content: Pager._content,
    },
  },
  footer: {
    p: versify(Copy.at.subscribe),
    menu_bulletMenu: {
      lineHeight: "2.25em", 
      content: DOM.linkMenu({
        text: Copy.at.buy,
        class: ["button", "buy"],
        marginTop: "-1em",
        href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
        target: "_blank",
      }, {
        text: "Instagram",
        href: "http://instagram.com/lenino.jackrabbits",
        target: "_blank",
      }, {
        text: Copy.at.virtual,
        href: "https://tabletopia.com/games/jack-rabbits",
        target: "_blank",
      }, {
        text: Copy.at.novel,
        class: "button",
        marginTop: "-1em",
        href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
        target: "_blank",
      }),
    },
    section: {
      marginTop: "1em",
      markdown: Copy.text({
        es: "Creado por [Lenin Comprés](https://lenino.net) usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
        en: "Created by [Lenin Comprés](https://lenino.net) using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
      }),
    },
    onready: () => popUp('mailingList'),
  },
  aside: Array(cardNum).fill().map(() => new CardFloating({
    root: 'suityourself/',
  })),
});