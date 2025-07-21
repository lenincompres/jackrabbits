import Copy from "../../../lib/Copy.js";

const greetingsSection = {
  class: "letter",
  h2: Copy.text({
    es: "Bienvenida",
    en: "Greetings",
  }),
  p: Copy.text({
    es: [
      `Atención heroicos mensajeros,`,
      `Por orden de la Orden de Conejos Mensajeros de la Ciudadela, se te ordena adquirir las cartas de la terna que será ordenada al nuevo concejo real. Esta misión de orden superior es la orden más importante que un conejo de esta orden puede recibir:`,
      `<strong>Visita las casas nobles, adquiere tres cartas con insignias reales y tráelas a la ciudadela</strong>, en tal orden.`,
      `En ese orden, cuando digo «tal orden» no me refiero a alguna otra orden de conejos mensajeros ni a la orden del motivo de esta carta, sino al orden de los pasos para restaurar el orden en el reino.`,
      `¡En marcha! ¡El tiempo apremia!`,
      `El Heraldo Blanco`,//</br>Último de la Audiencia</br>Corredor de la Voz`,
    ],
    en: [
      `Hear ye, glorious messengers,`,
      `An auspicious quest is in order: the Order of Messenger Rabbits of the Citadel hereby orders a race to procure royals for the ordinance of a Council of Thirds—the highest order ever issued to a rabbit of this Order.`,
      `<strong>Visit the noble houses, acquire the cards of three royals, and bring them to the Citadel</strong>, in that order.`,
      `Note that I wrote “that order” not in reference to any other order of messenger rabbits, nor the order that drives this letter, but the order of the steps you must take in order to fully restore the realm's order.`,
      `So, hoppity hop, in orderly fashion. Don't dawdle. No time to lose!`,
      `The White Herald`,//</br>Late of the Hearing</br>Still of the Voice`,
    ]
  }),
};

export default greetingsSection;