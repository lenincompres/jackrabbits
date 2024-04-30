/*
  This is essentially a router
*/

class Mapper {

  constructor(map) {
    this.map = map;
    this.default = Object.keys(map)[0];
    this._SELECTED_KEY = new Binder(this.default);
    window.addEventListener("hashchange", () => this.refresh());
    this.refresh();
  }

  refresh() {
    let hash = location.hash.substr(1);
    let key = hash.split("/")[0];
    if (!key) key = this.default;
    if (this.key === key) return;
    if (!this.map[key]) return;
    this.key = key;
    if (key !== hash) setTimeout(location.href = `#${hash}`, 500);
  }

  set key(key){
    if(key === undefined) hey = this.default;
    this._SELECTED_KEY.value = key;
  }

  get key(){
    return this._SELECTED_KEY.value;
  }

  /* Methods and getters that return binder models */

  get _KEY(){
    return this._SELECTED_KEY;
  }

  get _CONTENT(){
    return this._SELECTED_KEY.as(key => this.map[key]);
  }

  _MAP(key, func = val => val){
    return this._SELECTED_KEY.as(key => func(this.map[key]));
  }

}

export default Mapper;