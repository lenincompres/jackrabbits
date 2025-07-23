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
      y, en vez de terminar en el descarte,
      regresan a la corte en la que empiezan.`,
    ],
    en: [
      `Transfer posts along the way
      charge the total on the dice. 
      It's OK to overpay—
      you don't have to be precise. 
      You may mix the suits you play—
      any marked there fits the price.`,
      `Show and leave out what you spend—
      it's <i>discarded</i> once you're done. 
      You may spend royals as <b>10</b>,
      and the aces are worth <b>1</b>.`,
      `If you spend a royal card,
      it returns to the court's aisle.
      And you must remove your mark—
      take your carrot off their tile.`,
    ]
  }))
};

export default priceSection;