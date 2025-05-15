function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  let stanzas = poem.map(p => {
    if (typeof p !== "string") return p;
    let spans = p.split('\n').map((line, i) => line.trim() + (line.endsWith("—") || line.endsWith('--</span>') ? "" : "&nbsp;"));
    let divs = [];
    for (let i = 0; i < spans.length; i += 2) {
      divs.push({
        span: [spans[i], spans[i + 1]],
      });
    }
    return ({
      div: divs,
    });
  });
  return stanzas;
};

export default versify;