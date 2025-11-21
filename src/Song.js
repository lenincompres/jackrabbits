import Copy from "../lib/Copy.js";

class Song {
  constructor(id, src, title) {
    this.binderSet({
      isOn: false,
    });

    this.id = id;
    this.src = src;
    this.title = title ? title : src.split("/").pop().split(".")[0];
    this.audio = new Audio(src);
    this.audio.set({
      onplay: () => this.start(),
      onended: () => this.end(),
      timeupdate: () => this.update(),
      controls: true,
    });
    this.link = DOM.let("a", {
      span: this._isOn.as(Copy.text({
        es: "Oye esta canción ▶",
        en: "Play this song ▶",
      }), Copy.text({
        es: "Para esta canción ⏹",
        en: "Stop this song ⏹",
      })),
      class: {
        playing: this._isOn.as(false, true),
      },
      onclick: () => this.isOn ? this.end() : this.start(),
    }, false);

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // prevents page from scrolling
        console.log(Math.round(this.audio.currentTime * 10) / 10);
      }
    });
  }

  get isPlaying() {
    return !this.audio.paused && !this.audio.ended && this.audio.currentTime > 0;
  }

  start() {
    if (window.currentlyPlayingSong && window.currentlyPlayingSong !== this) {
      window.currentlyPlayingSong.end();
    }
    if (!this.isPlaying) {
      this.audio.play();
      document.body.append(this.audio);
    }
    /*
    this.lines = [];
    let container = document.querySelector(`[data-song="${this.id}"]`);
    if (!container) container = document.body;
    [...container.querySelectorAll("line span")].forEach(line => {
      this.lines.push({
        elt: line,
        start: parseFloat(line.getAttribute("data-start")),
        end: parseFloat(line.getAttribute("data-end")),
      });
    });
    this.lines = this.lines.sort((a, b) => a.start - b.start);
    this.lines.forEach((line, i) => {
      const nextLine = this.lines[i + 1];
      if(!line.end || line.end === "") {
        line.end = nextLine ? nextLine.start - 0.01 : Infinity;
      }
      line.elt.classList.remove("highlighted");
      line.elt.onclick = () => {
        console.log(line);
        if (line.start) {
          this.audio.currentTime = line.start;
          this.update();
        }
      }
    });
    */
    this.isOn = true;
    window.currentlyPlayingSong = this;
  }

  end() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.remove();
    }
    this.isOn = false;
  }

  update() {
    /*
    const currentTime = this.audio.currentTime;

    this.lines.forEach(line => {

      const start = typeof line.start === "number" ? line.start : Infinity;

      const end = (!line.end || line.end === "") ? Infinity : (typeof line.end === "number" ? line.end : line.end);

      if (currentTime >= start && currentTime <= end) {
        line.elt.classList.add("highlighted");
      } else {
        line.elt.classList.remove("highlighted");
      }
    });
    */
  }

}

export default Song;