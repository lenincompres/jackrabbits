import {
  getCookie,
  listLinks,
  setCookie,
  versify
} from "./auxiliary.js";
import Pager from "./classes/Pager.js";
import LightBox from "./classes/LightBox.js";
import * as PAGE from "./pager.js";
import Copy from "./classes/Copy.js";
import copy from "./copy.js";

const navLinks = ["setup", "intro", "full", "more"];

let lightBox = new LightBox(PAGE.POPPER);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - " + copy.get("header"),
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
        text: copy.get("header"),
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
      html: copy.next(),
      href: `#${key}`,
      name: key,
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
      versify(copy.get("footer")),
      versify(copy.next()),
    ],
    menu_bulletMenu: listLinks({
      text: copy.next(),
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: copy.next(),
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: copy.next(),
      href: "https://tabletopia.com/games/jack-rabbits",
      target: "_blank",
    }),
    ready: e => popUp("mailingList"),
  },

});