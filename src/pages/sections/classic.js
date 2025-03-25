import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const classicSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#0169942a",
  h3: Copy.text({
    es: "Nobles duales",
    en: "Noble Allies",
  }),
  img: ASSETS.allies,
  p: versify(Copy.text({
    es: [
      `Las piezas y monarcas vinculantes;
      y dos de los conejos visitantes.`,
      `Un trío es de la unión capitalista;
      y el otro, la misión naturalista.
      Los palos de sus casas que visitas,
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
      `Adds six royals and their tiles;
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
      `The other grants <strong>a</strong> discard;
      have the pile restores these cards.`,
    ]
  })),
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#238b222a",
  h3: Copy.text({
    es: "Trenes y Corceles",
    en: "Trains & Cavaliers",
  }),
  img: ASSETS.cavaliers,
  p: versify(Copy.text({
    es: `Las cuatro residencias de corceles,
    que están comunicadas por los rieles.`,
    en: `Adds four royals and their tiles;
    they have tracks that go for miles.`,
  })),
  section: [{
    h4: Copy.text({
      es: "Travesía en tren",
      en: "Journey by train",
    }),
    p: versify(Copy.text({
      es: `Es gratis desplazarte con los trenes,
      mas viajas sin opciones de traslado;
      y el paso por las cuevas en sus rieles
      te saca del subsuelo de inmediato.`,
      en: `You ride the trains without cost;
      there will be no transfers found;
      reach another hex train post—
      don't even stop underground.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado con los Corceles",
      en: "Transfer via Steeds",
    }),
    p: versify(Copy.text({
      es: `En rumbos con caballos de los blancos,
      si muestras un corcel que haz adquirido,
      trasládate de gratis cabalgando,
      tal como de los cruces del camino.`,
      en: `On paths marked with a steed,
      present a Cavalier's card,
      and you'll ride it as you need,
      without needing to discard.`,
    })),
  }, {
    h4: Copy.text({
      es: "Adquisición de Corceles",
      en: "Adquiring Cavaliers",
    }),
    p: versify(Copy.text({
      es: `Las cartas de corceles las adquieres,
      tal como las demás de la nobleza.
      Las usas al viajar con los corceles,
      y nunca al reclamar la ciudadela.`,
      en: `Cavaliers get acquired,
      just like any royal claim.
      To ride the steeds, they're required,
      but they may not end the game.`,
    })),
  }],
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#9B49772a",
  h3: Copy.text({
    es: "Flores",
    en: "Fleurs",
  }),
  img: ASSETS.fleurs,
  p: versify(Copy.text({
    es: `Un palo que carece de reales;
    con piezas y un conejo adicionales.`,
    en: `There're no royals in this suit;
    just tiles—and the rabbit's cute.`,
  })),
  section: [{
    h4: Copy.text({
      es: "Substituye otros palos",
      en: "Substitute other suits",
    }),
    p: versify(Copy.text({
      es: `Las flores se usarán en los traslados,
      y nunca al adquirir a la nobleza;
      pues cuentan por cualquiera de los palos,
      excepto en el poder de su estrategia.`,
      en: `Fleurs are any suit's replacement—
      except in the suit-based powers.
      Use them as a transfer's payment;
      don't claim royals with these flowers.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado del lobo",
      en: "Transfer the wolf",
    }),
    p: versify(Copy.text({
      es: `El lobo se lo envías a un conejo,
      pagando en un cubil o en su paraje.
      Tu víctima prefiere su destierro,
      o apúntale a la carta que descarte.`,
      en: `Pay at its post or den
      to send it to any rabbit;
      the victim goes off-board then,
      or discards a card—you tap it.`,
    })),
  }, {
    h4: Copy.text({
      es: "Hexágonos silvestres",
      en: "Wilderness Hexes",
    }),
    p: versify(Copy.text({
      es: `Sus cuevas te conducen al subsuelo,
      sin trámite de pago por traslados.
      El lobo es obediente a tu señuelo,
      pagando en el cubil por trasladarlo.
      Y en cuanto a los caminos paralelos,
      se paga por el paso en sus atajos.`,
      en: `Any off-road crossing found
      must be payed before you pass it. 
      The caves take you underground;
      there's no tranfer to bypass it.
      Pay at their dens when around,
      to send the wolf where you cast it.`,
    })),
  }],
}, ];

export default classicSections;