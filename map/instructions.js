import rabbit from "./components/rabbit.js";
import portal from "./components/portal.js";

DOM.set({
  font: [{
    fontFamily: 'title',
    src: 'url("../assets/IrishGrover-Regular.ttf")'
  }, {
    fontFamily: 'body',
    src: 'url("../assets/Chalkboard.ttc")'
  }],
  meta: "utf-8",
  title: "Lenino’s Jack Rabbits - Instructions",
  viewport: "width=device-width, minimum-scale=1.0, maximum-scale=1.0",
  icon: "images/icon.png",
  padding: "10px",

  main: portal,
  button: [{
    text: "-",
    click: e => portal.zoomto(portal.getZoom() - 0.2),
  }, {
    text: "+",
    click: e => portal.zoomto(portal.getZoom() + 0.2),
  }],

});

portal.goto(390, 580);
rabbit.show();