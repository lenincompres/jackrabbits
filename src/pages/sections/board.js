import Copy from "../../../lib/Copy.js";
import versify from "../../aux/versify.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const boardSection = {
  id: "guides",
  h2: Copy.text({
    es: "Un nuevo territorio",
    en: "A new Board of your own",
  }),
  p: versify(Copy.text({
    es: [
      `Colocas a la ficha <i>Ciudadela</i>,
      y el resto las revuélves bocabajo.
      Separas el <i>subsuelo</i>, que es la negra,
      de hexágonos, de rombos y de triángulos.
      Repártelas por formas geométricas:
      iguales cantidades en el cálculo.`,
      `Se puede comenzar a colocarlas:
      por turnos o con libre preferencia.
      Por turnos se mantienen sin mirarlas,
      y pieza que volteen, la conectan.
      O libre se permite voltearlas,
      sin turnos ni descansos al ponerlas.
      Igual se recomienda al conectarlas
      contar con las siguientes sugerencias:`,
    ],
    en: [
      `Place the <i>Citadel</i> hex first. 
      Leave aside the <i>underground</i>. 
      Shuffle all the tiles that rest:
      twelve of all three shapes facedown.
      Deal by shape to every guest,
      each will get the same amount.`,
      `You may choose a placement style,
      either strict or free in pace.
      Strict with turns to place a tile,
      pick a tile to flip and place.
      Free with turns in loose freestyle,
      flip all tiles to see their face.
      These suggestions are worthwhile,
      loosely meant in either case:`,
    ]
  })),
  figure: {
    position: 'relative',
    width: 'fit-content',
    margin: '0 auto',
    p: {
      position: 'absolute',
      top: '-1rem',
      left: '0.4rem',
      width: '52%',
      textAlign: 'center',
      text: Copy.text({
        en: 'Citadel',
        es: 'Ciudadela',
      }),
    },
    img: new MediaFigure("guides"),
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
      don’t connect roads from two hexes.<sup class="warning">x</sup>
      Place triangles scattered broad,
      not the ones alike connected.<sup class="warning">!</sup>
      Hexes may be placed abroad, 
      starting islands disconnected.
      But the underground is odd—
      only rabbit holes connect it.`,
  })),
  a_button_song: {
    marginTop: "0.5em",
    content: Song.List[8].link,
  },
};

export default boardSection;