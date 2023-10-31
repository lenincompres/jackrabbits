import Aux from "./Aux.js";
import Card from "./Card.js";

export class VideoCard extends Card {

  constructor(front, src, w, h) {

    let iFrame = DOM.set({
      width: "100%",
      height: "100%",
      src: src,
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: true,
    }, "iFrame");

    super(front, {
      iFrame: iFrame,
    }, w, h);

    this.iFrame = iFrame;

    window.addEventListener("scroll", e => Aux.isElementInView(this.elt) ? this.open() : this.close());

  }

  close() {
    if (!this.isFront) {
      this.flip(true);
      this.iFrame.src = this.iFrame.src;
    }
  }

  open() {
    if (this.isFront) this.flip(false);
  }

}

export default VideoCard;