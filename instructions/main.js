import {
  getCookie,
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
import Typer from "./classes/Typer.js";

let l = getCookie("jackrabbits-lang");

let typer = new Typer({
  site: [{
    es: "Instrucciones",
    en: "Instructions",
  }, {
    es: `Descubre contenido y tutoriales. 
    Taguéanos, suscríbete y comparte.`,
    en: `fffffe contenido y tutoriales. 
    Taguéanos, suscríbete y comparte.`,
  }], 
  nav: [{
    es: "<small>Preparación</small></br>Inicial",
  }, {
    es: "<small>Juego</small></br>Elemental",
  }, {
    es: "<small>Juego</small></br>Regular"
  }]
});

let mapper = new Mapper({
  home: {
    content: PAGE_HOME,
  },
  setup: {
    content: PAGE_SETUP,
  },
  intro: {
    content: PAGE_INTRO,
  },
  full: {
    content: PAGE_FULL,
  },
  optional: {
    content: PAGE_OPTIONAL,
  },
});
const navLinks = ["setup", "intro", "full"];

let lightBox = new LightBox(POPUP);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - " + typer.get("site"),
  icon: "images/icon.png",
  link: "style.css",

  lightBox: lightBox,

  // sets anchors of all the mapper's keys
  a: mapper.keys.map(key => ({
    name: key
  })),

  header: {
    menu: listify({
      text: "English",
      click: e => Typer.lang = "en",
    }, {
      text: "Spanish",
      click: e => Typer.lang = "es",
    }),
    h1: {
      small: "Lenino's ",
      a: {
        text: "JACK RABBITS",
        href: `./`,
      },
      small_1: {
        text: typer.get("site"),
      },
    },
    nav: listify(navLinks.map((key, i) => ({
      class: {
        active: mapper._KEY.as(p => p === key),
      },
      color: `var(--${key})`,
      html: typer.get("nav", 0),
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
    p: versify(typer.next()),
    menu: listify({
      text: "@lenino.jackrabbits",
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: "jackrabbits.lenino.net",
      href: "../",
      target: "_blank",
    }),
  },

});