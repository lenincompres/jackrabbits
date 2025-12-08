import Copy from "../../lib/Copy.js";
import ASSETS from "../assets.js";

export class RoyalTrio extends HTMLElement {
  constructor() {
    super();
    this.binderSet({
      state: 0,
    });

    this._state.bind(() => {
      this.colors = RoyalTrio.colors.map(c => c).sort(() => 0.5 - Math.random());
      this.randomColor = RoyalTrio.colors[Math.floor(Math.random() * RoyalTrio.colors.length)];
    });

    this.set({
      width: "5rem",
      margin: "1rem auto 0.5rem",
      tag: "figure",
      position: "relative",
      img: {
        zIndex: 1,
        position: "relative",
        content: ASSETS.rabbitPawn
      },
      i: {
        lineHeight: "1em",
        textAlign: "right",
        position: "absolute",
        top: "1.5rem",
        right: this._state.as(s => `${[60, 100][s%2]}%`),
        marginRight: "-1.2rem",
        transition: "all 0.5s ease",
        opacity: this._state.as(s => 0.8 * (s % 2)),
        content: this._state.as(s => {
          if (s < 3) return Copy.text({
            es: "Sencillo",
            en: "Simple",
          });
          if (s < 5) return Copy.text({
            es: "Diverso",
            en: "Diverse",
          });
          if (s < 7) return Copy.text({
            es: "Monárquico",
            en: "Monarchic",
          });
          if (s < 9) return Copy.text({
            es: "Monárquico</br>& diverso",
            en: "Diverse-</br>Monarchic",
          });
          return "Tribal";
        }),
      },
      div: (new Array(3)).fill(0).map((_, i) => ({
        zIndex: 0,
        position: "absolute",
        top: "2rem",
        left: "50%",
        transform: `rotate(${30 + i * 30}deg)`,
        p: {
          textAlign: "center",
          fontSize: "1.4rem",
          lineHeight: "0.7em",
          padding: "0.2em 0.3em",
          marginLeft: "-0.8em",
          transition: "all 0.5s ease",
          transitionDelay: `0.${i+1}s`,
          position: "absolute",
          borderRadius: "0.2rem",
          backgroundColor: "white",
          boxShadow: "1px 1px 3px black",
          position: "absolute",
          bottom: this._state.as(s => `${s%2 * 1.6 - 0.2 * i}em`),
          opacity: this._state.as(s => s % 2),
          color: this._state.as(s => {
            if ([3, 4, 7, 8].includes(s)) return this.colors.shift();
            if (s > 8) return this.randomColor;
            return "#333";
          }),
          span: "♔</br>",
          b: {
            text: this._state.as(s => s < 5 ? "?" : ["K", "Q", "J"][i]),
          },
        }
      })),
    });

    setInterval(() => {
      this.state = (this.state + 1) % 11;
    }, 2000);

  }

  static colors = ["var(--clubs)", "var(--hearts)", "var(--diamonds)", "var(--spades)"];

}

customElements.define("royal-trio", RoyalTrio);

export default RoyalTrio;