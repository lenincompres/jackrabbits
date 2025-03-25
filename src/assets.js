import imgCropStyle from "./aux/imgCropStyle.js";

const ASSETS = {
  thumbnailOf: (key, w = "34%", click = () => undefined, model = {}) => ({
    a: {
      class: 'thumbnail',
      img: Object.assign({
        width: w,
      }, ASSETS[key]),
      click: click,
    }
  }),
  jackRabbits: {
    tag: "img",
    src: "./images/jackRabbits.png",
    alt: "Jack Rabbits",
  },
  royals: {
    tag: "img",
    src: "./images/royals.png",
    alt: "Rabbit holding three royal cards",
  },
  citadel: {
    tag: "img",
    src: "./images/citadel.png",
    alt: "Citadel",
  },
  underground: {
    tag: "img",
    src: "./images/underground.png",
    alt: "Underground",
  },
  sample: {
    tag: "img",
    src: "./images/sample.png",
    alt: "Sample board",
  },
  guides: {
    tag: "img",
    src: "./images/guides.png",
    alt: "Guides",
  },
  cards: {
    tag: "img",
    src: "./images/cards.png",
    alt: "Cards setup",
    height: "8.5rem",
  },
  tokens: {
    tag: "img",
    src: "./images/tokens.png",
    alt: "tokens",
    height: "7rem",
  },
  endings: {
    tag: "img",
    src: "./images/endings.png",
    alt: "Endings tokens",
    height: "3rem",
  },
  lottery: {
    tag: "img",
    src: "./images/lottery.png",
    alt: "Lotería",
  },
  territory: {
    tag: "img",
    src: "./images/territory.png",
    alt: "territory",
  },
  journey: {
    tag: "img",
    src: "./images/journey.png",
    alt: "journey",
  },
  acquisition: {
    tag: "img",
    src: "./images/acquisition.png",
    alt: "acquisition",
  },
  increment: {
    tag: "img",
    src: "./images/increment.png",
    alt: "increment",
  },
  rhombi: {
    tag: "img",
    alt: "Rhombus tiles",
    src: "./images/roads.png",
    style: imgCropStyle("15.5rem", "5rem", "left"),
  },
  rides: {
    tag: "img",
    alt: "Rides tiles",
    src: "./images/roads.png",
    style: imgCropStyle("15rem", "5rem"),
  },
  caves: {
    tag: "img",
    alt: "Caves tiles",
    src: "./images/roads.png",
    style: imgCropStyle("15rem", "5rem", "right"),
  },
  clubs: {
    tag: "img",
    src: "./images/clubs.png",
    alt: "clubs pip",
  },
  spades: {
    tag: "img",
    src: "./images/spades.png",
    alt: "spades pip",
  },
  hearts: {
    tag: "img",
    src: "./images/hearts.png",
    alt: "hearts pip",
  },
  diamonds: {
    tag: "img",
    src: "./images/diamonds.png",
    alt: "diamonds pip",
  },
  torches: {
    tag: "img",
    src: "./images/torches.png",
    alt: "torches pip",
  },
  shields: {
    tag: "img",
    src: "./images/shields.png",
    alt: "shields pip",
  },
  horseshoes: {
    tag: "img",
    src: "./images/horseshoes.png",
    alt: "horseshoes pip",
  },
  acorns: {
    tag: "img",
    src: "./images/acorns.png",
    alt: "acorns pip",
  },
  shells: {
    tag: "img",
    src: "./images/shells.png",
    alt: "shells pip",
  },
  anchors: {
    tag: "img",
    src: "./images/anchors.png",
    alt: "anchors pip",
  },
  bells: {
    tag: "img",
    src: "./images/bells.png",
    alt: "bells pip",
  },
  torches: {
    tag: "img",
    src: "./images/torches.png",
    alt: "torches pip",
  },
  icicles: {
    tag: "img",
    src: "./images/icicles.png",
    alt: "icicles pip",
  },
  fleurs: {
    tag: "img",
    src: "./images/fleurs.png",
    alt: "fleurs pip",
  },
  allies: {
    tag: "img",
    src: "./images/allies.png",
    alt: "allies pip",
  },
  cavaliers: {
    tag: "img",
    src: "./images/cavaliers.png",
    alt: "cavaliers pip",
  },
  advancedCitadel: {
    tag: "img",
    src: "./images/advancedCitadel.png",
    alt: "Advanced Citadel",
  },
  roadTiles: {
    tag: "img",
    src: "./images/roadTiles.png",
    alt: "Set of Road Tiles",
  },
};

export default ASSETS;