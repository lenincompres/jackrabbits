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
  es: "https://cdn1.suno.ai/ce2403cf-146a-4757-bb64-58c5072d8119.m4a",
  en: "https://cdn1.suno.ai/67d28132-5be3-49a2-a63f-c523dc9d11af.m4a",
}), Copy.text({
  es: "Escudos",
  en: "Sheilds",
}), () => visitSong("expansion", CardExpanded.SUIT.FS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5c356eba-4514-4e3c-98f1-f605198c1fbf.m4a",
  en: "https://cdn1.suno.ai/f40fba93-62df-47fb-a3f8-f059a1606e29.m4a",
}), Copy.text({
  es: "Antorchas",
  en: "Torches",
}), () => visitSong("expansion", CardExpanded.SUIT.FT, false), 1);


new Song(Copy.text({
  es: "https://cdn1.suno.ai/a2368e94-85d5-4d5d-b707-316787c86f79.m4a",
  en: "https://cdn1.suno.ai/20e86465-9318-4c4e-bebb-b920d311faa5.m4a",
}), Copy.text({
  es: "Herraduras",
  en: "Horseshoes",
}), () => visitSong("expansion", CardExpanded.SUIT.FH, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/efbce1a8-f3d1-4762-b452-fa8faf01d428.m4a",
  en: "https://cdn1.suno.ai/e30c4a0c-9532-4a09-bfc4-6b73b3efe9af.m4a",
}), Copy.text({
  es: "Bellotas",
  en: "Acorns",
}), () => visitSong("expansion", CardExpanded.SUIT.FA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/0e6eea32-4ff7-4b3c-9ee5-6e1bfcc73c1c.m4a",
  en: "https://cdn1.suno.ai/a78add3d-07eb-4c45-93df-7e51ba0ec428.m4a",
}), Copy.text({
  es: "Campanas",
  en: "Bells",
}), () => visitSong("expansion", CardExpanded.SUIT.NB, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/d2844b80-fc8d-4faf-a8b1-28d937495a0a.m4a",
  en: "https://cdn1.suno.ai/4aec8591-85b9-47a6-9a3b-11be22db360c.m4a",
}), Copy.text({
  es: "Anclas",
  en: "Anchors",
}), () => visitSong("expansion", CardExpanded.SUIT.NA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/9b770383-e1b4-4041-b8c3-70edb1cff9f4.m4a",
  en: "https://cdn1.suno.ai/43990f72-9dc0-4611-8e6e-f811db7fc929.m4a",
}), Copy.text({
  es: "Conchas",
  en: "Shells",
}), () => visitSong("expansion", CardExpanded.SUIT.NS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/a00660b6-5e9a-420e-92b8-f6298869b6de.m4a",
  en: "https://cdn1.suno.ai/d7983b0b-1fde-4465-8861-ca8c02d5740a.m4a",
}), Copy.text({
  es: "Témpanos",
  en: "Icicles",
}), () => visitSong("expansion", CardExpanded.SUIT.NI, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/972d84e0-7e6d-4ee3-9cbe-41167556dcc2.m4a",
  en: "https://cdn1.suno.ai/4fbdc3c2-2445-4a74-9988-06427491af1a.m4a",
}), Copy.text({
  es: "Fleurs",
  en: "Fleurs",
}), () => visitSong("expansion", CardExpanded.SUIT.F, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/273e80d8-3b36-4c84-9dc4-bc120e80258a.m4a",
  en: "https://cdn1.suno.ai/273e80d8-3b36-4c84-9dc4-bc120e80258a.m4a",
}), Copy.text({
  es: "Trenes y Corceles",
  en: "Trains & Steeds",
}), () => visitSong("expansion", CardExpanded.SUIT.T), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/cbe287ac-9800-4b6c-ae4f-d234d739e01f.m4a",
  en: "https://cdn1.suno.ai/cbe287ac-9800-4b6c-ae4f-d234d739e01f.m4a",
}), Copy.text({
  es: "Alianzas Nobles",
  en: "Noble Alliances",
}), () => visitSong("expansion", CardExpanded.SUIT.A), 1);