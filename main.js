import {
  listLinks,
  versify
} from "./auxiliary.js";
import LightBox from "./classes/LightBox.js";
import * as PAGE from "./pager.js";
import Copy from "./classes/Copy.js";
import copy from "./copy.js";

const navLinks = ["setup", "intro", "full", "more"];

let lightBox = new LightBox(PAGE.POPPER);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - " + copy.get("header"),
  icon: "./images/icon.png",
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
    menu_bulletMenu: listLinks(Object.values(Copy.LANG).map(lang => ({
      class: Copy.lang === lang.code ? "selected" : undefined,
      text: lang.name,
      click: e => Copy.lang = lang.code,
    }))),
  },

  aside: {
    img:{
      margin: '1rem',
      width: '12rem',
      height: '13rem',
      src: 'https://i.etsystatic.com/52679041/r/il/c0dc16/6069187861/il_794xN.6069187861_a4dz.jpg',
    },
    main: PAGE.POPPER.map['mailingList'],
  },

  main: {
    nav: {
      id: "main_nav",
      content: listLinks(navLinks.map(key => ({
        class: {
          active: PAGE.PAGER._key.as(p => p === key),
        },
        color: PAGE.PAGER._key.as(p => p === key ? 'black' : `var(--${key})`),
        backgroundColor: PAGE.PAGER._key.as(p => p === key ? `var(--${key})` : 'black'),
        html: copy.next(),
        href: `#${key}`,
        name: key,
      })))
    },
    article: {
      id: "pageArticle",
      backgroundColor: PAGE.PAGER._key.as(key => `var(--${key})`),
      content: PAGE.PAGER._content,
    },
  },

  footer: {
    p: versify(copy.get("footer")),
    menu_bulletMenu: listLinks({
      text: copy.next(),
      class: "buy",
      position: "relative",
      margin: 0,
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
    }, {
      text: copy.next(),
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
    }, {
      text: copy.next(),
      href: "https://tabletopia.com/games/jack-rabbits",
      target: "_blank",
    }, {
      text: copy.next(),
      href: `https://${Copy.lang === Copy.LANG.ES.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
    }),
    //ready: e => popUp("mailingList"),
  },

});