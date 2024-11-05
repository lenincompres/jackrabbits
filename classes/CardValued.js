import Card from "./Card.js";

class CardValued extends Card {
  constructor({
    number = Card.MIN,
    suit = Card.SUIT.D,
    callback = () => null,
    root = "",
    enabled = false,
    flipped = true,
  }) {
    super({
      number,
      suit,
      root,
      flipped,
    });

    this.binderSet({
      enabled: enabled, 
      canAdd: true,
    });

    this._number.onChange(number => callback());

    const DISABLED_COLOR = "#ddd";

    this.set({
      transition: " 0.2s",
      transform: this._flipped.as("", "rotateY(180deg)"),
      footer: {
        flexDirection: "column",
        placeContent: "space-between",
        placeItems: "center",
        textAlign: 0,
        width: "100%",
        height: "100%",
        display: this._enabled.as("none", "flex"),
        button: {
          fontSize: "1.05em",
          fontFamily: "title",
          margin: "3%",
          background: "transparent",
          transition: "0.5s",
          opacity: "0.8",
          color: this.suit.color + "!important",
          borderColor: this.suit.color + "!important",
          content: [{
            style: this._canAdd.as(BUTTON_STYLE.DISABLED, BUTTON_STYLE.ENABLED(this.suit.color)),
            text: "+",
            click: e => this.canAdd ? this.number += 1 : null,
          }, {
            style: this._number.as(v => v > Card.MIN, BUTTON_STYLE.DISABLED, BUTTON_STYLE.ENABLED(this.suit.color)),
            text: "-",
            click: e => this.number -= 1,
          }]
        }

      }
    });
  }

  static MIN = 2;
  static MAX = 10;
}

customElements.define("valued-card", CardValued);

export default CardValued;