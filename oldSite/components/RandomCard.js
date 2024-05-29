import Card from "./Card.js";

export class RandomCard extends Card {

  constructor(autoFlip = false, delay = 0, interval = 3) {
    let [x, y, z] = [0, 0, 0];
    let [w, h] = [240, 340];
    const randomize = () => {
      x = Math.floor(Math.random() * 6);
      y = Math.floor(Math.random() * 3);
      z = Math.floor(Math.random() * 3);
    };
    randomize();
    const opened = new Binder(false);

    super({
      backgroundImage: 'url(images/cardBack.png)'
    }, {
      backgroundColor: 'white',
      backgroundImage: opened.bind(val => `url(images/cardFront${z}.png)`),
      backgroundPosition: opened.bind(val => `-${w * x}px -${h * y}px`)
    }, {
      width: w + "px",
      height: h + "px",
    });

    this.counter = -delay;

    this.elt.set({
      margin: '2px',
      zIndex: opened.bind(val => val ? 0 : 5),
    });

    if (autoFlip) setInterval(e => ++this.counter > interval ? this.flip() : null, 500);

    this.randomize = () => {
      opened.value = !opened.value;
      if (!opened.value) randomize();
      this.counter = 1;
    }

  }

  async flip() {
    let promise = await super.flip();
    this.randomize();
    this.counter = 0;
    return promise;
  }

}

export default RandomCard;