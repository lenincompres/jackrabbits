class Router {

  constructor(pageMap) {
    this.pageMap = pageMap;

    this._SELECTED_KEY = new Binder("home");

    window.addEventListener("hashchange", () => this.refresh());

    this.refresh();
  }

  refresh() {
    let hash = location.hash.substr(1);
    let key = hash.split("/")[0];
    if (!key) key = "home";
    if (this.page === key) return;
    if (!this.pageMap[key]) return alert(404);
    this.page = key;
    if (key !== hash) setTimeout(location.href = `#${hash}`, 500);
  }

  mapNavLinks(f){
    let nav = Object.entries(this.pageMap).map(([key, val]) => val.nav ? [key, val.title] : false).filter(key => key);
    return nav.map(([page, title]) => f(page, title));
  }

  set page(key = "home"){
    this._SELECTED_KEY.value = key;
  }

  get page(){
    return this._SELECTED_KEY.value;
  }

  /* Methods and getters that return binder models */

  get _page(){
    return this._SELECTED_KEY;
  }

  get _content(){
    return this._page.as(page => this.pageMap[page].content);
  }

}

export default Router;