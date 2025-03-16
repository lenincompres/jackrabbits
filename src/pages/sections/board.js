import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const boardSection = {
  h3: Copy.text({
    es: "Crear el territorio",
    en: "Build a new Board",
  }),
  p: versify(Copy.text({
    es: [
      `Empieza por poner la <i>ciudadela</i>
      y el negro del <i>subsuelo</i>, separándolos.
      Revuelve bocabajo lo que queda:
      los rombos, los hexágonos y triángulos.`,
      `Reparte, o que en la mesa las recojan,
      iguales cantidades de las piezas;
      por formas geométricas, les tocan:
      de a doce, dividido por cabeza.`,
      `Es hora de empezar a colocarlas
      (por turnos o con libre preferencia).
      Por <b>turnos</b>: se mantienen sin mirarlas,
      y pieza que volteen, la conectan.
      O <b>libre</b>: se permiten voltearlas,
      sin turnos ni descansos al ponerlas.
      Igual se recomienda, al conectarlas,
      contar con las siguientes sugerencias:`,
      `Evita: callejones sin salidas <sup>T</sup>;
      los vínculos de dos hexagonales <sup>x</sup>;
      y hacer la conección consecutiva
      de piezas triangulares similares <sup>!</sup>.
      Las islas que desees las inicias
      con una hexagonal a la que apartes;
      y observa que el subsuelo, en exclusiva,
      se queda sin uniones laterales.`,
    ],
    en: [
      `Place the <i>citadel</i> hex first. 
      Leave aside the <i>underground</i>. 
      Pile and shuffle all the rest,
      even the small ones, face down.`,
      `Deal by tile shape, equal shares—
      there are twelve of every kind—
      as you hand each player theirs,
      the division will be fine.`,
      `To place them, first choose a style
      between a strict or free pace.
      <b>Strict</b>: take turns placing one tile—
      the one you flip, you must place.
      <b>Free</b>: no turns, it's all freestyle—
      flip all the tiles on their face. 
      These suggestions are worthwhile
      as guidelines in either case:`,
      `Don't make a dead-ending road <sup>T</sup>,
      or join the roads from two hexes <sup>x</sup>,
      and keep triangles spread broad,
      instead of closely connected <sup>!</sup>.
      To start an island abroad,
      just place a hex disconnected;
      yet, the underground is odd,
      and will remain unconnected.`,
    ]
  })),
  img: ASSETS.guides,
};

export default boardSection;