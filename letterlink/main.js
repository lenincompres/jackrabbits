import * as puzzle from "./puzzle.js";

const words = puzzle.words.map((word, i) =>
  word.split("").map((letter) => ({
    letter: letter.trim(),
  })),
);

words.forEach((word, i) => {
  const next = words[i + 1];
  const prev = words[i - 1];
  word.forEach((cell, n) => {
    cell.persists =
      next && next[n] && next[n].letter && next[n].letter === cell.letter;
    cell.persisted = prev && prev[n] && prev[n].letter && prev[n].letter === cell.letter;
  });
});

words.forEach((word, i) => {
  const next = words[i + 1];
  const prev = words[i - 1];
  word.forEach((cell, n) => {
    if (!cell.persists && next) {
      next.forEach((c, n) => {
        if (
          !cell.moves &&
          !c.persisted &&
          !c.moved &&
          c.letter === cell.letter
        ) {
          c.moved = cell.moves = c;
        }
      });
    }
  });
});

function selectAll(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function selectNext(i, n, isDelete = false) {
  const d = isDelete ? -1 : 1;
  let word = words[i];
  if (!word) return;
  if (n === undefined) n = word.length;
  let cell = word[n + d];
  if (!cell) {
    return selectNext(i + d, isDelete ? undefined : 0, isDelete);
  } else if (!cell.letter) {
    return selectNext(i, n + d, isDelete);
  }
  cell.el.focus();
}

DOM.set({
  title: "Jack Rabbits - Intergrama",
  textAlign: "left",
  header: {
    h1: {
      a: {
        display: "flex",
        flexDirection: "column",
        small_logoSuper: "Lenino’s",
        span_logoName: "Jack Rabbits",
        small_logoSub: "Intergrama",
      },
    },
    p: "Encuentra las palabras que responen a las pistas sobre el juego. La flecha doble (↕) indica que la letra es la misma. Las líneas punteadas que la letra reaparece cambiada de columna.",
  },
  main: {
    padding: "1em",
    backgroundColor: "var(--home)",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    section_interline: words.map((word, i) => ({
      h2: {
        margin: "0",
        fontSize: "1.2em",
        width: "0.8em",
        text: `${i + 1}. `,
      },
      span: {
        span: puzzle.clues[i],
        fontSize: "0.9em",
        width: "20em",
      },
      section_interletter: {
        b_block: word.map((cell, n) => ({
          class: {
            cell: !!cell.letter,
            persists: cell.persists,
            persisted: cell.persisted,
            moveDown: cell.moves,
            moveUp: cell.moved,
          },
          contenteditable: !!cell.letter,
          text: DOM.queryString.test ? cell.letter : undefined,
          onfocus: (e) => selectAll(e.target),
          onclick: (e) => selectAll(e.target),
          keydown: (e) =>
            setTimeout(
              () =>
                selectNext(i, n, ["Backspace", "ArrowLeft"].includes(e.key)),
              10,
            ),
          ondone: (el) => (cell.el = el),
        })),
      },
    })),
  },
  footer: {
    p: `Creado por <a href="https://lenino.net">Lenin A. Comprés</a> usando <a href="https:baredom.org">BareDOM</a> JS. © 2026 Lenino LLC Todos los derechos reservados.`,
  },
});
