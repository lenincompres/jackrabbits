/**
 * Lightbox based on DOM.js (with default instance added to the DOM)
 * @author Lenin Compres <lenincompres@gmail.com>
 * @version 1.0.1
 * @repository https://github.com/lenincompres/DOM.js
 */

class LightBox extends HTMLElement {

  constructor(content) {
    super();
    this.binderSet("opened");
    this._opened.onChange(val => DOM.set(val ? 'hidden' : 'initial', 'overflow'));
    this.mainElement = DOM.element("main");
    if (content) this.add(content);
    this.set({
      display: this._opened.as(val => val ? "flex" : "none"),
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.68)",
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

  add(content) {
    if (!content) return;
    if (this.pager && typeof content === "string") return this.pager.key = content;
    if (content.map) this.pager = content;
    this.mainElement.set(this.pager ? this.pager._content : content)
  }

  open(content) {
    if (content) this.add(content);
    this.opened = true;
  }

  close() {
    this.opened = false;
    this.pager.key = undefined;
  }


  static getDefaultInstance() {
    if (LightBox._defaultInstance) return LightBox._defaultInstance;
    LightBox._defaultInstance = new LightBox();
    DOM.set(LightBox.getDefaultInstance());
    return LightBox._defaultInstance;
  }
  static add = content => LightBox.getDefaultInstance().add(content);
  static open = content => LightBox.getDefaultInstance().open(content);
  static close = () => LightBox.getDefaultInstance().close();

}

customElements.define('light-box', LightBox);
export default LightBox;