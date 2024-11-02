/**
 * It's a router based on DOM.js (structure)
 * @author Lenin Compres <lenincompres@gmail.com>
 * @version 1.0.2
 * @repository https://github.com/lenincompres/DOM.js
 */

 class Pager {
  /**
   * Creates a Pager instance.
   * @param {object} map - Indexed pages models.
   * @param {object} hashed - Links the static pager to the window hash.
   */
  #hashed = false;
  map = {};
  default;
  constructor(map = {}) {
    this.binderSet("key");
    if(map === true)this.#hashed = true;
    else if(map) this.add(map);
    if (this.#hashed) {
      this._key.onChange(val => location.href = `#${val}`);
      const hash = () => this.key = location.hash.substr(1).split("-")[0];
      window.addEventListener("hashchange", hash);
      hash();
    }
    this._key.onChange(val => !this.hasKey(val) ? this.key = this.default : null);
  }
  /**
   * Adds an entry of page model to the pager.
   * @param {string} key - Key index of this page.
   * @param {object} content - JS model of thepage.
   * @returns 
   */
  add(key, content) {
    if (typeof key === "string") {
      if (!this.default) this.default = key;
      this.map[key] = content;
      return;
    }
    for (const [k, value] of Object.entries(key)) {
      this.add(k, value);
    }
  }
  /**
   * Gets the key of the current page.
   */
  get keys() {
    return Object.keys(this.map);
  }
  /**
   * Gets the JS model of the current page.
   */
  get content(){
    return this.map[this.key];
  }
  /**
   * Gets the binder for the JS model of the current page.
   */
  get _content() {
    return this._key.as(key => this.map[key]);
  }
  /**
   * Gets the links to change the pager.
   * @param {function} aFunc - Function to be assigned to the links model.
   * @returns {object} - The JS model of a list of links (ul:li:a).
   */
  getLinkMenu(aFunc = (key, i) => {}) {
    return DOM.linkMenu(this.keys.map((key, i) => Object.assign({
      class: {
        active: this._key.as(val => val === key),
      },
      text: key,
      onclick: () => this.key = key,
    }, aFunc(key, i))));
  }
  /**
   * Checks if a key exists in the pager.
   * @param {string} key - Key to check. 
   * @returns {boolean} - Does the key exist?
   */
  hasKey = key => this.keys.includes(key);

  /* Not sure what this does */
  _map(key, func = val => val) {
    return this._key.as(key => func(this.map[key]));
  }
  /**
   * Static instace of a pager linked to the hash, meant to be the main pager of a website.
   */
  static getDefaultInstance() {
    if (Pager._defaultInstance) return Pager._defaultInstance;
    return Pager._defaultInstance = new Pager(true);
  }
  static get map() {
    return Pager.getDefaultInstance().map;
  }
  static get key() {
    return Pager.getDefaultInstance().key;
  }
  static set key(val) {
    Pager.getDefaultInstance().key = val;
  }
  static get _key() {
    return Pager.getDefaultInstance()._key;
  }
  static get default() {
    return Pager.getDefaultInstance().default;
  }
  static get keys() {
    return Pager.getDefaultInstance().keys;
  }
  static get content() {
    return Pager.getDefaultInstance().content;
  }
  static get _content() {
    return Pager.getDefaultInstance()._content;
  }
  static add = (...args) => Pager.getDefaultInstance().add(...args);
  static hasKey = (key) => Pager.getDefaultInstance().hasKey(key);
  static _map = (...args) => Pager.getDefaultInstance()._map(...args);
  static getLinkMenu = (...args) => Pager.getDefaultInstance().getLinkMenu(...args);
}

export default Pager;