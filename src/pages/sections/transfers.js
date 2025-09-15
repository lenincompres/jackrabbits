import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const transferSections = [{
  p: versify(Copy.text({
    es: `Es gratis desplazarte a los hexágonos
      si sigues por los vínculos continuos.
      Incluso las montañas, más abajo,
      se cruzan por sus túneles gratuitos.
      En cambio, si utilizas los traslados,
      marcados a mitad de los polígonos,
      <a class="pop" onclick="popUp('price')"><b>el precio</b></a> es el fijado por los dados
      y pagas con las cartas de sus símbolos.`,
    en: `Venture all along a path, 
    and move freely on your round—
    even through an underpass, 
    see the mountains farther down.
    Other movements have <a class="pop" onclick="popUp('price')">a price</a>,
    paid in suits upon the ground.
    Pay the total on your dice—
    that's the minimum amount.`,
  }), {
    marginTop: '1.2rem',
    tag: "h4",
    html: Copy.text({
      es: "Traslado por matorrales",
      en: "Transfer via off-road",
    })
  }, Copy.text({
    es: `Los bosques, las montañas y los ríos,
      que ves en las imágenes de abajo,
      permiten que te cambies de camino
      cruzando por el centro en un atajo.
      <a class="pop" onclick="popUp('price')">Si pagas</a> con cualquiera de los símbolos,
      te cambias del camino que te trajo.`,
    en: `Mountains, rivers and the woods,
      with two roads not far apart, 
      let you hike between these two,
      cutting through the middle part.
      <a class="pop" onclick="popUp('price')">Pay with cards</a> of proper suits:
      club or spade or even heart.`,
  })),
  img: ASSETS.rhombi,
}, {
  h4: Copy.text({
    es: "Traslado con Comerciantes",
    en: "Transfer via Merchant",
  }),
  p: versify(Copy.text({
    es: `Los cruces te permiten transportarte
      viajando por las aguas o las tierras.
      Por tierra: galopando sin pararte
      moviéndote al hexágono que quieras.
      Por agua: si el lugar de comerciantes
      colinda con un lado a las afueras,
      te sales navegando por los mares
      y arrivas por alguna carretera.
      Saldrás en el momento en el que <a class="pop" onclick="popUp('price')">pagues</a> 
      y anuncies el transporte que prefieras.`,
    en: `Check out where road is forked, 
      there's a horse and boat to ride. 
      Reach a hex across the board,
      dashing over tiles in stride.
      Or select a road to port,
      gliding on the seas outside.
      Choose a ride and reach your post, 
      once you <a class="pop" onclick="popUp('price')">pay what has been priced</a>.
      Landlocked merchants have no boats, 
      since they’re not by the seaside.`,
  }), {
    tag: "h4",
    html: Copy.text({
      es: "Traslado con Comodines",
      en: "Transfer via Joker",
    }),
  }, Copy.text({
    es: `Si <a class="pop" onclick="popUp('price')">pagas</a> al pasar por las tabernas,
      tendrás un comodín desocupado.
      Transpórtate en el turno que prefieras
      y entonces lo liberas de tu mano.`,
    en: `When you pass by any tavern,
      you may <a class="pop" onclick="popUp('price')">buy</a> a joker card.
      Keep it till you’d like to travel,
      and release it afterward.`,
  })),
  img: ASSETS.rides,
}, {
  h4: Copy.text({
    es: "Traslado por Madrigueras",
    en: "Transfer via Rabbit hole",
  }),
  p: versify(Copy.text({
    es: `Si <a class="pop" onclick="popUp('price')">pagas</a> en la entrada de las cuevas,
      saldrás por la que quieras de inmediato.
      Si no, te ahorrarás lo que te cuesta,
      metiéndote al <a class="pop" onclick="popUp('underground')"><i>subsuelo</i></a> por un rato.
      Descansas por el turno y, a la vuelta, 
      te sales por la cueva de tu agrado.`,
    en: `<a class="pop" onclick="popUp('price')">Pay to travel</a> cave to cave, 
      use this trick to hop around. 
      But if you prefer to save, 
      pay a visit <a class="pop" onclick="popUp('underground')"><i>underground</i></a>.
      Take this turn to wait and waive, 
      hop on out the coming round.`,
  }), {
    tag: "a",
    name: "intro/off",
  }, {
    tag: "h3",
    html: Copy.text({
      es: "El Destierro",
      en: "Off-board",
    })
  }, Copy.text({
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
      Once your <b>lottery</b>'s off-board,
      end your <b>journey</b> <a class="pop" onclick="popUp('underground')"><i>underground</i></a>.
      There your <b>increment</b>’s restored,
      and you’ll wait another round.`,
  })),
  img: ASSETS.caves,
}];

export default transferSections;