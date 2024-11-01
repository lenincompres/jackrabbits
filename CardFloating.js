import Card from "./Card.js";

const rand = () => Math.random() - 0.5;
const PI = Math.PI;
const PI2 = Math.PI / 2;
const PI4 = Math.PI / 4;
const map = (value, start1, stop1, start2, stop2) => ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;

export class CardFloating extends Card {
  constructor({
    number = Card.MIN,
    suit = Card.SUIT.D,
    root = "",
    permanent = false,
  }) {
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
    let flip = () => [vrx, vry, vrz] = [m * rand(), m * rand(), m * rand()];
    let jerk = () => {
      [vx, vy, vz] = [rand() / n, rand() / n, rand() / n];
      flip();
    }
    let flick = () => {
      this.over = false;
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
      let drag = this.over ? 0.1 : 1.6;
      if (this.over) {
        this.rx = this.ry = PI;
        this.z = 1;
      } else {
        [sx, sy] = [sx, sy].map(s => 2 * (s + 1.05));
        this.rx += vrx * drag * sx;
        this.ry += vry * drag * sy;
        this.z += vz * this.acc * drag;
        if (this.rx > PI || this.rx < -PI) vrx *= -1;
        if (this.ry > PI || this.ry < -PI) vry *= -1;
        if (this.z >= 1 || this.z <= 0) vz *= -1;
      }
      this.rz += vrz * this.acc * drag;
      this.x += vx * this.acc * drag;
      this.y += vy * this.acc * drag;
      if (this.x >= 1 || this.x <= 0) {
        this.x = Math.round(this.x);
        vx *= -1;
        vy *= 1 + rand();
        flip();
      }
      if (this.y >= 1 || this.y <= 0) {
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
      return `${map(x, 0, 1, 0.3, 5)}em ${map(y, 0, 1, 0.3, 5)}em 3px rgba(0,0,0,${map(z,0,1,0.5,0.1)})`;
    }

    this.set({
      position: "absolute",
      boxShadow: this._t.as(t => `${getShadow()}`),
      fontSize: this._t.as(t => `${map(this.z,0,1,0.4,0.7)}em`),
      zIndex: this._t.as(t => map(this.z, 0, 1, 1, 30)),
      left: this._t.as(t => `calc((100vw - 12em)  * ${this.x} - ${document.body.getBoundingClientRect().left}px)`),
      top: this._t.as(t => `calc((100% - 12em) * ${this.y})`),
      transform: this._t.as(t => `rotateX(${this.rx}rad) rotateY(${this.ry}rad)  rotateZ(${this.rz}rad)`),
      onmouseout: () => flick(),
      onmouseover: () => this.over = true,
    });
  }

  random(min = 1, max = 13) {
    this.number = min + Math.round(Math.random() * (max - min));
    this.suit = Card.SUIT[Object.keys(Card.SUIT)[Math.floor((Math.random() * 4))]];
  }

}

customElements.define("jk-card-float", CardFloating);

export default CardFloating;