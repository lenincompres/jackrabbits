import Pager from "./Pager.js";

class LightBox extends HTMLElement {
  constructor(content) {
    super();
    
    this._OPENED = new Binder(false);
    this.contentElt = DOM.element();
    this.content = content;

    this.set({
      display: this._OPENED.as(val => val ? "flex" : "none"),
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      overflow: "scroll",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1rem",
      click: e => this.close(),
      main: {
        backgroundColor: "white",
        position: "relative",
        a: {
          text: "✕",
          click: e => this.close(),
        },
        section: this.contentElt,
        click: e => e.stopPropagation(),
      }
    });
  }

  get opened(){
    return this._OPENED.value;
  }

  set opened(bool){
    this._OPENED.value = bool;
    DOM.set(bool ? 'hidden' : 'initial', 'overflow');
  }

  set key(key) {
    if (!this.mapper) return;
    this.mapper.key = key;
  }

  set content(content) {
    if (content._MAP) {
      this.mapper = content;
      this.contentElt.set(this.mapper._CONTENT, "content");
      return;
    }
    this.contentElt.set(content, "content");
  }

  open(info) {
    if (this.mapper && typeof info === "string") this.key = info;
    else this.content = info;
    this.opened = true;
  }

  close() {
    this.opened = false;
    this.contentElt.set("", "content");
  }

}

customElements.define('light-box', LightBox);
export default LightBox;