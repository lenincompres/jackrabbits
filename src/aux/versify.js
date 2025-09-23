function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  let stanzas = poem.map(p => {
    if (typeof p !== "string") return p;
    let lines = p.split('\n').map((line, i) => line.trim() + " ");
    let divs = [];
    for (let i = 0; i < lines.length; i += 2) {
      divs.push({
        span: [lines[i], lines[i + 1]],
      });
    }
    return ({
      div: divs,
    });
  });
  return stanzas;
};

export default versify;