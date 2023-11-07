import SuitYourself from "./suityourself/SuitYourself.js";
import TopMenu from "./TopMenu.js";
import TEXT from "./TEXT.js";
import RandomCard from "./components/RandomCard.js";
import Card from "./components/Card.js";
import Aux from "./components/Aux.js";
import VideoCard from "./components/VideoCard.js";
import GalleryCard from "./components/GalleryCard.js";

const THIS_URL = window.location.href.split('#')[0].split('?')[0];
const ROOT = THIS_URL.substr(0, THIS_URL.lastIndexOf("/"));

const JRName = '<b><span class="charm">J</span><span class="fortune">A</span>C<span class="courage">K</span> R<span class="wisdom">A</span>BBITS</b>';

const css = {
  section: {
    margin: '1em 0'
  },
  a: {
    color: "darkblue",
    hover: {
      color: "royalblue",
    }
  },
  h: {
    fontFamily: 'title',
    margin: '1em 0 0 0',
    lineHeight: '1.5em',
    textAlign: 'center',
  },
  h4: {
    margin: 0,
  },
  p: {
    textAlign: "left",
    margin: '0 0 1em 0',
    textIndent: "1.5em",
  },
  i: {
    fontStyle: 'normal'
  },
  big: {
    fontSize: '1.8em'
  },
  b: {
    fontFamily: 'title',
    textShadow: 'black 1px 1px',
  },
  _wisdom: {
    color: 'teal'
  },
  _courage: {
    color: 'darkslateblue'
  },
  _fortune: {
    color: 'darkgoldenrod'
  },
  _charm: {
    color: 'brown'
  },
};

const LAUNCH_EVENT = {
  background: "darkgreen",
  borderRadius: "0.5em",
  boxShadow: "1px 1px 3px black",
  color: "ivory",
  a: {
    src: "https://www.eventbrite.com/e/jack-rabbits-launch-event-tickets-599686116317",
    img: {
      src: "assets/cover.png",
      width: "100%",
    }
  },
  overflow: "hidden",
  p: {
    padding: "0 2em",
    content: TEXT.LAUNCH_DESCRIPTION[LANG]
  }
};

const MAILING_LIST = {
  padding: "0 1em",
  background: "darkgreen",
  borderRadius: "0.5em",
  boxShadow: "1px 1px 3px black",
  backgroundColor: "ivory",
  paddingBottom: "1em",
  h2: {
    padding: "0.25em",
    text: TEXT.MAILINGLIST.TITLE[LANG],
  },
  p: {
    content: TEXT.MAILINGLIST.INFO[LANG],
  },
  iframe: {
    src: "mailinglist.html",
    width: "100%",
    height: "auto",
  }
}

const TABLETOPIA = {
  h2: TEXT.TABLETOPIA.TITLE[LANG],
  a: {
    href: "https://tabletopia.com/games/jack-rabbits",
    target: "_blank",
    img: {
      width: "100%",
      src: "images/tabletopia_link.png",
    }
  },
  p: TEXT.TABLETOPIA.INFO[LANG]
};

const videoCard = new VideoCard({
  background: 'url(images/splash.png) center center no-repeat',
  backgroundSize: "cover",
  backgroundColor: 'lightgoldenrodyellow',
}, "https://www.youtube.com/embed/BOxUKVh2nrA?si=kgH7EGgC27-YkVGQ", {
  width: "100%",
  maxWidth: "600px",
  height: "400px",
});

const galleryImages = (new Array(8)).fill().map((_, i) => `images/gallery/image${i}.jpg`);
const GALLERY = new GalleryCard(galleryImages, {
  width: "100%",
  height: "500px",
});
GALLERY.elt.set({
  margin: "3em 0",
});

const FOOTER = {
  section: [{
    h2: {
      text: TEXT.INSTRUCTIONS[LANG],
    },
    ul: {
      fontSize: "1.5em",
      display: "flex",
      justifyContent: "space-around",
      li: [{
        a: {
          href: "assets/instructions_esp.pdf",
          target: "_blank",
          text: "Español",
        },

      }, {
        a: {
          href: "assets/instructions_eng.pdf",
          target: "_blank",
          text: "English",
        },
      }]
    }
  }, {
    marginTop: "3em",
    textAlign: "center",
    a: {
      display: "block",
      href: "http://lenino.net",
      target: "_blank",
      img: {
        width: "4em",
        src: "http://lenino.net/assets/leninoLogo.png",
        alt: "Lenino.net"
      },
      div: "Lenino.net",
    }
  }],
  p: TEXT.FOLLOW_US[LANG],
};

const CARD_FLIP = {
  div: [new RandomCard(true), new RandomCard(true, 1), ],
  h4: TEXT.CATCH_PRHASE[LANG],
};

DOM.set({
  font: [{
    fontFamily: 'title',
    src: 'url("assets/IrishGrover-Regular.ttf")'
  }, {
    fontFamily: 'body',
    src: 'url("assets/Chalkboard.ttc")'
  }],
  meta: "utf-8",
  title: "Lenino's Jack Rabbits",
  viewport: "width=device-width, minimum-scale=1.0, maximum-scale=1.0",
  icon: "images/icon.png",
  css: css,
  width: '100%',
  height: '100%',
  padding: '1.5em',
  margin: '0px',
  overflowX: "hidden",
  backgroundColor: '#EBEBD5',
  backgroundImage: 'url(images/bg.png)',
  fontFamily: "body",
  fontSize: "16px",
  textAlign: "center",
  header: new TopMenu(ROOT),
  main: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '0 0 10px',
    section: [{
        h1: {
          marginTop: 0,
          fontSize: "4em",
          content: JRName
        },
        h4: TEXT.SUBTITLE[LANG],
        p: `Lenino's ${JRName} ` + TEXT.INTRO[LANG],
      }, {
        margin: "0 -10em",
        div: videoCard,
      }, {
        p: TEXT.CONTAINS[LANG],
      },{
        a: {
          color: "black",
          textShadow: "1px 1px 3px lightgoldenrodyellow",
          fontSize: "1.5em",
          display: "inline-block",
          background: "goldenrod",
          border: "solid 0.1em darkgoldenrod",
          boxShadow: "1px 1px 3px black",
          margin: "0 0.5em",
          padding: "0.5em 1em",
          borderRadius: "2em",
          span: TEXT.CONTACT[LANG],
          href: "https://py.pl/26TSag",
          target: "_blank",
        }
      }, 
      MAILING_LIST,
      TABLETOPIA,
      CARD_FLIP,
      new SuitYourself(ROOT + "/suityourself/"),
      GALLERY,
      FOOTER
    ]
  },
  click: e => videoCard.close(),
});