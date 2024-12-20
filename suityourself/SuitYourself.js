import Card from "../src/Card.js";
import CardValued from "../src/CardValued.js";
import Copy from "../lib/Copy.js";
import {
  stringItems,
  replacePlaceholders
} from "./copy.js";

const QS = DOM.querystring();
const NAME = QS.jrsyname ? QS.jrsyname : undefined;
const HAND = QS.jrsyhand ? QS.jrsyhand.split(",").map(n => parseInt(n)) : false;

window.LANG = Copy.lang;

const MY_URL = window.location.href.substr(0, window.location.href.lastIndexOf("/"));

const _width = new Binder(window.innerWidth);
addEventListener("resize", e => _width.value = window.innerWidth);

const [STAGE_INTRO, STAGE_START, STAGE_WISDOM, STAGE_WEALTH, STAGE_DONE] = [0, 1, 2, 3, 4];
const STAGES = [STAGE_INTRO, STAGE_START, STAGE_WISDOM, STAGE_WEALTH, STAGE_DONE];

let nameInput;

const HIDE_MODEL = (binder, test = v => v) => ({
  transition: "0.5s",
  overflow: "hidden",
  opacity: binder.as(test, 0, 1),
  maxHeight: binder.as(test, 0, "100em"),
});

window.BUTTON_STYLE = {
  ENABLED: (color = "black") => new Object({
    borderColor: color,
    color: color,
    opacity: 1,
    textShadow: "none",
    boxShadow: "inherit",
    pointerEvents: "initial",
  }),
  DISABLED: {
    borderColor: "transparent",
    color: "transparent",
    opacity: 0.3,
    textShadow: `0 0 3px gray`,
    boxShadow: `0 0 2px gray, 0 0 2px gray inset`,
    pointerEvents: "none",
  }
};

