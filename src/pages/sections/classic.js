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
      `4|Las flores se usarán en los traslados
      y nunca al adquirir a la nobleza.
      Suplantan a los palos de los clásicos,
      excepto en el poder de su estrategia.
      Las usas en el pago de los triángulos,
      y en rombos al cambiar de carretera.`,
      `30,73,121|Añades un conejo con sus piezas;
      y flores sin sus nobles a la mesa.`,
      `48.5|En parques con caminos paralelos,
      se paga el vericueto en sus atajos.
      Los pagas por cruzar en el momento, 
      o acampas y te ahorras el traslado.
      Si juegas con las crías del terreno,
      despiertas a su madre en un llamado.`
    ],
    en: [`7|Fleurs are classic suits' replacements,
      but without their special powers:
      fighting spades, or heart engagements,
      diamond trades, or clover towers.
      They fulfill the transfer payments—
      don't claim royals with these flowers.`,
      `30,71,112|There're no royals in this style;
      just a rabbit and more tiles.`,
      `48|Trailway hexes are laid out,
      linking roads like any other.
      You may pay to hike right out,
      or set camp without a bother.
      Dens may lead the campers out—
      see the pup about her mother.`
    ]
  })),
  h4_fleurs: Copy.text({
    es: "Traslado con la Fiera",
    en: "Transfer the Wolf",
  }),
  p_: versify(Copy.text({
    es: `95|Si pagas en su parque o paradero,
      la envías a un conejo en un paraje.
      Trasládala por tierra y por subsuelo,
      y elige si con ella trasladarte.
      La víctima termina en el destierro
      y apúntale a la carta que descarte.`,
    en: `89|At her post or from a den,
      pay the wolf to reach a rabbit.
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
    es: [`1.5|Las nuevas estaciones de jinetes 
      se añaden a las casas de los palos. 
      Las cuatro se vinculan por sus rieles
      y tienen carreteras con caballos.`,
      `15|Es gratis desplazarte con sus trenes,
      que cruzan el subsuelo de inmediato.
      Procura con las vías que diseñes
      que no haya un eslabón desconectado.`,
      `28.5|Las cartas de sus nobles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con sus corceles,
      y nunca al reclamar la Ciudadela.`,
      `42.5|En todos sus caminos de corceles,
      cualquiera de sus nobles en tu mano,
      permite que cabalgues si lo quieres,
      brindándote de gratis su traslado.`,
    ],
    en: [`3.5|Four more royals add their tiles,
      each from every classic suit.
      Cavaliers with tracks for miles,
      which will aid in your commute.`,
      `19|You may claim them as you need—
      acquisition is the same.
      They will let you ride by steed,
      but may never win the game.`,
      `34|Ride their trains without a cost—
      pass right through the underground.
      Reach another hex train post—
      link all tracks when they're set down.`,
      `41.5|On the roads that have a steed,
      show a Cavalier at hand,
      and you’ll ride at dashing speed—
      travel anywhere by land.`,
    ],
  })),
  div_note_footnote: {
    h4: Copy.text({
      es: "+ Realeza Corrupta",
      en: "+ Spoiled Royal",
    }),
    p: versify(Copy.text({
      es: `El hongo lo colocas al comienzo
      si sales con el último en el orden.
      La carta de nobleza de su asiento
      se vuelve inasequible por entonces.
      Reubícalo en un nuevo asentamiento
      si acabas en el sitio en el que ronde.`,
      en: `At the start, if last in turn,
      choose the mushroom settlement.
      Royal cards may not be earned
      where this token's resident.
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
      `5|Los seis ayuntamientos y sus nobles
      vinculan a los palos iniciales.
      Y dos de los conejos jugadores
      permiten añadir participantes.`,
      `25|Los símbolos de enlaces que visitas,
      se deben combinar al adquirirlas.
      Un trío es del sector materialista;
      y el otro, de la unión naturalista.`,
      `44|Las casas te permiten trasladarte
      si pagas por los medios ilustrados.
      El vuelo de sus torres, si hay restante,
      se paga con cualquiera de sus palos.`,
      `65|La Jota del sector materialista
      te vende lo que quieras por diamantes.
      En la otra te reponen, de la pila,
      las cartas de tu mano que descartes.`,
    ],
    en: [`6.5|Two new rabbits bring their styles,
      as the classic suits are played.
      Six more royals add their tiles,
      with alliances portrayed.`,
      `25|These are three materialists
      and three naturalist cards.
      Claim with both the suits they list—
      split the cost in any parts.`,
      `37|Some have merchants, taverns, caves—
      even mules and new canoes.
      Flights from towers may be saved—
      paid with any of their suits.`,
      `50|There's a plaza selling cards—
      buy whatever suit you choose.
      There's the one where one discards—
      draw as many as you lose.`,
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
    en: "+ Allures",
  }),
  //img: new MediaFigure("allies,
  p: versify(Copy.text({
    es: [`0|Las cartas peregrinas permitidas
      añaden veintidós interferencias:
      misiones que transforman las partidas
      y vienen con un set de carreteras.`,
      `13.5,55.5,96.5,170|Con tres de sus misiones concluidas,
      ya puedes olvidar la Ciudadela.
      Ganaste de inmediato la partida,
      sin que haya que buscar a la nobleza.`,
      `28.5|Se integran al inicio de la pila,
      y adquieren normalmente en el proceso.
      De a tres por concursantes incluidas,
      sin ver las aventuras en sus textos.`,
      `41.5|Las cartas con andares que recibas 
      te muestran sus propósitos secretos. 
      Las pones en tu frente bocarriba 
      si logras los andares de sus retos.`,
      `70|<a onclick="popUp('wanderTiles')">Sus vías</a> carreteras que resaltan,
      reflejan a las clásicas que tienes.
      sus triángulos y rombos se destacan,
      incluso si sus usos se mantienen.`,
      `84|En estas, tus andares se descartan, 
      pagando las acciones que te ofrecen. 
      Las cartas con andares que descartas 
      ni vuelven a la pila ni se venden.`,
    ],
    en: [
      `0|Twenty two new cards admitted
      bear no suit nor noble spell. 
      They allure to quests permitted,
      and bring wander tiles as well.`,
      `14,60,109.5,191.5|With three wander cards completed,
      you won't need the Citadel.
      A new winner has succeeded—
      one the wandering will tell.`,
      `33|Add a portion to the deck—
      three per player is the math.
      You may draw them as you trek—
      they'll allure you to their path.`,
      `46.5|Wander cards present a mission,
      written only for your view.
      Show them off upon completion—
      keep them laid in front of you.`,
      `82.5|<a onclick="popUp('wanderTiles')">They have tiles</a> unlike the mountains,
      rivers, woods, caves, taverns, forks. 
      There's a crater, marshes, fountain,
      circus, well, bazaar—the works.`,
      `96.5|Wander cards may be discarded
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
    es: "Set de Vías Peregrinas",
    en: "Set of Wander tiles",
  }),
  img: new MediaFigure("wanderTiles"),
  p: versify(Copy.text({
    es: `111.5|Se añaden a las vías carreteras 
      las piezas que permiten los andares. 
      Con una de sus cartas que les dieras, 
      te ofrecen los traslados habituales. 
      Excepto por el pozo, que es su cueva, 
      resulta de salida inalcanzable. 
      Y el trío de los rombos se renueva: 
      lo mismo por sus cuatro laterales.`,
    en: `130.5|There’s a set of roads to wander,
      which allows discards on sites.
      The triangles charge a wander:
      circus and bazaar sell rides.
      They’re the same, in case you wonder—
      just as classics, otherwise.
      But the well that sends you under,
      offers only one-way slides.
      And there's three remaining wonders,
      which are four-way road divides.`,
  })),
  ul_bulleted: {
    dataOn: Copy.text({
      es: "141",
      en: "164.5",
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
    es: `161|El cobro se cancela con andares.
      Cualquiera de sus cartas que depares.`,
    en: `185|For their gains, ignore the dice.
      Wander cards pay any price.`,
  })),
};

classicSections.forEach((section, i) => Song.addSong(section, i + 17));
classicSections.sort((a, b) => Song.indexes.indexOf(a.dataLyrics) - Song.indexes.indexOf(b.dataLyrics));

export default classicSections;
