/*
  This is essentially a router
*/

class Pager {

  constructor(map, setAnchors = false) {
    this.map = map;
    this.default = Object.keys(map)[0];

    this.binderSet("key", this.default, key => key === undefined ? this.hey = this.default : null);

    window.addEventListener("hashchange", () => this.refresh());
    this.refresh();
    if (setAnchors) this.setAnchors();
  }

  refresh() {
    let hash = location.hash.substr(1);
    let key = hash.split("-")[0];
    if (!key) key = this.default;
    if (this.key === key) return;
    if (!this.map[key]) return;
    this.key = key;
    if (key !== hash) setTimeout(location.href = `#${hash}`, 500);
  }

  setAnchors() {
    DOM.set(this.keys.map(key => ({
      name: key
    })), "a");
  }

  get keys() {
    return Object.keys(this.map);
  }

  get entries() {
    return Object.entries(this.map);
  }

  hasKey(key) {
    return this.keys.includes(key);
  }

  filterEntries(filter = val => val) {
    return this.entries.filter(([key, val]) => filter(val));
  }

  /* Methods and getters that return binder models */

  get _content() {
    return this._key.as(key => this.map[key]);
  }

  _map(key, func = val => val) {
    return this._key.as(key => func(this.map[key]));
  }

}

export default Pager;