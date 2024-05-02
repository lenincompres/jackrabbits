export function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n'),
  }), "content");
}

export function listify(...links) {
  if (Array.isArray(links[0])) return listify(...links[0]);
  return {
    ul: {
      li: links.map(link => ({
        a: link,
      }))
    }
  }
}

export function imgCropStyle(w, h, position = "center") {
  return {
    width: w,
    height: h,
    objectFit: "cover",
    objectPosition: position,
  }
}

export function setCookie(name, value, days = 30) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value || ""}; expires=${date.toUTCString()}; path=/`;
}

export function getCookie(name) {
  return document.cookie.split(';').reduce((o, c) => {
    c = c.split("=");
    if (c[0].trim() === name) return c[1];
  }, undefined);
}