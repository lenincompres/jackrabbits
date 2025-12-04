import Card from "./Card.js";

const rand = () => Math.random() - 0.5;
const PIE = 2 * Math.PI;
const PI = Math.PI;
const PI2 = Math.PI / 2;
const PI4 = Math.PI / 4;
const map = (value, start1, stop1, start2, stop2) => ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;



const pixelArea = (window.innerWidth * window.innerHeight) / window.devicePixelRatio;
const cardArea = 260 * 260;
const base = Math.floor(pixelArea / cardArea);

class CardFloating extends Card {
  constructor({
    number = Card.MIN,
    suit = Card.SUIT.D,
    root = "",
    permanent = false,
  } = {}) {
    super({
      number: number,
      suit: suit,
      root: root,
      numeral: false,
    });
    this.permanent = permanent;
    this.binderSet({
      t: 0
    });
    [this.x, this.y, this.z] = [Math.random(), Math.random(), 0.5];
    [this.rx, this.ry, this.rz] = [0, 0, 0];
    this.acc = 1;
    let vx, vy, vz, vrx, vry, vrz;

    let n = 300;
    let m = n / 3000;
    const flip = () => [vrx, vry, vrz] = [m * rand(), m * rand(), m * rand()];
    const jerk = () => {
      [vx, vy, vz] = [rand() / n, rand() / n, rand() / n];
      flip();
    }
    const flick = () => {
      this.still = false;
      this.acc = 20 * (1 - (vx + vy) / 2);
      jerk();
    }
    jerk();

    setInterval(() => {
      let [sx, sy] = [Math.cos(this.rx), Math.cos(this.ry)];
      this.flippedX = sx < 0;
      this.flippedY = sy < 0;
      this.flipped = this.flippedX && !this.flippedY || this.flippedY && !this.flippedX;
      if (this.flipped && !this.permanent) this.random();
      const [aMax, aMin] = [5, 1];
      this.acc = this.acc > aMax ? aMax : this.acc < aMin ? aMin : 0.98 * this.acc;
      [vx, vy, vz, vrx, vry, vrz] = [vx, vy, vz, vrx, vry, vrz].map(v => Math.abs(v) > 1 ? v / Math.abs(v) : v);
      let drag = this.still ? 0.1 : 1.6;
      if (this.still) {
        this.rx = this.ry = PI;
        this.z = 1;
      } else {
        let sd = 1.05;
        if (
          (CardFloating._forcedSuit.value && CardFloating._forcedSuit.value !== this.suit) ||
          (CardFloating._forcedRoyal.value && this.number < 10)
        ) {
          sd = 2;
        }
        [sx, sy] = [sx, sy].map(s => 2 * (s + sd));
        this.rx += vrx * drag * sx;
        this.ry += vry * drag * sy;
        this.z += vz * this.acc * drag;
        if (this.z < 0) {
          this.z = 0;
          vz *= -1;
        }
        if (this.rx > PI || this.rx < -PI) vrx *= -1;
        if (this.ry > PI || this.ry < -PI) vry *= -1;
      }
      // apply rotation
      this.rz += vrz * this.acc * drag;
      if (this.rz > PIE) this.rz -= PIE;
      else if (this.rz < -PIE) this.rz += PIE;
      // apply velocity
      let rect = this.getBoundingClientRect();
      let [xmax, ymax] = [rect.width / window.innerWidth, rect.height / window.innerHeight];
      if (Math.abs(vx) > xmax) vx *= xmax / Math.abs(vx);
      if (Math.abs(vy) > ymax) vy *= ymax / Math.abs(vy);
      this.x += vx * this.acc * drag;
      this.y += vy * this.acc * drag;
      // handle bounds
      if (this.z > 1 || this.z < 0) {
        this.r = Math.round(this.r);
        vz *= -1;
      }
      if (this.x > 1 || this.x < 0) {
        this.x = Math.round(this.x);
        vx *= -1;
        vy *= 1 + rand();
        flip();
      }
      if (this.y > 1 || this.y < 0) {
        this.y = Math.round(this.y);
        vy *= -1;
        vx *= 1 + rand();
        flip();
      }
      this.t += 1;
    }, 24);

    let getShadow = () => {
      let z = this.z;
      let ang = PI4;
      if (this.flippedX && this.flippedY) ang = -3 * PI4;
      else if (this.flippedX) ang = 3 * PI4;
      else if (this.flippedY) ang = -PI4;
      let xProj = Math.sin(ang + this.rz);
      let yProj = Math.cos(ang + this.rz);
      let [x, y] = [z * xProj, z * yProj];
      return `${map(x, 0, 1, 0.4, 6)}em ${map(y, 0, 1, 0.4, 5)}em 3px rgba(0,0,0,${map(z,0,1,0.4,0.1)})`;
    }

    this.set({
      position: CardFloating._forcedSuit.with(CardFloating._forcedRoyal).as((suit, royal) => suit || royal ? "fixed" : "absolute"),
      boxShadow: this._t.as(t => `${getShadow()}`),
      fontSize: this._t.as(t => `${map(this.z, 0, 1, 0.5, 0.7) * CardFloating.sizeScale}em`),
      zIndex: this._t.as(t => 100 + Math.round(this.z * 30)),
      left: this._t.as(t => `calc((100vw - 12em)  * ${this.x} - ${document.body.getBoundingClientRect().left}px)`),
      top: this._t.as(t => `calc((100% - 12em) * ${this.y})`),
      transform: this._t.as(t => `rotateX(${this.rx}rad) rotateY(${this.ry}rad)  rotateZ(${this.rz}rad)`),
      onmouseout: () => flick(),
      onmouseover: () => this.still = true,
      onready: elt => setTimeout(() => flick(), 1000),
    });
    setTimeout(() => flick(), 100);

    CardFloating.cards.push(this);
  }

  random(min = 1, max = 13) {
    if (CardFloating._forcedRoyal.value) min = 11;
    this.number = min + Math.round(Math.random() * (max - min));
    if (CardFloating._forcedSuit.value) {
      this.suit = CardFloating._forcedSuit.value
    } else {
      this.suit = Card.SUIT[Object.keys(Card.SUIT)[Math.floor((Math.random() * 4))]];
    }
    if (CardFloating.cards.filter(c => c !== this & c.number === this.number && this.suit === c.suit).length) this.random();
  }

  static _forcedSuit = new Binder();

  static _forcedRoyal = new Binder();

  static cards = [];

  static CardNum = Math.max(1, Math.min(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 2 : 3, base));
  
  static sizeScale = Math.max(1.25, Math.min(base / 3.5, 1.5));

}

customElements.define("jk-card-float", CardFloating);

export default CardFloating;