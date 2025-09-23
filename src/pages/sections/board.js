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
      `Colocas a la ficha <i>Ciudadela</i>,
      y el resto las revuélves bocabajo.
      Separas el <i>subsuelo</i>, que es la negra,
      de hexágonos, de rombos y de triángulos.
      Repártelas por formas geométricas:
      iguales cantidades en el cálculo.`,
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
      `Place the <i>Citadel</i> hex first. 
      Leave aside the <i>underground</i>. 
      Shuffle all the tiles that rest:
      twelve of all three shapes facedown.
      Spread them out for every guest—
      players get the same ammount.`,
      `You may choose a placement style,
      either strict or free in pace.
      Strict: with turns to place a tile,
      pick a tile to flip and place.
      Free: with turns in loose freestyle,
      flip all tiles to see their face.
      These suggestions are worthwhile—
      loosely meant in either case:`,
    ]
  })),
  figure: {
    position: 'relative',
    width: 'fit-content',
    margin: '0 auto',
    p: {
      position: 'absolute',
      top: '1%',
      left: '0',
      width: '52%',
      textAlign: 'center',
      text: Copy.text({
        en: 'Citadel',
        es: 'Ciudadela',
      }),
    },
    img: ASSETS.guides,
  },
  p_0: versify(Copy.text({
    es: `Evita callejones sin salidas,<sup class="warning rotated">T</sup>
      los vínculos de dos hexagonales,<sup class="warning">x</sup>
      y hacer la conexión consecutiva
      de piezas triangulares similares.<sup class="warning">!</sup>
      Las islas que desees las inicias
      con una hexagonal a la que apartes.
      Observa que el subsuelo, en exclusiva,
      se queda sin uniones laterales.`,
    en: `Don’t make dead-ends on the road;<sup class="warning rotated">T</sup>
      don’t link roads if it's two hexes.<sup class="warning">x</sup>
      Place triangles scattered broad,
      so they don’t end up connected.<sup class="warning">!</sup>
      Hexes may be placed abroad, 
      starting islands disconnected.
      But the underground is odd—
      only rabbit holes connect it.`,
  })),
};

export default boardSection;