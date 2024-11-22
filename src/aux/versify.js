function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n').map(line => line.trim() + (line.endsWith("—") || line.endsWith('--</em>') ? "" : "&nbsp;")),
  }), "content");
};

export default versify;