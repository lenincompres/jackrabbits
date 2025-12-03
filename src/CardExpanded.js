import Card from "./Card.js";

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
      color: "darkgoldenrod",
      image: "assets/suit-shields.png",
    },
    FT: {
      symbol: "torches",
      cast: "zealot",
      trait: "passion",
      color: "#B41722",
      image: "assets/suit-torches.png",
    },
    FH: {
      symbol: "horseshoes",
      cast: "outcast",
      trait: "guile",
      color: "#008480",
      image: "assets/suit-horseshoes.png",
    },
    FA: {
      symbol: "acorns",
      cast: "farmer",
      trait: "land",
      color: "darkslateblue",
      image: "assets/suit-acorns.png",
    },
    NS: {
      symbol: "shells",
      cast: "fisher",
      trait: "freedom",
      color: "darkgoldenrod",
      image: "assets/suit-shells.png",
    },
    NA: {
      symbol: "anchors",
      cast: "pirate",
      trait: "chaos",
      color: "#B41722",
      image: "assets/suit-anchors.png",
    },
    NI: {
      symbol: "icicles",
      cast: "abstinent",
      trait: "calm",
      color: "#008480",
      image: "assets/suit-icicles.png",
    },
    NB: {
      symbol: "bells",
      cast: "aide",
      trait: "service",
      color: "darkslateblue",
      image: "assets/suit-bells.png",
    },
    F: {
      symbol: "fleurs",
      cast: "pirate",
      trait: "chaos",
      color: "#B41722",
      image: "assets/suit-anchors.png",
    },
    T: {
      symbol: "field",
      color: "#008480",
    },
    A: {
      symbol: "sea",
      color: "darkslateblue",
    }
  }, Card.SUIT);
}

customElements.define("jk-card-expanded", CardExpanded);

export default CardExpanded;