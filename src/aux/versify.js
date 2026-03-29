function versify(...args) {
  if(args[0].tagName) return args[0].let("content", versify(args[0].innerHTML));
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  let stanzas = poem.map(p => {
    if (typeof p !== "string") return p;
    let data = p.split('|');
    let dataOn, dataOff;
    if(data.length > 1){
      p = data[1];
      data = data[0].split("–");
      dataOn = data[0];
      dataOff = data[1];
    }
    let lines = p.split('\n').map((line, i) => line.trim()).filter(line => line);
    let divs = [];
    for (let i = 0; i < lines.length; i += 2) {
      let sp1 = lines[i].includes("—") ? "" : "&nbsp;";
      let sp0 = i ? "&nbsp;" : "";
      divs.push({
        span: [sp0 + lines[i] + sp1, lines[i + 1]],
      });
    }
    return ({
      "data-on": dataOn,
      "data-off": dataOff,
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