import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const neoclassicSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#238b222a",
  header: {
    h3: Copy.text({
      es: "Trenes y Corceles",
      en: "Trains & Cavalry",
    }),
    img: ASSETS.cavaliers,
    p: versify(Copy.text({
      es: `Las cuatro residencias de corceles;
      y piezas que las unen por sus rieles.
      La ficha con el hongo y sus poderes,
      que añades a las reglas si lo quieres.`,
      en: `Adds four royals and their tiles
      with fast steeds and tracks for miles,
      and a token to compile:
      the mushroom that rots the pile.`,
    })),
  },
  section: [{
    h4: Copy.text({
      es: "Travesía en tren",
      en: "Journey by train",
    }),
    p: versify(Copy.text({
      es: `Es gratis desplazarte con los trenes,
      mas viajas sin opciones de traslado.
      Las cuevas que atravieses por sus rieles
      te sacan del subsuelo de inmediato.
      Procura que sus piezas se conecten,
      que no halles un carril desconectado.`,
      en: `You ride the trains without cost;
      and no transfers are allowed.
      Reach another hex train post—
      don't even stop underground.
      Tracks shouldn't lead to the coast—
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
      igual que de los cruces del camino.`,
      en: `On paths marked with a white steed,
      just show a Cavalier's card,
      and you'll ride it as you need,
      without needing to discard.`,
    })),
  }, {
    h4: Copy.text({
      es: "Adquisición de Corceles",
      en: "Acquire the Cavaliers",
    }),
    p: versify(Copy.text({
      es: `Las cartas de corceles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con los corceles,
      y nunca al reclamar la ciudadela.`,
      en: `Their royal cards get acquired,
      just like any royal claim.
      To ride the steeds, they're required;
      but they will not end the game.`,
    })),
  }, {
    h4: Copy.text({
      es: "+ Hongo Opcional",
      en: "+ Optional Mushroom",
    }),/*
    h5: Copy.text({
      es: `+ Sabotaje esporádico`,
      en: `+ Sporadic Sabotage`,
    }),
    p: versify(Copy.text({
      es: `Aduéñate del hongo en el momento
      si el tiro de tus dados es un doble.
      Le niegas a quienquiera su incremento,
      pidiendo que descarte lo que tome.
      Lo pierdes a raíz de sus efectos
      o si alguien con un doble lo recoge.`,
      en: `If you roll and get a double, 
      claim the mushroom for a spent—
      give it up to force another
      to discard their increment.
      You will not remain its holder
      should a claim be pertinent.`,
    })),
    h5_: Copy.text({
      es: `+ Hexágono Colonizado`,
      en: `+ Hexagonal Molding`,
    }),
    p_: versify(Copy.text({
      es: `Al hongo lo reubicas de su puesto
      si el tiro de tus dados es un doble,
      también si al descansar en tu trayecto
      terminas en el sitio en el que ronde.
      Tendrá que descartar el incremento
      quienquiera que en su sitio lo recoge.`,
      en: `If you roll and get a double,
      or it's there where your turns end,
      move the mushroom to cause trouble—
      choose a hex with ill intent.
      Those who visit face a struggle:
      they can't claim their increment.`,
    })),*/
    p_: versify(Copy.text({
      es: `Al hongo lo reubicas de su puesto
      si acabas en el sitio en el que ronde.
      Tendrá que descartar el incremento
      quienquiera que en su sitio lo recoge.
      Decides su lugar en el comienzo
      si sales con el último en el orden.`,
      en: `If you start with the last turn,
      choose its starting settlement.
      Those who visit it, in turn,
      cannot claim their increment.
      Move the mushroom end-of-turn
      if you land on where it's sent.`,
    })),
  }],
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#0169942a",
  header: {
    h3: Copy.text({
      es: "Nobles duales",
      en: "Noble Allies",
    }),
    img: ASSETS.allies,
    p: versify(Copy.text({
      es: `Los seis ayuntamientos y sus nobles;
      y dos de los conejos jugadores.
      También en las tabernas de los jokers,
      se añade el comodín de los cañones.`,
      en: `Adds six royals and their tiles,
      plus two rabbits with new styles;
      and a new joker's profile
      with its card for the court's isle.`,
    })),
  },
  section: [{
    h4: Copy.text({
      es: "Nobles",
      en: "Nobles",
    }),
    p: versify(Copy.text({
      es: `Los palos de las cartas que visitas,
      se deben combinar al adquirirlas.
      Un trío es de la unión capitalista;
      y el otro, de misión naturalista.`,
      en: `There are three Capitalist
      and three Naturalist cards.
      You must pay the cost they list
      with both suits—in any parts.`,
    })),
  }, {
    h4: Copy.text({
      es: "Viajes",
      en: "Travels",
    }),
    p: versify(Copy.text({
      es: `Trasládate en canoas por los mares, 
      pagando por el precio de los dados.
      La cueva, la taberna y comerciantes,
      también te proporcionan sus traslados.
      El vuelo de la torre, si hay restante,
      se paga con cualquiera de sus palos.`,
      en: `You may travel on the waves
      by paying at a canoe.
      The merchants, tavern, and cave
      are there to sell transfers too.
      The <i>shortfall</i> flights may be saved—
      pay with either tower’s suit.`,
    })),
  }, {
    h4: Copy.text({
      es: "Comercio",
      en: "Trades",
    }),
    p: versify(Copy.text({
      es: `La Jota de la unión capitalista
      te vende lo que quieras por diamantes.
      Y en la otra te reponen, de la pila,
      <strong>un</strong> tiro de tus cartas que descartes.`,
      en: `One Jack hex trades diamond cards
      for any suit at their booths.
      The other, grants <strong>one</strong> discard—
      draw as many as you lose.`,
    })),
  }, {
    h4: Copy.text({
      es: "Comodín de cañones",
      en: "Cannonball Joker",
    }),
    p: versify(Copy.text({
      es: `Dispárate a la torre que prefieras,
      sin miedo a terminar en las afueras.`,
      en: `Take a trip across the air
      to the tower you prefer.`,
    })),
  }],
  footer: {
    p: versify(Copy.text({
      es: `Los bordes en azul de sus hexágonos,
      se deben mantener desconectados.`,
      en: `Their hexes have sea-blue sides—
        leave them open to the tides.`,
    })),
  },
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#9B49772a",
  header: {
    h3: Copy.text({
      es: "Flores",
      en: "Fleurs <small>(Flowers)</small>",
    }),
    img: ASSETS.fleurs,
    p: versify(Copy.text({
      es: `Un palo que carece de reales;
    con piezas y un conejo adicionales.`,
      en: `There're no royals in this suit;
    just tiles—and the rabbit's cute.`,
    })),
  },
  section: [{
    h4: Copy.text({
      es: "Substituye otros palos",
      en: "Substitute other suits",
    }),
    p: versify(Copy.text({
      es: `Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos (de los clásicos)
      excepto en el poder de su estrategia.`,
      en: `Fleurs are classic suits' replacements,
      except in their unique powers.
      Use them for the transfer payments—
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
      to send it to any rabbit.
      The victim goes off-board then,
      or you'll steal a card—and scrap it.`,
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
      The caves take you underground—
      there's no tranfer to bypass it.
      Pay at their dens when around
      to send the wolf where you cast it.`,
    })),
  }],
}, ];

export default neoclassicSections;