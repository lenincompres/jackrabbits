import ASSETS from "../assets.js";

export class RoyalTrio extends HTMLElement {
  constructor() {
    super();
    this.binderSet({
      state: 0,
    });

    this.set({
      width: "fit-content",
      margin: "1em auto",
      tag: "figure",
      position: "relative",
      img: {
        position: "relative",
        zIndex: 1,
        content: ASSETS.rabbitPawn
      },
      div: (new Array(3)).fill(0).map((_, i) => ({
        zIndex: 0,
        position: "absolute",
        bottom: "15%",
        left: "5%",
        transform: `rotate(${30 + i * 30}deg)`,
        p: {
          textAlign: "center",
          fontSize: "1.5rem",
          lineHeight: "0.7em",
          padding: "0.2em 0.3em",
          marginLeft: "-0.8em",
          transition: "all 0.5s ease",
          transitionDelay: `0.${i}s`,
          position: "absolute",
          borderRadius: "0.2rem",
          backgroundColor: "white",
          boxShadow: "1px 1px 3px black",
          position: "absolute",
          bottom: this._state.as(s => `${s%2 * 2.2-0.2*i}em`),
          opacity: this._state.as(s => s % 2),
          color: this._state.as(s => {
            if ([3, 4, 7, 8].includes(s)) return ["var(--clubs)", "var(--hearts)", "var(--diamonds)"][i];
            if (s > 8) return "var(--spades)";
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
      if (this.state < 12) this.state += 1;
      else this.state = 0;
    }, 2000);

  }

}

customElements.define("royal-trio", RoyalTrio);

export default RoyalTrio;