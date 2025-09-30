function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  let stanzas = poem.map(p => {
    if (typeof p !== "string") return p;
    let lines = p.split('\n').map((line, i) => line.trim()).filter(line => line);
    let divs = [];
    for (let i = 0; i < lines.length; i += 2) {
      divs.push({
        span: [lines[i] + " ", lines[i + 1]],
      });
    }
    return ({
      line: divs,
    });
  });
  return stanzas;
};

export function classifyChars(line, ...args) {
  let chars = line.split('');
  return chars.map((char, i) => `<span class="${args[i%args.length]}">${char}</span>`).join('');
}

export default versify;