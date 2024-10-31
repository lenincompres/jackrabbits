export function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n').map(line => line.trim() + (line.endsWith("—") || line.endsWith(">") ? "" : "&nbsp;")),
  }), "content");
}

export function imgCropStyle(w, h, position = "center") {
  return {
    width: w,
    height: h,
    objectFit: "cover",
    objectPosition: position,
  }
}