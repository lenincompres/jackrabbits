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
  es: "https://cdn1.suno.ai/7ebe2edb-0248-468e-8bde-bbd463472746.m4a",
  en: "https://cdn1.suno.ai/30cccf19-43ea-47de-9242-3e0db1cd82fb.m4a",
}), Copy.text({
  es: "Escudos",
  en: "Sheilds",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/19b4e0c1-1a7c-40b1-bf62-291885d189bd.m4a",
  en: "https://cdn1.suno.ai/24cd3ee7-8b57-49c6-a10f-74b42027fba1.m4a",
}), Copy.text({
  es: "Antorchas",
  en: "Torches", // test 
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FT, false), 1);


new Song(Copy.text({
  es: "https://cdn1.suno.ai/76396428-4e55-4fce-9dac-f5e288295eb6.m4a",
  en: "https://cdn1.suno.ai/308c0b78-8f60-4ae7-a81d-765f4b81f2aa.m4a",
}), Copy.text({
  es: "Herraduras",
  en: "Horseshoes",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FH, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/6e389263-7175-4d9e-945b-3d70fe4f1ce8.m4a",
  en: "https://cdn1.suno.ai/fd56cdbf-06d8-4cdb-a9ba-5c14f5b3eb94.m4a",
}), Copy.text({
  es: "Bellotas",
  en: "Acorns",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.FA, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/7dafc484-95e3-4788-9db6-9f5fd90f0c33.m4a",
  en: "https://cdn1.suno.ai/dfd6cae0-db07-421b-a3f6-75b9151f26b5.m4a",
}), Copy.text({
  es: "Campanas",
  en: "Bells",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NB, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/3223e8c3-f7ff-4cf5-b551-cc41b8697069.m4a",
  en: "https://cdn1.suno.ai/d1a61cae-0ac7-4242-b6ad-86462b352786.m4a",
}), Copy.text({
  es: "Anclas",
  en: "Anchors",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8c74776c-2443-47b0-9a45-6f6de2a4b35e.m4a",
  en: "https://cdn1.suno.ai/11b22c3b-da12-449c-b684-2773bd88d38b.m4a",
}), Copy.text({
  es: "Conchas",
  en: "Shells",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8acb5e3f-9ffb-415a-82a9-9dca904a838e.m4a",
  en: "https://cdn1.suno.ai/6f419fc9-c880-4b4b-91d4-099813715fd0.m4a",
}), Copy.text({
  es: "Carámbanos",
  en: "Icicles",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.NI, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/6ed1faab-c7aa-49eb-aa76-d193d1966897.m4a",
  en: "https://cdn1.suno.ai/6515898e-a134-42b2-a8fa-b46b9ae3b3e8.m4a",
}), Copy.text({
  es: "Flores",
  en: "Fleurs",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.F, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/b91f6452-bc5e-4e68-82cb-fe71ea2841f4.m4a",
  en: "https://cdn1.suno.ai/6a1c0391-7e56-42ce-b527-1431ced9d1e7.m4a",
}), Copy.text({
  es: "Corceles",
  en: "Cavaliers",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.T), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/2d5b36c6-4efa-46e5-b106-f79c60435c02.m4a",
  en: "https://cdn1.suno.ai/9233ee4f-c7e0-426e-8fdd-110a7ce201b8.m4a",
}), Copy.text({
  es: "Enlaces",
  en: "Liaisons",
}), () => Song.visitPage("expansion", CardExpanded.SUIT.A), 1);

Song.shuffleRange(Song.List.length - 3);

//
let wanderTilesUp = false;
new Song(Copy.text({
  es: "https://cdn1.suno.ai/9aaf7eed-7273-418f-9d1d-25ec73bea16b.m4a",
  en: "https://cdn1.suno.ai/db9795e3-1547-4797-9185-86efaca3f216.m4a",
}), Copy.text({
  es: "Andares",
  en: "Allures",
}), () => {
  Song.visitPage("expansion", CardExpanded.SUIT.W);
  popUp("wanderTiles");
  setTimeout(() => popUp(), 1);
}, 1, currentTime => {
  let bridge = Song.round(Copy.text({
    es: "111.5",
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