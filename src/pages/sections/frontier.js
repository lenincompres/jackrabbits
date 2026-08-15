import Copy from "../../../lib/Copy.js";
import {
  suitStyle
} from "../../aux/color.js";
import versify from "../../aux/versify.js";
import CardExpanded from "../../elements/CardExpanded.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const frontierSections = [{
  style: suitStyle(CardExpanded.SUIT.FS),
  h3_shields: Copy.text({
    es: "Escudos",
    en: "Shields",
  }),
  img: new MediaFigure("shields"),
  h4_shields: Copy.text({
    es: "Clausurar los hexágonos",
    en: "Seal the hexes",
  }),
  p: versify(Copy.text({
    es: `12|Si muestras en la mesa tus escudos, 
      clausuras el lugar en el que esperas.
      Y solo los descarta con los suyos 
      quienquiera que te invada y los supera.
      Prohibido en el subsuelo en absoluto,
      y un máximo de doce se tolera.`,
    en: `4|Show your shields—twelve pips or less—
      seal the hex where you will stand.
      It will only welcome guests 
      who discard a higher band.
      If invaded while you rest,
      lose the cards shown from your hand.
      No one else will reach the hex.
      Underground, this seal is banned.`,
  })),
  h4_shields_: Copy.text({
    es: "Traslado de Guardia",
    en: "Transfer of the guard",
  }),
  p_: versify(Copy.text({
    es: `49|La guardia obstaculiza las veredas:
      propicia la clausura de los triángulos.
      Si pagas con escudos dondequiera,
      se pasa a la vereda de tu agrado.
      Si quieres transitar su carretera,
      trasládala de nuevo con un pago.
      Si estás en el lugar al que la llevas,
      del sitio te conceden su traslado.`,
    en: `38|Guards are meant to block the road—
      on a green three-sided tile.
      Pay wherever on the board,
      and assign their post meanwhile.
      If you're where they're headed toward,
      tavern, fork or cave profiled,
      get its transfer as reward—
      your authority's worthwhile.`,
  })),
}, {
  style: suitStyle(CardExpanded.SUIT.FT),
  h3_torches: Copy.text({
    es: "Antorchas",
    en: "Torches",
  }),
  img: new MediaFigure("torches"),
  h4_torches: Copy.text({
    es: "Arrasar con fuego",
    en: "Scatter with fire",
  }),
  p: versify(Copy.text({
    es: `14|Descarta las antorchas que prefieras
      y aléjate del caos que provocas.
      Primero tu conejo se destierra,
      llevándose a los otros de la zona.
      Y aparte que descarten lo que quieran;
      si no es de las antorchas, te lo robas.`,
    en: `7|Start a riot where you are—
      any torch discard will do.
      End your turn with disregard,
      take off-board those there with you.
      Each must also lose a card,
      independent of their suit.
      Add their torches to discard—
      any other you may loot.`,
  })),
  h4_torches_: Copy.text({
    es: "Traslado bajo tierra",
    en: "Transfers Underground",
  }),
  p_: versify(Copy.text({
    es: `50|El túnel cavernoso con el fuego
      se ubica en el subsuelo por un lado.
      Si pagas al entrar en el subsuelo,
      podrás atraversarlo sin descanso.
      Si sales en tu turno del tablero,
      ya sea por tu cuenta o sin buscarlo,
      pagando evitarías el destierro,
      moviéndote al subsuelo de inmediato.`,
    en: `43.5|There’s a cavern underground,
      where two transfers call for fire.
      One to leave that very round, 
      paying what the dice require.
      And when turns are off-board bound,
      if that’s not what you desire,
      you may pay to transfer down—
      to this underground campfire.`,
  })),
}, {
  style: suitStyle(CardExpanded.SUIT.FH),
  h3_horseshoes: Copy.text({
    es: "Herraduras",
    en: "Horseshoes",
  }),
  img: new MediaFigure("horseshoes"),
  h4_horseshoes: Copy.text({
    es: "Trapichear en el subsuelo",
    en: "Haggle underground",
  }),
  p: versify(Copy.text({
    es: `11|La plaza clandestina que es oscura
      se instala en el subsuelo por un lado.
      Permite comerciar con herraduras,
      brindándole al subsuelo su mercado,
      que vende, por el cambio de tus sumas,
      las cartas de cualquiera de los palos.`,
    en: `5|Trade with horseshoes underground—
      at its shady marketplace.
      It's the plaza horseshoe-brown,
      that's connected to this space.
      This is where all suits are found—
      horseshoes taken in their place.
      You may trade your sums around,
      for whatever suit you chase.`,
  })),
  h4_horseshoes_: Copy.text({
    es: "Traslado en Bronco",
    en: "Transfer on a Bronco",
  }),
  p_: versify(Copy.text({
    es: `43|Si pagas por llamar a sus caballos,
      en islas con las casas de herradura,
      saliendo de las casas de su palo
      cabalgan por los montes y llanuras.
      Entonces, si te alcanzan cabalgando,
      trasládate al lugar que se te ocurra.
      Si eliges el subsuelo, es sin cruzarlo;
      te llevan a sus cuevas, o te buscan.`,
    en: `39.5|Pay to holler for a horse,
      on the islands where they're found.
      They will reach you from their source—
      horseshoe hexes over ground.
      And they'll take you on your course,
      even to the underground.
      Horses ride to the caves' doors,
      but will never venture down.`,
  })),
}, {
  style: suitStyle(CardExpanded.SUIT.FA),
  h3_acorns: Copy.text({
    es: "Bellotas",
    en: "Acorns",
  }),
  img: new MediaFigure("acorns"),
  h4_acorns: Copy.text({
    es: "Cargar los dados",
    en: "Load the dice",
  }),
  p: versify(Copy.text({
    es: `13|Si dejas tus bellotas en la mesa,
      se añaden a la <i>pila sobrecargo</i>:
      su número de puntos, que incrementa,
      se suma al resultado de los dados.
      En cuanto sobrepasa la docena,
      la pila se descarta de inmediato.`,
    en: `13|Leaving acorns on display,
      adds them to the <i>overload</i>.
      Get the sum this pile will weigh—
      add it to the price when rolled.
      Do this when you end your play—
      others struggle down the road.
      Or discard it right away,
      when thirteen are on the load.`,
  })),
  h4_acorns_: Copy.text({
    es: "Traslado para la bestia",
    en: "Transfer for the Beast",
  }),
  p_: versify(Copy.text({
    es: `41.5|La bestia se coloca por sus zonas:
      los ríos, las montañas o los bosques.
      En estas te destierra si te asomas,
      a menos de que pagues su transporte.
      Si pagas dondequiera con bellotas,
      elígele la zona en la que ronde.
      Destiérrate o traspasa sin demora,
      si estás en el lugar que la coloques.`,
    en: `49|Pay wherever you may roam,
      and invoke where it is moved.
      Choose a proper kind of zone:
      river, mountain, or the woods.
      Send off-board all those who come,
      lest they pay another move.
      If it's summoned where you're on,
      leave the board or cut right through.`,
  })),
}];

frontierSections.forEach((section, i) => Song.addSong(section, i + 9));
frontierSections.sort((a, b) => Song.indexes.indexOf(a.dataLyrics) - Song.indexes.indexOf(b.dataLyrics));

export default frontierSections;
