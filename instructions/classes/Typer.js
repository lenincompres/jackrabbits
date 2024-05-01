/*
  map = {
    key0: Text in only language,
    key1:{
      en: "Text in English",
      es: "Texto en español",
    },
    key2: [{
      en: "Text in English",
      es: "Texto en español",
    }]
  }
*/

import {
  getCookie,
  setCookie
} from "../auxiliary.js";

class Typer {

  constructor(map = {}) {
    this.map = map;
    this.lang = Typer.lang;
    this.key = Object.keys(this.map)[0];
    this.counter = {};
  }

  add(key, val) {
    if (typeof key !== "string") {
      return Object.entries(key).forEach(([k, v]) => this.add(k, v));
    }
    if (this.map[key]) {
      return console.error(`Key "${key}" exsists in typer`);
    }
    this.map[key] = val;
  }

  // returns the text based on key, array index and language
  get(key, i) {
    if (key === undefined) {
      console.error("No key was passed to the typer.");
    };
    let val = this.map[key];
    if (val === undefined) {
      console.error(`Key "${key}" not found in typer.`);
      return "";
    }
    this.key = key;
    let lang = this.lang;
    if (val[lang]) return val[lang];
    if (typeof val === "string") return val;
    if (!Array.isArray(val)) {
      console.error(`Language "${lang}" not found in typer at "${key}".`);
      return val[Object.keys(val)[0]];
    }
    if (i === undefined) i = 0;
    val = val[i];
    this.counter[key] = i;
    if (val[lang]) return val[lang];
    if (typeof val === "string") return val;
    console.error(`Language "${lang}" not found in typer at "${key}[${i}]".`);
    return val[Object.keys(val)[0]];
  }

  next() {
    let i = this.counter[this.key];
    i = i === undefined ? 0 : i + 1;
    return this.get(this.key, i);
  }

  static set lang(val) {
    setCookie("typer-lang", val, 30);
    location.reload();
  }

  static get lang() {
    let lang = Typer.LANG.EN;
    if (navigator && navigator.language) {
      lang = navigator.language.split("-")[0];
    }
    let savedLang = getCookie("typer-lang");
    if (savedLang) {
      lang = savedLang;
    }
    return lang;
  }

  static LANG = {
    ES: "es",
    EN: "en",
  }

}

export default Typer;