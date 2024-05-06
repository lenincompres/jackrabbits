import ASSETS from "./assets.js";
import {
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import pageCopy from "./pageCopy.js";

export const PAGER = new Mapper({
  home: {
    section: [{
      class: "carded",
      img: ASSETS.jackRabbits,
      p: versify(pageCopy.get("home")),
      a: {
        href: "../",
        text: "jackrabbits.lenino.net",
      }
    }, {
      class: "letter",
      h2: pageCopy.next(),
      p: pageCopy.next(),
    }, {
      h2: pageCopy.next(),
      p: versify(pageCopy.next(), ASSETS.royals, pageCopy.next()),
    }, {
      h2: pageCopy.next(),
      p: versify(pageCopy.next(), ASSETS.citadelThumb, pageCopy.next()),
      ul: {
        li: pageCopy.next(),
      }
    }],
    footer: {
      p: versify(pageCopy.next()),
    },
  },
  setup: {
    section: [{
      h2: 1,
      h3: pageCopy.get("setup"),
      p: versify(pageCopy.next(), ASSETS.sampleThumb, pageCopy.next()),
    }, {
      h2: 2,
      h3: pageCopy.next(),
      p: versify(pageCopy.next(), ASSETS.cards, pageCopy.next())
    }, {
      h2: 3,
      h3: pageCopy.next(),
      p: versify(pageCopy.next(), ASSETS.tokens, pageCopy.next(), ASSETS.endings, pageCopy.next()),
    }],
    footer: {
      p: versify(pageCopy.next()),
    },
  },
  intro: {
    header: {
      p: versify(pageCopy.get("intro")),
      h2: pageCopy.next(),
    },
    section: [{
      img: ASSETS.lottery,
      h3: pageCopy.next(),
      p: versify(pageCopy.next()),
    }, {
      img: ASSETS.journey,
      h3: pageCopy.next(),
      p: versify(pageCopy.next()),
    }, {
      img: ASSETS.acquisition,
      h3: pageCopy.next(),
      p: versify(pageCopy.next()),
    }, {
      img: ASSETS.increment,
      h3: pageCopy.next(),
      p: versify(pageCopy.next()),
    }, {
      tag: "header",
      a: {
        name: "intro/tranfers",
      },
      h3: pageCopy.next(),
    }, {
      p: versify(pageCopy.next(), {
        marginTop: '1.2rem',
        tag: "h4",
        html: pageCopy.next()
      }, pageCopy.next()),
      img: ASSETS.rhombi,
    }, {
      h4: pageCopy.next(),
      p: versify(pageCopy.next(), {
        tag: "h4",
        html: pageCopy.next()
      }, pageCopy.next()),
      img: ASSETS.rides,
    }, {
      h4: pageCopy.next(),
      p: versify(pageCopy.next(), {
        tag: "a",
        name: "intro/off",
      }, {
        tag: "h3",
        html: pageCopy.next()
      }, pageCopy.next()),
      img: ASSETS.caves,
    }],
    footer: {
      p: versify(pageCopy.next()),
    },
  },
  full: {
    header: {
      p: versify(pageCopy.get("full")),
      h2: pageCopy.next(),
    },
    section: {
      boxShadow: "1px 1px 3px black",
      content: [{
        backgroundColor: "rgba(200,240,240,0.3)",
        h3: pageCopy.next(),
        img: ASSETS.clubs,
        h4: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        backgroundColor: "rgba(220,200,255,0.4)",
        h3: pageCopy.next(),
        img: ASSETS.spades,
        h4: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        backgroundColor: "rgba(255,200,210,0.4)",
        h3: pageCopy.next(),
        img: ASSETS.hearts,
        h4: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        backgroundColor: "rgba(250,240,200,0.4)",
        h3: pageCopy.next(),
        img: ASSETS.diamonds,
        h4: pageCopy.next(),
        h5: pageCopy.next(),
        p: versify(pageCopy.next()),
      }]
    },
    footer: {
      p: versify(pageCopy.next()),
    },
  },
  optional: {
    header: {
      h2: pageCopy.get("optional"),
    },
    section: {
      backgroundColor: "rgba(255,255,255,0.6)",
      margin: "0.5rem 1.1rem",
      content: [{
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }, {
        h3: pageCopy.next(),
        p: versify(pageCopy.next()),
      }],
    },
    footer: {
      a: {
        html: pageCopy.next(),
        href: "#full",
      }
    },
  },
}, true);


export const POPPER = new Mapper({
  citadel: {
    h3: pageCopy.get("popup"),
    img: ASSETS.citadel,
    p: versify(pageCopy.next()),
  },
  underground: {
    h3: pageCopy.next(),
    img: ASSETS.underground,
    p: versify(pageCopy.next())
  },
  advancedCitadel: {
    h3: pageCopy.next(),
    img: ASSETS.advancedCitadel,
    p: versify(pageCopy.next())
  },
  roadTiles: {
    h3: pageCopy.next(),
    img: ASSETS.roadTiles,
    p: versify(pageCopy.next())
  },
  sample: {
    h3: pageCopy.next(),
    img: ASSETS.sample,
  },
  endings: {
    content: PAGER.map.home.section[3],
  },
  board: {
    h3: pageCopy.next(),
    p: versify(pageCopy.next()),
    img: ASSETS.guides,
    ul: {
      li: pageCopy.next()
    }
  },
  price: {
    h4: pageCopy.next(),
    p: versify(pageCopy.next())
  },
  mailingList: {
    id: "mailingList",
    h2: pageCopy.next(),
    p: pageCopy.next(),
    iframe: {
      src: "../mailinglist.html",
    }
  }
});