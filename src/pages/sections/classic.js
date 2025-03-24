import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const classicSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#0169942a",
  h3: Copy.text({
    es: "Alianzas Nobles",
    en: "Noble Allies",
  }),
  p: versify(Copy.text({
    es: [
      `Las piezas y monarcas combinantes;
      y dos de los conejos visitantes.`,
      `Un trío que es la unión capitalista;
      y el otro, con sus tres naturalistas.`,
      `Los palos de las casas que visitas,
      se deben combinar al adquirirlas.`,
      `Navega a los hexágonos con muelle, 
      pagando a manatíes que te lleven.`,
      `Cualquiera de los palos de las torres
      se aceptan al volar en sus transportes.`,
      `La cueva, comerciantes y taberna
      funcionan en las casas que las tengan.`,
      `La Jota que contiene comerciantes,
      te vende lo que quieras por diamantes.`,
      `Y en la otra, tras <strong>un</strong> tiro de tus cartas,
      la pila repondrá lo que descartas.`
    ],
    en: [
      `Add six royals and their tiles;
      plus two rabbits with new styles.`,
      `Three are the capitalists;
      the other, naturalists.`,
      `To pay for these royal cards:
      split both suits, in any parts.`,
      `Sail to any dock at sea,
      by paying a manatee.`,
      `Use either suit at the tower
      to fulfill the flying power.`,
      `The marked cave, merchants, and tavern
      function on hexes that have 'em.`,
      `The Jack hex with merchant booths,
      trades diamonds for any suits.`,
      `The other grants <strong>a</stong> discard:
      restores from the pile these cards.`,
    ]
  })),
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#238b222a",
  h3: Copy.text({
    es: "Trenes y Corceles",
    en: "Trains & Cavaliers",
  }),
  p: versify(Copy.text({
    es: `Las cartas de corceles y sus piezas,
    con rutas ferroviarias que atraviesan.`,
    en: `Add four royals and their tiles;
    they have tracks that go for miles.`,
  })),
  img: ASSETS.shields,
  h4: Copy.text({
    es: "Travesía en tren",
    en: "Journey by train",
  }),
  p_: versify(Copy.text({
    es: `Es gratis desplazarte con los trenes,
    mas viajas sin opciones de traslado;
    y el paso por las cuevas en sus rieles
    te saca del subsuelo de inmediato.`,
    en: `You ride the trains without cost;
    there will be no transfers found;
    reach another train hex's post—
    don't even stop underground.`,
  })),
  h4_: Copy.text({
    es: "Traslado con los Corceles",
    en: "Transfer via Steeds",
  }),
  p_1: versify(Copy.text({
    es: `En rumbos con caballos de los blancos,
    si muestras un corcel que haz adquirido,
    trasládate de gratis cabalgando,
    tal como de los cruces del camino.`,
    en: `On paths marked with a steed,
    present a Cavalier's card,
    and you'll ride it as you need,
    without needing to discard.`,
  })),
  h4_1: Copy.text({
    es: "Adquisición de Corceles",
    en: "Adquiring Cavaliers",
  }),
  p_2: versify(Copy.text({
    es: `Las cartas de corceles las adquieres,
    tal como las demás de la nobleza.
    Las usas al viajar con los corceles,
    y nunca al reclamar la ciudadela.`,
    en: `Cavaliers get acquired,
    just like any royal claim.
    To ride the steeds, they're required,
    but they may not end the game.`,
  })),
},{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#9B49772a",
  h3: Copy.text({
    es: "Flores <small>de lis</small>",
    en: "Fleurs <small>de lis</small>",
  }),
  p: versify(Copy.text({
    es: `Un palo que carece de reales;
    con piezas y un conejo adicionales.`,
    en: `There're no royals in this suit;
    just tiles—and the rabbit's cute.`,
  })),
  h4: Copy.text({
    es: "Substituye otros palos",
    en: "Substitute other suits",
  }),
  img: ASSETS.horseshoes,
  p_: versify(Copy.text({
    es: `Las flores se usarán en los traslados,
    y nunca al adquirir a la nobleza;
    pues cuentan por cualquiera de los palos,
    excepto en el poder de su estrategia.`,
    en: `Fleurs are any suit's replacement—
    except in the suit-based powers.
    Use them as a transfer's payment,
    but don't claim royals with flowers.`,
  })),
  h4_: Copy.text({
    es: "Traslado del lobo",
    en: "Transfer the wolf",
  }),
  p_1: versify(Copy.text({
    es: `El lobo se lo envías a un conejo,
    pagando en un cubil o en su paraje.
    Tu víctima prefiere su destierro,
    o apúntale a la carta que descarte.`,
    en: `Pay at its post or den
    to send it to any rabbit;
    the victim goes off-board then,
    or discards a card—you tap it.`,
  })),
  h4_1: Copy.text({
    es: "Hexágonos silvestres",
    en: "Wilderness Hexes",
  }),
  p_2: versify(Copy.text({
    es: `Sus cuevas te conducen al subsuelo,
    sin trámite de pago por traslados.
    El lobo es obediente a tu señuelo,
    pagando en el cubil por trasladarlo.
    Y en cuanto a sus caminos paralelos,
    se paga por el paso en los atajos.`,
    en: `Any off-road crossing found
    must be payed before you pass it. 
    The caves take you underground,
    with no tranfer to bypass it.
    Pay at their dens when around,
    to send the wolf where you cast it.`,
  })),
},];

export default classicSections;