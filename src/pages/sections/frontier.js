import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const frontierSections = [{
  backgroundColor: "#b7410e33",
  header: {
    h3: Copy.text({
      es: "Antorchas",
      en: "Torches",
    }),
    img: ASSETS.torches,
  },
  section: [{
    h4: Copy.text({
      es: "Saquear con fuego",
      en: "Plunder with fire",
    }),
    p: versify(Copy.text({
      es: `Podrás con tus antorchas pelear,
      igual que con las picas en sus duelos.
      Excepto que si robas al final,
      igual terminarás en el destierro;
      quienquiera que descanse en el lugar
      termina en las afueras del tablero.`,
      en: `You may plunder and defend,
      using torches just like swords.
      Still the winner, in the end, 
      will be also hurled off-board;
      since all players, there and then,
      are ejected from the board.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslados bajo el subsuelo",
      en: "Transfers via underground",
    }),
    p: versify(Copy.text({
      es: `El triángulo de negro (con el fuego)
        conéctalo al subsuelo por un lado.
        Si pagas al entrar en el subsuelo,
        podrás atraversarlo sin descanso.
        Si sales en tu turno del tablero,
        ya sea por tu cuenta o sin buscarlo,
        pagando evitarías el destierro,
        moviéndote al subsuelo de inmediato.`,
      en: `Its triangle underground
      comes with two effects of fire.
      Leave this hex in the same round, 
      paying what the dice require.
      And when turns are off-board bound,
      if that’s not what you desire,
      you may pay to transfer down—
      to the underground campfire.`,
    })),
  }],
}, {
  backgroundColor: "#436b9533",
  header: {
    h3: Copy.text({
      es: "Escudos",
      en: "Shields",
    }),
    img: ASSETS.shields,
  },
  section: [{
    h4: Copy.text({
      es: "Clausurar los hexágonos",
      en: "Seal the hexes",
    }),
    p: versify(Copy.text({
      es: `Si exhibes en la mesa tus escudos,
      clausuras el lugar en el que esperas.
      Podría descartarlos con los suyos
      quienquiera que te invada y los supera.
      Un máximo de diez es tu recurso;
      si evitan la invasión, los recuperas.
      Prohibido en el subsuelo en absoluto.
      Tan solo es invadiendo que se ingresa.`,
      en: `Show your shields—ten pips or less—
      seal the hex where you will stand.
      Only those incoming guests 
      who discard a higher band
      have your shields discarded next—
      so you lose them from your hand.
      No one else reaches the hex.
      Underground, this seal is banned.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado de Guardia",
      en: "Transfer the guard",
    }),
    p: versify(Copy.text({
      es: `La guardia obstaculiza las veredas:
        propicia la clausura de los triángulos.
        Si pagas con escudos dondequiera,
        se pasa a la vereda de tu agrado.
        Si lo haces y te encuentras en la pieza,
        del sitio te regalan su traslado.`,
      en: `Guards are placed to block the road,
      sealing a triangle tile.
      Pay wherever on the board,
      and you'll choose their post meanwhile—
      if you're there, get this reward:
      the tile's transfer in this style.`,
    })),
  }]
}, {
  backgroundColor: "#bd6c3d33",
  header: {
    h3: Copy.text({
      es: "Herraduras",
      en: "Horseshoes",
    }),
    img: ASSETS.horseshoes,
  },
  section: [{
    h4: Copy.text({
      es: "Trapichear en el subsuelo",
      en: "Hustle underground",
    }),
    p: versify(Copy.text({
      es: `Su plaza triangular (la que es oscura),
      conéctala al subsuelo en un costado.
      Permite comerciar con herraduras,
      brindándole al subsuelo su mercado,
      que vende, por el cambio de tus sumas,
      las cartas de cualquiera de los palos.`,
      en: `Trade with horseshoes underground
      at its shady marketplace.
      This triangle, dark and brown,
      marks the expansion of the space.
      At this store, all suits are found—
      horseshoes taken in their place.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado en Bronco",
      en: "Transfer via Broncos",
    }),
    p: versify(Copy.text({
      es: `Si pagas por llamar a sus caballos,
      en islas con las casas de herradura,
      saliendo de las casas de su palo
      cabalgan por los montes y llanuras.
      Entonces, si te alcanzan cabalgando,
      trasládate al lugar que se te ocurra.
      Si eliges el subsuelo, es sin cruzarlo;
      te llevan a sus cuevas, o te buscan.`,
      en: `Pay to summon a brown horse—
      on the islands where they're found.
      They will reach you from their source
      if it's possible by ground,
      and they'll take you on your course,
      even to the underground—
      they may ride to the cave's doors
      but will never venture down.`,
    })),
  }]
}, {
  backgroundColor: "#6e6e3033",
  header: {
    h3: Copy.text({
      es: "Bellotas",
      en: "Acorns",
    }),
    img: ASSETS.acorns,
  },
  section: [{
    h4: Copy.text({
      es: "Cargar los dados",
      en: "Load the dice",
    }),
    p: versify(Copy.text({
      es: `Si dejas tus bellotas en la mesa,
      se añaden a la <i>pila sobrecargo</i>:
      su número de puntos, que incrementa,
      se suma al resultado de los dados.
      En cuanto sobrepasa la docena,
      la pila se descarta de inmediato.`,
      en: `Leaving acorns on display
      adds them to the <i>overload</i>,
      and the sum this pile will weigh
      hikes the price when dice are rolled.
      Please discard them right away
      when thirteen are on the load.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado de la bestia",
      en: "Transfer the Beast",
    }),
    p: versify(Copy.text({
      es: `La bestia se coloca por sus zonas:
      los ríos, las montañas o los bosques.
      En estas te destierra si te asomas,
      a menos de que pagues su transporte.
      Si pagas dondequiera con bellotas,
      elígele la zona en la que ronde.
      Destiérrate o traspasa sin demora,
      si estás en el lugar que la coloques.`,
      en: `Pay wherever you may roam
      to select where it is moved—
      choose a proper kind of zone:
      river, mountain, or the woods.
      Send off-board all those who come,
      lest they pay it as they should.
      If you bring it where you're on,
      leave the board or cut right through.`,
    })),
  }]
}, ];

export default frontierSections;