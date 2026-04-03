import Copy from "../../../lib/Copy.js";
import {
  suitStyle
} from "../../aux/color.js";
import versify from "../../aux/versify.js";
import CardExpanded from "../../elements/CardExpanded.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const classicSections = [{
  style: suitStyle(CardExpanded.SUIT.F),
  h3_fleurs: Copy.text({
    es: "+ Flores",
    en: "+ Fleurs <small>(Flowers)</small>",
  }),
  img: new MediaFigure("fleurs"),
  p: versify(Copy.text({
    es: [
      `Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos de los clásicos,
      excepto en el poder de su estrategia.
      Las usas en el pago de los triángulos,
      y en rombos al cambiar de carretera.`,
      `Añades un conejo con sus piezas;
      y flores sin sus nobles a la mesa.`,
      `En parques con caminos paralelos,
      se paga el vericueto en sus atajos.
      los pagas por cruzar en el momento, 
      o acampas y te ahorras el traslado.
      Si pagas en el parque a los lobeznos,
      trasladas a su madre en un llamado.`
      /*
      `En parques que contienen vericuetos,
      elijes si cruzarlos o pararte.
      Si pagas, cruzarás en el momento;
      si no, descansarás por trasladarte.
      Y al irte, considera los lobeznos,
      que ofrecen los traslados de su madre.`
      */
    ],
    en: [`Fleurs are classic suits' replacements,
      but without their special powers:
      fighting spades, or heart engagements,
      diamond trades, or clover towers.
      They fulfill the transfer payments—
      don't claim royals with these flowers.`,
      `There're no royals in this style;
      just a rabbit and more tiles.`,
      `Trailway hexes are layed out,
      linking roads like any other.
      You may pay to hike right out,
      or set camp without a bother.
      Dens may guide the campers out—
      cubs sell transfers with their mother.`
      /*
      `Any trailway through their grounds
      must be paid before you pass it.
      Wells may take you underground—
      these provide a one way access.
      Pay with fleurs where dens are found,
      and the wolf goes where you cast it.`
      */
    ]
  })),
  h4_fleurs_: Copy.text({
    es: "Traslado del la Fiera",
    en: "Transfer the Wolf",
  }),
  p_: versify(Copy.text({
    es: `Si pagas a la fiera o sus lobeznos,
      la envías a un conejo en un paraje.
      Trasládala por tierra y por subsuelo,
      y elige si con ella trasladarte.
      La víctima termina en el destierro
      y apúntale a la carta que descarte.`,
    en: `At its post or from a den,
      send the wolf to any rabbit.
      Spook off-board your target then,
      take a card from them and scrap it.
      Move through caves and land when sent—
      you may ride to see her at it.`,
  })),
}, {
  style: suitStyle(CardExpanded.SUIT.T),
  h3_land: Copy.text({
    es: "+ Corceles",
    en: "+ Cavaliers",
  }),
  //img: new MediaFigure("cavaliers,
  p: versify(Copy.text({
    es: [`Las nuevas estaciones de jinetes 
      se añaden a las casas de los palos. 
      Las cuatro se vinculan por sus rieles
      y tienen carreteras con caballos.`,
      `Es gratis desplazarte con sus trenes,
      que cruzan el subsuelo de inmediato.
      Procura, en el diseño de sus rieles,
      que no halla un eslabón desconectado.`,
      `Las cartas de sus nobles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con sus corceles,
      y nunca al reclamar la Ciudadela.`,
      `En todos sus caminos de corceles,
      si muestras a su noble de tu mano,
      cabalgas a la pieza que prefieres,
      tal como de los cruces de traslado.`,
    ],
    en: [`Four more royals add their tiles,
      each from every classic suit.
      Cavaliers with tracks for miles,
      which will aid in your commute.`,
      `You may claim them as you need—
      acquisition is the same.
      They will let you ride the steeds,
      but may never win the game.`,
      `Ride their trains without a cost—
      pass right through the underground.
      Reach another hex train post—
      link all tracks when they're set down.`,
      `On the roads that have a steed,
      show a Cavalier at hand,
      and you’ll ride at dashing speed—
      travel anywhere by land.`,
    ],
  })),
  div_note_footnote: {
    h4: Copy.text({
      es: "+ Embargo Esporádico",
      en: "+ Sporadic Embargo",
    }),
    p: versify(Copy.text({
      es: `El hongo lo colocas al comienzo
      si sales con el último en el orden. 
      Que olvide loterías e incrementos 
      quienquiera que en su sitio se acomode. 
      Reubícalo en un nuevo asentamiento
      si acabas en el sitio en el que ronde.`,
      en: `At the start, if last in turn,
      choose the mushroom settlement.
      Guests who land there may not earn—
      lottery and increment.
      After ending there, in turn,
      pick its next resettlement.`,
    })),
  },
}, {
  style: suitStyle(CardExpanded.SUIT.A),
  h3_sea: Copy.text({
    es: "+ Alianzas",
    en: "+ Alliances",
  }),
  //img: new MediaFigure("allies,
  p: versify(Copy.text({
    es: [`Los seis ayuntamientos y sus nobles
      combinan a los palos iniciales.
      Y dos de los conejos jugadores
      permiten añadir participantes.`,
      `Los símbolos de alianzas que visitas,
      se deben combinar al adquirirlas.
      Un trío es del sector capitalista;
      y el otro, de la unión naturalista.`,
      `Las casas te permiten trasladarte
      si pagas por los medios ilustrados.
      El vuelo de sus torres, si hay restante,
      se paga con cualquiera de sus palos.`,
      `La Jota del sector capitalista
      te vende lo que quieras por diamantes.
      En la otra te reponen, de la pila,
      las cartas de tu mano que descartes.`,
    ],
    en: [`Two new rabbits bring their styles,
      as the classic suits are played.
      Six more royals add their tiles,
      with alliances portrayed.`,
      `These are three capitalists
        and three naturalist cards.
        Pay them both the suits they list—
        split the cost in any parts.`,
      `See their merchants, taverns, caves—
        ride their mules and their canoes.
        Flights from towers may be saved—
        payed with any of their suits.`,
      `Pay one plaza diamond cards—
        buy whatever suit you choose.
        Pay the other one discard—
        draw as many cards you lose.`,
    ],
  })),
  div_note_footnote: {
    background: "var(--sea) !important",
    p_: versify(Copy.text({
      es: `Respétales el puerto en sus hexágonos;
        se deben mantener desconectados.`,
      en: `Hexes have a sea-blue side.
        Leave it open to the tide.`,
    })),
    h4: Copy.text({
      es: "+ Comodín cañonero",
      en: "+ Cannonball Joker",
    }),
    p: versify(Copy.text({
      es: `El joker cañonero se te suma,
      te lanza a la taverna que prefieras.
      Su forma de volar es muy segura,
      sin riesgos de acabar en las afueras.`,
      en: `Jokers add a travel mode,
      granting trips across the air.
      You may leap from any road—
      reach the tavern you prefer.`,
    })),
  },
}, {
  style: suitStyle(CardExpanded.SUIT.W),
  h3_port: Copy.text({
    es: "+ Andares",
    en: "+ Wanders",
  }),
  //img: new MediaFigure("allies,
  p: versify(Copy.text({
    es: [`3|Las cartas con andares permitidas
      se añaden con sus once peripecias:
      las metas que varían la partida,
      y agregan carreteras a las piezas.`,
      `16,56,96,166|Con tres de sus misiones concluidas,
      podrías reclamar la Ciudadela,
      y el juego de inmediato se termina
      llevándolas en vez de a la nobleza.`,
      `31|Se integran al inicio de la pila, 
      y adquieren normalmente en el proceso. 
      Te ofrecen los avances por sus vías 
      y exponen aventuras en sus textos.`,
      `43|Las cartas con andares que recibas 
      te muestran sus propósitos secretos. 
      Las dejas en tu frente bocarriba 
      si logras las acciones de sus retos.`,
      `70.5|<a onclick="popUp('wanderTiles')">Sus vías</a> con lugares que resaltan, 
      reflejan a las clásicas que tienes; 
      Sus rombos y sus triángulos destacan, 
      incluso si en sus usos se asemejen.`,
      `83.5|En estas, tus andares se descartan, 
      pagando las acciones que te ofrecen. 
      Las cartas con andares que descartas 
      ni vuelven a la pila ni se venden.`,
    ],
    en: [
      `5|These eleven cards omitted, 
      bear no suit nor noble spell.
      They reveal new quests admitted, 
      and bring wander tiles as well.`,
      `16,60.5,110.5,195|With three <a onclick="popUp('wander')">wander cards</a> completed,
      brought unto the Citadel,
      a new winner has succeeded—
      one the wandering will tell.`,
      `35.5|Shuffle them into the deck,
      as you ready up the pile.
      You may draw them as you trek—
      play them in their special style.`,
      `49.5|Wander cards present a mission,
      written only for your view.
      Show them off upon completion—
      keep them laid in front of you.`,
      `86.5|<a onclick="popUp('wanderTiles')">They have tiles</a> unlike the mountains,
      rivers, woods, caves, taverns, forks:
      a volcano, canyon, garden,
      circus, well, bazaar—the works.`,
      `100|Wander cards may be discarded,
      on these places from their pack.
      Once discarded, they are parted—
      not for sale nor shuffled back.`,
    ],
  })),
}];

