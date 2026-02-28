import Copy from "../../lib/Copy.js";
import LightBox from "../../lib/LightBox.js";
import Pager from "../../lib/Pager.js";
import Card from "./Card.js";
import CardFloating from "./CardFloating.js";

class Song {
  constructor(src, title, callBack = () => null, album = 0) {
    this.callBack = callBack;
    this.src = src;
    this.album = album;
    this.title = title ? title : src.split("/").pop().split(".")[0];
    if (this.title.includes(": ")) {
      this.title = this.title.replaceAll(": ", ": <small>") + "</small>";
    }
    this.audio = new Audio(src);
    this.audio.set({
      controls: true,
      class: {
        playing: Song._currentSong.as(v => v === this),
      },
      onplay: () => this.start(!!Song.autoplay),
      onended: () => {
        if (Song.autoplay) return Song.playNext();
        if (Song.repeat) return Song.currentSong.start();
        this.end();
      },
    });
    document.body.append(this.audio);
    this.link = DOM.let("a", {
      span: Song._currentSong.as(v => v != this ? Copy.text({
        es: "Escucha la canción ▶",
        en: "Play this song ▶",
      }) : Copy.text({
        es: "Detén esta canción ◼",
        en: "Stop this song ◼",
      })),
      class: {
        playing: Song._currentSong.as(v => v === this),
      },
      onclick: Song._currentSong.as(v => () => v == this ? this.end() : this.start()),
    }, false);

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // prevents page from scrolling
        console.log(Math.round(this.audio.currentTime * 10) / 10);
      }
    });

    Song.List.push(this);
  }

  get isPlaying() {
    return !this.audio.paused && !this.audio.ended && this.audio.currentTime > 0;
  }

  start(auto) {
    if (Song.currentSong && Song.currentSong !== this) {
      Song.currentSong.end();
    }
    if (!this.isPlaying) {
      this.audio.play();
      this.callBack();
    }
    Song.currentSong = this;
    Song.autoplay = !!auto;
  }

  end() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    CardFloating._forcedRoyal.value = undefined;
    CardFloating._forcedSuit.value = undefined;
    Song._currentSong.value = null;
  }

  static _currentSong = new Binder();
  static get currentSong() {
    return Song._currentSong.value;
  }
  static set currentSong(s) {
    Song._currentSong.value = s;
    Song.album = s.album;
  }

  static _album = new Binder(0);
  static get album() {
    return Song._album.value;
  }
  static set album(num) {
    Song._album.value = num;
    Song._shuffle = !!Song.shuffle;
  }


  static _autoplay = new Binder(false);
  static get autoplay() {
    return Song._autoplay.value;
  }
  static set autoplay(val) {
    Song._autoplay.value = !!val;
  }

  static _repeat = new Binder(false);
  static get repeat() {
    return Song._repeat.value;
  }
  static set repeat(val) {
    Song._repeat.value = !!val;
  }

  static _shuffle = new Binder(false);
  static get shuffle() {
    return Song._shuffle.value;
  }
  static set shuffle(val) {
    let list = Song.getAlbum(Song.album).map(s => s);
    list.sort((a, b) => Math.random() - 0.5);
    Song.Shuffle = list;
    Song._shuffle.value = !!val;
  }

  static List = [];

  static Shuffle = [];

  static getAlbum(num) {
    if (num === undefined) num = Song.album;
    return Song.List.filter(s => s.album === num);
  }

  static playNext() {
    let songs = Song.getAlbum(Song.album);
    if (Song.shuffle) songs = Song.Shuffle;
    const i = songs.indexOf(Song.currentSong) + 1;
    if (songs[i]) return songs[i].start(Song.autoplay);
    if (Song.repeat) return songs[0].start(Song.autoplay);
    Song.currentSong.end();
  }

}

export default Song;

