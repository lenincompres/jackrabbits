
const visible = new Binder(false);

export const rabbit = {
  id: "rabbit",
  position: "relative",
  top: "50%",
  left: "50%",
  opacity: visible.as(0, 0.86),
  transition: "0.5s",
  pointerEvents: "none",
  img: {
    src: "assets/rabbit.png",
    transform: "translate(-50%, -66%)",
  }
};
export default rabbit;

rabbit.hide = () => visible.value = false;
rabbit.show = () => visible.value = true;
