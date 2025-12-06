import Copy from "../lib/Copy.js";
import LightBox from "../lib/LightBox.js";
import Pager from "../lib/Pager.js";
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

window.visitSong = (key, suit) => {
  LightBox.close();
  if (Pager.key != key) Pager.key = key;
  // Handle forced suit or royal
  CardFloating._forcedRoyal.value = undefined;
  if (typeof suit === "boolean") {
    // if boolean, it's for royal
    CardFloating._forcedRoyal.value = suit;
    suit = undefined;
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
  es: "https://cdn1.suno.ai/685698d2-34aa-4eb1-9829-6a5157f99062.m4a",
  en: "https://cdn1.suno.ai/f4379a34-8df2-409c-95ef-7ac55330891b.m4a",
}), Copy.text({
  es: "Finales posibles",
  en: "The Royal Quest",
}), () => visitSong("home", true));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/cdd9dfa9-2252-44a2-a33f-36fc8801e76b.m4a",
  en: "https://cdn1.suno.ai/b12198a4-b5f3-40b1-ae26-64fbb077a8b1.m4a",
}), Copy.text({
  es: "La partida",
  en: "Setty-Up",
}), () => visitSong("setup"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/f0ce09a2-2a2b-4dee-9045-80ee22f4ee62.m4a",
  en: "https://cdn1.suno.ai/ccbabe38-bc4d-4f79-a3d7-eed835bb0fd5.m4a",
}), Copy.text({
  es: "Turno en cuatro fases",
  en: "Four Phases of a Turn",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/3e351963-9ee9-4896-affd-01dc9c570554.m4a",
  en: "https://cdn1.suno.ai/9c78dd69-d670-4dbf-92f1-ce8e6e335739.m4a",
}), Copy.text({
  es: "Los traslados y el destierro",
  en: "Off the Roads and Off-Board",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5404975e-f15a-4010-a48d-983117382af4.m4a",
  en: "https://cdn1.suno.ai/ad521e3a-5d5a-4089-9ce0-ba1f900b0c36.m4a",
}), Copy.text({
  es: "Diamantes: a comerciar en las plazas",
  en: "Diamonds: Trade at Jack Plazas",
}), () => visitSong("full", Card.SUIT.D));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/b5b6b497-e2e1-43dc-82a7-f7592ee21c6e.m4a",
  en: "https://cdn1.suno.ai/03691c02-bac3-4aa4-9765-2a63fe8ccb7e.m4a",
}), Copy.text({
  es: "Corazones: a vetar los palacios",
  en: "Hearts: Vet the Queen Palaces",
}), () => visitSong("full", Card.SUIT.H));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/b0e6b8b4-15a8-42db-ad11-8fcfe6eb6316.m4a",
  en: "https://cdn1.suno.ai/3b8e9746-7213-4f44-9150-ad2d884d07f3.m4a",
}), Copy.text({
  es: "Tréboles: a volar entre las torres",
  en: "Clovers: Fly from King Towers",
}), () => visitSong("full", Card.SUIT.C));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/c8705c09-adc7-4a00-b412-517adf594c09.m4a",
  en: "https://cdn1.suno.ai/811ffdef-0057-4be3-9922-efc52b70f8bf.m4a",
}), Copy.text({
  es: "Picas: a pelear por las cartas",
  en: "Spades: Fight Others for Cards",
}), () => visitSong("full", Card.SUIT.S));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/ebd768bf-5898-4c08-8601-d5b9b40972b7.m4a",
  en: "https://cdn1.suno.ai/a1c28688-3dda-4133-b412-0fcb65473fff.m4a",
}), Copy.text({
  es: "Un nuevo territorio",
  en: "A New Board of Your Own",
}), () => {
  visitSong("setup");
  popUp("board");
});