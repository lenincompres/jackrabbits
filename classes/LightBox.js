class LightBox extends HTMLElement {
  mainElement = DOM.element("main");

  constructor(content) {
    super();
    this.binderSet("opened");
    this._opened.onChange(val => DOM.set(val ? 'hidden' : 'initial', 'overflow'));
    if (content.map) this.pager = content;
    this.set({
      display: this._opened.as(val => val ? "flex" : "none"),
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
      section: {
        backgroundColor: "white",
        position: "relative",
        a: {
          text: "✕",
          click: e => this.close(),
        },
        main: this.mainElement.set(this.pager ? this.pager._content : content),
        click: e => e.stopPropagation(),
      }
    });
  }

  open(content) {
    this.opened = true;
    if (this.pager && typeof content === "string") return this.pager.key = content;
    this.mainElement.set(content, "content");
  }

  close() {
    this.opened = false;
  }

}

customElements.define('light-box', LightBox);
export default LightBox;