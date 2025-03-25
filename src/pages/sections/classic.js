import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const classicSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#238b222a",
  h3: Copy.text({
    es: "Trenes y Corceles",
    en: "Trains & Cavalry",
  }),
  img: ASSETS.cavaliers,
  p: versify(Copy.text({
    es: `Las cuatro residencias de corceles,
    que están comunicadas por los rieles.`,
    en: `Adds four royals and their tiles.
    They host steeds and tracks for miles.`,
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
      te saca del subsuelo de inmediato.
      Procura que sus piezas se connecten,
      que no halles un carril desconectado.`,
      en: `You ride the trains without cost;
      and no transfers are allowed.
      Reach another hex train post—
      don't even stop underground.
      Tracks shouldn't end on the coast—
      close links as you set them down.`,
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
      en: `The royal cards get acquired,
      just like any royal claim.
      To ride the steeds, they're required;
      but they may not end the game.`,
    })),
  }],
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#0169942a",
  h3: Copy.text({
    es: "Nobles duales",
    en: "Noble Allies",
  }),
  img: ASSETS.allies,
  p: versify(Copy.text({
    es: `Las piezas y monarcas <i>vinculantes</i>;
    y dos de los conejos visitantes.`,
    en: `Adds six royals and their tiles;
    plus two rabbits with new styles.`,
  })),
  section: {
    h4: Copy.text({
      es: "Hexágonos duales",
      en: "Allied hexes",
    }),
    p: versify(Copy.text({
      es: [
        `Un trío es de la unión capitalista;
        y el otro, de misión naturalista.
        Los palos de sus cartas que visitas,
        se deben combinar al adquirirlas.`,
        `Los bordes en azul de sus hexágonos, 
        se deben mantener desconectados.`,
        `Navega a los hexágonos con muelle, 
      pagando a manatíes que te lleven.`,
        `Cualquiera de los palos de las torres
      se aceptan al volar en sus transportes.`,
        `La cueva, comerciantes y taberna
      funcionan en las casas que las tengan.`,
        `La Jota que contiene comerciantes,
      te vende lo que quieras por diamantes.`,
        `Y en la otra, tras <strong>un</strong> tiro de tus cartas,
      la pila repondrá las que descartas.`
      ],
      en: [
        `Their hexes have sea-blue sides— 
        keep these open to the tides.`,
        `There are three capitalists;
      and three more, naturalists.`,
        `To pay for these royal cards:
      split both suits, in any parts.`,
        `Sail to any dock at sea,
      by paying a manatee.`,
        `Use either suit at the tower
      to fulfill the flying power.`,
        `There's a cave, merchants, and tavern;
      which work on hexes that have 'em.`,
        `The Jack hex with merchant booths,
      trades diamonds for any suits.`,
        `The other grants <strong>a</strong> discard—
      have the pile restore these cards.`,
      ]
    })),
  },
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
      Suplantan a los cuatro <strong>palos clásicos</strong>,
      excepto en el poder de su estrategia.`,
      en: `Fleurs are <strong>classic suits</strong>' replacements,
      except in their unique powers.
      You'll use them as transfer payments—
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
      sin trámite de pago por traslado.
      El lobo es obediente a tu señuelo;
      se paga en el cubil por trasladarlo.
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