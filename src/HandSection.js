import Copy from "../lib/Copy.js";

export class HandSection extends HTMLElement {

  constructor(content, current = 0) {
    super();
    if (content) this.set({
      class: {
        handSection: true,
      },
      content: content
    });
    this.sections = this.get("section");

    this.binderSet({
      currentPage: current,
      peakPage: null,
      nextName: "",
    })
    this.titles = [];
    this.total = this.sections.length;

    this.sections.forEach((section, index) => {
      section.set({
        zIndex: this.total - index,
        transition: "0.2s ease-in-out",
        class: {
          opened: this._currentPage.as(v => v >= index),
            peak: this._peakPage.as(v => v === index),
        },
        onclick: this._currentPage.as(v => v < index ? () => this.nextPage(index) : null),
      });
      let title = section.get("h3");
      if (!title) title = section.get("h2");
      if (!title) title = section.get("h4");
      //if (!title) title = section.get("*");
      if (title) {
        if(Array.isArray(title)) title = title.map(s => s.innerText).join(" & ");
        else title = title.innerText;
        this.titles.push(title);
      }
    });

    this.nextName = this.titles[current + 1];

    this.aButton = DOM.let("a_button_next", {
      text: this._nextName.as(name => Copy.text({
        en: `Next: ${name} ➧`,
        es: `Sigue: ${name} ➧`,
      })),
      alignContent: "end",
      margin: "0.5rem 40% 0",
      zIndex: this.total + 1,
      onmouseover: () => this.peakPage = this.currentPage + 1,
      onmouseout: () => this.peakPage = undefined,
      onclick: () => this.nextPage(),
    });
    this.append(this.aButton);
  }


  nextPage(index) {
    if (this.currentPage >= this.total - 1) return;
    if (index === undefined) index = this.currentPage + 1;
    else if (index < this.currentPage) return;
    this.currentPage = index;
    if (index >= this.total - 1) {
      this.set({
        class: {
          opened: true
        }
      });
      this.aButton.remove();
      return;
    }
    this.nextName = this.titles[index + 1];
  }

}

customElements.define("hand-section", HandSection);

export default HandSection;