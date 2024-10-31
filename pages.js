import ASSETS from "./assets.js";
import {
  versify
} from "./auxiliary.js";
import Copy from "./classes/Copy.js";
import Pager from "./classes/Pager.js";

Pager.add("home", {
  section: [{
    class: "carded",
    a_buy: {
      text: Copy.get("home"),
      target: "_blank",
      href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
    },
    img: ASSETS.jackRabbits,
    p: versify(Copy.next()),
    a_video: {
      text: Copy.next() + " ▶",
      click: e => popUp("video"),
    }
  }, {
    class: "letter",
    h2: Copy.next(),
    p: Copy.next(),
  }, {
    h2: Copy.next(),
    p: versify(Copy.next(), ASSETS.royals, Copy.next()),
  }, {
    h2: Copy.next(),
    p: versify(Copy.next(), ASSETS.thumbnailOf("citadel", 45, e => popUp("citadel")), Copy.next()),
    ul_exception: {
      li: Copy.next(),
    }
  }],
  footer: {
    p: versify(Copy.next()),
  },
});

Pager.add("setup", {
  section: [{
    h2: 1,
    h3: Copy.get("setup"),
    p: versify(Copy.next(), ASSETS.thumbnailOf("sample", Copy.lang === Copy.LANG.es.code ? 50 : 42, e => popUp("sample")), Copy.next()),
  }, {
    h2: 2,
    h3: Copy.next(),
    p: versify(Copy.next(), ASSETS.cards, Copy.next())
  }, {
    h2: 3,
    h3: Copy.next(),
    p: versify(Copy.next(), ASSETS.tokens, Copy.next(), ASSETS.endings, Copy.next()),
  }],
  footer: {
    p: versify(Copy.next()),
  },
});

Pager.add("intro", {
  header: {
    h2: versify(Copy.get("intro")),
    p: versify(Copy.next()),
  },
  section: [{
    img: ASSETS.lottery,
    h3: Copy.next(),
    p: versify(Copy.next()),
  }, {
    img: ASSETS.journey,
    h3: Copy.next(),
    p: versify(Copy.next()),
  }, {
    img: ASSETS.acquisition,
    h3: Copy.next(),
    p: versify(Copy.next()),
  }, {
    img: ASSETS.increment,
    h3: Copy.next(),
    p: versify(Copy.next()),
  }, {
    tag: "header",
    a: {
      name: "intro/tranfers",
    },
    h3: Copy.next(),
  }, {
    p: versify(Copy.next(), {
      marginTop: '1.2rem',
      tag: "h4",
      html: Copy.next()
    }, Copy.next()),
    img: ASSETS.rhombi,
  }, {
    h4: Copy.next(),
    p: versify(Copy.next(), {
      tag: "h4",
      html: Copy.next()
    }, Copy.next()),
    img: ASSETS.rides,
  }, {
    h4: Copy.next(),
    p: versify(Copy.next(), {
      tag: "a",
      name: "intro/off",
    }, {
      tag: "h3",
      html: Copy.next()
    }, Copy.next()),
    img: ASSETS.caves,
  }],
  footer: {
    p: versify(Copy.next()),
  },
});

Pager.add("full", {
  header: {
    h2: versify(Copy.get("full")),
    p: versify(Copy.next()),
  },
  section: [{
    boxShadow: "1px 1px 3px black",
    backgroundColor: "rgba(200,240,240,0.3)",
    h3: Copy.next(),
    img: ASSETS.clubs,
    h4: Copy.next(),
    p: versify(Copy.next()),
  }, {
    boxShadow: "1px 1px 3px black",
    backgroundColor: "rgba(220,200,255,0.4)",
    h3: Copy.next(),
    img: ASSETS.spades,
    h4: Copy.next(),
    p: versify(Copy.next()),
  }, {
    boxShadow: "1px 1px 3px black",
    backgroundColor: "rgba(255,200,210,0.4)",
    h3: Copy.next(),
    img: ASSETS.hearts,
    h4: Copy.next(),
    p: versify(Copy.next()),
  }, {
    boxShadow: "1px 1px 3px black",
    backgroundColor: "rgba(250,240,200,0.4)",
    h3: Copy.next(),
    img: ASSETS.diamonds,
    h4: Copy.next(),
    p: versify(Copy.next()),
    h5: Copy.next(),
    p_0: versify(Copy.next()),
  }, {
    tag: "header",
    h4: Copy.get("optional"),
    p: versify(Copy.next()),
  }, {
    class: "optional",
    h4: Copy.next(),
    h5: Copy.next(),
    p: versify(Copy.next()),
    h5_: Copy.next(),
    p_: versify(Copy.next()),
    h5__: Copy.next(),
    p__: versify(Copy.next()),
  }, {
    class: "optional",
    h4: Copy.next(),
    h5: Copy.next(),
    p: versify(Copy.next()),
    h5_: Copy.next(),
    p_: versify(Copy.next()),
    h5__: Copy.next(),
    p__: versify(Copy.next()),
  }, {
    class: "optional",
    h4: Copy.next(),
    h5: Copy.next(),
    p: versify(Copy.next()),
    h5_: Copy.next(),
    p_: versify(Copy.next()),
    h5__: Copy.next(),
    p__: versify(Copy.next()),
  }, {
    class: "optional",
    h4: Copy.next(),
    h5: Copy.next(),
    p: versify(Copy.next()),
    h5_: Copy.next(),
    p_: versify(Copy.next()),
    h5__: Copy.next(),
    p__: versify(Copy.next()),
  }],
});

Pager.add("more", {
  section: [, {
    class: "optional",
    h3: {
      a: {
        text: Copy.get("more"),
        target: "_blank",
        href: "https://www.etsy.com/listing/1724318334/leninos-jack-rabbits",
      }
    },
    p: Copy.next(),
  }, {
    class: "optional",
    h3: {
      a: {
        text: Copy.next(),
        click: e => popUp("mailingList"),
      },
    },
    p: Copy.next(),
  }, {
    class: "optional",
    h3: {
      a: {
        text: Copy.next(),
        target: "_blank",
        href: "https://tabletopia.com/games/jack-rabbits",
      }
    },
    p: Copy.next(),
  }, {
    class: "optional",
    h3: {
      a: {
        text: Copy.next(),
        click: e => popUp("suitYourself"),
      }
    },
    p: Copy.next(),
  }, {
    class: "optional",
    h3: {
      a: {
        text: Copy.next(),
        target: "_blank",
        href: Copy.lang === Copy.LANG.es.code ? 'https://sites.google.com/view/masallaterrafirma' : "https://www.yonderlands.net",
      }
    },
    p: Copy.next(),
  }]
});