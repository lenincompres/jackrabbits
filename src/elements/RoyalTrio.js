import Copy from "../../lib/Copy.js";
import ASSETS from "../aux/assets.js";

export class RoyalTrio extends HTMLElement {
  constructor() {
    super();

    this.binderSet({
      counter: 0,
      state: 0,
    });

    setInterval(() => this.parentElement.classList.contains("opened") ? this.counter += 1 : this.counter = 0, 2000);
    this._counter.bind(val => val % 2 && (this.state = Math.floor(this.counter / 2) % 5));

    this.suits = RoyalTrio.SUITS.map(s => s);
    this._state.bind(val => this.suits = RoyalTrio.SUITS.map(s => s).sort(() => 0.5 - Math.random()));

    this.set({
      width: "5rem",
      margin: "1rem auto 0.5rem",
      tag: "figure",
      position: "relative",
      img: {
        zIndex: 1,
        position: "relative",
        content: ASSETS.rabbitPawn,
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
          color: this._state.as(s => {
            if (s > 3) return this.suits[0].color;
            if ([1, 3].includes(s)) {
              this.suits.shift();
              if (this.suits[0]) return this.suits[0].color;
            }
            return "#333";
          }),
          small: this._state.as(s => {
            if (s > 3) return this.suits[0].symbol;
            if ([1, 3].includes(s)) return this.suits[0].symbol;
            return "";
          }),
          b: {
            text: this._state.as(s => s < 2 ? "♔" : ["K", "Q", "J"][i]),
          },
        }
      })),
    });

  }

  static SUITS = [{
      name: "clubs",
      color: "var(--clubs)",
      symbol: "♣",
    },
    {
      name: "hearts",
      color: "var(--hearts)",
      symbol: "♥",
    },
    {
      name: "diamonds",
      color: "var(--diamonds)",
      symbol: "♦",
    },
    {
      name: "spades",
      color: "var(--spades)",
      symbol: "♠",
    },
  ];

}

customElements.define("royal-trio", RoyalTrio);

export default RoyalTrio;