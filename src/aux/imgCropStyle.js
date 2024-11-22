function imgCropStyle(w, h, position = "center") {
  return {
    width: w,
    height: h,
    objectFit: "cover",
    objectPosition: position,
  }
}
export default imgCropStyle;