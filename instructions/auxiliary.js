export function versify(...args) {
  let poem = [];
  args.forEach(arg => Array.isArray(arg) ? poem.push(...arg) : poem.push(arg));
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n'),
  }), "content");
}

export function listify(...links) {
  if(Array.isArray(links[0])) return listify(...links[0]);
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

export function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}