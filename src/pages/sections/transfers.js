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
      y pagas con las cartas de los símbolos.`,
    en: `It is free to make your rounds
      if you move along the paths;
      in the mountains (farther down),
      these go through an underpass.
      Other ways to get around 
      are contingent on <a class="pop" onclick="popUp('price')"><b>the price</b></a>:
      use the suits marked on the ground
      and pay the sum of your dice.`,
  }), {
    marginTop: '1.2rem',
    tag: "h4",
    html: Copy.text({
      es: "Traslado por pasadizos",
      en: "Transfer via shortcuts",
    })
  }, Copy.text({
    es: `Los bosques, las montañas y los ríos,
      que ves en las imágenes de abajo,
      permiten que te cambies de camino
      cruzando por el centro en un atajo,
      marcado con los palos permitidos
      que <a class="pop" onclick="popUp('price')">pagas con tus cartas</a> al cruzarlo.`,
    en: `The mountains, rivers, and woods,
      have two roads not far apart. 
      You may switch between these two,
      trekking through the center part.
      To do this, <a class="pop" onclick="popUp('price')">pay with your suits</a>—
      in this case, clubs, spades, or hearts.`,
  })),
  img: ASSETS.rhombi,
}, {
  h4: Copy.text({
    es: "traslado con Comerciantes",
    en: "transfer via Merchants",
  }),
  p: versify(Copy.text({
    es: `Los cruces te permiten transportarte,
      viajando por las aguas o las tierras.
      Por tierra: galopando sin pararte,
      moviéndote al hexágono que quieras.
      Por agua: si el embarque del que sales
      colinda con un lado a las afueras,
      te sales navegando por los mares
      y arrivas por alguna carretera.
      Saldrás en el momento en el que <a class="pop" onclick="popUp('price')">pagues</a> 
      y anuncies el transporte que prefieras.`,
    en: `You may buy two types of rides
      on crossings where roads are forked:
      you'll gallop over the tiles
      to any hex on the board;
      or, row on the seas outside
      to find a road from this port.
      As soon as you <a class="pop" onclick="popUp('price')">pay the price</a>,
      you must move to your next post.
      Since they're not by the seaside,
      landlocked merchants won't have boats.`,
  }), {
    tag: "h4",
    html: Copy.text({
      es: "traslado con Comodines",
      en: "transfer via Jokers",
    }),
  }, Copy.text({
    es: `Si <a class="pop" onclick="popUp('price')">pagas</a> al pasar por las tabernas,
      tendrás un comodín desocupado;
      lo cargas y, al momento en que requieras,
      lo montas y liberas de tu mano.`,
    en: `When you pass by any tavern,
      you may <a class="pop" onclick="popUp('price')">buy</a> a joker card;
      you'll choose when to ride and travel, 
      then release it afterward.`,
  })),
  img: ASSETS.rides,
}, {
  h4: Copy.text({
    es: "traslado por Madrigueras",
    en: "transfer via Rabbit holes",
  }),
  p: versify(Copy.text({
    es: `Si <a class="pop" onclick="popUp('price')">pagas</a> en la entrada de las cuevas,
      saldrás por la que quieras de inmediato.
      Si no, te ahorrarás lo que te cuesta,
      metiéndote al <a class="pop" onclick="popUp('underground')"><b>subsuelo</b></a> por un rato;
      descansas por el turno y, a la vuelta, 
      te sales por la cueva de tu agrado.`,
    en: `<a class="pop" onclick="popUp('price')">Pay to travel</a> cave to cave—
      use this trick to hop around. 
      But if you would rather save,
      take your rabbit <a class="pop" onclick="popUp('underground')"><b>underground</b></a>. 
      In this case, the payment's waived—
      hop on out in the next round.`,
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
      sin luego ejecutar <b>la travesía</b>;
      pues llegas al <a class="pop" onclick="popUp('underground')"><b>subsuelo</b></a> en el que esperas
      y eliges a la vuelta la salida.`,
    en: `If you choose to take a road
      that leads to the edge (outbound),
      you'll end your turn off the board,
      with no <b>increment</b>—you've drowned.
      But then, once you've rolled off-board,
      you'll enter the <a class="pop" onclick="popUp('underground')"><b>underground</b></a>!
      Get your <b>increment</b> restored,
      while you wait another round.`,
  })),
  img: ASSETS.caves,
}];

export default transferSections;