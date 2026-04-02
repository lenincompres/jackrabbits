import Copy from "../../lib/Copy.js";
import LightBox from "../../lib/LightBox.js";
import Pager from "../../lib/Pager.js";
import Card from "./Card.js";
import CardFloating from "./CardFloating.js";

function goodRound(num) {
  return Math.round(num * 10) / 10;
}

class Song {
  constructor(src, title, callBack = () => null, album = 0, timeUpdate = () => null) {
    this.callBack = callBack;
    this.src = src;
    this.album = album;
    this.index = Song.List.length;
    this.title = title ? title : src.split("/").pop().split(".")[0];
    this.binderSet({
      currentTime: 0,
      currentVerse: null,
    });
    if (this.title.includes(": ")) {
      this.title = this.title.replaceAll(": ", ": <small>") + "</small>";
    }
    this._lyrics = [];
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
      eventListener: {
        type: "timeupdate",
        listener: () => {
          timeUpdate(this.currentTime);
          if (!this.lines) return;
          this.currentTime = goodRound(this.audio.currentTime);
          const currentLine = this.lines.findLast(line => this.currentTime >= line.on && this.currentTime <= line.off);
          if (currentLine && this.currentVerse !== currentLine.p) {
            this.currentVerse = currentLine.p;
            this.currentVerse.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }
        },
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
    this.btn = DOM.let("a", {
      span: Song._currentSong.as(v => v != this ? "▶" : "◼"),
      class: {
        playing: Song._currentSong.as(v => v === this),
      },
      onclick: Song._currentSong.as(v => () => v == this ? this.end() : this.start()),
    }, false);

    document.addEventListener("keydown", (e) => {
      if (!this.isPlaying) return;
      if (e.code === "Space") {
        e.stopPropagation();
        e.preventDefault(); // prevents page from scrolling 
        console.log(goodRound(this.audio.currentTime));
      }
    });

    Song.List.push(this);
  }

  set lyrics(verses = []) {
    if (this._lyrics.length || !verses || !verses.length) return;
    // Calculate timing for each line based on total lines and audio duration
    this.lines = [];
    let setLines = [];
    let startTime = 3;
    verses.forEach((verse, i) => {
      if (!i && verse.dataset.on) startTime = goodRound(verse.dataset.on);
      let spanCount = verse.querySelectorAll("span").length;
      let obj = {
        p: verse,
        spanCount: spanCount,
      };
      if (verse.dataset.on) return verse.dataset.on.split(",").forEach(on => {
        let chobj = Object.assign({}, obj);
        chobj.on = goodRound(on);
        this.lines.push(chobj);
        setLines.push(chobj);
      });
      this.lines.push(obj);
    });
    let totalSpan = this.lines.reduce((total, line) => total + (line.spanCount || 1), 0);
    let span = goodRound((this.audio.duration - startTime) / totalSpan);
    let time = startTime;
    setLines.forEach(line => line.off = goodRound(line.dataset && line.dataset.off ? line.dataset.off : (line.on + span * line.spanCount)));
    this.lines.sort((a, b) => a.off - b.off);
    this.lines.forEach((line, i) => {
      if (line.off) return;
      let setLine = setLines.findLast(line => time + span > line.on && time < line.off);
      if (setLine) time = setLine.off;
      if (line.on === undefined) line.on = time;
      line.off = goodRound(line.on + span * line.spanCount);
      time = line.off;
      setLines.push(line);
    });
    this.lines.sort((a, b) => a.on - b.on);
    this.lines.forEach(line => line.p.set({
      class: {
        lyrics: true,
          off: this._currentTime.as(t => this.isPlaying && t > line.on + span),
          on: this._currentVerse.as(v => this.isPlaying && v === line.p),
      },
      onclick: () => {
        if (!line.on || !this.isPlaying) return;
        this.audio.currentTime = line.on;
      }
    }));
    verses.sort((a, b) => goodRound(a.dataset.on) - goodRound(b.dataset.on));
    this._lyrics = verses;
  }
  get lyrics() {
    return this._lyrics;
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
    this.currentSong = 0;
    this.currentTime = 0;
    this.currentVerse = null;
    Song.currentSong = this;
    Song.autoplay = !!auto;
  }

  end() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.currentTime = 0;
    this.currentVerse = null;
    this.sections && this.sections.forEach(s => s.classList.remove("playing"));
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

  static getIndexedAlbum(num) {
    let arr = Song.getAlbum(num).map(s => s);
    return arr.sort((a, b) => a.index - b.index);
  }

  static get index() {
    return Song.getAlbum().indexOf(Song.currentSong);
  }

  static playNext() {
    let songs = Song.getAlbum(Song.album);
    if (Song.shuffle) songs = Song.Shuffle;
    const i = songs.indexOf(Song.currentSong) + 1;
    if (songs[i]) return songs[i].start(Song.autoplay);
    if (Song.repeat) return songs[0].start(Song.autoplay);
    Song.currentSong.end();
  }

  static shuffleRange(start, end) {
    const arr = Song.List;
    if (start === undefined) start = 0;
    if (end === undefined) end = arr.length - 1;
    for (let i = end; i > start; i--) {
      const j = Math.floor(Math.random() * (i - start + 1)) + start;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    Song.List = arr;
  }

  static get indexedList() {
    const arr = Song.List.map(s => s);
    return arr.sort((a, b) => a.index - b.index);
  }

  static get indexes() {
    return Song.List.map(s => s.index);
  }

  static addSong(model, index, addFooter = true) {
    if (!model || index === undefined) return console.error("Model and index are required to add a song:", model, index);
    if (!Song.indexes.includes(index)) return console.error("There's no song for this index:", index);
    model.dataLyrics = index;
    model.a_button_play_song = Song.indexedList[index].btn;
    // Add footer link to song
    if (!addFooter) return;
    let fn = model.div_note_footnote;
    if (fn) delete model.div_note_footnote;
    if (model.footer) {
      model.footer.a_button_song = Song.indexedList[index].link;
    } else {
      model.footer = {
        a_button_song: Song.indexedList[index].link,
      };
    }
    model.div_note_footnote = fn;
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
  if (typeof royals === "boolean") CardFloating._forcedRoyal.value = royals;
  CardFloating._forcedSuit.value = suit;
  // Display all pages
  setTimeout(() => {
    let song = Song.currentSong;
    const containers = [...document.querySelectorAll(`[data-lyrics="${song.index}"]`)];
    const lyrics = [];
    song.sections = [];
    containers.forEach(container => {
      container.open && container.open();
      container.parentElement.open && container.parentElement.open();
      if (container.tagName === "SECTION") song.sections.push(container);
      else song.sections.push(...container.querySelectorAll(":scope>section:not([data-prose]"));
    });
    song.sections.forEach(section => {
      section.classList.add("lyrics-section", "playing");
      lyrics.push(...section.querySelectorAll(":scope:not([data-prose])>p, :scope:not([data-prose])>ul"));
    });
    song.lyrics = lyrics;
    if(song.sections[0]) song.sections[0].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 300);
}

new Song(Copy.text({
  es: "https://cdn1.suno.ai/111e9a22-49c4-4da7-b351-ac38ebe1f17d.m4a",
  en: "https://cdn1.suno.ai/b81bace0-e419-46a7-b089-569e23859b97.m4a",
}), Copy.text({
  es: "Finales posibles",
  en: "The Royal Quest",
}), () => visitSong("home", true));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5e831d1b-2fd9-4aed-8e34-32fcb87020bc.m4a",
  en: "https://cdn1.suno.ai/bd708ff9-2345-47a4-965d-8f9bdfee1b38.m4a",
}), Copy.text({
  es: "La partida",
  en: "Setty-Up",
}), () => visitSong("setup"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/62744824-9f19-47c0-b03d-bb7f99014097.m4a",
  en: "https://cdn1.suno.ai/ce312c0e-9ad6-4c21-8432-51050ec3f6e9.m4a",
}), Copy.text({
  es: "Turno en cuatro fases",
  en: "Four Phases of a Turn",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/7a1fb96b-47d6-4d5b-befd-05dbde17885d.m4a",
  en: "https://cdn1.suno.ai/1b4ab897-9525-43d4-a224-2249909d37a8.m4a",
}), Copy.text({
  es: "Trucos del camino",
  en: "Off the Road",
}), () => visitSong("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/081fd690-7921-4708-b622-fbd5937af524.m4a",
  en: "https://cdn1.suno.ai/af918a56-d237-4e4a-b64b-804472ee83ea.m4a",
}), Copy.text({
  es: "Diamantes",
  en: "Diamonds",
}), () => visitSong("full", Card.SUIT.D));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/95fe3886-701d-4a9d-a1ac-fbae1ba1771d.m4a",
  en: "https://cdn1.suno.ai/96d44044-6c28-4196-9f80-31d7fe9a5c30.m4a",
}), Copy.text({
  es: "Corazones",
  en: "Hearts",
}), () => visitSong("full", Card.SUIT.H));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/1a660e8e-9873-4df7-812b-e24b6a86b121.m4a",
  en: "https://cdn1.suno.ai/8b707e26-436a-4464-a338-24af4b29eb1e.m4a",
}), Copy.text({
  es: "Tréboles",
  en: "Clovers",
}), () => visitSong("full", Card.SUIT.C));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/a001b846-4892-4afb-ae36-1c4475ca1a29.m4a",
  en: "https://cdn1.suno.ai/9dca5a28-3896-4f1b-8792-b992929008d4.m4a",
}), Copy.text({
  es: "Picas",
  en: "Spades",
}), () => visitSong("full", Card.SUIT.S));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/431e56ce-59e9-4f05-a3a1-99e79c18f908.m4a",
  en: "https://cdn1.suno.ai/c829257f-c200-4637-b6f7-ba6dd027ab4f.m4a",
}), Copy.text({
  es: "Un nuevo territorio",
  en: "A New Landscape",
}), () => {
  visitSong("setup");
  popUp("board");
});

Song.shuffleRange(4, 7);