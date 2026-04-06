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
      `4.5|Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos de los clásicos,
      excepto en el poder de su estrategia.
      Las usas en el pago de los triángulos,
      y en rombos al cambiar de carretera.`,
      `29,74.5,119.5|Añades un conejo con sus piezas;
      y flores sin sus nobles a la mesa.`,
      `50|En parques con caminos paralelos,
      se paga el vericueto en sus atajos.
      los pagas por cruzar en el momento, 
      o acampas y te ahorras el traslado.
      Si pagas en el parque a los lobeznos,
      trasladas a su madre en un llamado.`
    ],
    en: [`8|Fleurs are classic suits' replacements,
      but without their special powers:
      fighting spades, or heart engagements,
      diamond trades, or clover towers.
      They fulfill the transfer payments—
      don't claim royals with these flowers.`,
      `30,73.5,118|There're no royals in this style;
      just a rabbit and more tiles.`,
      `51.5|Trailway hexes are layed out,
      linking roads like any other.
      You may pay to hike right out,
      or set camp without a bother.
      Dens may guide the campers out—
      cubs sell transfers with their mother.`
    ]
  })),
  h4_fleurs: Copy.text({
    es: "Traslado con la Fiera",
    en: "Transfer the Wolf",
  }),
  p_: versify(Copy.text({
    es: `95|Si pagas a la fiera o sus lobeznos,
      la envías a un conejo en un paraje.
      Trasládala por tierra y por subsuelo,
      y elige si con ella trasladarte.
      La víctima termina en el destierro
      y apúntale a la carta que descarte.`,
    en: `95.5|At its post or from a den,
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
  p: versify(Copy.text({
    es: [`2|Las nuevas estaciones de jinetes 
      se añaden a las casas de los palos. 
      Las cuatro se vinculan por sus rieles
      y tienen carreteras con caballos.`,
      `15.5|Es gratis desplazarte con sus trenes,
      que cruzan el subsuelo de inmediato.
      Procura, en el diseño de sus rieles,
      que no halla un eslabón desconectado.`,
      `29|Las cartas de sus nobles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con sus corceles,
      y nunca al reclamar la Ciudadela.`,
      `43|En todos sus caminos de corceles,
      cualquiera de sus nobles en tu mano,
      permite que cabalgues si lo quieres,
      y no hay que descartar por su traslado.`,
    ],
    en: [`3.5|Four more royals add their tiles,
      each from every classic suit.
      Cavaliers with tracks for miles,
      which will aid in your commute.`,
      `19|You may claim them as you need—
      acquisition is the same.
      They will let you ride the steeds,
      but may never win the game.`,
      `34|Ride their trains without a cost—
      pass right through the underground.
      Reach another hex train post—
      link all tracks when they're set down.`,
      `42|On the roads that have a steed,
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
    es: "+ Enlaces",
    en: "+ Liaisons",
  }),
  p: versify(Copy.text({
    es: [
      `4|Los seis ayuntamientos y sus nobles
      combinan a los palos iniciales.
      Y dos de los conejos jugadores
      permiten añadir participantes.`,
      `24|Los símbolos de enlaces que visitas,
      se deben combinar al adquirirlas.
      Un trío es del sector capitalista;
      y el otro, de la unión naturalista.`,
      `43.5|Las casas te permiten trasladarte
      si pagas por los medios ilustrados.
      El vuelo de sus torres, si hay restante,
      se paga con cualquiera de sus palos.`,
      `64|La Jota del sector capitalista
      te vende lo que quieras por diamantes.
      En la otra te reponen, de la pila,
      las cartas de tu mano que descartes.`,
    ],
    en: [`6|Two new rabbits bring their styles,
      as the classic suits are played.
      Six more royals add their tiles,
      with alliances portrayed.`,
      `25|These are three capitalists
        and three naturalist cards.
        Pay them both the suits they list—
        split the cost in any parts.`,
      `37.5|See their merchants, taverns, caves—
        ride their mules and their canoes.
        Flights from towers may be saved—
        payed with any of their suits.`,
      `50|Pay one plaza diamond cards—
        buy whatever suit you choose.
        Pay the other one discard—
        draw as many cards you lose.`,
    ],
  })),
  div_note_footnote: {
    background: "var(--sea) !important",
    p: versify(Copy.text({
      es: `Respétales el puerto en sus hexágonos;
        se deben mantener desconectados.`,
      en: `Hexes have a sea-blue side.
        Leave it open to the tide.`,
    })),
    h4: Copy.text({
      es: "+ Comodín cañonero",
      en: "+ Cannonball Joker",
    }),
    p_: versify(Copy.text({
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
    es: [`0|Las cartas con andares permitidas
      añaden veintidós interferencias/intransigencias/:
      las metas que varían la partida,
      y agregan carreteras a las piezas.`,
      `13.5,55.5,97,170|Con tres de sus misiones concluidas,
      podrías reclamar la Ciudadela,
      y el juego de inmediato se termina
      llevándolas en vez de a la nobleza.`,
      `28.5|Se integran al inicio de la pila,
      y adquieren por igual en el proceso.
      Las usas en el pago de sus vías,
      y exponen aventuras en sus textos.`,
      `42|Las cartas con andares que recibas 
      te muestran sus propósitos secretos. 
      Las pones en tu frente bocarriba 
      si logras las acciones de sus retos.`,
      `70.5|<a onclick="popUp('wanderTiles')">Sus vías</a> con lugares que resaltan,
      reflejan a las clásicas que tienes.
      Los únicos lugares de soltarlas;
      si no las finalizas, las mantienes.`,
      `84|En estas, tus andares se descartan, 
      pagando las acciones que te ofrecen. 
      Las cartas con andares que descartas 
      ni vuelven a la pila ni se venden.`,
    ],
    en: [
      `0|Twenty two ne cards omitted, 
      bear no suit nor noble spell.
      They reveal new quests admitted, 
      and bring wander tiles as well.`,
      `14.5,58,107,190|With three wander cards completed,
      brought unto the Citadel,
      a new winner has succeeded—
      one the wandering will tell.`,
      `30.5|Shuffle them into the deck,
      while you ready up the pile.
      You may draw them as you trek—
      play them in their special style.`,
      `44|Wander cards present a mission,
      written only for your view.
      Show them off upon completion—
      keep them laid in front of you.`,
      `80|<a onclick="popUp('wanderTiles')">They have tiles</a> unlike the mountains,
      rivers, woods, caves, taverns, forks:
      a volcano, marshes, fountain,
      circus, well, bazaar—the works.`,
      `94|Cards may only be discarded
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
  img: new MediaFigure("wanderTiles"),
  p: versify(Copy.text({
    es: `112|Se añaden a las vías carreteras 
      las piezas que permiten los andares. 
      Con una de sus cartas que les dieras, 
      te ofrecen los traslados habituales. 
      Excepto por el pozo, que es su cueva, 
      se ingresa sin la opción de que se sale. 
      Y el trío de los rombos se renueva: 
      lo mismo por sus cuatro laterales.`,
    en: `128|There’s a roadway set to wander,
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
      es: "140.5",
      en: "162",
    }),
    li: versify(Copy.text({
      es: [`El rombo de la fuente es transitable,
          canjea con andares del descarte.`,
        `El rombo del pantano te bloquea,
          pagando con andares se atraviesa.`,
        `El rombo con el cráter al destierro, 
          lo pagas por caer en el subsuelo.`
      ],
      en: [`Four-way fountain: roundabout;
          one discard retrieves one out.`, 
        `Four-way marshes: trailways cross;
          one discard to pass across.`,
        `Four-way crater: off-board bound;
          one discard lands underground.`
      ],
    })),
  },
  p_: versify(Copy.text({
    es: `160.5|El cobro se cancela con andares.
      Cualquiera de sus cartas que depares.`,
    en: `183|For their gains, ignore the dice.
      Wander cards pay any price.`,
  })),
};

classicSections.forEach((section, i) => Song.addSong(section, i + 17));
classicSections.sort((a, b) => Song.indexes.indexOf(a.dataLyrics) - Song.indexes.indexOf(b.dataLyrics));

export default classicSections;