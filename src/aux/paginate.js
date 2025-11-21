import Copy from "../../lib/Copy.js";

export function paginate(article, current = 0) {

  const sections = article.get("section");
  const total = sections.length;
  const _currentPage = new Binder(current);

  sections.forEach((section, index) => {
    section.set({
      zIndex: total - index,
      transition: "0.2s ease-in-out",
      class: {
        opened: _currentPage.as(v => v >= index),
      },
      onclick: _currentPage.as(v => v < index ? () => nextPage(index) : null),
    });
  });

  const aButton = DOM.let("a_button_next", {
    text: Copy.text({
      en: "Continue ➧",
      es: "Continúa ➧",
    }),
    alignContent: "end",
    margin: "0.5rem 40% 0",
    zIndex: total + 1,
    onclick: () => nextPage(),
  });
  article.append(aButton);

  function nextPage(index) {
    if (_currentPage.value >= total - 1) return;
    if (index === undefined) _currentPage.value += 1;
    else if (index < _currentPage.value) return;
    else _currentPage.value = index;
    if (_currentPage.value >= total - 1) {
      article.let("class", "opened");
      aButton.remove();
      return;
    }
  }

}

export default paginate;