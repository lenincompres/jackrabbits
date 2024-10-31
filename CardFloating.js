import Card from "./Card.js";

const rand = () => Math.random() - 0.5;
const pi = Math.PI / 2;

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
    let n = 300;
    let m = n / 3000;
    this.binderSet({
      t: 0
    });
    [this.x, this.y, this.z] = [Math.random(), Math.random(), 0.5];
    [this.rx, this.ry, this.rz] = [0, 0, 0];
    let a = 1;
    let vx, vy, vz, vrx, vry, vrz;
    let flip = () => {
      [vrx, vry, vrz] = [m * rand(), m * rand(), m * rand()];
    }
    let jerk = () => {
      [vx, vy, vz] = [rand() / n, rand() / n, rand() / n];
      flip();
    }
    jerk();

    setInterval(() => {
      const [aMax, aMin] = [5, 1];
      a = a > aMax ? aMax : a < aMin ? aMin : 0.99 * a;
      let [sx, sy] = [Math.cos(this.rx), Math.cos(this.ry)];
      this.flipped = (sx < 0 && sy > 0) || (sx > 0 && sy < 0);
      if (this.flipped && !this.permanent) this.random();
      [sx, sy] = [sx, sy].map(s => s + 1.02);
      let drag = this.over ? 0.2 : 2;
      this.rx += vrx * a * drag * sx;
      this.ry += vry * a * drag * sy;
      this.rz += vrz * a * drag;
      drag = this.over ? 0.1 : 1;
      this.x += vx * a * drag;
      this.y += vy * a * drag;
      this.z += vz * a * drag;
      if (this.rx > 2 * pi) this.rx - 2 * pi
      else if (this.rx < -2 * pi) this.rx + 2 * pi
      if (this.ry > 2 * pi) this.ry - 2 * pi
      else if (this.ry < -2 * pi) this.ry + 2 * pi
      if (this.x >= 1 || this.x <= 0) {
        this.x = Math.round(this.x);
        vx *= -1;
        vy *= 1 + rand();
        flip();
      }
      if (this.y >= 1 || this.y <= 0) {
        this.y = Math.round(this.y);
        vy *= -1;
        vy *= 1 + rand();
        flip();
      }
      if (this.z >= 0.6 || this.z <= 0.4) vz *= -1;
      this.t += 1;
    }, 24);

    this.set({
      fontSize: this._t.as(t => `${this.z}em`),
      zIndex: this._t.as(t => Math.round(60 * this.z)),
      left: this._t.as(t => `calc((100vw - 12em)  * ${this.x} - ${document.body.getBoundingClientRect().left}px)`),
      top: this._t.as(t => `calc((100% - 12em) * ${this.y})`),
      transform: this._t.as(t => `rotateX(${this.rx}rad) rotateY(${this.ry}rad)  rotateZ(${this.rz}rad)`),
      position: "absolute",
      onmouseout: () => {
        this.over = false;
        a = 20 * (1 - (vx + vy) / 2);
        jerk();
      },
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