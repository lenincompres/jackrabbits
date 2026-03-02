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
    }
  }, Card.SUIT);
}

customElements.define("jk-card-expanded", CardExpanded);

export default CardExpanded;

new Song(Copy.text({
  es: "https://cdn1.suno.ai/b4cce962-19e4-4d29-b496-58fa87fd5980.m4a",
  en: "https://cdn1.suno.ai/67d28132-5be3-49a2-a63f-c523dc9d11af.m4a",
}), Copy.text({
  es: "Escudos",
  en: "Sheilds",
}), () => visitSong("expansion", CardExpanded.SUIT.FS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/4e7558a7-2b0b-47ec-a33d-fd2a0d6abf78.m4a",
  en: "https://cdn1.suno.ai/1b757e88-c88a-44ef-9bf3-920008c593c4.m4a",
}), Copy.text({
  es: "Antorchas",
  en: "Torches",
}), () => visitSong("expansion", CardExpanded.SUIT.FT, false), 1);


new Song(Copy.text({
  es: "https://cdn1.suno.ai/76396428-4e55-4fce-9dac-f5e288295eb6.m4a",
  en: "https://cdn1.suno.ai/20e86465-9318-4c4e-bebb-b920d311faa5.m4a",
}), Copy.text({
  es: "Herraduras",
  en: "Horseshoes",
}), () => visitSong("expansion", CardExpanded.SUIT.FH, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/1953614e-de64-4003-9c85-c0600fea4e2f.m4a",
  en: "https://cdn1.suno.ai/e30c4a0c-9532-4a09-bfc4-6b73b3efe9af.m4a",
}), Copy.text({
  es: "Bellotas",
  en: "Acorns",
}), () => visitSong("expansion", CardExpanded.SUIT.FA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/bc294453-b46b-4b1b-9590-19113442c472.m4a",
  en: "https://cdn1.suno.ai/a78add3d-07eb-4c45-93df-7e51ba0ec428.m4a",
}), Copy.text({
  es: "Campanas",
  en: "Bells",
}), () => visitSong("expansion", CardExpanded.SUIT.NB, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/602d40a2-e71b-49e5-9d59-fd09b7984d5a.m4a",
  en: "https://cdn1.suno.ai/f1de9821-e207-43c2-9f5a-d1a8f38d75b5.m4a",
}), Copy.text({
  es: "Anclas",
  en: "Anchors",
}), () => visitSong("expansion", CardExpanded.SUIT.NA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8c74776c-2443-47b0-9a45-6f6de2a4b35e.m4a",
  en: "https://cdn1.suno.ai/370602ad-d4d4-471d-a95e-a798d7211ae1.m4a",
}), Copy.text({
  es: "Conchas",
  en: "Shells",
}), () => visitSong("expansion", CardExpanded.SUIT.NS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/d26b3a53-52e2-4f73-8c05-8b17c94b5362.m4a",
  en: "https://cdn1.suno.ai/d7983b0b-1fde-4465-8861-ca8c02d5740a.m4a",
}), Copy.text({
  es: "Témpanos",
  en: "Icicles",
}), () => visitSong("expansion", CardExpanded.SUIT.NI, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/770a5bff-2f0b-4ceb-a86d-9a2133db104f.m4a",
  en: "https://cdn1.suno.ai/4fbdc3c2-2445-4a74-9988-06427491af1a.m4a",
}), Copy.text({
  es: "Flores",
  en: "Fleurs",
}), () => visitSong("expansion", CardExpanded.SUIT.F, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8dd2b445-6335-45ab-abb1-60b148b6b855.m4a",
  en: "https://cdn1.suno.ai/273e80d8-3b36-4c84-9dc4-bc120e80258a.m4a",
}), Copy.text({
  es: "Trenes y Corceles",
  en: "Trains & Steeds",
}), () => visitSong("expansion", CardExpanded.SUIT.T), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/bb625f54-0c50-42da-a4de-554aa7de1e0c.m4a",
  en: "https://cdn1.suno.ai/cbe287ac-9800-4b6c-ae4f-d234d739e01f.m4a",
}), Copy.text({
  es: "Alianzas Nobles",
  en: "Noble Alliances",
}), () => visitSong("expansion", CardExpanded.SUIT.A), 1);