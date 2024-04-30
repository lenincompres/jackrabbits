import {
  versify
} from "./auxiliary.js";
import Router from "./classes/Router.js";
import LightBox from "./classes/LightBox.js";
import {
  PAGE_FULL,
  PAGE_HOME,
  PAGE_INTRO,
  PAGE_OPTIONAL,
  PAGE_SETUP,
  POPUP
} from "./content.js";

let router = new Router({
  home: {
    content: PAGE_HOME,
  },
  setup: {
    title: "<small>Preparación</small></br>Inicial",
    content: PAGE_SETUP,
    nav: true,
  },
  intro: {
    title: "<small>Juego</small></br>Elemental",
    content: PAGE_INTRO,
    nav: true,
  },
  full: {
    title: "<small>Juego</small></br>Regular",
    content: PAGE_FULL,
    nav: true,
  },
  optional: {
    content: PAGE_OPTIONAL,
  },
});

let lightBox = new LightBox(POPUP);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - Instrucciones",
  icon: "images/icon.png",
  link: "style.css",

  lightBox: lightBox,

  header: {
    h1: {
      small: "Lenino's ",
      a: {
        text: "JACK RABBITS",
        href: `./`,
      },
      small_1: " Instrucciones",
    },
    nav: {
      ul: {
        li: router.mapNavLinks((page, title) => ({
          class: {
            active: router._page.as(p => p === page),
          },
          a: {
            name: page,
            color: `var(--${page})`,
            html: title,
            href: `#${page}`,
          }
        }))
      }
    }
  },

  main: {
    article: {
      backgroundColor: router._page.as(page => `var(--${page})`),
      content: router._content,
    },
  },

  footer: {
    p: versify(
      `Descubre contenido y tutoriales. 
      Taguéanos, suscríbete y comparte.`,
      `@lenino.jackrabbits • <a href="../">jackrabbits.lenino.net</a>`
    ),
  },

});