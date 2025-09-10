import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const mixColor = (v, p = 50, b = "white") => `color-mix(in srgb, ${v} ${p}%, ${b})`;
const cMix = v => `color-mix(in srgb, var(--expansion) 90%, var(--${v}))`;

const neoclassicSections = [{
  backgroundColor: cMix("land"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_land: Copy.text({
      es: "Trenes y Corceles",
      en: "Trains & Steeds",
    }),
    img: ASSETS.cavaliers,
    p: versify(Copy.text({
      es: `Las cuatro residencias de corceles;
      y piezas que las unen por sus rieles.
      La ficha con el hongo y sus poderes,
      que añades a las reglas si lo quieres.`,
      en: `Four more royals and their tiles—
      these have steeds and tracks for miles.
      Plus a mushroom that's hostile—
      blocking cards that leave the pile.`,
    })),
  },
  section: [{
    h4_land: Copy.text({
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
      en: `Ride the trains without a cost,
      with no transfering allowed.
      Reach another hex train post—
      pass right through the underground.
      Tracks should never reach the coast—
      close the links when they're set down.`,
    })),
  }, {
    h4_land: Copy.text({
      es: "Traslado con los Corceles",
      en: "Transfer via Steeds",
    }),
    p: versify(Copy.text({
      es: `En rumbos con caballos de los blancos,
      si muestras un corcel que haz adquirido,
      trasládate de gratis cabalgando,
      tal como de los cruces del camino.`,
      en: `On the paths that have a steed,
      show a Cavalier at hand,
      and you’ll ride it as you need,
      reaching hexagons by land.`,
    })),
  }, {
    h4_land: Copy.text({
      es: "Adquisición de Corceles",
      en: "Acquire the Cavaliers",
    }),
    p: versify(Copy.text({
      es: `Las cartas de corceles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con los corceles,
      y nunca al reclamar la Ciudadela.`,
      en: `To fullfil their royal needs,
      acquisition is the same.
      Show them when you ride the steeds,
      but don't win with them the game.`,
    })),
  }, {
    h4_land: Copy.text({
      es: "+ Hongo Opcional",
      en: "+ Optional Mushroom",
    }),
    /*
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
      es: `Al hongo lo reubicas al momento 
      si el tiro de tus dados es un doble.
      Que olvide loterías e incrementos 
      quienquiera que en su sitio se acomode. 
      Desígnale su punto de comienzo 
      si sales con el último en el orden. `,
      en: `If you start with the last turn, 
      choose its starting settlement.
      Block what visitors may earn—
      lottery and increment.
      Any double rolled in turn 
      grants a new re-settlement.`,
    })),
  }],
}, {
  backgroundColor: cMix("sea"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_sea: Copy.text({
      es: "Alianzas Nobles",
      en: "Noble Alliances",
    }),
    img: ASSETS.allies,
    p: versify(Copy.text({
      es: [`Los seis ayuntamientos y sus nobles;
      y dos de los conejos jugadores.
      También a las tabernas de los jokers,
      se añade el comodín de los cañones.`,
      `Los bordes en azul de los hexágonos,
      se deben mantener desconectados.`
      ],
      en: [`Six more royals and their tiles,
      plus two rabbits with new styles;
      and the joker's new profile—
      add its card to the court's isle.`,
      `Tiles may have a sea-blue side—
      leave it open to the tide.`
      ],
    })),
  },
  section: [{
    h4_sea: Copy.text({
      es: "Alianzas Nobles",
      en: "Allied Noble Cards",
    }),
    p: versify(Copy.text({
      es: `Los palos de las cartas que visitas,
      se deben combinar al adquirirlas.
      Un trío es de la unión capitalista;
      y el otro, de misión naturalista.`,
      en: `There are three Capitalist
      and three Naturalist cards.
      Pay with both the suits they list—
      split the cost in any parts.`,
    })),
  }, {
    h4_sea: Copy.text({
      es: "Traslados en los Hexágonos",
      en: "Transfers at Allied Hexes",
    }),
    p: versify(Copy.text({
      es: `Sus medios te permiten trasladarte
      si pagas por el precio de los dados.
      La cueva, la taberna y comerciantes,
      también te proporcionan sus traslados.
      El vuelo de la torre, si hay restante,
      se paga con cualquiera de sus palos.`,
      en: `Ride through valleys, air, or waves—
      horses, cannons, or canoes.
      Merchants, taverns, and the caves
      may be used for transfers too.
      Flights with shortfall may be saved—
      payed with either tower’s suit.`,
    })),
  }, {
    h4_sea: Copy.text({
      es: "Comercio en Plazas Aliadas",
      en: "Trade at Allied Plazas",
    }),
    p: versify(Copy.text({
      es: `La Jota de la unión capitalista
      te vende lo que quieras por diamantes.
      Y en la otra te reponen, de la pila,
      <strong>un</strong> grupo de tus cartas que descartes.`,
      en: `One will trade your diamond cards—
      buy whatever suit you choose.
      Pay the other one discard—
      draw as many cards you lose.`,
    })),
  }, {
    h4_sea: Copy.text({
      es: "Comodín de cañones",
      en: "Cannonball Joker",
    }),
    p: versify(Copy.text({
      es: `Dispárate a la torre que prefieras,
      sin riesgo a terminar en las afueras.`,
      en: `Take a trip across the air—
      treach the tower you prefer.`,
    })),
  }],
}, {
  backgroundColor: cMix("fleurs"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_fleurs: Copy.text({
      es: "Flores",
      en: "Fleurs <small>(Flowers)</small>",
    }),
    img: ASSETS.fleurs,
    p: versify(Copy.text({
      es: `Un palo que carece de reales;
    con piezas y un conejo adicionales.`,
      en: `There're no royals in this style;
    just a rabbit and more tiles.`,
    })),
  },
  section: [{
    h4_fleurs: Copy.text({
      es: "Substituye otros palos",
      en: "Substitute other suits",
    }),
    p: versify(Copy.text({
      es: `Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos (de los clásicos)
      excepto en el poder de su estrategia.`,
      en: `Fleurs are classic suits' replacements,
      but won't have their special powers.
      They fulfill the transfer payments—
      don't claim royals with these flowers.`,
    })),
  }, {
    h4_fleurs: Copy.text({
      es: "Traslado del lobo",
      en: "Transfer the wolf",
    }),
    p: versify(Copy.text({
      es: `El lobo se lo envías a un conejo,
      pagando en un cubil o en su paraje.
      Tu víctima termina en el destierro
      y apúntale a la carta que descarte.`,
      en: `At its post or from its den,
      pay to send it to a rabbit.
      Take off-board your victim then,
      also steal a card—and scrap it.
      Wolves may not swim this end—
      going underground's their habit.`,
    })),
  }, {
    h4_fleurs: Copy.text({
      es: "Hexágonos silvestres",
      en: "Wilderness Hexes",
    }),
    p: versify(Copy.text({
      es: `Sus pozos te conducen al subsuelo;
      subirlos es inválido de abajo.
      El lobo es obediente a tu señuelo;
      se paga en el cubil por su traslado.
      Y en cuanto a los caminos paralelos,
      se paga por el paso en sus atajos.`,
      en: `Any off-road crossing found
      must be paid before you pass it.
      Wells will take you underground—
      these are only one way access.
      Pay with fleurs when you're around,
      and the wolf goes where you cast it.`,
    })),
  }],
}, ];

export default neoclassicSections;