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
    ],
    en: [
      `Place the <i>citadel</i> hex first. 
      Leave aside the <i>underground</i>. 
      Pile and shuffle all the rest,
      even smaller ones, face down.`,
      `Deal by tile shape, equal shares—
      there are twelve of every kind—
      As you hand each player theirs,
      the division will be fine.`,
      `You may choose a placement style,
      either strict or free in pace.
      Strict: with turns to place a tile—
      pick a tile to flip and place.
      Free: with turns in loose freestyle—
      flip all tiles to see their face.
      These suggestions are worthwhile
      as a guide in either case:`,
    ]
  })),
  img: ASSETS.guides,
  p_0: versify(Copy.text({
    es: `Evita callejones sin salidas <sup class="warning rotated">T</sup>,
      los vínculos de dos hexagonales <sup class="warning">x</sup>,
      y hacer la conexión consecutiva
      de piezas triangulares similares <sup class="warning">!</sup>.
      Las islas que desees las inicias
      con una hexagonal a la que apartes;
      y observa que el subsuelo, en exclusiva,
      se queda sin uniones laterales.`,
    en: `Don’t make dead-ends on the road;<sup class="warning rotated">T</sup>
      don’t connect roads from two hexes.<sup class="warning">x</sup>
      Place triangles scattered broad—
      so they don’t end up connected.<sup class="warning">!</sup>
      Add some islands to the board—
      start with hexes disconnected.
      Keep the underground abroad—
      do not bother to connect it.`,
  })),
};

export default boardSection;