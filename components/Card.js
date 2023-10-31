import Aux from "./Aux.js";

export class Card {

  constructor(front, back, width = "240px", height = "fit-content") {

    this._isFront = new Binder(true);

    this.isFlipping = false;

    const IMG_STYLE = {
      height: '100%',
      width: '100%',
      boxShadow: '2px 2px 6px',
      borderRadius: '1em',
      display: 'inline-block',
      overflow: "hidden",
    };

    this.elt = DOM.set({
      textAlign: "center",
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      height: height,
      width: width,
      div: [{
        style: IMG_STYLE,
        display: this._isFront.as("none", "block"),
        model: front,
      }, {
        style: IMG_STYLE,
        display: this._isFront.as("block", "none"),
        model: back,
      }],
      click: e => {
        e.stopPropagation();
        this.flip();
      },
    }, "div");

  }

  set isFront(val) {
    this._isFront.value = val;
  }

  get isFront() {
    return this._isFront.value;
  }

  async flip(val) {
    if(this.isFlipping) return;
    this.isFlipping = true;
    if(val === this.isFront) return;
    this.elt.style.transition = "0.1s";
    this.elt.style.transform = "rotateY(90deg)";
    let promise = await Aux.timeoutPromise(100);
    this.isFront = !this.isFront;
    this.elt.style.transform = "rotateY(0)";
    this.isFlipping = false;
    return promise;
  }

}

export default Card;