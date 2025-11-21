import versify from "./src/aux/versify.js";
import Copy from "./lib/Copy.js";
import ASSETS from "./src/assets.js";
import CardFloating from "./src/CardFloating.js";
import "./src/copy.js";
import "./src/lightbox.js";

// Save current body content to restore later
const bodyHTML = document.body.innerHTML;

// Determine current page from URL
const pageName = window.location.pathname.split("/").pop().split(".").shift();

// List of all page names for the menu
const pageNames = ["home", "setup", "intro", "full", "more", "expansion"];

// Choose how many floating cards to show based on screen size
const cardNum = Math.min(3, Math.floor(Math.sqrt(window.innerWidth * window.innerHeight / window.devicePixelRatio) / 250));

// Set up the whole page structure
DOM.set({
  link: "style.css",
  script: "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
  content: "",
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
    article: {
      id: "content",
      backgroundColor: `var(--${pageName})`,
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
        es: "Creado por [Lenin Comprés](https://lenino.net) usando [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md). Musica de [Lenino](https://incompetech.com) usando [SUNO]().",
        en: "Created by [Lenin Comprés](https://lenino.net) using [DOM.js](https://github.com/lenincompres/DOM.js/blob/main/README.md). Music by [Lenino](https://incompetech.com) using [SUNO]().",
      }),
    },
  },
  aside: Array(cardNum).fill().map(() => new CardFloating({
    root: 'suityourself/',
  })),
});

// Restore original body content
content.let("content", bodyHTML); 

// Show mailing list popup if not coming from same site (to avoid showing it again when navigating internally)
if (!document.referrer || (new URL(document.referrer)).origin !== window.location.origin) {
  popUp('mailingList');
}

// Apply versify to all paragraphs and list items inside elements with class "verse"
DOM.get(".verse p, .verse li").forEach(versify);

// Replace all images with name attribute with the corresponding asset
DOM.get("a.thumbnail, img[name]").forEach(ASSETS.set);