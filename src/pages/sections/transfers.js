import Copy from "../../../lib/Copy.js";
import imgCropStyle from "../../aux/imgCropStyle.js";
import versify, {
  classifyChars
} from "../../aux/versify.js";
import MediaFigure from "../../elements/MediaFigure.js";

const introText = versify(Copy.text({
  es: `Es gratis desplazarte a los hexágonos
      si sigues por los vínculos continuos.
      Incluso las montañas, más abajo,
      se cruzan por sus túneles gratuitos.
      Se paga solamente los traslados,
      marcados a mitad de los polígonos;
      <b>el precio</b> es el fijado por los dados
      y pagas con las cartas de sus símbolos.`,
  en: `If you venture on the paths, 
    you'll move freely on your round.
    This includes the underpass,
    shown in mountains farther down.
    Other moves demand <b>the price</b>,
    paid in suits upon the ground.
    Pay the total on your dice—
    that's the minimum amount.`,
}));

const transferSections = [{
  class: "accent",
  p_vertical: introText,
  img: new MediaFigure("roadTiles"),
  aside_note: {
    h4: Copy.text({
      es: "El precio",
      en: "The price",
    }),
    p: versify(Copy.text({
      es: [
        `Las vías con los símbolos de cartas
      te ofrecen un <i>traslado</i> de lugar.
      La suma de los dados es la tasa
      o el mínimo que tienes que pagar. 
      Se pierde el sobrepago si te pasas;
      los símbolos se pueden combinar.`,
        `Las cartas se <i>descartan</i> al usarse,
      dejándolas a un lado de la mesa.
      Es <b>1</b> lo que cuentas por los ases,
      y <b>10</b> por las reales o con letras.
      En caso de que gastes las reales,
      saldrá tu zanahoria de sus piezas,
      y en vez de que la carta la descartes,
      regrésala a la corte en la que empieza.`
      ],
      en: [
        `For the transfers on the way,
      pay the total on the dice. 
      But in case you overpay, 
      then consider that the price.
      Use as many cards to pay,
      check each symbol qualifies.`,
        `Set aside the cards you spend—
      they’re <i>discarded</i> once you’re done. 
      Royals may be spent as <b>10</b>,
      and the <b>a</b>ces are worth <b>1</b>.
      But when royal cards are spent,
      they go back where they begun.
      And remove your carrot then,
      since your claim has been undone.`
      ]
    })),
  },
}, {
  h4_horizontal: "Off the road",
  p_horizontal: introText,
  h4_: Copy.text({
    es: classifyChars("Vericuetos", "clubs", "spades", " hearts"),
    en: classifyChars("Trailways", "clubs", "spades", " hearts"),
  }),
  p: versify(Copy.text({
    es: `Los bosques, las montañas y los ríos,
      que ves en las imágenes de abajo,
      permiten que te cambies de camino
      cruzando por el centro en un atajo.
      Si pagas con cualquiera de los símbolos,
      te cambias del camino que te trajo.`,
    en: `See the mountains, rivers, woods—
      with two roads not far apart.
      You may hike between the two,
      cutting through the middle part.
      Pay with cards of proper suits:
      club or spade or even heart.`,
  })),
  img: new MediaFigure("roads", {
    img: imgCropStyle("17rem", "5.5rem", "left"),
  }),
}, {
  h4: Copy.text({
    es: classifyChars("Mercaderes", " diamonds", "spades"),
    en: classifyChars("Merchants", " diamonds", "spades"),
  }),
  p: versify(Copy.text({
    es: `Los cruces te permiten transportarte
      viajando por las aguas o las tierras.
      Por tierra galopando sin pararte,
      moviéndote a la pieza que prefieras.
      Por agua si cualquera de sus calles
      colinda con un lado a las afueras,
      te sales navegando por los mares
      y arribas por alguna carretera.
      Los cruces te trasladan al instante,
      partiendo tras el pago que les dieras.`,
    en: `Stationed where the road is forked,
      there's a horse and boat to ride. 
      Reach a place across the board,
      dashing over tiles in stride.
      Or select a road to port,
      gliding on the seas outside.
      Landlocked merchants have no boats,
      since they’re not by the seaside.
      Merchants send you from their post,
      once your payment’s been applied.`,
  }), {
    tag: "h4",
    html: Copy.text({
      es: classifyChars("Comodines", " diamonds", "hearts"),
      en: classifyChars("Jokers", " diamonds", "hearts"),
    }),
  }, Copy.text({
    es: `Un jóker se te otorga de pasaje,
      si pagas al pasar por las tabernas.
      Lo sueltas de tu mano al trasladarte,
      moviéndote en el turno que lo quieras.`,
    en: `Taverns sell the rides they host,
      but the travel’s kept aside.
      Choose a joker card to hold,
      and release to claim their ride.`,
  })),
  img: new MediaFigure("roads", {
    img: imgCropStyle("17rem", "5.5rem"),
  }),
}, {
  h4: Copy.text({
    es: classifyChars("Madrigueras", " diamonds", "clubs"),
    en: classifyChars("Rabbit holes", " diamonds", "clubs"),
  }),
  p: versify(Copy.text({
    es: `Si pagas en la entrada de las cuevas,
      saldrás por la que quieras de inmediato.
      Si no, te ahorrarás lo que te cuesta,
      metiéndote al <a class="pop" onclick="popUp('underground')"><i>subsuelo</i></a> por un rato.
      Descansas por el turno y, a la vuelta, 
      te sales por la cueva de tu agrado.`,
    en: `Pay to travel cave to cave, 
      use this trick to hop around. 
      But if you prefer to save, 
      pay a visit <a class="pop" onclick="popUp('underground')"><i>underground</i></a>.
      Take this turn to wait and waive— 
      hop on out the coming round.`,
  })),
  a: {
    name: "intro/off",
  },
  h4_: {
    html: Copy.text({
      es: "El Destierro",
      en: "Off-board",
    })
  },
  p_: versify(Copy.text({
    es: `A veces te conviene que salieras,
      cayendo de un camino a las orillas.
      Olvida <b>el incremento</b> si lo hicieras
      y acaba con el turno a la deriva.
      Mantén <b>la lotería</b> en las afueras,
      y en vez de ejecutar <b>la travesía</b>,
      te mueves al <a class="pop" onclick="popUp('underground')"><i>subsuelo</i></a> en el que esperas
      y eliges a la vuelta la salida.`,
    en: `If you venture off the board,
      on a road that leads outbound,
      end your <b>journey</b> overboard,
      where no <b>increment</b> is found.
      Next your <b>lottery</b>'s off-board,
      and you'll <b>journey</b> <a class="pop" onclick="popUp('underground')"><i>underground</i></a>!
      There your <b>increment</b>’s restored,
      and you’ll wait another round.`,
  })),
  figure: new MediaFigure("roads", {
    img: imgCropStyle("17rem", "5.5rem", "right"),
  }),
}];

export default transferSections;