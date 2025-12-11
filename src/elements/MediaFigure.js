export class MediaFigure extends HTMLElement {
  constructor(src, model = {}, still) {
    super();

    !src.includes(".") && (src = `images/${src}.png`);

    const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.ogg');

    let alt = model.alt;
    if (!model.alt) {
      alt = src.split(".");
      alt.pop();
      alt = DOM.unCamelize(alt.pop().split("/").pop(), " ");
    } else {
      delete model.alt;
    }

    let imgModel = model.img;
    delete model.img;

    this.binderSet({
      videoStarted: false,
    });

    this.set({
      img: isVideo && !still ? null : {
        display: !isVideo ? undefined : this._videoStarted.as('inline-block', 'none'),
        src: isVideo ? still : src,
        alt: isVideo ? "Still from " : "Image of " + alt,
        model: imgModel,
      },
      video: !isVideo ? null : {
        display: this._videoStarted.as('none', 'inline-block'),
        ariaLabel: "Video for " + alt,
        autoplay: true,
        loop: true,
        muted: true,
        preload: "auto",
        src: src,
        oncanplay: ev => {
          ev.target.muted = true;
          ev.target.play();
          this.videoStarted = true;
        },
      },
      role: model.onclick ? "button" : undefined,
      model: model,
    });
  }

}

customElements.define("media-figure", MediaFigure);

export default MediaFigure;