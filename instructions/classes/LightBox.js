class LightBox extends HTMLElement{
  constructor(pageMap){
    super();

    this.pageMap = pageMap;

    this._ON = new Binder(false);
    this._CONTENT = new Binder();

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
      padding: "1rem 0",
      main: {
        backgroundColor: "white",
        position: "relative",
        a: {
          text: "X",
          click: e => this.close(),
        },
        section: {
          content: this._CONTENT,
        },
      }
    });
  }

  open(key){
    if(this.pageMap) {
      if(this.pageMap[key]) this._CONTENT.value = this.pageMap[key];
      else this._CONTENT.value = this.pageMap;
    }
    else if(key) this._CONTENT.value = key;
    this._ON.value = true;
  }

  close(){
    this._ON.value = false;
  }

}

customElements.define('light-box', LightBox);
export default LightBox;