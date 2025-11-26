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
      es: "+ Trenes y Corceles",
      en: "+ Trains & Steeds",
    }),
    img: ASSETS.cavaliers,
  },
  section: [{
    p: versify(Copy.text({
      es: [`Añades el cuarteto de corceles.
      Sus piezas se vinculan por los rieles.`,
        `Las cartas de corceles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con los corceles,
      y nunca al reclamar la Ciudadela.`,
        `Es gratis desplazarte con los trenes,
      que cruzan el subsuelo de inmediato.
      Procura, en el diseño de sus rieles,
      que no halles un final desconectado.`,
        `En vías con caballos de los blancos,
        si muestras un corcel que haz adquirido,
        trasládate de gratis cabalgando,
        tal como de los cruces del camino.`,
      ],
      en: [`Four more royals add their tiles.
      These have steeds and tracks for miles.`,
        `They are used to ride the steeds,
      and may never win the game.
      To fullfill their royal needs,
      acquisition is the same.`,
        `Ride their trains without a cost—
      pass right through the underground.
      Reach another hex train post—
      link all tracks when they're set down.`,
        `On the paths that have a steed,
        show a Cavalier at hand,
        and you’ll ride it as you need—
        travel anywhere by land.`,
      ],
    })),
  }, {
    class: "note",
    h4: Copy.text({
      es: "+ Hongo de la Pila",
      en: "+ Pile's Mushroom",
    }),
    p: versify(Copy.text({
      es: `Desígnale su punto de comienzo 
      si sales con el último en el orden. 
      Que olvide loterías e incrementos 
      quienquiera que en su sitio se acomode. 
      Reubícalo a tu agrado en el momento 
      si acabas en el sitio en el que ronde.`,
      en: `If you start with the last turn, 
      choose its starting settlement.
      Block what visitors may earn—
      lottery and increment.
      If you end up there in turn 
      pick its new re-settlement.`,
    })),
  }],
}, {
  backgroundColor: cMix("sea"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_sea: Copy.text({
      es: "+ Alianzas Nobles",
      en: "+ Noble Alliances",
    }),
    img: ASSETS.allies,
    p: versify(Copy.text({
      es: `Los seis ayuntamientos y sus nobles;
      y dos de los conejos jugadores.`,
      en: `Two new rabbits bring their styles.
      Six more royals add their tiles.`,
    })),
  },
  section: [{
    p: versify(Copy.text({
      es: [`Los símbolos de alianzas que visitas,
        se deben combinar al adquirirlas.
        Un trío es de la unión capitalista;
        y el otro, de misión naturalista.`,
        `Las casas te permiten trasladarte
        si pagas por los medios ilustrados.
        El vuelo de la torre, si hay restante,
        se paga con cualquiera de sus palos.`,
        `La Jota de la unión capitalista
        te vende lo que quieras por diamantes.
        En la otra te reponen, de la pila,
        <strong>un</strong> tiro de tus cartas que descartes.`,
        `Los bordes en azul de los hexágonos,
          se deben mantener desconectados.`,
      ],
      en: [`These are three Capitalists
        and three Naturalist cards.
        Pay them both the suits they list—
        split the cost in any parts.`,
        `They have merchants, taverns, caves,
        horses, cannons, or canoes.
        Flights from towers may be saved—
        pay with any of their suits.`,
        `Pay one plaza diamond cards—
        buy whatever suit you choose.
        Pay the other one discard—
        draw as many cards you lose.`,
        `Hexes have a sea-blue side.
          Leave it open to the tide.`,
      ],
    })),
  }, {
    class: "note",
    h4: Copy.text({
      es: "+ Comodín cañonero",
      en: "+ Cannonball Joker",
    }),
    p: versify(Copy.text({
      es: `El joker cañonero se te suma,
      te lanza a la taverna que prefieras.
      Su forma de volar es muy segura,
      sin riesgos de acabar en las afueras.`,
      en: `Jokers have a new addition,
      granting trips across the air.
      Get it with the same conditions—
      reach the tavern you prefer.`,
    })),
  }],
}, {
  backgroundColor: cMix("fleurs"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_fleurs: Copy.text({
      es: "+ Flores",
      en: "+ Fleurs <small>(Flowers)</small>",
    }),
    img: ASSETS.fleurs,
  },
  section: [{
    p: versify(Copy.text({
      es: [`Añades un conejo con sus piezas;
      y flores sin sus nobles a la mesa.`,
        `Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos de los clásicos,
      excepto en el poder de su estrategia.
      Los usas en el pago de los triángulos,
      y en rombos al cambiar de carretera.`,

        `En parques con caminos paralelos,
      se paga el vericueto en sus atajos.
      Sus pozos te conducen al subsuelo;
      subirlos es inválido de abajo.
      El lobo es obediente a tu señuelo,
      si pagas al venir por su traslado.`
      ],
      en: [`There're no royals in this style;
      just a rabbit and more tiles.`,
        `Fleurs are classic suits' replacements,
      but won't have their special powers:
      fighting spades, or heart engagements,
      diamond trades, or clover towers.
      They fulfill the transfer payments—
      don't claim royals with these flowers.`,
        `Any trailway crossing found
      must be paid before you pass it.
      Wells take rabbits underground—
      but to them's a one way access.
      Pay with fleurs when you're around,
      and the wolf goes where you cast it.`
      ]
    })),
  }, {
    h4: Copy.text({
      es: "Traslado del lobo",
      en: "Transfer the wolf",
    }),
    p: versify(Copy.text({
      es: `Trasládalo a un paraje con conejos
      si pagas en un parque o su paraje.
      Las víctimas terminan en destierro
      y apúntale a la carta que descarten.
      Lo puedes trasladar por el subsuelo,
      mas nunca navegando por los mares.`,
      en: `At its post or from a den,
      send the wolf to any rabbit.
      Spook—off-board—those there and then,
      take a card from each and scrap it.
      Move the wolf by ground when sent—
      crossing underground's its habit.`,
    })),
  }],
}, ];

export default neoclassicSections;