class SuitYourself extends HTMLElement {
  constructor(root = "") {
    if (root.length && !root.endsWith("/")) root += "/";
    super();

    this.strength = new CardValued({
      suit: CardValued.SUIT.S,
      callback: () => this.updateCount(),
      root: root,
      number: HAND ? HAND[0] : undefined,
      flipped: true,
    });
    this.charm = new CardValued({
      callback: () => this.updateCount(),
      suit: CardValued.SUIT.H,
      root: root,
      number: HAND ? HAND[1] : undefined,
      flipped: true,
    });
    this.wisdom = new CardValued({
      callback: () => this.updateCount(),
      suit: CardValued.SUIT.C,
      root: root,
      number: HAND ? HAND[2] : undefined,
      flipped: true,
    });
    this.wealth = new CardValued({
      root: root,
      flipped: true,
    });
    this.cards = [this.strength, this.charm, this.wisdom, this.wealth];
    this.orderedCards = [];

    this.strength.appearStage = 0;
    this.charm.appearStage = 0;
    this.strength.hintStage = 1;
    this.charm.hintStage = 1;
    this.wisdom.hintStage = 2;
    this.wealth.hintStage = 3;
    this.wisdom.appearStage = 2;
    this.wealth.appearStage = 3;

    this.binderSet({
      shareURL: undefined,
      topCards: [],
      stage: HAND ? STAGE_DONE : STAGE_INTRO,
      canShare: false,
      width: window.innerWidth,
    });

    this._stage.onChange(v => {
      if (v === STAGE_INTRO) {
        this.cards.forEach(c => {
          c.enabled = false;
          c.number = CardValued.MIN;
          c.flipped = true;
        });
        this.wealth.number = CardValued.MAX;
      } else if (v === STAGE_START) {
        this.cards.forEach(c => {
          c.enabled = true;
          c.number = CardValued.MIN;
          c.flipped = false;
        });
        this.wealth.enabled = false;
        this.wealth.number = CardValued.MAX;
      } else if (v === STAGE_DONE) {
        this.updateShare();
      }
    });
    this.updateCount();
    this.updateShare();

    const TEXT_WIDTH = "28em";

    const css = {
      userSelect: "none",
      "*": {
        margin: 0,
      },
      h: {
        textShadow: "1px 1px 0 black",
        fontFamily: 'title',
        color: "forestgreen",
      },
      p: {
        textIndent: 0,
        textAlign: "center",
      },
      b: {
        textTransform: "uppercase",
        fontFamily: 'title',
      },
      strong: {
        fontWeight: "bolder",
        textShadow: "1px 1px 0 black",
      },
      a: {
        color: "darkblue",
        hover: {
          color: "royalblue",
        }
      },
      button: {
        textTransform: "uppercase",
        fontFamily: 'title',
        borderRadius: "1em",
        borderWidth: "0.5px",
        borderColor: "#333",
        backgroundColor: "#eee",
        boxShadow: "none",
        padding: "0.25em 3%",
        width: "fit-content",
        height: "2em",
        minWidth: "2em",
        margin: "0.25em 0.5em",
        "*": {
          height: "1em",
          pointerEvents: "none",
        },
        hover: {
          boxShadow: "1px 1px 0 black !important",
        },
        active: {
          boxShadow: "1px 1px 0 black inset !important",
        },
      }
    };

    const header = {
      display: "flex",
      flexDirection: "column",
      placeItems: "center",
      maxWidth: TEXT_WIDTH,
      marginBottom: "1em",
      h1: {
        content: this._stage.as(stage => stage === STAGE_DONE, Copy.at.pageTitle, Copy.at.pageTitleDone),
      },
      section: {
        model: HIDE_MODEL(this._stage, stage => [STAGE_INTRO, STAGE_START, STAGE_START, STAGE_WISDOM, STAGE_WEALTH].includes(stage)),
        p: this._stage.as(stage => {
          if (stage === STAGE_INTRO) return Copy.at.pageDescription;
          if (stage === STAGE_WISDOM) return Copy.at.NEW_CARD;
          if (stage === STAGE_WEALTH) return Copy.at.whenDone;
          return Copy.at.whenReady;
        }),
      }
    };

    const main = {
      position: "relative",
      width: _width.as(v => v + "px"),
      minWidth: "24em",
      ul: {
        id: "mainContent",
        display: "flex",
        flexWrap: "wrap",
        placeContent: "center",
        li: this.cards.map((card, i) => new Object({
          width: "8em",
          zIndex: this._stage.as(stage => stage === STAGE_DONE ?
            4 - this.orderedCards.indexOf(card) : 4 - i),
          transition: "0.5s",
          position: this._stage.as(
            stage => stage >= card.appearStage, "absolute", "relative", ),
          pointerEvents: this._stage.as(
            stage => stage >= card.appearStage, "none", "initial"),
          opacity: this._stage.as(
            stage => stage >= card.appearStage, 0, 1),
          marginLeft: this._stage.as(stage => {
            if (!i) return 0;
            if (!stage) return "1em";
            if (stage < 2) return `${2 * stage}em`;
            if (stage < 4) return `${-0.4 * stage}em`;
            return "-8em";
          }),
          marginTop: this._stage.as(stage => {
            if (stage === STAGE_INTRO || stage === STAGE_DONE) return 0;
            return 1.25 * Math.abs(i - stage / 2) + "em";
          }),
          transform: this._stage.as(stage => {
            let ang = stage ? 5 : 0;
            if (stage < 4) ang = -ang * stage + i * 2 * ang;
            else {
              ang = 20;
              let n = 4 - this.orderedCards.indexOf(card);
              ang = -4 * ang + n * ang;
            }
            return `rotate(${ang}deg)`;
          }),
          header: {
            margin: "0.5em 0",
            visibility: this._stage.as(stage => stage > 0 && stage < 4, "hidden", "visible"),
            h2: {
              textTransform: "uppercase",
              fontSize: "1.25em",
              color: card.suit.color,
              span: Copy.at[card.suit.trait],
            },
          },
          main: card,
          footer: {
            margin: "0.5em auto 0",
            model: HIDE_MODEL(this._stage, stage => stage === card.hintStage),
            textAlign: "center",
            p: Copy.get('cardHints', i),
          },
        })),
      },
    }

    const instructions = {
      margin: "0 auto",
      width: "fit-content",
      maxWidth: TEXT_WIDTH,
      model: HIDE_MODEL(this._stage, stage => stage !== STAGE_INTRO),
      section: [{
        // shows points you have left
        marginTop: "1em",
        model: HIDE_MODEL(this._stage, stage => [STAGE_START, STAGE_WISDOM].includes(stage)),
        h3: {
          fontSize: "1em",
          marginBottom: "0.3em",
          color: this.wealth.suit.color,
          fontFamily: "body",
          text: this.wealth._number.as(n => `${n-2} ` + Copy.at.pointsLeft),
        },
        ul: {
          display: "flex",
          justifyContent: "center",
          content: this.wealth._number.as(n => new Array(n - 2).fill({
            li: {
              img: {
                height: "1.5em",
                alt: "Diamond pip",
                src: Card.SUIT.D.image,
              },
            },
          }))
        },
      }, {
        // warnings/errors
        color: "crimson",
        marginTop: "0.5em",
        model: HIDE_MODEL(this._topCards, topCards => this.stage === STAGE_WEALTH && topCards.length > 1),
        text: this._topCards.as(topCards => replacePlaceholders(Copy.at.tie, [stringItems(topCards.map(c => Copy.at[c.suit.trait]), Copy.at.and)])),
      }, {
        // shows results
        model: HIDE_MODEL(this._stage, stage => stage === STAGE_DONE),
        content: this._stage.as(v => {
          if (v < 4) return;
          let suits = this.orderedCards.map(c => Object.assign({
            pct: Math.abs(100 * (c.number - 2) / 8),
          }, c.suit));
          const suit = suits[0];
          const words = [suit.symbol, suit.alt, suit.cast, suit.symbol + 'Meaning'].map(v => Copy.at[v]);
          return {
            p: replacePlaceholders(Copy.at.description, [suit.color, ...words]),
            ul: {
              marginTop: "1em",
              li: suits.map(suit => this.getPct(suit, root))
            },
          }
        })
      }]
    }

    const controls = {
      overflow: "hidden",
      width: "100%",
      main: {
        margin: "1em 0",
        maxWidth: TEXT_WIDTH,
        model: HIDE_MODEL(this._stage, stage => stage === STAGE_INTRO),
        p: {
          content: Copy.at.playDescription,
        },
      },
      button: {
        fontSize: "1.3em",
        transition: "0.5s",
        style: this._topCards.as(
          topCards => ([STAGE_START, STAGE_WISDOM].includes(this.stage) &&
            this.wealth.number > 2) ||
          (this.stage === STAGE_WEALTH && topCards.length > 1),
          BUTTON_STYLE.ENABLED(),
          BUTTON_STYLE.DISABLED,
        ),
        label: {
          text: this._stage.as(
            Copy.at.begin,
            Copy.at.next + " ⮕",
            Copy.at.next + " ⮕",
            Copy.at.done,
            NAME ? Copy.at.findYours : Copy.at.restart,
          ),
        },
        click: e => {
          if (this.stage == STAGE_DONE && NAME)
            return window.location.href = MY_URL;
          this.nextStage();
        },
      }
    };

    const sharing = {
      margin: "1em 0",
      model: HIDE_MODEL(this._stage, stage => stage === STAGE_DONE && !NAME),
      form: {
        marginTop: "0.5em",
        h6: Copy.at.shareHand,
        menu: {
          marginTop: "0.5em",
          a: {
            margin: "0 1em",
            target: "_blank",
            click: e => this.storeData(),
            content: [{
              text: "Facebook➚",
              href: this._shareURL.as(url => `https://www.facebook.com/sharer.php?u=${url}`),
            }, {
              text: "Twitter➚",
              href: this._shareURL.as(url => `https://twitter.com/intent/tweet?url=${url}` + `&text=${Copy.at.shareMessage}&hashtags=lenino,leninosjackrabbits,jackrabbits,boardgames,personalitytypes`),
            }, {
              text: "LinkedIn➚",
              href: this._shareURL.as(url => `https://www.linkedin.com/sharing/share-offsite/&url=${url}&title=${Copy.at.pageTitle}&summary=${Copy.at.shareMessage}`),
            }]
          }
        },
        p: {
          marginTop: "2em",
          content: Copy.at.mailingList,
        },
        iframe: {
          src: (root ? "" : "../") + "mailinglist.html",
          width: "100%",
          height: "300px",
        },
        button: {
          ready: elt => !navigator.share ? elt.set("none", "display") : null,
          style: this._canShare.as(BUTTON_STYLE.DISABLED, BUTTON_STYLE.ENABLED()),
          text: Copy.at.share,
          click: e => {
            this.storeData();
            if (navigator.share) {
              navigator.share({
                title: Copy.at.pageTitle,
                text: Copy.at.shareMessage,
                url: this.shareURL,
              }).then(() => {
                e.target.set("none", "display");
              }).catch(console.error);
            }
          },
        }
      },
    };

    this.set({
      id: "suitYourself",
      css: css,
      display: "flex",
      flexDirection: "column",
      placeItems: "center",
      padding: "1em 1em 3em",
      position: "relative",
      border: "1px solid black",
      backgroundColor: "rgba(240,255,240,0.4)",
      header: header,
      main: main,
      footer: {
        section: [instructions, sharing, controls],
      }
    });
  }

