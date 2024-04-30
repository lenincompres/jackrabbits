import {
  listify,
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import LightBox from "./classes/LightBox.js";
import {
  PAGE_FULL,
  PAGE_HOME,
  PAGE_INTRO,
  PAGE_OPTIONAL,
  PAGE_SETUP,
  POPUP
} from "./content.js";

let mapper = new Mapper({
  home: {
    content: PAGE_HOME,
  },
  setup: {
    nav: "<small>Preparación</small></br>Inicial",
    content: PAGE_SETUP,
  },
  intro: {
    nav: "<small>Juego</small></br>Elemental",
    content: PAGE_INTRO,
  },
  full: {
    nav: "<small>Juego</small></br>Regular",
    content: PAGE_FULL,
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
    nav: listify(Object.entries(mapper.map).map(([key, val]) => ({
      class: {
        active: mapper._KEY.as(p => p === key),
      },
      name: key,
      color: `var(--${key})`,
      html: val.nav,
      href: `#${key}`,
    })))
  },

  main: {
    article: {
      backgroundColor: mapper._KEY.as(key => `var(--${key})`),
      content: mapper._MAP("content"),
    },
  },

  footer: {
    p: versify(
      `Descubre contenido y tutoriales. 
      Taguéanos, suscríbete y comparte.`,
    ),
    menu: listify([{
      text: "@lenino.jackrabbits",
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: "jackrabbits.lenino.net",
      href: "../",
      target: "_blank",
    }])
  },

});