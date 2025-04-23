import imgCropStyle from "./aux/imgCropStyle.js";

const ASSETS = {
  thumbnailOf: (key, h = "34%", click = () => undefined, model = {}) => ({
    a: {
      class: 'thumbnail',
      img: Object.assign({
        height: h,
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
    height: '5em',
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
    style: imgCropStyle("17rem", "5.5rem", "left"),
  },
  rides: {
    tag: "img",
    alt: "Rides tiles",
    src: "./images/roads.png",
    style: imgCropStyle("17rem", "5.5rem"),
  },
  caves: {
    tag: "img",
    alt: "Caves tiles",
    src: "./images/roads.png",
    style: imgCropStyle("17rem", "5.5rem", "right"),
  },
  clubs: {
    tag: "img",
    src: "./images/clubs.png",
    alt: "clubs pip",
    height: '4.5em',
    objectFit: 'none',

  },
  spades: {
    tag: "img",
    src: "./images/spades.png",
    alt: "spades pip",
    height: '4.5em',
    objectFit: 'none',
  },
  hearts: {
    tag: "img",
    src: "./images/hearts.png",
    alt: "hearts pip",
    height: '4.5em',
    objectFit: 'none',
  },
  diamonds: {
    tag: "img",
    src: "./images/diamonds.png",
    alt: "diamonds pip",
    height: '4.5em',
    objectFit: 'none',
  },
  torches: {
    tag: "img",
    src: "./images/torches.png",
    alt: "torches pip",
    height: '4.5em',
    objectFit: 'none',
  },
  shields: {
    tag: "img",
    src: "./images/shields.png",
    alt: "shields pip",
    height: '4.5em',
    objectFit: 'none',
  },
  horseshoes: {
    tag: "img",
    src: "./images/horseshoes.png",
    alt: "horseshoes pip",
    height: '4.5em',
    objectFit: 'none',
  },
  acorns: {
    tag: "img",
    src: "./images/acorns.png",
    alt: "acorns pip",
    height: '4.5em',
    objectFit: 'none',
  },
  shells: {
    tag: "img",
    src: "./images/shells.png",
    alt: "shells pip",
    height: '4.5em',
    objectFit: 'none',
  },
  anchors: {
    tag: "img",
    src: "./images/anchors.png",
    alt: "anchors pip",
    height: '4.5em',
    objectFit: 'none',
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
    height: '4.5em',
    objectFit: 'none',
  },
  fleurs: {
    tag: "img",
    src: "./images/fleurs.png",
    alt: "fleurs pip",
    height: '4.5em',
    objectFit: 'none',
  },
  allies: {
    tag: "img",
    src: "./images/allies.png",
    alt: "allies pip",
    height: '4.5em',
    objectFit: 'none',
  },
  cavaliers: {
    tag: "img",
    src: "./images/cavaliers.png",
    alt: "cavaliers pip",
    height: '4.5em',
    objectFit: 'none',
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