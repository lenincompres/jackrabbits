import Copy from "../../lib/Copy.js";
import ASSETS from "../../src/assets.js";
import {
  versify
} from "../../src/auxiliary.js";

const turnSections = [{
  img: ASSETS.lottery,
  h3: Copy.text({
    es: "1<small>ro</small>. La lotería",
    en: "1<small>st</small>. The Lottery",
  }),
  p: versify(Copy.text({
    es: [
      `Tus turnos los comienzas con la suerte
      de <strong>un</strong> premio de la pila tras los dados:
      si <strong>un</strong> dado, de los dígitos que obtienes,
      coincide con un número en tus manos,
      demuestra con tu carta que lo tienes
      y llévate la carta de regalo.`,
      `El límite de cartas es de nueve;
      descarta la que quieras si te excedes.`,
      `Conserva el resultado de los dados;
      los usas en <a class="pop" onclick="popUp('price')"><b>el precio</b></a> de traslados.`
    ],
    en: [
      `Start your turns rolling two dice
      to have their digits unfold:
      you'll draw <strong>one</strong> card as a prize
      if you show <strong>one</strong> card you hold,
      proving that its number ties
      to <strong>one</strong> of the dice you rolled.`,
      `If you're ever holding ten, 
      discard down to nine again.`,
      `Hold the outcome of the dice;
      tranfers use it as <a class="pop" onclick="popUp('price')"><b>the price</b></a>.`
    ]
  })),
}, {
  img: ASSETS.journey,
  h3: Copy.text({
    es: "2<small>do</small>. La travesía",
    en: "2<small>nd</small>. The Journey",
  }),
  p: versify(Copy.text({
    es: [
      `Del sitio hexagonal en el que empiezas,
      escoge si te irás por un camino:
      señala el recorrido por las piezas
      llevando tu conejo peregrino
      y acaba el movimiento si tropiezas
      con una hexagonal en su destino.`,
      `Recuerda que moverte es opcional,
      depende de tu meta a visitar.`,
      `Podrías expandir tus travesías
      pagando <a href="#intro/tranfers"><b>los traslados</b></a> en las vías.`
    ],
    en: [
      `From the current hex you're on, 
      you may choose a path to exit:
      move your rabbit as a pawn 
      along the road you've selected,
      and land at a hexagon—
      wait a turn to cross the hexes.`,
      `You may move towards your goal,
      or choose not to move at all.`,
      `For more transportation modes,
      see <a href="#intro/tranfers"><b>the transfers</b></a> off the roads.`,
    ]
  })),
}, {
  img: ASSETS.acquisition,
  h3: Copy.text({
    es: "3<small>ro</small>. La adquisición",
    en: "3<small>rd</small>. The Acquisition",
  }),
  p: versify(Copy.text({
    es: [
      `Tu meta es visitar a la nobleza
      si nadie se ha apropiado de sus cartas:
      un mínimo de diez es lo que cuestan,
      pagado con los palos de sus marcas.
      Se dejan zanahorias en las piezas
      que indican los conejos que las cargan.`,
      `Es gratis visitar a los hexágonos
      y hacer tu recorrido visitándolos.`,
      `Conserva lo que adquieras en tu mano
      y obtén <b>el incremento</b> de inmediato.`,
    ],
    en: [
      `Your goal is to claim the card
      of the hex where you've set foot:
      if unclaimed, you may discard
      ten or more points of their suit,
      then place a carrot to mark,
      and finalize this pursuit.`,
      `There's no cost or consequences
      for visiting residences.`,
      `Keep the card claimed in your hands—
      get <b>the increment</b> at once.`,
    ]
  })),
}, {
  img: ASSETS.increment,
  h3: Copy.text({
    es: "4<small>to</small>. El Incremento",
    en: "4<small>th</small>. The increment",
  }),
  p: versify(Copy.text({
    es: [
      `Termina en un hexágono tus vueltas
      (a menos de que salgas a la orilla*)
      y allí reclamarás tu recompensa:
      la carta que prosigue de la pila.
      Si llegas con la pila ya desierta,
      baraja las del lote y recopila.`,
      `El límite de cartas es de nueve;
      descarta la que quieras si te excedes.`,
      `*Tu turno acabará sin incremento
      si estás en <a href="#intro/off"><b>el destierro</b></a> en el momento.`,
    ],
    en: [
      `End your turns on a hex tile
      (unless you go off the shore*): 
      get a new card from the pile, 
      and your turn will be done for; 
      if you find no cards, repile—
      shuffle the spent lot once more.`,
      `If you're ever holding ten, 
      discard down to nine again.`,
      `*Do not collect this reward,
      if you ever end <a href="#intro/off"><b>off-board</b></a>.`,
    ]
  })),
}];

export default turnSections;