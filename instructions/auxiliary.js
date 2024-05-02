export function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n').map(l => l + "&nbsp;"),
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

export function classiterate(text, cls){
  if(typeof cls === "string") cls = [cls];
  
}