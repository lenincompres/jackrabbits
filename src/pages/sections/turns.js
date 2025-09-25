import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const turnSections = [{
  img: ASSETS.lottery,
  h3: Copy.text({
    es: "1.<small>a</small> La lotería",
    en: "1<small>st</small> The Lottery",
  }),
  p: versify(Copy.text({
    es: [
      `Tu turno empezará con un presente,
      rifado de la pila tras los dados.
      Si un dado, de los dos independientes,
      coincide con un número en tus manos,
      demuestra con la carta pertinente
      que ganas la que rifan de regalo.`,
      `El límite de cartas es de nueve. 
      Descarta la que quieras si te excedes.*`,
      `Conserva el resultado de los dados. 
      Los usas en <b>el precio</b> de traslados.`,
    ],
    en: [
      `Start your turns by rolling dice,
      so that two results unfold.
      You may draw a one-card prize—
      if you show a card you hold. 
      Prove it matches value-wise, 
      either number you just rolled.`,
      `Please discard if caught with ten.
      Bring your hand to nine again.*`,
      `Hold the outcome of the dice.
      Transfers use it as <b>the price</b>.`
    ]
  })),
  b_nextArrow: '➧',
}, {
  img: ASSETS.journey,
  h3: Copy.text({
    es: "2.<small>a</small> La travesía",
    en: "2<small>nd</small> The Journey",
  }),
  p: versify(Copy.text({
    es: [
      `Del sitio hexagonal en el que empiezas,
      escoge si te irás por un camino.
      Señala el recorrido por <a class="pop" onclick="popUp('roadTiles')">las piezas</a>
      llevando tu conejo peregrino.
      Termina el movimiento si tropiezas
      con una hexagonal en su destino.`,
      `Recuerda que moverte es opcional. 
      Depende de tu meta a visitar.`,
      `Podrías expandir tus travesías. 
      Consulta <a href="#intro/tranfers"><b>los traslados</b></a> en las vías.`
    ],
    en: [
      `You may choose a path to exit, 
      from the current hex you’re on.
      Move along the road selected, 
      let your rabbit venture on.
      Cross small tiles but stop at hexes—
      reach the nearest hexagon.`,
      `Move on closer to your goal.
      Or perhaps don't move at all.`,
      `There are other travel modes.
      See <a href="#intro/tranfers"><b>the transfers</b></a> off the roads.`,
    ]
  })),
  b_nextArrow: '➧',
}, {
  img: ASSETS.acquisition,
  h3: Copy.text({
    es: "3.<small>a</small> La adquisición",
    en: "3<small>rd</small> The Acquisition",
  }),
  p: versify(Copy.text({
    es: [
      `Tu meta es visitar a la nobleza
      si nadie se ha apropiado de sus cartas.
      Un mínimo de diez es lo que cuestan,
      pagado con las cartas de sus marcas.
      Se dejan zanahorias en las piezas,
      que indican los conejos que las cargan.`,
      `Es gratis acceder a los hexágonos. 
      Procura detenerte visitándolos.`,
      `Conserva lo que adquieras en tu mano. 
      Reclama <b>el incremento</b> de inmediato.`,
    ],
    en: [
      `It’s your goal to claim the card—
      marked on hexes you set foot.
      Only there you may discard:
      ten or more in that card's suit.
      Place a carrot as your mark,
      and remove it from pursuit.`,
      `You may always be a guest.
      Make no claim and stop to rest.`,
      `Keep the royals in your hands.
      Get <b>the increment</b> at once.`,
    ]
  })),
  b_nextArrow: '➧',
}, {
  img: ASSETS.increment,
  h3: Copy.text({
    es: "4.<small>a</small> El Incremento",
    en: "4<small>th</small> The increment",
  }),
  p: versify(Copy.text({
    es: [
      `Termina en un hexágono tus vueltas,
      a menos de que salgas a la orilla.**
      Te toca reclamar tu recompensa:
      la carta que prosigue de la pila.
      Si llegas con la pila ya desierta,
      baraja las del lote y recopila.`,
      `*Respeta lo del límite de cartas. 
      O ignóralo si nadie se percata.`,
      `**Podrías terminar sin incremento. 
      Revísate <a href="#intro/off"><b>el destierro</b></a> en su segmento.`,
    ],
    en: [
      `End your turns on a hex tile—
      if you don't end up ashore.** 
      Get a new card from the pile, 
      and your turn will be no more. 
      You may need to first repile:
      shuffle what was spent before.`,
      `*Hands should not exceed nine cards.
      Anyone who’s caught discards.`,
      `**Off the board there's no reward.
      See the rules about <a href="#intro/off"><b>off-board</b></a>.`,
    ]
  })),
}];

export default turnSections;