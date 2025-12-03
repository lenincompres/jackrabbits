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
    })
    this.titles = [];
    this.total = this.sections.length;

    function getTitle(elt, num = 1){
      if(num > 4) return elt.get("*");
      let title = elt.get(`h${num}`);
      if(!title) return getTitle(elt, num += 1);
      if (!Array.isArray(title)) title = title.innerText;
      else title = title.map(s => s.innerText).join(" & ");
      return title;
    }

    this.sections.forEach((section, index) => {
      section.set({
        zIndex: this.total - index,
        class: {
          opened: this._currentPage.as(v => v >= index),
            peak: this._peakPage.as(v => v === index),
        },
        onclick: this._currentPage.as(v => v < index ? () => this.nextPage(index) : null),
      });
      this.titles.push(getTitle(section));
    });

    this.set({
      a_button_next: {
        text: this._currentPage.as(val => Copy.text({
          en: `Next: ${this.titles[val + 1]} ➧`,
          es: `Sigue: ${this.titles[val + 1]} ➧`,
        })),
        alignContent: "end",
        margin: "0.5rem 40% 0",
        zIndex: this.total + 1,
        onmouseover: () => this.peakPage = this.currentPage + 1,
        onmouseout: () => this.peakPage = undefined,
        onclick: () => this.nextPage(),
      }
    });

  }


  nextPage(index) {
    if (this.currentPage >= this.total - 1) return;
    if (index === undefined) index = this.currentPage + 1;
    else if (index < this.currentPage) return;
    this.currentPage = index;
    if (index >= this.total - 1) return this.open();
  }

  open() {
    this.classList.add("opened");
  }

}

customElements.define("hand-section", HandSection);

export default HandSection;