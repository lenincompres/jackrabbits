import Copy from "../lib/Copy.js";

class Song {
  constructor(id, src, title) {
    this.id = id;
    this.src = src;
    this.title = title ? title : src.split("/").pop().split(".")[0];
    this.audio = new Audio(src);
    this.audio.set({
      controls: true,
      class: {
        playing: Song._currentSong.as(v => v === this),
      },
      onplay: () => this.start(!!this.callback),
      onended: () => {
        if (this.callback) return this.callback();
        this.end();
      },
      //timeupdate: () => this.update(),
    });
    document.body.append(this.audio);
    this.link = DOM.let("a", {
      span: Song._currentSong.as(v => v != this ? Copy.text({
        es: "Oye esta canción ▶",
        en: "Play this song ▶",
      }) : Copy.text({
        es: "Para esta canción ◼",
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

  start(playNext) {
    if (Song._currentSong.value && Song._currentSong.value !== this) {
      Song._currentSong.value.end();
    }
    if (!this.isPlaying) {
      this.audio.play();
    }
    Song._currentSong.value = this;
    if (playNext) this.callback = () => Song.playNext();
    else this.callback = null;
  }

  end() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    Song._currentSong.value = null;
  }

  static _currentSong = new Binder();

  static get currentSong() {
    return Song._currentSong.value;
  }

  static List = [];

  static playNext() {
    const i = Song.List.indexOf(Song.currentSong) + 1;
    if (Song.List[i]) Song.List[i].start(true);
  }

}

export default Song;


new Song("home", Copy.text({
  es: "songs/Finales posibles.mp3",
  en: "songs/The Royal Quest.mp3",
}));
new Song("home", Copy.text({
  es: "songs/La partida.mp3",
  en: "songs/Setty-Up.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Turno en cuatro fases.mp3",
  en: "songs/Four Phases of a Turn.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Los traslados y el destierro.mp3",
  en: "songs/Off the Roads and Off-board.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Diamantes, a comerciar en las plazas.mp3",
  en: "songs/Diamonds, Trade at Jack Plazas.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Corazones, a vetar los palacios.mp3",
  en: "songs/Hearts, Vet the Queen Palaces.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Tréboles, a volar entre las torres.mp3",
  en: "songs/Clovers, Fly from King Towers.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Picas, a pelear por las cartas.mp3",
  en: "songs/Spades, Fight Others for Cards.mp3",
}));
new Song("home", Copy.text({
  es: "songs/Un nuevo territorio.mp3",
  en: "songs/A New Board of Your Own.mp3",
}));