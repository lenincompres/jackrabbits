import {
  getCookie,
  listify,
  setCookie,
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import LightBox from "./classes/LightBox.js";
import * as CONTENT from "./content.js";
import Typer from "./classes/Typer.js";

let typer = new Typer({
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

let lightBox = new LightBox(CONTENT.POPPER);
window.popUp = key => lightBox.open(key);

DOM.set({
  title: "Lenino's Jack Rabbits - " + typer.get("site"),
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
        typer.get("site"),
      ],
    },
    menu: {
      class: "bullet_menu",
      content: listify({
        class: Typer.lang === Typer.LANG.EN ? "disabled" : undefined,
        text: "English",
        click: e => Typer.lang = Typer.LANG.EN,
      }, {
        class: Typer.lang === Typer.LANG.ES ? "disabled" : undefined,
        text: "Español",
        click: e => Typer.lang = Typer.LANG.ES,
      })
    },
    nav: {
      id: "main_nav",
      content: listify(navLinks.map(key => ({
        class: {
          active: CONTENT.PAGER._KEY.as(p => p === key),
        },
        color: `var(--${key})`,
        html: typer.next(),
        href: `#${key}`,
      })))
    }
  },

  main: {
    article: {
      id: "page_article",
      backgroundColor: CONTENT.PAGER._KEY.as(key => `var(--${key})`),
      content: CONTENT.PAGER._CONTENT,
    },
  },

  footer: {
    p: versify(typer.next()),
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