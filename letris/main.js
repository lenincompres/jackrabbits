import * as puzzle from "./puzzle.js";

const bonus = {
  C: '#960018',
  D: '#b8860b',
  T: '#008880',
  //M: '#0088dd',
  P: '#483d8b',
  //L: '#d34fd5',
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
    //cell.bonus = !!bonus[cell.letter];
    cell.isUnique = () => !cell.persists && !cell.persisted && !cell.moves && !cell.moved;
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
  } else if (!cell.letter || cell.isUnique()) {
    return selectNext(i, n + d, isDelete);
  }
  cell.el.focus();
}

/* --- boden words --- */



function boldWordsInClues(clues, words) {
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const cleanWords = words
    .map((w) => w.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  const normalizedWords = cleanWords.map(normalize);
  return clues.map((clue) => {
    let result = clue;
    for (let i = 0; i < cleanWords.length; i++) {
      const originalWord = cleanWords[i];
      const normalizedWord = normalizedWords[i];
      const normalizedClue = normalize(result);
      const regex = new RegExp(`\\b${normalizedWord}\\b`, "gi");
      let matches = [];
      let match;
      while ((match = regex.exec(normalizedClue))) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
        });
      }
      // Apply replacements from end to beginning
      for (let j = matches.length - 1; j >= 0; j--) {
        const { start, end } = matches[j];
        result =
          result.slice(0, start) +
          "<b>" +
          result.slice(start, end) +
          "</b>" +
          result.slice(end);
      }
    }
    return result;
  });
}

const boldedClues = boldWordsInClues(puzzle.clues, puzzle.words);


DOM.set({
  title: "Jack Rabbits - Letris",
  textAlign: "left",
  header: {
    h1: {
      a: {
        href: "../",
        display: "flex",
        flexDirection: "column",
        small_logoSuper: "Lenino’s",
        span_logoName: "Jack Rabbits",
        small_logoSub: "Letris",
      },
    },
    p: `Encuentra las palabras que responen a las pistas. La flecha doble (↕) indica que la letra es la misma. Las líneas punteadas indican que la letra se mueve de columna.`,// La letras resaltadas con el mismo color también serán las iguales: ${Object.values(bonus).map(v => `<b style="color:${v}">◼</b>`).join('')}.`,
  },
  main: {
    section_interline: words.map((word, i) => ({
      h2: `${i + 1}. `,
      p: {
        html: boldedClues[i],
      },
      section_interword: {
        b_block: word.map((cell, n) => ({
          backgroundColor: cell.bonus ? bonus[cell.letter] + "33": undefined,
          borderRadius: cell.bonus ? "0.5em" : undefined,
          borderColor: cell.bonus ? bonus[cell.letter]: undefined,
          color: cell.bonus ? bonus[cell.letter]: undefined,
          class: {
            cell: !!cell.letter,
            persists: cell.persists,
            persisted: cell.persisted,
            moveDown: cell.moves,
            moveUp: cell.moved,
            unique: cell.isUnique(),
          },
          contenteditable: !!cell.letter && !cell.isUnique(),
          text: cell.isUnique() || DOM.queryString.test ? cell.letter : undefined,
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
