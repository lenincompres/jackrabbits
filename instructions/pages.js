import ASSETS from "./assets.js";
import {
  versify
} from "./auxiliary.js";
import Mapper from "./classes/Mapper.js";
import copy from "./copy.js";

export const PAGER = new Mapper({
  home: {
    section: [{
      class: "carded",
      img: ASSETS.jackRabbits,
      p: versify(copy.get("home")),
      a: {
        href: "../",
        text: "jackrabbits.lenino.net",
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
      p: versify(copy.next(), ASSETS.citadelThumb, copy.next()),
      ul: {
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
      p: versify(copy.next(), ASSETS.sample, copy.next()),
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
      p: versify(copy.get("intro")),
      h2: copy.next(),
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
      a: {
        name: "intro/tranfers",
      },
      tag: "header",
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
      p: versify(copy.get("full")),
      h2: copy.next(),
    },
    section: {
      boxShadow: "1px 1px 3px black",
      content: [{
        backgroundColor: "rgba(200,250,250,0.3)",
        h3: copy.next(),
        img: ASSETS.clubs,
        h4: copy.next(),
        p: versify(copy.next()),
      }, {
        backgroundColor: "rgba(220,200,255,0.6)",
        h3: copy.next(),
        img: ASSETS.spades,
        h4: copy.next(),
        p: versify(copy.next()),
      }, {
        backgroundColor: "rgba(250,200,220,0.6)",
        h3: copy.next(),
        img: ASSETS.hearts,
        h4: copy.next(),
        p: versify(copy.next()),
      }, {
        backgroundColor: "rgba(250,240,200,0.4)",
        h3: copy.next(),
        img: ASSETS.diamonds,
        h4: copy.next(),
        h5: copy.next(),
        p: versify(copy.next()),
      }]
    },
    footer: {
      p: versify(copy.next()),
    },
  },
  optional: {
    header: {
      h2: copy.get("optional"),
    },
    section: {
      backgroundColor: "rgba(255,255,255,0.6)",
      margin: "0.5rem 1.1rem",
      content: [{
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }, {
        h3: copy.next(),
        p: versify(copy.next()),
      }],
    },
    footer: {
      a: {
        html: copy.next(),
        href: "#full",
      }
    },
  },
}, true);


export const POPPER = new Mapper({
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
    p: versify(copy.next())
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
    ul: {
      li: copy.next()
    }
  },
  price: {
    h4: copy.next(),
    p: versify(copy.next())
  }
});