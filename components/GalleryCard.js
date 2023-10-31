import Card from "./Card.js";

export class GalleryCard extends Card {

  constructor(images = [], width, height) {

    let frontImg = new Binder(`url(${images[0]})`);
    let backImg = new Binder(`url(${images[1]})`);
    let figure = {
      backgroundColor: "teal",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
    };

    const arrowStyle = {
      fontSize: `${parseInt(width) * 0.2}px`,
      position: "absolute",
      margin: "0.5em",
      bottom: 0,
      borderRadius: "50%",
      width: "2em",
      height: "2em",
      padding: "0.5em 0",
      color: "black",
      boxShadow: "1px 1px 3px black",
      backgroundColor: "white",
      lineHeight: "1em",
      textAlign: "center",
    }

    super({
      figure: Object.assign({
        backgroundImage: frontImg,
      }, figure)
    }, {
      figure: Object.assign({
        backgroundImage: backImg,
      }, figure)
    }, width, height);

    this.images = images;
    this._index = new Binder(0);
    this.frontImg = frontImg;
    this.backImg = backImg;

    this.elt.set({
      position: "relative",
      b: {
        style: arrowStyle,
        right: 0,
        opacity: this._index.as(n => n >= images.length - 1 ? 0 : 1),
        text: "▶",
      },
      div: {
        width: "50%",
        height: height,
        position: "absolute",
        left: 0,
        top: 0,
        b: {
          opacity: this._index.as(0, 1),
          style: arrowStyle,
          top: 0,
          bottom: "auto",
          left: 0,
          text: "◀",
          opacity: this._index.as(0, 1),
        },
        click: e => {
          this.flip(this.index - 1);
          e.stopPropagation();
        },
      },
      ul: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "absolute",
        bottom: "0.5em",
        fontSize: `${parseInt(width) * 0.25}px`,
        li: images.map((_, i) => new Object({
          text: "●",
          padding: "0 0.5em",
          textShadow: "1px 1px 3px black",
          color: this._index.as(n => n === i ? "black" : "white"),
        })),
      }
    });
  }

  set index(n) {
    n = n < 0 ? 0 : n > this.images.length - 1 ? this.images.length - 1 : n;
    this._index.value = n;
    if (this.isFront) {
      this.frontImg.value = `url(${this.images[n]})`;
    } else {
      this.backImg.value = `url(${this.images[n]})`;
    }
  }

  get index() {
    return this._index.value;
  }

  async flip(n) {
    if (n === undefined) n = this.index + 1;
    if (n === this.index || n < 0 || n >= this.images.length) return;
    let promise = await super.flip();
    this.index = n;
    return promise;
  }

}

export default GalleryCard;