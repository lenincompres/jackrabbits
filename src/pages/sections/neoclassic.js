import Copy from "../../../lib/Copy.js";
import {
  suitStyle
} from "../../aux/color.js";
import versify from "../../aux/versify.js";
import CardExpanded from "../../elements/CardExpanded.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const neoclassicSections = [{
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
    es: "Traslado con la fiera",
    en: "Transfer the wolf",
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
  footer: {
    a_button_song: Song.getAlbum(1)[8].link,
  }
}, {
  style: suitStyle(CardExpanded.SUIT.T),
  h3_land: Copy.text({
    es: "+ Trenes y Corceles",
    en: "+ Trains & Steeds",
  }),
  //img: new MediaFigure("cavaliers,
  p: versify(Copy.text({
    es: [`Añades estaciones de los trenes
      al número monárquico de palos.
      Las cuatro se vinculan por sus rieles
      y tienen en las vías sus caballos.`,
      `Las cartas de sus nobles las adquieres,
      igual que las demás de la nobleza.
      Las usas al viajar con los corceles,
      y nunca al reclamar la Ciudadela.`,
      `Es gratis desplazarte con los trenes,
      que cruzan el subsuelo de inmediato.
      Procura, en el diseño de sus rieles,
      que no halla un eslabón desconectado.`,
      `En vías con caballos de los blancos,
      si muestras un corcel que haz adquirido,
      trasládate de gratis cabalgando,
      tal como de los cruces del camino.`,
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
  footer: {
    a_button_song: Song.getAlbum(1)[9].link,
  },
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
      Reubícalo a tu agrado en el momento 
      si acabas en el sitio en el que ronde.`,
      en: `At the start, if last in turn,
      choose the mushroom's settlement.
      It forbids the guests to earn—
      lottery and increment.
      After ending there, in turn,
      pick its next resettlement.`,
    })),
  },
}, {
  style: suitStyle(CardExpanded.SUIT.A),
  h3_sea: Copy.text({
    es: "+ Alianzas Nobles",
    en: "+ Noble Alliances",
  }),
  //img: new MediaFigure("allies,
  p: versify(Copy.text({
    es: [`Los seis ayuntamientos y sus nobles
      combinan a los palos iniciales.
      Y dos de los conejos jugadores
      permiten añadir participantes.`,
      `Los símbolos de alianzas que visitas,
      se deben combinar al adquirirlas.
      Un trío es de la unión capitalista;
      y el otro, de misión naturalista.`,
      `Las casas te permiten trasladarte
      si pagas por los medios ilustrados.
      El vuelo de sus torres, si hay restante,
      se paga con cualquiera de sus palos.`,
      `La Jota de la unión capitalista
      te vende lo que quieras por diamantes.
      En la otra te reponen, de la pila,
      <strong>un</strong> tiro de tus cartas que descartes.`,
    ],
    en: [`Two new rabbits bring their styles,
      as the classic suits are played.
      Six more royals add their tiles,
      with alliances portrayed.`,
      `These are three Capitalists
        and three Naturalist cards.
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
  footer: {
    a_button_song: Song.getAlbum(1)[10].link,
  },
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
}];

export default neoclassicSections;