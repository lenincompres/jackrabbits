export class Aux {

  static timeoutPromise(time = 100, func = () => null) {
    return new Promise(resolve => setTimeout(() => resolve(func()), time));
  }

  static randomizeArray(arr = []) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }

  static isElementInView(el) {
    var [top,left,width,height] = [el.offsetTop, el.offsetLeft, el.offsetWidth, el.offsetHeight];
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  static color = {
    base: "lightGray",
    light: "white",
    dark: "#222",
    neutral: "#a97",
    accent: "#46a",
  }

  static css = {
    h: {
      fontFamily: "serif",
    },
    button: {
      backgroundColor: Aux.color.accent,
      color: Aux.color.light,
      margin: "0 0.25em",
      fontSize: "1.2em",
      borderColor: Aux.color.accent,
      boxShadow: "none",
      hover: {
        borderColor: Aux.color.light,
      },
      disabled: {
        backgroundColor: "transparent",
        borderColor: Aux.color.accent,
        color: Aux.color.accent,
        opacity: 0.6,
      },
      active: {
        borderColor: Aux.color.base,
      }
    },
  }

}

export default Aux;