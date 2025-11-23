import Copy from "../../lib/Copy.js";

export function paginate(article, current = 0) {

  const sections = article.get("section");
  const titles = [];
  const total = sections.length;
  const _currentPage = new Binder(current);
  const _peakPage = new Binder();

  sections.forEach((section, index) => {
    section.set({
      zIndex: total - index,
      transition: "0.2s ease-in-out",
      class: {
        opened: _currentPage.as(v => v >= index),
        peak: _peakPage.as(v => v === index),
      },
      onclick: _currentPage.as(v => v < index ? () => nextPage(index) : null),
    });
    let title = section.querySelector("h3");
    if (!title) title = section.querySelector("h2");
    if (!title) title = section.querySelector("h4");
    if (!title) title = section.querySelector("*");
    if (title) titles.push(title.innerText);
  });

  const _nextName = new Binder(titles[current + 1]);

  const aButton = DOM.let("a_button_next", {
    text: _nextName.as(name => Copy.text({
      en: `Next: ${name} ➧`,
      es: `Sigue: ${name} ➧`,
    })),
    alignContent: "end",
    margin: "0.5rem 40% 0",
    zIndex: total + 1,
    onmouseover: () => _peakPage.value = _currentPage.value + 1,
    onmouseout: () => _peakPage.value = undefined,
    onclick: () => nextPage(),
  });
  article.append(aButton);

  function nextPage(index) {
    if (_currentPage.value >= total - 1) return;
    if (index === undefined) index = _currentPage.value + 1;
    else if (index < _currentPage.value) return;
    _currentPage.value = index;
    if (index >= total - 1) {
      article.let("class", "opened");
      aButton.remove();
      return;
    }
    _nextName.value = titles[index + 1];
  }

}

export default paginate;