export const wanderTiles = {
  dataLyrics: 20,
  id: "wanderTiles",
  h3: Copy.text({
    es: "Vías de andares",
    en: "Wander tiles",
  }),
  img: new MediaFigure("roadTiles"),
  p: versify(Copy.text({
    es: `110|Se añaden a las vías carreteras 
      las piezas que reciben los andares. 
      Con una de sus cartas que les dieras, 
      te ofrecen los traslados habituales. 
      Excepto por el pozo, que es su cueva, 
      se ingresa sin la opción de que se sale. 
      Y el trío de los rombos se renueva: 
      lo mismo por sus cuatro laterales.`,
    en: `135|There’s a roadway set to wander,
      which allows discards on sites.
      The triangles charge a wander:
      circus and bazaar sell rides.
      They’re the same, in case you wonder—
      just as classics, otherwise.
      But the well that sends you under,
      only one way down it slides.
      And there's three remaining wonders,
      which are four-way road divides.`,
  })),
  ul_bulleted: {
    dataOn: Copy.text({
      en: "170",
      es: "138.5",
    }),
    li: versify(Copy.text({
      es: [`El rombo del jardín, que es transitable,
          canjea con andares del descarte.`,
        `El rombo del cañón que te bloquea,
          pagando con andares se atraviesa.`,
        `El rombo con el cráter al destierro
          se paga por caer en el subsuelo.`
      ],
      en: [`Four-way garden: roundabout;
          one discard retrieves one out.`,
        `Four-way canyon: trailways cross;
          one discard to pass across.`,
        `Four-way crater: off-board bound;
          one discard lands underground.`
      ],
    })),
  },
  p_: versify(Copy.text({
    es: `157.5|El cobro se cancela con andares.
      Cualquiera de sus cartas que depares.`,
    en: `191|For their gains, ignore the dice.
      Wander cards pay any price.`,
  })),
};

classicSections.forEach((section, i) => Song.addSong(section, i + 17));
classicSections.sort((a, b) => Song.indexes.indexOf(a.dataLyrics) - Song.indexes.indexOf(b.dataLyrics));

export default classicSections;