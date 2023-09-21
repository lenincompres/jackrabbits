import rabbit from "./rabbit.js";

const bgPos = new Binder({
  x: 0,
  y: 0,
});

const zoom = new Binder(1);

export const portal = DOM.element({
  display: "block",
  margin: "10px",
  border: "solid black 1px",
  borderRadius: "12px",
  boxShadow: "4px 4px 10px black inset",
  height: "400px",
  background: "#D1E0ED url(assets/map.png) no-repeat",
  backgroundPositionX: bgPos.as(pos => `${-pos.x}px`),
  backgroundPositionY: bgPos.as(pos => `${-pos.y}px`),
  backgroundSize: zoom.as(z => `${800 * z}px`),
  position: "relative",
  transition: "1s",
  b: rabbit,
  click: e => {
    const w = portal.offsetWidth;
    const h = portal.offsetHeight;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    portal.goto(x - w / 2, y - h / 2, true);
  },
});

portal.zoomto = z => {
  z = Math.min(Math.max(z, 0.4), 1.2);
  let oldZ = zoom.value;
  zoom.value = z;
  const w2 = portal.offsetWidth / 2;
  const h2 = portal.offsetHeight / 2;
  bgPos.value = {
    x: bgPos.value.x * z / oldZ - w2 * (1-z/oldZ),
    y: bgPos.value.y * z / oldZ - h2 * (1-z/oldZ),
  };
}

portal.goto = (x, y, add = false) => {
  if (isNaN(x)) x = 1200 * Math.random();
  if (isNaN(y)) y = 800 * Math.random();
  const w2 = portal.offsetWidth / 2;
  const h2 = portal.offsetHeight / 2;
  if (add) {
    x += bgPos.value.x;
    y += bgPos.value.y;
  } else {
    x -= w2;
    y -= h2;
  }
  bgPos.value = {
    x: x,
    y: y,
  }
  console.log(x + w2, y + h2);
}

portal.getZoom = () => zoom.value;


export default portal;