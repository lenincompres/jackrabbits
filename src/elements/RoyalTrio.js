import Copy from "../../lib/Copy.js";
import Card from "./Card.js";
import MediaFigure from "./MediaFigure.js";

export class RoyalTrio extends HTMLElement {
  constructor() {
    super();

    Binder.set(this, {
      counter: 0,
      state: 0,
      suits: Card.SUITS,
    });

    this.figure = new MediaFigure("rabbitPawn");

    setInterval(() => this.counter > 0 || getComputedStyle(this.figure).pointerEvents !== "none" ? this.counter += 1 : this.counter = 0, 2000);

    this._counter.bind(val => val % 2 && (this.state = Math.floor(this.counter / 2) % 5));

    this._state.bind(val => {
      if ([0, 2].includes(val)) return this.suits = [];
      this.suits = Card.SUITS.sort(() => 0.5 - Math.random());
      if ([1, 3].includes(val)) return this.suits;
      if (val > 3) return this.suits = [this.suits[0], this.suits[0], this.suits[0]];
    });

    this.set({
      width: "5rem",
      margin: "1rem auto 0.5rem",
      tag: "figure",
      position: "relative",
      img: {
        zIndex: 1,
        position: "relative",
        content: this.figure,
      },
      i: {
        lineHeight: "1em",
        textAlign: "right",
        position: "absolute",
        top: "1.5rem",
        right: this._counter.as(s => `${[60, 100][s%2]}%`),
        marginRight: "-1rem",
        transition: "all 0.5s ease",
        opacity: this._counter.as(s => 0.8 * (s % 2)),
        content: this._state.as(Copy.text({
          es: "Sencillo",
          en: "Simple",
        }), Copy.text({
          es: "Diverso",
          en: "Diverse",
        }), Copy.text({
          es: "Monárquico",
          en: "Monarchic",
        }), Copy.text({
          es: "Monárquico</br>& diverso",
          en: "Diverse-</br>Monarchic",
        }), "Tribal"),
      },
      div: (new Array(3)).fill(0).map((_, i) => ({
        zIndex: 0,
        position: "absolute",
        top: "2rem",
        left: "50%",
        transform: `rotate(${30 + i * 30}deg)`,
        p: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "1.5em",
          height: "2.1em",
          fontSize: "1.4rem",
          lineHeight: "1rem",
          marginLeft: "-0.8em",
          transition: "all 0.5s ease",
          transitionDelay: `0.${i+1}s`,
          position: "absolute",
          borderRadius: "0.2rem",
          backgroundColor: "white",
          boxShadow: "1px 1px 3px black",
          position: "absolute",
          bottom: this._counter.as(c => `${(c % 2) * 1.6 - 0.2 * i}em`),
          opacity: this._counter.as(c => c % 2),
          color: this._suits.as(suits => !suits.length ? "#333": `var(--${suits[i].symbol})`),
          small: {
            class: this._suits.as(suits => suits.length ? `icon-${suits[i].symbol}` : ""),
          },
          b: {
            marginTop: "-0.15em",
            text: this._state.as(s => s < 2 ? "♔" : ["K", "Q", "J"][i]),
          },
        }
      })),
    });
  }
}

customElements.define("royal-trio", RoyalTrio);

export default RoyalTrio;