  nextStage() {
    this.stage = (STAGES.indexOf(this.stage) + 1) % STAGES.length;
    if (this.stage === STAGE_DONE) {
      this.cards.forEach(c => c.enabled = false);
      window.location.href = '#suitYourself';
    }
    this.updateCount();
  }

  updateCount() {
    let sum = this.cards.reduce((o, c) => o + (c === this.wealth ? 0 : c.number), 0);
    this.wealth.number = CardValued.MAX + 3 * CardValued.MIN - sum;
    this.cards.forEach(c => c.canAdd = this.wealth.number > CardValued.MIN);
    let top = this.cards.reduce((o, c) => c.number > o ? c.number : o, 0);
    this.topCards = this.cards.filter(c => c.number >= top);
    this.orderedCards = [...this.cards].sort((a, b) => b.number - a.number);
  }

  storeData() {
    console.log("Store date for the future:", nameInput.value, this.strength.number, this.charm.number, this.wisdom.number);
  }

  updateShare(name) {
    return;
    let url = MY_URL + `/?lang=${LANG}&jksyhand=${this.strength.number},${this.charm.number},${this.wisdom.number}`
    if (name) url += `&jksyname=${name}`;
    this.shareURL = url;
  }

  getPct(suit, root) {
    if (!suit.pct) return;
    return {
      img: {
        verticalAlign: "middle",
        height: "1em",
        src: root + suit.image
      },
      strong: {
        fontFamily: "title",
        textAlign: "left",
        display: "inline-block",
        width: "3em",
        color: suit.color,
        text: suit.pct + "%",
      }
    }
  }

}

customElements.define("suit-yourself", SuitYourself);

export default SuitYourself;