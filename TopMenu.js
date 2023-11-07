
window.ROOT = window.location.href.substr(0, window.location.href.lastIndexOf("/"));

const QS = DOM.querystring();
window.LANG = QS.lang ? QS.lang.toLowerCase() : "en";

class TopMenu extends HTMLElement {
  constructor(root) {
    super();

    this.set({
        width: "100%",
        margin: "0 auto 2.5em",
        maxWidth: "30em",
        height: "1em",
        ul: {
          display: "flex",
          placeContent: "space-around",
          li: {
            content: [{
              display: LANG !== "en" ? "block" : "none",
              a: {
                text: "English",
                href: ROOT,
              }
            }, {
              display: LANG !== "es" ? "block" : "none",
              a: {
                text: "Español",
                href: ROOT + "/index.html?lang=es",
              }
            }, {
              a: {
                text: "Lenino.net",
                href: "http://lenino.net",
                img: {
                  verticalAlign: "top",
                  height: "2em",
                  src: "http://lenino.net/assets/leninoLogo.png",
                  alt: "Lenino.net logo"
                },
              }
            }]
          }
        }
      });
    }

    static TEXT ={
      JK: {
        en: "Jack Rabbits' Game",
        es: "Juego de Jack Rabbits",
      }
    }

  }

  customElements.define("lenino-top-menu", TopMenu);
  
  export default TopMenu;