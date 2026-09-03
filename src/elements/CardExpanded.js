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

  static SUIT = Object.assign(
    {
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
      },
    },
    Card.SUIT,
  );
}

customElements.define("jk-card-expanded", CardExpanded);

export default CardExpanded;

Song.root = "../media/expansion/";

Song.newSong(
  "Escudos",
  "Shields",
  () => Song.visitPage("expansion", CardExpanded.SUIT.FS, false),
  1,
);
Song.newSong(
  "Antorchas",
  "Torches",
  () => Song.visitPage("expansion", CardExpanded.SUIT.FT, false),
  1,
);
Song.newSong(
  "Herraduras",
  "Horseshoes",
  () => Song.visitPage("expansion", CardExpanded.SUIT.FH, false),
  1,
);
Song.newSong(
  "Bellotas",
  "Acorns",
  () => Song.visitPage("expansion", CardExpanded.SUIT.FA, false),
  1,
);
Song.shuffleRange(Song.List.length - 4);

Song.newSong(
  "Campanas",
  "Bells",
  () => Song.visitPage("expansion", CardExpanded.SUIT.NB, false),
  1,
);
Song.newSong(
  "Anclas",
  "Anchors",
  () => Song.visitPage("expansion", CardExpanded.SUIT.NA, false),
  1,
);
Song.newSong(
  "Conchas",
  "Shells",
  () => Song.visitPage("expansion", CardExpanded.SUIT.NS, false),
  1,
);
Song.newSong(
  "Carámbanos",
  "Icicles",
  () => Song.visitPage("expansion", CardExpanded.SUIT.NI, false),
  1,
);
Song.shuffleRange(Song.List.length - 4);

Song.newSong(
  "Flores",
  "Fleurs",
  () => Song.visitPage("expansion", CardExpanded.SUIT.F, false),
  1,
);
Song.newSong(
  "Corceles",
  "Cavaliers",
  () => Song.visitPage("expansion", CardExpanded.SUIT.T, false),
  1,
);
Song.newSong(
  "Enlaces",
  "Liaisons",
  () => Song.visitPage("expansion", CardExpanded.SUIT.A, false),
  1,
);
Song.shuffleRange(Song.List.length - 3);

//
const wanderTilesUp = false;
Song.newSong(
  "Andares",
  "Allures",
  () => {
    Song.visitPage("expansion", CardExpanded.SUIT.W);
    popUp("wanderTiles");
    setTimeout(() => popUp(), 1);
  },
  1,
  (currentTime) => {
    let bridge = Song.round(
      Copy.text({
        es: "111.5",
        en: "130",
      }),
    );
    let outro = Song.round(
      Copy.text({
        es: "170",
        en: "191.5",
      }),
    );
    if (
      (currentTime < bridge && wanderTilesUp) ||
      (currentTime > outro && wanderTilesUp)
    ) {
      popUp();
      return (wanderTilesUp = false);
    }
    if (currentTime > bridge && currentTime < outro && !wanderTilesUp) {
      popUp("wanderTiles");
      return (wanderTilesUp = true);
    }
  },
);
