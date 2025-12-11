import versify from "./aux/versify.js";
import Copy from "../lib/Copy.js";
import Pager from "../lib/Pager.js";
import CardFloating from "./elements/CardFloating.js";
import "./copy.js";
import morePage from "./pages/more.js";
import fullPage from "./pages/full.js";
import introPage from "./pages/intro.js";
import setupPage from "./pages/setup.js";
import homePage from "./pages/home.js";
import "./lightbox.js";
import expansionPage from "./pages/expansions.js";
import {
  mixColor,
  suitColor
} from "./aux/color.js";
import MediaFigure from "./elements/MediaFigure.js";

Pager.add({
  home: homePage,
  setup: setupPage,
  intro: introPage,
  full: fullPage,
  more: morePage,
  expansion: expansionPage,
});

const heroOptions = {
  a: {
    class: "button video",
    text: Copy.text({
      es: "Video tutorial",
      en: "Video tutorial",
    }) + " ▶",
    click: e => popUp("video"),
  },
};
const heroStill = "images/photo01.png";

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
    nav: Pager.getLinkMenu(key => ({
      transition: '0.3s ease',
      color: Pager._key.as(val => val === key ? 'black' : `var(--${key})`),
      backgroundColor: Pager._key.with(CardFloating._forcedSuit).as((k, s) => suitColor(k, s, key)),
      name: key,
      html: Copy.at[key],
    })),
    section: {
      id: "hero",
      backgroundColor: Pager._key.with(CardFloating._forcedSuit).as(suitColor),
      content: Pager._key.as({
        default: new MediaFigure('images/video/home.mp4', heroOptions, heroStill),
        setup: new MediaFigure('images/video/setup.mp4', heroOptions, heroStill),
        intro: new MediaFigure('images/video/intro.mp4', heroOptions, heroStill),
        full: new MediaFigure('images/photo03.png', heroOptions),
        more: new MediaFigure('images/photo04.png', heroOptions),
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
      marginTop: "1.5rem",
      p: [
        versify(Copy.text({
          es: `Creado por <a href="https://lenino.net">Lenin A. Comprés</a>
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