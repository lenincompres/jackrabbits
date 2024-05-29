export function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n').map(line => line.trim() + (line.endsWith("—") ? "" : "&nbsp;")),
  }), "content");
}

export const listify = (...links) => Array.isArray(links[0]) ? listify(...links[0]) : ({
  ul: {
    li: links,
  }
});

export const listLinks = (...links) => (Array.isArray(links[0])) ? listLinks(...links[0]) : listify(links.map(link => ({
  a: link,
})));

export function imgCropStyle(w, h, position = "center") {
  return {
    width: w,
    height: h,
    objectFit: "cover",
    objectPosition: position,
  }
}