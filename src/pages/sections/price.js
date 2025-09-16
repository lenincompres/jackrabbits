import Copy from "../../../lib/Copy.js";
import versify from "../../aux/versify.js";

const priceSection = {
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
      Recuerda: si es que gastas las reales,
      quitar tu zanahoria de sus piezas;
      y no las dejarás en el descarte,
      regresan a la corte en la que empiezan.`,
    ],
    en: [
      `For all transfers on the way,
      pay the total on the dice. 
      But in case you overpay, 
      then consider that the price.
      Use as many cards to pay—
      if each symbol qualifies.`,
      `Set aside the cards you spend—
      they’re <i>discarded</i> once you’re done. 
      Royals may be spent as <b>10</b>,
      and the <b>a</b>ces are worth <b>1</b>.`,
      `If you spend a royal card,
      place it in the courtly aisle.
      And you must remove your mark—
      take your carrot off their tile.`,
    ]
  }))
};

export default priceSection;