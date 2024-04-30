import Mapper from "./Mapper.js";

class LightBox extends HTMLElement{
  constructor(map){
    super();
    this.mapper = new Mapper(map);
    this._ON = new Binder(false);

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
          content: this.mapper._CONTENT,
        },
        click: e => e.stopPropagation(),
      }
    });
  }

  open(key){
    this.mapper.key = key;
    this._ON.value = true;
  }

  close(){
    this._ON.value = false;
  }

}

customElements.define('light-box', LightBox);
export default LightBox;