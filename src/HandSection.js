import Copy from "../lib/Copy.js";

export class HandSection extends HTMLElement {

  constructor(contentModel = {}, startingPage = 0) {
    super();

    // Initial setup
    this.classList.add("handSection");
    this.set(contentModel);
    this.sections = this.get("section");
    this.total = this.sections.length;
    this.titles = [];

    // Bindings
    this.binderSet({
      currentPage: startingPage,
      peakedPage: null,
    });

    // Recursive function to get the title from headers h1 to h4
    function getTitle(elt, num = 1){
      if(num > 4) return elt.get("*");
      let title = elt.get(`h${num}`);
      if(!title) return getTitle(elt, num += 1);
      if (!Array.isArray(title)) title = title.innerText;
      else title = title.map(s => s.innerText).join(" & ");
      return title;
    }

    // Set up each section
    this.sections.forEach((section, index) => {
      section.set({
        zIndex: this.total - index,
        class: {
          opened: this._currentPage.as(v => v >= index),
            peak: this._peakedPage.as(v => v === index),
        },
        onclick: this._currentPage.as(v => v < index ? () => this.nextPage(index) : null),
      });
      this.titles.push(getTitle(section));
    });

    // Next button
    this.set({
      a_button_next: {
        text: this._currentPage.as(val => Copy.text({
          en: `Next: ${this.titles[val + 1]} ➧`,
          es: `Sigue: ${this.titles[val + 1]} ➧`,
        })),
        alignContent: "end",
        margin: "0.5rem 40% 0",
        zIndex: this.total + 1,
        onmouseover: () => this.peakedPage = this.currentPage + 1,
        onmouseout: () => this.peakedPage = undefined,
        onclick: () => this.nextPage(),
      }
    });

  }

  // Advance to the next page, or to a specific page index
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