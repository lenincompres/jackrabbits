import versify from "./src/aux/versify.js";
import Copy from "./lib/Copy.js";
import ASSETS from "./src/assets.js";
import CardFloating from "./src/CardFloating.js";
import "./src/copy.js";
import "./src/lightbox.js";

const pageNames = ["home", "setup", "intro", "full", "more", "expansion"];
const pageName = window.location.pathname.split("/").pop().split(".").shift();

const CardNum = Math.min(3, Math.floor(Math.sqrt(window.innerWidth * window.innerHeight / window.devicePixelRatio) / 250));

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
    menu_bulletMenu: Copy.getLinkMenu(),
  },
  main: {
    nav_main: DOM.linkMenu(pageNames.map(key => ({
      transition: '0.3s ease',
      color: pageName === key ? 'black' : `var(--${key})`,
      backgroundColor: pageName === key ? `var(--${key})` : 'transparent',
      name: key,
      alt: key,
      href: `${key}.html`,
      html: Copy.at[key],
    }))),
    figure: {
      position: 'relative',
      padding: '1em 1em 0',
      backgroundColor: `var(--${pageName})`,
      img: {
        width: '100%',
        alt: 'Jack Rabbits boardgame photo',
        src: ({
          home: 'images/photo00.png',
          setup: 'images/photo01.png',
          intro: 'images/photo02.png',
          full: 'images/photo03.png',
          more: 'images/photo04.png',
        })[pageName],
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '16em',
        height: '54vw',
        objectFit: 'cover',
        borderRadius: '.5em',
        boxShadow: '1px 1px 3px black',
        overflow: 'hidden',
      },
      a_button_video: {
        display: pageName === 'home' ? 'block' : 'none',
        position: 'absolute',
        text: Copy.text({
          es: "Video tutorial",
          en: "Video tutorial",
        }) + " ▶",
        click: e => popUp("video"),
      },
    },
    article_main: {
      id: "content",
      backgroundColor: `var(--${pageName})`,
      content: DOM.get("#content"),
    },
  },
  footer: {
    section_verse: {
      p: Copy.at.subscribe,
    },
    menu_bulletMenu: DOM.linkMenu({
      class: ["button", "buy"],
      marginTop: "-1em",
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      target: "_blank",
      text: Copy.at.buy,
    }, {
      href: "http://instagram.com/lenino.jackrabbits",
      target: "_blank",
      text: "Instagram",
    }, {
      class: "button",
      marginTop: "-1em",
      href: `https://${Copy.lang === Copy.LANG.es.code ? 'terrafirma' : 'www'}.yonderlands.net`,
      target: "_blank",
      text: Copy.at.novel,
    }),
    section: {
      marginTop: "1em",
      markdown: Copy.text({
        es: "Creado por [Lenin Comprés](https://lenino.net) usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
        en: "Created by [Lenin Comprés](https://lenino.net) using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md).",
      }),
    },
    onready: () => popUp('mailingList'),
  },
  aside: Array(CardNum).fill().map(() => new CardFloating({
    root: 'suityourself/',
  })),
});


DOM.get(".verse p, .verse li").forEach(v => v.let("content", versify(v.innerHTML)));

DOM.get("img[name]").forEach(img => img.let("content", ASSETS[img.get("name")]));