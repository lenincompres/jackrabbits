import Copy from "../../lib/Copy.js";
import Card from "./Card.js";
import Song from "./Song.js";

export class CardExpanded extends Card {
  constructor({
    number = Card.MIN,
    suit = Card.SUIT.D,
    root = "",
    numeral = true,
    flipped = false,
  } = {}) {
    super();
  }

  static SUIT = Object.assign({
    FS: {
      symbol: "shields",
      cast: "guard",
      trait: "security",
      color: "#436b95",
      image: "assets/suit-shields.png",
    },
    FT: {
      symbol: "torches",
      cast: "zealot",
      trait: "passion",
      color: "#b7410d",
      image: "assets/suit-torches.png",
    },
    FH: {
      symbol: "horseshoes",
      cast: "outcast",
      trait: "guile",
      color: "#89420a",
      image: "assets/suit-horseshoes.png",
    },
    FA: {
      symbol: "acorns",
      cast: "farmer",
      trait: "land",
      color: "#6e6e30",
      image: "assets/suit-acorns.png",
    },
    NS: {
      symbol: "shells",
      cast: "fisher",
      trait: "freedom",
      color: "#d9463e",
      image: "assets/suit-shells.png",
    },
    NA: {
      symbol: "anchors",
      cast: "pirate",
      trait: "chaos",
      color: "#702963",
      image: "assets/suit-anchors.png",
    },
    NI: {
      symbol: "icicles",
      cast: "abstinent",
      trait: "calm",
      color: "#3aa8c1",
      image: "assets/suit-icicles.png",
    },
    NB: {
      symbol: "bells",
      cast: "aide",
      trait: "service",
      color: "#b5a642",
      image: "assets/suit-bells.png",
    },
    F: {
      symbol: "fleurs",
      cast: "pirate",
      trait: "chaos",
      color: "#d65282",
      image: "assets/suit-fleurs.png",
    },
    T: {
      symbol: "land",
      color: "#228B22",
    },
    A: {
      symbol: "sea",
      color: "#016994",
    },
    W: {
      symbol: "port",
      color: "#96967b",
    }
  }, Card.SUIT);
}

customElements.define("jk-card-expanded", CardExpanded);

export default CardExpanded;

new Song(Copy.text({
  es: "https://cdn1.suno.ai/bccdb590-016b-4c2f-a527-31ebfdf5c699.m4a",
  en: "https://cdn1.suno.ai/a614b239-80dd-40a3-9919-fba789d83c8a.m4a",
}), Copy.text({
  es: "Escudos",
  en: "Sheilds",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/0db920f4-3480-4b7f-b62e-2127995e3d74.m4a",
  en: "https://cdn1.suno.ai/8ad849ef-401a-4f02-a632-b73aeed25a87.m4a",
}), Copy.text({
  es: "Antorchas",
  en: "Torches", // test 
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FT, false), 1);


new Song(Copy.text({
  es: "https://cdn1.suno.ai/76396428-4e55-4fce-9dac-f5e288295eb6.m4a",
  en: "https://cdn1.suno.ai/3f1fcb84-4ddf-4486-bd48-c2edf4d0d1a2.m4a",
}), Copy.text({
  es: "Herraduras",
  en: "Horseshoes",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FH, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/6e389263-7175-4d9e-945b-3d70fe4f1ce8.m4a",
  en: "https://cdn1.suno.ai/eaf217e5-5772-468b-9078-a4adab5add41.m4a",
}), Copy.text({
  es: "Bellotas",
  en: "Acorns",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FA, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/a1832a9a-eb14-4a01-8b48-33a78e5cf643.m4a",
  en: "https://cdn1.suno.ai/5467d768-3ca5-4ec4-adf3-afdbc7b6e41b.m4a",
}), Copy.text({
  es: "Campanas",
  en: "Bells",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NB, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/3223e8c3-f7ff-4cf5-b551-cc41b8697069.m4a",
  en: "https://cdn1.suno.ai/f00df2b3-9cc2-4b9c-8d01-65d620c56f0f.m4a",
}), Copy.text({
  es: "Anclas",
  en: "Anchors",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8c74776c-2443-47b0-9a45-6f6de2a4b35e.m4a",
  en: "https://cdn1.suno.ai/7ba7c12d-068e-41f1-a5e8-fc43df13ad1d.m4a",
}), Copy.text({
  es: "Conchas",
  en: "Shells",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/456f2c4a-098e-44c2-bfb7-a42e8c2a7fce.m4a",
  en: "https://cdn1.suno.ai/6c0c8c69-a97c-400b-9d25-f80d075c8942.m4a",
}), Copy.text({
  es: "Carámbanos",
  en: "Icicles",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NI, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/6ed1faab-c7aa-49eb-aa76-d193d1966897.m4a",
  en: "https://cdn1.suno.ai/d012160f-4c8e-4254-9efc-f21b4924f942.m4a",
}), Copy.text({
  es: "Flores",
  en: "Fleurs",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.F, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5d3a4650-8f89-4605-88d7-64ec15cbe89f.m4a",
  en: "https://cdn1.suno.ai/6a1c0391-7e56-42ce-b527-1431ced9d1e7.m4a",
}), Copy.text({
  es: "Corceles",
  en: "Cavaliers",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.T), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/34237312-db2d-4b12-9db6-08cd724ae40d.m4a",
  en: "https://cdn1.suno.ai/e0e8679f-6bd3-429f-9cf2-6f1d9ac718c6.m4a",
}), Copy.text({
  es: "Enlaces",
  en: "Liaisons",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.A), 1);

Song.shuffleRange(Song.List.length - 3);

//
let wanderTilesUp = false;
new Song(Copy.text({
  es: "https://cdn1.suno.ai/e5d2be26-37cb-48a6-8f89-7cdf83af6de7.m4a",
  en: "https://cdn1.suno.ai/faa0a32c-4a2d-431a-87cc-07b3e90854e6.m4a",
}), Copy.text({
  es: "Andares",
  en: "Allures",
}), () => {
  Song.visitPage("expansion", CardExpanded.SUIT.W);
  popUp("wanderTiles");
  setTimeout(() => popUp(), 1);
}, 1, currentTime => {
  let bridge = Song.round(Copy.text({
    es: "112",
    en: "130",
  }));
  let outro = Song.round(Copy.text({
    es: "170",
    en: "191.5",
  }));
  if (currentTime < bridge && wanderTilesUp || currentTime > outro && wanderTilesUp){
    popUp();
    return wanderTilesUp = false;
  } 
  if (currentTime > bridge && currentTime < outro && !wanderTilesUp) {
    popUp("wanderTiles");
    return wanderTilesUp = true;
  }
});