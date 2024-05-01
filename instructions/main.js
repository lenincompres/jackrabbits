import {
  getCookie,
  listify,
  setCookie,
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import LightBox from "./classes/LightBox.js";
import * as PAGE from "./pages.js";
import Copy from "./classes/Copy.js";

let siteCopy = new Copy({
  site: [{
    es: "Instrucciones",
    en: "Instructions",
  }, {
    es: "<small>Preparación</small></br>Inicial",
    en: "Setup",
  }, {
    es: "<small>Juego</small></br>Elemental",
    en: "Intro game",
  }, {
    es: "<small>Juego</small></br>Regular",
    en: "Full game",
  }, {
    es: `Descubre contenido y tutoriales. 
    Taguéanos, suscríbete y comparte.`,
    en: `Find videos, events and more. 
    Follow, tag and share your boards.`,
  }]
});

const navLinks = ["setup", "intro", "full"];

let lightBox = new LightBox(PAGE.POPPER);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - " + siteCopy.get("site"),
  icon: "images/icon.png",
  link: "style.css",

  lightBox: lightBox,

  header: {
    h1: {
      small: [
        "Lenino's ",
        {
          tag: "a",
          text: "JACK RABBITS",
          href: `./`,
        },
        siteCopy.get("site"),
      ],
    },
    menu: {
      class: "bullet_menu",
      content: listify({
        class: Copy.lang === Copy.LANG.EN ? "disabled" : undefined,
        text: "English",
        click: e => Copy.lang = Copy.LANG.EN,
      }, {
        class: Copy.lang === Copy.LANG.ES ? "disabled" : undefined,
        text: "Español",
        click: e => Copy.lang = Copy.LANG.ES,
      })
    },
    nav: {
      id: "main_nav",
      content: listify(navLinks.map(key => ({
        class: {
          active: PAGE.PAGER._KEY.as(p => p === key),
        },
        color: `var(--${key})`,
        html: siteCopy.next(),
        href: `#${key}`,
      })))
    }
  },

  main: {
    article: {
      id: "page_article",
      backgroundColor: PAGE.PAGER._KEY.as(key => `var(--${key})`),
      content: PAGE.PAGER._CONTENT,
    },
  },

  footer: {
    p: versify(siteCopy.next()),
    menu: {
      class: "bullet_menu",
      content: listify({
        text: "@lenino.jackrabbits",
        href: "http://instagram.com/lenino.jackrabbits",
        target: "_blank",
      }, {
        text: "jackrabbits.lenino.net",
        href: "../",
        target: "_blank",
      })
    },
  },

});