window.visitSong = (key, suit, royals) => {
  LightBox.close();
  if (Pager.key != key) Pager.key = key;
  // Handle forced suit or royal
  CardFloating._forcedRoyal.value = undefined;
  if (typeof suit === "boolean") {
    // if boolean, it's for royal
    CardFloating._forcedRoyal.value = suit;
    suit = undefined;
  }
  if (typeof royals === "boolean") {
    CardFloating._forcedRoyal.value = royals;
  }
  CardFloating._forcedSuit.value = suit;
  // Display all pages
  setTimeout(() => {
    document.querySelectorAll("hand-section").forEach(h => h.nextPage(h.total));
    setTimeout(() => {
      let elt = document.querySelector("a.button.playing");
      if (elt) elt = elt.parentElement.parentElement;
      const sections = elt.querySelectorAll("section:not(.letter):not(.link)");
      if (sections.length) elt = sections[0];
      const header = elt.querySelector("header");
      if (header) elt = header;
      elt.scrollIntoView();
    }, 300);
  }, 300);
}

new Song(Copy.text({
  es: "https://cdn1.suno.ai/9c98c8bb-a7b1-46f6-94f4-94b1de96c14f.m4a",
  en: "https://cdn1.suno.ai/0e885992-312e-4a38-a59a-e0aaf5387688.m4a",
}), Copy.text({
  es: "Finales posibles",
  en: "The Royal Quest",
}), () => visitSong("home", true));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5e831d1b-2fd9-4aed-8e34-32fcb87020bc.m4a",
  en: "https://cdn1.suno.ai/d2ded1d7-ed83-44d6-b5d0-4fe3204153a8.m4a",
}), Copy.text({
  es: "La partida",
  en: "Setty-Up",
}), () => visitSong("setup"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/28fdfa25-7e06-4eec-a740-6c5c3a8175e9.m4a",
  en: "https://cdn1.suno.ai/ce312c0e-9ad6-4c21-8432-51050ec3f6e9.m4a",
}), Copy.text({
  es: "Turno en cuatro fases",
  en: "Four Phases of a Turn",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/723e02cd-779f-4474-a1eb-0563ea8d8e86.m4a",
  en: "https://cdn1.suno.ai/e096c8fd-eaff-4099-b09e-551cbfaf8de0.m4a",
}), Copy.text({
  es: "Trucos del camino",
  en: "Off the Road",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/081fd690-7921-4708-b622-fbd5937af524.m4a",
  en: "https://cdn1.suno.ai/af918a56-d237-4e4a-b64b-804472ee83ea.m4a",
}), Copy.text({
  es: "Diamantes: a comerciar en las plazas",
  en: "Diamonds: Trade at Jack Plazas",
}), () => visitSong("full", Card.SUIT.D));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/96875b96-826f-40b3-9e06-42b7a0ff1778.m4a",
  en: "https://cdn1.suno.ai/96d44044-6c28-4196-9f80-31d7fe9a5c30.m4a",
}), Copy.text({
  es: "Corazones: a vetar los palacios",
  en: "Hearts: Vet Queen Palaces",
}), () => visitSong("full", Card.SUIT.H));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/1a660e8e-9873-4df7-812b-e24b6a86b121.m4a",
  en: "https://cdn1.suno.ai/8b707e26-436a-4464-a338-24af4b29eb1e.m4a",
}), Copy.text({
  es: "Tréboles: a volar entre las torres",
  en: "Clovers: Fly from King Towers",
}), () => visitSong("full", Card.SUIT.C));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/a001b846-4892-4afb-ae36-1c4475ca1a29.m4a",
  en: "https://cdn1.suno.ai/195a2ca4-e162-4913-8ff8-e028b5bc2227.m4a",
}), Copy.text({
  es: "Picas: a pelear por las cartas",
  en: "Spades: Fight Others for Cards",
}), () => visitSong("full", Card.SUIT.S));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/431e56ce-59e9-4f05-a3a1-99e79c18f908.m4a",
  en: "https://cdn1.suno.ai/b2b6d6b1-5222-44a3-ad0e-5913bbc698da.m4a",
}), Copy.text({
  es: "Un nuevo territorio",
  en: "A New Landscape",
}), () => {
  visitSong("setup");
  popUp("board");
});