function getArray(n, f = () => null) {
  return Array(n).fill().map((_, i) => f(i));
}

class Card extends HTMLElement {
  constructor({
    number = Card.MIN,
    suit = Card.SUIT.D,
    root = "",
    numeral = true,
  }) {
    super();

    this.binderSet({
      number: number,
      suit: suit,
      flipped: false,
      royal: false,
    });

    this._number.onChange(n => {
      this.royal = n > 10;
      if (numeral) {
        if (n < 2) this.number = 2;
        if (n > 10) this.number = 10;
      }
    })

    let img_center = {
      src: this._number.with(this._suit, this._royal).as((n, s, r) => root + (r || n < 2 ? s.image.replace(".", `-${Card.CHARS[n]}.`) : s.image)),
      opacity: this._number.with(this._royal).as((v, r) => r || v % 2 ? 1 : 0),
      height: "100%",
      objectFit: "contain",
      marginTop: 0,
      top: "0",
      left: this._royal.as("50%", "25%"),
      width: this._royal.as("25%", "75%"),
    };
    let img_middle = getArray(2, i => new Object({
      display: this._royal.as("block", "none"),
      opacity: this._number.as(n => [2, 3, 6, 7, 10, 11].includes(n) ? 1 : 0),
      top: ["34%", "66%"][i],
      left: "50%",
      transform: `rotate(${["0", "180"][i]}deg)`,
    }));
    let img_corners = getArray(4, i => new Object({
      display: this._royal.as("block", "none"),
      opacity: this._number.as(n => [4, 5, 8, 9, 10, 11].includes(n) ? 1 : 0),
      top: ["25%", "25%", "75%", "75%"][i],
      left: ["28%", "72%", "28%", "72%"][i],
      transform: `rotate(${["-20", "20", "200", "160"][i]}deg)`,
    }));
    let img_sides = getArray(4, i => new Object({
      display: this._royal.as("block", "none"),
      opacity: this._number.as(n => [6, 7, 8, 9, 10, 11].includes(n) ? 1 : 0),
      top: ["42%", "42%", "58%", "58%"][i],
      left: ["28%", "72%", "28%", "72%"][i],
      transform: `rotate(${["-60", "60", "240", "120"][i]}deg)`,
    }));
    let imgs = [img_center, ...img_middle, ...img_corners, ...img_sides];

    this.set({
      display: "block",
      background: "white",
      borderRadius: "0.7em",
      overflow: "hidden",
      boxShadow: "1px 1px 3px black",
      position: "relative",
      width: "8em",
      height: "12em",
      header: {
        pointerEvents: "none",
        section: getArray(2, i => new Object({
          position: "absolute",
          margin: "5% 5%",
          bottom: i % 2 ? 0 : undefined,
          right: i % 2 ? 0 : undefined,
          transform: i % 2 ? "rotate(180deg)" : undefined,
          fontSize: "1.1em",
          p: {
            margin: 0,
            fontFamily: "title",
            color: this._suit.as(s => s.color),
            text: this._number.as(n => Card.CHARS[n]),
          },
          img: {
            alt: this.suit.symbol + " card suit",
            height: "1em",
            src: this._suit.as(s => root + s.image),
          }
        })),
      },
      main: {
        pointerEvents: "none",
        img: {
          alt: this.suit.symbol + " card suit",
          //transition: "0.2s",
          position: "absolute",
          width: "24%",
          margin: "-12%",
          src: this._suit.as(suit => root + suit.image),
          content: imgs,
        }
      },
      div: {
        backgroundColor: "wheat",
        backgroundImage: "url(./images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: this._flipped.as("none", "block"),
        img: {
          marginTop: "40%",
          src: "https://lenino.net/assets/leninoLogo.png",
          height: "45%",
          transform: "rotateY(180deg)",
        }
      },
    });
  }

  static CHARS = ["C", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  static MIN = 2;
  static MAX = 10;
  static SUIT = {
    D: {
      symbol: "diamonds",
      alt: "gold",
      cast: "merchant",
      trait: "wealth",
      color: "goldenrod",
      image: "assets/suit-diamonds.png",
    },
    H: {
      symbol: "hearts",
      alt: "cups",
      cast: "charmer",
      trait: "charm",
      color: "brown",
      image: "assets/suit-hearts.png",
    },
    C: {
      symbol: "clovers",
      alt: "clubs",
      cast: "sage",
      trait: "wisdom",
      color: "teal",
      image: "assets/suit-clovers.png",
    },
    S: {
      symbol: "spades",
      alt: "swords",
      cast: "warrior",
      trait: "strength",
      color: "darkslateblue",
      image: "assets/suit-spades.png",
    }
  };
}

customElements.define("jk-card", Card);

export default Card;