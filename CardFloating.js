import Card from "./Card.js";

const rand = () => Math.random() - 0.5;
const pi = Math.PI / 2;

export class CardFloating extends Card {
  constructor(args) {
    super(args);
    let n = 280;
    let m = 0.1;
    this.binderSet({
      t: 0
    });
    [this.x, this.y, this.z] = [Math.random(), Math.random(), 0.5];
    [this.rx, this.ry, this.rz] = [0, 0, 0];
    let a = 1;
    let vx, vy, vz, vrx, vry, vrz;
    let flip = () => {
      [vrx, vry, vrz] = [m * rand(), m * rand(), m * rand() / 2];
    }
    let jerk = () => {
      [vx, vy, vz] = [rand() / n, rand() / n, rand() / n];
      flip();
    }
    jerk();

    setInterval(() => {
      a = a < 1.1 ? 1 : a > 1 ? 0.95 * a : a;
      let [sx, sy] = [Math.cos(this.rx), Math.cos(this.ry)];
      this.flipped = (sx < 0 && sy > 0) || (sx > 0 && sy < 0);
      [sx, sy] = [Math.sin(this.rx), Math.sin(this.ry)];
      [sx, sy] = [Math.abs(sx), Math.abs(sy)];
      this.x += vx * a;
      this.y += vy * a;
      this.z += vz * a;
      this.rx += vrx * 1 * (sx + 0.2);
      this.ry += vry * 2 * (sy + 0.2);
      this.rz += vrz;
      if (sx > 0.99 || sy > 0.99) this.random();
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
      if (this.z >= 0.6 || this.z <= 0.4) {
        vz *= -1;
        flip();
      }
      this.t += 1;
    }, 24);

    this.set({
      fontSize: this._t.as(t => `${this.z}em`),
      zIndex: this._t.as(t => Math.round(60 * this.z)),
      left: this._t.as(t => `calc((100vw - 12em)  * ${this.x} - ${document.body.getBoundingClientRect().left}px)`),
      top: this._t.as(t => `calc((100% - 12em) * ${this.y})`),
      transform: this._t.as(t => `rotateX(${this.rx}rad) rotateY(${this.ry}rad)  rotateZ(${this.rz}rad)`),
      position: "absolute",
      div: {
        backgroundColor: "wheat",
        backgroundImage: "url(./images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: this._t.as(t => this.flipped ? "block" : "none"),
        img: {
          marginTop: "40%",
          src: "https://lenino.net/assets/leninoLogo.png",
          height: "45%",
          transform: "rotateY(180deg)",
        }
      },
      onmouseover: () => {
        a = 10 * (1 - (vx + vy) / 2);
        jerk();
      },
    });
  }

  random() {
    this.number = 1 + Math.floor(Math.random() * 10);
    this.suit = Card.SUIT[Object.keys(Card.SUIT)[Math.floor((Math.random() * 4))]];
  }

}

customElements.define("jk-card-float", CardFloating);

export default CardFloating;