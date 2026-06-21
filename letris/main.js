import * as puzzle from "./puzzle.js";

const bonus = {
  C: '#800000',
  D: '#b8860b',
  T: '#008080',
  M: '#0099DD',
  P: '#483d8b',
};

let longestWord = 0;
const words = puzzle.words.map((word, i) => {
  if (longestWord < word.length) longestWord = word.length;
  return word.split("").map((letter) => ({
    letter: letter.trim(),
  }));
});

words.forEach((word, i) => {
  while(word.length < longestWord){
    word.push({
      letter: "",
    });
  }
  const next = words[i + 1];
  const prev = words[i - 1];
  word.forEach((cell, n) => {
    cell.persists =
      next && next[n] && next[n].letter && next[n].letter === cell.letter;
    cell.persisted =
      prev && prev[n] && prev[n].letter && prev[n].letter === cell.letter;
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
    p: `Encuentra las palabras que responen a las pistas sobre el juego. La flecha doble (↕) indica que la letra es la misma. Las líneas punteadas indican que la letra reaparece en otra columna. La letras resaltadas con el mismo color también serán las iguales: ${Object.values(bonus).map(v => `<b style="color:${v}">◼</b>`).join('')}.`,
  },
  main: {
    section_interline: words.map((word, i) => ({
      h2: `${i + 1}. `,
      p: {
        html: puzzle.clues[i],
      },
      section_interword: {
        b_block: word.map((cell, n) => ({
          backgroundColor: bonus[cell.letter] ? bonus[cell.letter] + "44": undefined,
          borderRadius: bonus[cell.letter] ? "0.5em" : undefined,
          borderColor: bonus[cell.letter] ? bonus[cell.letter]: undefined,
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
