export function versify(...poem) {
  return poem.map(p => typeof p !== "string" ? p : ({
    span: p.split('\n'),
  }), "content");
}

export function listify(links){
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