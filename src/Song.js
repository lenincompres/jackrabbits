import Copy from "../lib/Copy.js";

class Song {
  constructor(src, title) {
    this.src = src;
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
      //timeupdate: () => this.update(),
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
    if (Song.currentSong) {
      if (Song.currentSong !== this) {
        Song.currentSong.end();
      } else {
        //this.audio.currentTime = 0;
      }
    }
    if (!this.isPlaying) {
      this.audio.play();
    }
    Song._currentSong.value = this;
    Song._autoplay.value = !!auto;
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

  static _autoplay = new Binder(false);

  static get autoplay() {
    return this._autoplay.value;
  }
  static set autoplay(val) {
    this._autoplay.value = !!val;
  }

  static _repeat = new Binder(false);

  static get repeat() {
    return this._repeat.value;
  }
  static set repeat(val) {
    this._repeat.value = !!val;
  }

  static List = [];

  static playNext() {
    const i = Song.List.indexOf(Song.currentSong) + 1;
    if (Song.List[i]) Song.List[i].start(Song.autoplay);
    else if (Song.repeat) Song.List[0].start(Song.autoplay);
    else Song.currentSong.end();
  }

}

export default Song;


new Song(Copy.text({
  es: "https://cdn1.suno.ai/685698d2-34aa-4eb1-9829-6a5157f99062.m4a",
  en: "https://cdn1.suno.ai/f4379a34-8df2-409c-95ef-7ac55330891b.m4a",
}), Copy.text({
  es: "Finales posibles",
  en: "The Royal Quest",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/cdd9dfa9-2252-44a2-a33f-36fc8801e76b.m4a",
  en: "https://cdn1.suno.ai/b12198a4-b5f3-40b1-ae26-64fbb077a8b1.m4a",
}), Copy.text({
  es: "La partida",
  en: "Setty-Up",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/f0ce09a2-2a2b-4dee-9045-80ee22f4ee62.m4a",
  en: "https://cdn1.suno.ai/8fc02588-7800-4bfa-bffd-bf03ba6dce08.m4a",
}), Copy.text({
  es: "Turno en cuatro fases",
  en: "Four Phases of a Turn",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/3e351963-9ee9-4896-affd-01dc9c570554.m4a",
  en: "https://cdn1.suno.ai/9c78dd69-d670-4dbf-92f1-ce8e6e335739.m4a",
}), Copy.text({
  es: "Los traslados y el destierro",
  en: "Off the Roads and Off-Board",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/5404975e-f15a-4010-a48d-983117382af4.m4a",
  en: "https://cdn1.suno.ai/ad521e3a-5d5a-4089-9ce0-ba1f900b0c36.m4a",
}), Copy.text({
  es: "Diamantes: a comerciar en las plazas",
  en: "Diamonds: Trade at Jack Plazas",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/b5b6b497-e2e1-43dc-82a7-f7592ee21c6e.m4a",
  en: "https://cdn1.suno.ai/03691c02-bac3-4aa4-9765-2a63fe8ccb7e.m4a",
}), Copy.text({
  es: "Corazones: a vetar los palacios",
  en: "Hearts: Vet the Queen Palaces",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/b0e6b8b4-15a8-42db-ad11-8fcfe6eb6316.m4a",
  en: "https://cdn1.suno.ai/3b8e9746-7213-4f44-9150-ad2d884d07f3.m4a",
}), Copy.text({
  es: "Tréboles: a volar entre las torres",
  en: "Clovers: Fly from King Towers",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/c8705c09-adc7-4a00-b412-517adf594c09.m4a",
  en: "https://cdn1.suno.ai/46544f5c-a009-4375-a2d2-3810a4d8bf6e.m4a",
}), Copy.text({
  es: "Picas: a pelear por las cartas",
  en: "Spades: Fight Others for Cards",
}));
new Song(Copy.text({
  es: "https://cdn1.suno.ai/ebd768bf-5898-4c08-8601-d5b9b40972b7.m4a",
  en: "https://cdn1.suno.ai/d2065d9a-196b-41e2-bbd6-567ec14348a5.m4a",
}), Copy.text({
  es: "Un nuevo territorio",
  en: "A New Board of Your Own",
}));