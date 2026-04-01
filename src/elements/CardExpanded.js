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
      symbol: "road",
      color: "lightgoldenrodyellow",
    }
  }, Card.SUIT);
}

customElements.define("jk-card-expanded", CardExpanded);

export default CardExpanded;

new Song(Copy.text({
  es: "https://cdn1.suno.ai/bccdb590-016b-4c2f-a527-31ebfdf5c699.m4a",
  en: "https://cdn1.suno.ai/67d28132-5be3-49a2-a63f-c523dc9d11af.m4a",
}), Copy.text({
  es: "Escudos",
  en: "Sheilds",
}), () => visitSong("expansion", CardExpanded.SUIT.FS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/dcbcb4e6-42e9-488e-a44d-f152c67a78c2.m4a",
  en: "https://cdn1.suno.ai/5592a31b-0169-4a9c-b75c-5b134199335f.m4a",
}), Copy.text({
  es: "Antorchas",
  en: "Torches", // test 
}), () => visitSong("expansion", CardExpanded.SUIT.FT, false), 1);


new Song(Copy.text({
  es: "https://cdn1.suno.ai/76396428-4e55-4fce-9dac-f5e288295eb6.m4a",
  en: "https://cdn1.suno.ai/6691f89a-352d-48d2-af86-dee924ee46e6.m4a",
}), Copy.text({
  es: "Herraduras",
  en: "Horseshoes",
}), () => visitSong("expansion", CardExpanded.SUIT.FH, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/3a272e14-2945-443d-9385-1871a4efbe45.m4a",
  en: "https://cdn1.suno.ai/a8f60fc1-178f-4aed-90c7-d351c56f56ce.m4a",
}), Copy.text({
  es: "Bellotas",
  en: "Acorns",
}), () => visitSong("expansion", CardExpanded.SUIT.FA, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/a1832a9a-eb14-4a01-8b48-33a78e5cf643.m4a",
  en: "https://cdn1.suno.ai/15aeefa2-c86e-4890-a90d-d91037a800f9.m4a",
}), Copy.text({
  es: "Campanas",
  en: "Bells",
}), () => visitSong("expansion", CardExpanded.SUIT.NB, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/3223e8c3-f7ff-4cf5-b551-cc41b8697069.m4a",
  en: "https://cdn1.suno.ai/b946fc7c-09c7-40a4-b6ff-3f64bef73e53.m4a",
}), Copy.text({
  es: "Anclas",
  en: "Anchors",
}), () => visitSong("expansion", CardExpanded.SUIT.NA, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/8c74776c-2443-47b0-9a45-6f6de2a4b35e.m4a",
  en: "https://cdn1.suno.ai/1296ba51-4771-413a-a2a6-08df3d5ad902.m4a",
}), Copy.text({
  es: "Conchas",
  en: "Shells",
}), () => visitSong("expansion", CardExpanded.SUIT.NS, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/e516d762-7f7a-466c-9aa1-b9420d70af79.m4a",
  en: "https://cdn1.suno.ai/9148b0cb-bedd-435d-a8ea-083d842ff6ad.m4a",
}), Copy.text({
  es: "Carámbanos",
  en: "Icicles",
}), () => visitSong("expansion", CardExpanded.SUIT.NI, false), 1);

Song.shuffleRange(Song.List.length - 4);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/770a5bff-2f0b-4ceb-a86d-9a2133db104f.m4a",
  en: "https://cdn1.suno.ai/4fbdc3c2-2445-4a74-9988-06427491af1a.m4a",
}), Copy.text({
  es: "Flores",
  en: "Fleurs",
}), () => visitSong("expansion", CardExpanded.SUIT.F, false), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/2e8f4fde-356a-4978-a43e-64012fe03bda.m4a",
  en: "https://cdn1.suno.ai/b289c3be-d23c-456c-8c4b-649fb872d0c0.m4a",
}), Copy.text({
  es: "Corceles",
  en: "Cavaliers",
}), () => visitSong("expansion", CardExpanded.SUIT.T), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/34237312-db2d-4b12-9db6-08cd724ae40d.m4a",
  en: "https://cdn1.suno.ai/34217df4-5848-4737-a275-fe2bbfd2b6dd.m4a",
}), Copy.text({
  es: "Alianzas",
  en: "Alliances",
}), () => visitSong("expansion", CardExpanded.SUIT.A), 1);

new Song(Copy.text({
  es: "https://cdn1.suno.ai/d334f9fc-e5a9-40cc-94b2-43bbdb127421.m4a",
  en: "https://cdn1.suno.ai/d334f9fc-e5a9-40cc-94b2-43bbdb127421.m4a",
}), Copy.text({
  es: "Wanders",
  en: "Andares",
}), () => visitSong("expansion", CardExpanded.SUIT.W), 1);

Song.shuffleRange(Song.List.length - 4);