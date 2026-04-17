import Copy from "../../lib/Copy.js";
import LightBox from "../../lib/LightBox.js";
import Pager from "../../lib/Pager.js";
import Card from "./Card.js";
import CardFloating from "./CardFloating.js";

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
          this.currentTime = Song.round(this.audio.currentTime);
          const currentLine = this.lines.findLast(line => this.currentTime >= line.on);
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
      text: Song._currentSong.as(v => v != this ? Copy.text({
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
      text: Song._currentSong.as(v => v != this ? "▶" : "◼"),
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
        console.log(Song.round(this.audio.currentTime));
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
      if (!i && verse.dataset.on) startTime = Song.round(verse.dataset.on);
      let spanCount = verse.querySelectorAll("span").length;
      let obj = {
        p: verse,
        spanCount: spanCount,
      };
      if (verse.dataset.on) return verse.dataset.on.split(",").forEach(on => {
        let chobj = Object.assign({}, obj);
        chobj.on = Song.round(on);
        this.lines.push(chobj);
        setLines.push(chobj);
      });
      this.lines.push(obj);
    });
    let totalSpan = this.lines.reduce((total, line) => total + (line.spanCount || 1), 0);
    let span = Song.round((this.audio.duration - startTime) / totalSpan);
    let time = startTime;
    setLines.forEach(line => line.off = Song.round(line.dataset && line.dataset.off ? line.dataset.off : (line.on + span * line.spanCount)));
    this.lines.sort((a, b) => a.off - b.off);
    this.lines.forEach((line, i) => {
      if (line.off) return;
      let setLine = setLines.findLast(line => time + span > line.on && time < line.off);
      if (setLine) time = setLine.off;
      if (line.on === undefined) line.on = time;
      line.off = Song.round(line.on + span * line.spanCount);
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
    verses.sort((a, b) => Song.round(a.dataset.on) - Song.round(b.dataset.on));
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

  static round(num) {
    return Math.round(num * 10) / 10;
  }

  static visitPage = (key, suit, royals) => {
    LightBox.close();
    Pager.key = key;
    CardFloating.force(suit, royals);
    setTimeout(() => {
      const song = Song.currentSong;
      const lyrics = [];
      song.sections = [];
      [...document.querySelectorAll(`[data-lyrics="${song.index}"]`)].forEach(container => {
        if (container.tagName === "SECTION") {
          container.parentElement.open && container.parentElement.open();
          song.sections.push(container);
        } else {
          container.open && container.open();
          song.sections.push(...container.querySelectorAll(":scope>section:not([data-prose]"));
        }
      });
      song.sections.forEach(section => {
        section.classList.add("lyrics-section", "playing");
        lyrics.push(...section.querySelectorAll(":scope:not([data-prose])>p, :scope:not([data-prose])>ul"));
      });
      song.lyrics = lyrics;
      song.sections[0] && song.sections[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 300);
  }

}

export default Song;

new Song(Copy.text({
  es: "https://cdn1.suno.ai/111e9a22-49c4-4da7-b351-ac38ebe1f17d.m4a",
  en: "https://cdn1.suno.ai/60388fd3-f17a-49f5-906a-7ec1d315507d.m4a",
}), Copy.text({
  es: "Finales posibles",
  en: "The Royal Quest",
}), () => Song.visitPage("home", true));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5e831d1b-2fd9-4aed-8e34-32fcb87020bc.m4a",
  en: "https://cdn1.suno.ai/bd708ff9-2345-47a4-965d-8f9bdfee1b38.m4a",
}), Copy.text({
  es: "La partida",
  en: "Setty-Up",
}), () => Song.visitPage("setup"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/c10638be-cd2b-4cc9-aeb1-80be4c9fbd41.m4a",
  en: "https://cdn1.suno.ai/ae9e7541-a9e1-4796-b1b1-703c1a3d921b.m4a",
}), Copy.text({
  es: "Turno en cuatro fases",
  en: "Four Phases of a Turn",
}), () => Song.visitPage("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/43d46aaf-555c-4824-8d7e-56816f666e3f.m4a",
  en: "https://cdn1.suno.ai/55adfa8d-1d62-4053-b34e-518c769b5365.m4a",
}), Copy.text({
  es: "Trucos del camino",
  en: "Off the Road",
}), () => Song.visitPage("intro"));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/081fd690-7921-4708-b622-fbd5937af524.m4a",
  en: "https://cdn1.suno.ai/af918a56-d237-4e4a-b64b-804472ee83ea.m4a",
}), Copy.text({
  es: "Diamantes",
  en: "Diamonds",
}), () => Song.visitPage("full", Card.SUIT.D));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/95fe3886-701d-4a9d-a1ac-fbae1ba1771d.m4a",
  en: "https://cdn1.suno.ai/2af0e530-1401-4480-94b7-c4d2a04862f5.m4a",
}), Copy.text({
  es: "Corazones",
  en: "Hearts",
}), () => Song.visitPage("full", Card.SUIT.H));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/1a660e8e-9873-4df7-812b-e24b6a86b121.m4a",
  en: "https://cdn1.suno.ai/8b707e26-436a-4464-a338-24af4b29eb1e.m4a",
}), Copy.text({
  es: "Tréboles",
  en: "Clovers",
}), () => Song.visitPage("full", Card.SUIT.C));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/5d3b8068-301a-48ef-8c81-cdd90b06a17b.m4a",
  en: "https://cdn1.suno.ai/9dca5a28-3896-4f1b-8792-b992929008d4.m4a",
}), Copy.text({
  es: "Picas",
  en: "Spades",
}), () => Song.visitPage("full", Card.SUIT.S));

new Song(Copy.text({
  es: "https://cdn1.suno.ai/431e56ce-59e9-4f05-a3a1-99e79c18f908.m4a",
  en: "https://cdn1.suno.ai/c829257f-c200-4637-b6f7-ba6dd027ab4f.m4a",
}), Copy.text({
  es: "Un nuevo territorio",
  en: "A New Landscape",
}), () => {
  Song.visitPage("setup");
  popUp("board");
});

Song.shuffleRange(4, 7);