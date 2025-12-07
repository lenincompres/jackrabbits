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
import {
  mixColor,
  suitColor
} from "./src/aux/color.js";

Pager.add({
  home: homePage,
  setup: setupPage,
  intro: introPage,
  full: fullPage,
  more: morePage,
  expansion: expansionPage,
});

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
      id: "hero",
      backgroundColor: Pager._key.with(CardFloating._forcedSuit).as(suitColor),
      content: Pager._key.as({
        home: ASSETS.getMedia('images/video/home.mp4'),
        setup: ASSETS.getMedia('images/video/setup.mp4'),
        intro: ASSETS.getMedia('images/video/intro.mp4'),
        full: ASSETS.getMedia('images/photo03.png'),
        more: ASSETS.getMedia('images/photo04.png'),
      }),
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
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
      text: Copy.at.buy,
    }, {
      class: "button song",
      target: "_blank",
      text: Copy.text({
        es: "Disfruta del Album",
        en: "Experience the Music",
      }),
      onclick: () => popUp('playlist'),
    }, {
      class: "button",
      href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
      text: Copy.at.novel,
    }),
    section: {
      p: [
        versify(Copy.text({
          es: `Creado por [Lenin A. Comprés](https://lenino.net),
          usando <a href:"https://github.com/lenincompres/DOM.js/blob/main/README.md">DOM.js</a>.`,
          en: `Made by <a href="https://lenino.net">Lenin A. Comprés</a>.
          Website built with <a href="https://github.com/lenincompres/DOM.js/blob/main/README.md">DOM.js</a>.`,
        })), Copy.text({
          es: "© 2024 Lenino LLC Todos los derechos reservados.",
          en: "© 2024 Lenino LLC All rights reserved.",
        })
      ],
    },
    onready: () => popUp('mailingList'),
  },
});

CardFloating.set();