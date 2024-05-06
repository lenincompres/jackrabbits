import {
  getCookie,
  listLinks,
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
    es: `Suscríbete al <a class="pop" onclick="popUp('mailingList')"><b>Listado de Correos</b></a>
    y apoya la campaña que tendremos.`,
    en: `Please join our <a class="pop" onclick="popUp('mailingList')"><b>Mailing List</b></a> 
    and learn about our campaign.`,
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
  lang: Copy.lang,

  lightBox: lightBox,

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
        text: siteCopy.get("site"),
      }],
    },
    menu_bulletMenu: listLinks({
      class: Copy.lang === Copy.LANG.EN ? "selected" : undefined,
      text: "English",
      click: e => Copy.lang = Copy.LANG.EN,
    }, {
      class: Copy.lang === Copy.LANG.ES ? "selected" : undefined,
      text: "Español",
      click: e => Copy.lang = Copy.LANG.ES,
    })
  },

  nav: {
    id: "main_nav",
    content: listLinks(navLinks.map(key => ({
      class: {
        active: PAGE.PAGER._KEY.as(p => p === key),
      },
      color: `var(--${key})`,
      html: siteCopy.next(),
      href: `#${key}`,
    })))
  },

  main: {
    article: {
      id: "pageArticle",
      backgroundColor: PAGE.PAGER._KEY.as(key => `var(--${key})`),
      content: PAGE.PAGER._CONTENT,
    },
  },

  footer: {
    p: [
      versify(siteCopy.next()),
      versify(siteCopy.next()), 
    ],
    menu_bulletMenu: listLinks({
      text: "@lenino.jackrabbits",
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: "jackrabbits.lenino.net",
      href: "../",
      target: "_blank",
    }, {
      text: "Virtual version",
      href: "https://tabletopia.com/games/jack-rabbits",
      target: "_blank",
    }),
    ready: e => popUp("mailingList"),
  },

});