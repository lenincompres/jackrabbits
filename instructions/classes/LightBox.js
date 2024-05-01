import Mapper from "./Mapper.js";

class LightBox extends HTMLElement {
  constructor(content) {
    super();
    
    this._ON = new Binder(false);
    this._CONTENT = new Binder();

    this.content = content;

    this.set({
      display: this._ON.as(val => val ? "flex" : "none"),
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
        section: {
          content: this._CONTENT,
        },
        click: e => e.stopPropagation(),
      }
    });
  }

  set key(key) {
    if (!this.mapper) return;
    this.mapper.key = key;
  }

  set content(content) {
    if (content._MAP) {
      this.mapper = content;
      this._CONTENT = this.mapper._CONTENT;
      return;
    }
    this._CONTENT.value = content;
  }

  open(content) {
    if (this.mapper) this.key = content;
    else this._CONTENT.value = content;
    this._ON.value = true;
  }

  close() {
    this._ON.value = false;
  }

}

customElements.define('light-box', LightBox);
export default LightBox;