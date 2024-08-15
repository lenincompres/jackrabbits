import SuitYourself from "../suityourself/SuitYourself.js";
import ASSETS from "./assets.js";
import {
  versify
} from "./auxiliary.js";
import Copy from "./classes/Copy.js";
import Pager from "./classes/Pager.js";
import copy from "./copy.js";

export const PAGER = new Pager({
  home: {
    section: [{
      class: "carded",
      a_buy: {
        text: copy.get("home"),
        target: "_blank",
        href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      },
      img: ASSETS.jackRabbits,
      p: versify(copy.next()),
      a_video: {
        text: copy.next() + " ▶",
        click: e => popUp("video"),
      }
    }, {
      class: "letter",
      h2: copy.next(),
      p: copy.next(),
    }, {
      h2: copy.next(),
      p: versify(copy.next(), ASSETS.royals, copy.next()),
    }, {
      h2: copy.next(),
      p: versify(copy.next(), ASSETS.thumbnailOf("citadel", 45, e => popUp("citadel")), copy.next()),
      ul_exception: {
        li: copy.next(),
      }
    }],
    footer: {
      p: versify(copy.next()),
    },
  },
  setup: {
    section: [{
      h2: 1,
      h3: copy.get("setup"),
      p: versify(copy.next(), ASSETS.thumbnailOf("sample", Copy.lang === Copy.LANG.ES.code ? 50 : 42, e => popUp("sample")), copy.next()),
    }, {
      h2: 2,
      h3: copy.next(),
      p: versify(copy.next(), ASSETS.cards, copy.next())
    }, {
      h2: 3,
      h3: copy.next(),
      p: versify(copy.next(), ASSETS.tokens, copy.next(), ASSETS.endings, copy.next()),
    }],
    footer: {
      p: versify(copy.next()),
    },
  },
  intro: {
    header: {
      h2: versify(copy.get("intro")),
      p: versify(copy.next()),
    },
    section: [{
      img: ASSETS.lottery,
      h3: copy.next(),
      p: versify(copy.next()),
    }, {
      img: ASSETS.journey,
      h3: copy.next(),
      p: versify(copy.next()),
    }, {
      img: ASSETS.acquisition,
      h3: copy.next(),
      p: versify(copy.next()),
    }, {
      img: ASSETS.increment,
      h3: copy.next(),
      p: versify(copy.next()),
    }, {
      tag: "header",
      a: {
        name: "intro/tranfers",
      },
      h3: copy.next(),
    }, {
      p: versify(copy.next(), {
        marginTop: '1.2rem',
        tag: "h4",
        html: copy.next()
      }, copy.next()),
      img: ASSETS.rhombi,
    }, {
      h4: copy.next(),
      p: versify(copy.next(), {
        tag: "h4",
        html: copy.next()
      }, copy.next()),
      img: ASSETS.rides,
    }, {
      h4: copy.next(),
      p: versify(copy.next(), {
        tag: "a",
        name: "intro/off",
      }, {
        tag: "h3",
        html: copy.next()
      }, copy.next()),
      img: ASSETS.caves,
    }],
    footer: {
      p: versify(copy.next()),
    },
  },
  full: {
    header: {
      h2: versify(copy.get("full")),
      p: versify(copy.next()),
    },
    section: [{
      boxShadow: "1px 1px 3px black",
      backgroundColor: "rgba(200,240,240,0.3)",
      h3: copy.next(),
      img: ASSETS.clubs,
      h4: copy.next(),
      p: versify(copy.next()),
    }, {
      boxShadow: "1px 1px 3px black",
      backgroundColor: "rgba(220,200,255,0.4)",
      h3: copy.next(),
      img: ASSETS.spades,
      h4: copy.next(),
      p: versify(copy.next()),
    }, {
      boxShadow: "1px 1px 3px black",
      backgroundColor: "rgba(255,200,210,0.4)",
      h3: copy.next(),
      img: ASSETS.hearts,
      h4: copy.next(),
      p: versify(copy.next()),
    }, {
      boxShadow: "1px 1px 3px black",
      backgroundColor: "rgba(250,240,200,0.4)",
      h3: copy.next(),
      img: ASSETS.diamonds,
      h4: copy.next(),
      p: versify(copy.next()),
      h5: copy.next(),
      p_0: versify(copy.next()),
    }, {
      tag: "header",
      h4: copy.get("optional"),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }, {
      class: "optional",
      h5: copy.next(),
      p: versify(copy.next()),
    }],
  },
  more: {
    section: [, {
      class: "optional",
      h3: {
        a: {
          text: copy.get("more"),
          target: "_blank",
          href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
        }
      },
      p: copy.next(),
    }, {
      class: "optional",
      h3: {
        a: {
          text: copy.next(),
          click: e => popUp("mailingList"),
        },
      },
      p: copy.next(),
    }, {
      class: "optional",
      h3: {
        a: {
          text: copy.next(),
          target: "_blank",
          href: "https://tabletopia.com/games/jack-rabbits",
        }
      },
      p: copy.next(),
    }, {
      class: "optional",
      h3: {
        a: {
          text: copy.next(),
          click: e => popUp("suitYourself"),
        }
      },
      p: copy.next(),
    }, {
      class: "optional",
      h3: {
        a: {
          text: copy.next(),
          target: "_blank",
          href: Copy.lang === Copy.LANG.ES.code ? 'https://sites.google.com/view/masallaterrafirma' : "https://www.yonderlands.net",
        }
      },
      p: copy.next(),
    }]
  }
});


export const POPPER = new Pager({
  video: {
    iframe: {
      attributes: {
        width: "100%",
        height: 315,
        src: Copy.lang === Copy.LANG.ES.code ? "https://www.youtube.com/embed/8pG2yxqUMC0?si=A3_b6yIdTcc25p86" : "https://www.youtube.com/embed/p3rG3GI0S_E?si=x3335Hk_uLaZZ6aS",
        title: "YouTube video player",
        frameborder: 0,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true,
      }
    }
  },
  citadel: {
    h3: copy.get("popup"),
    img: ASSETS.citadel,
    p: versify(copy.next()),
  },
  underground: {
    h3: copy.next(),
    img: ASSETS.underground,
    p: versify(copy.next())
  },
  advancedCitadel: {
    h3: copy.next(),
    img: ASSETS.advancedCitadel,
    p: versify(copy.next())
  },
  roadTiles: {
    h3: copy.next(),
    img: ASSETS.roadTiles,
  },
  sample: {
    h3: copy.next(),
    img: ASSETS.sample,
  },
  endings: {
    content: PAGER.map.home.section[3],
  },
  board: {
    h3: copy.next(),
    p: versify(copy.next()),
    img: ASSETS.guides,
  },
  price: {
    h4: copy.next(),
    p: versify(copy.next())
  },
  mailingList: {
    id: "mailingList",
    h2: copy.next(),
    p: copy.next(),
    iframe: {
      src: "../mailinglist.html",
    }
  },
  suitYourself: {
    iframe: {
      src: "suityourself/",
      width: "100%",
      height: "45rem",
    }
  },
  store: {
    iframe: {
      src: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      width: "100%",
      height: "45rem",
    }
  }
});