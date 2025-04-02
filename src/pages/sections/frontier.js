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
      en: `You may attack—and defend—
      with torches just like with swords.
      Yet steal or not, in the end,
      you'll find yourself off-board;
      since everyone, there and then,
      will be removed from the board.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslados del y al subsuelo",
      en: "Transfers via underground",
    }),
    p: versify(Copy.text({
      es: `El triángulo de negro (con el fuego)
        conéctalo al subsuelo por un lado.
        Si pagas al llegar por el subsuelo,
        te irás a la salida sin descanso.
        Y en turnos que te saquen del tablero,
        o elijas la salida en un costado,
        pagando evitarías el destierro,
        moviéndote al subsuelo de inmediato.`,
      en: `This expansion underground
        adds a triangle with fire. 
        To exit in the same round, 
        pay there what the dice require. 
        If your turn is off-board bound,
        and that's not what you desire, 
        pay then to be transferred down
        to the underground's campfire.`,
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
      en: `Display your shields—ten or less—
      to seal the hex where you stand.
      If any incoming guest 
      discards more shields than your band, 
      your shields are discarded next
      and won't return to your hand.
      No one else reaches the hex.
      Underground, this seal is banned.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado de la Guardia",
      en: "Transfer the guards",
    }),
    p: versify(Copy.text({
      es: `La guardia obstaculiza las veredas:
        propicia la clausura de los triángulos.
        Si pagas con escudos dondequiera,
        se pasa la vereda de tu agrado.
        Si el triángulo es la pieza en que te encuentras,
        del sitio te regalan su traslado.`,
      en: `Guards are placed to block the road—
        they seal a triangle tile.
        Pay, anywhere on the board,
        to choose their new post meanwhile.
        If you're there, get this reward:
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
      te llevan a sus cuevas… o te buscan.`,
      en: `Pay to summon a hex's horse,
      but on islands where they're found.
      They will gallop from their source
      if they can reach you by ground,
      and they'll take you on your course,
      even to the underground.
      They may ride to the cave's doors,
      but they'll never venture down.`,
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
      se añaden a la <i>pila sobrecargo</i>.
      Su número de puntos, que incrementa,
      se suma al resultado de los dados.
      En cuanto sobrepasa la decena,
      la pila se descarta de inmediato.`,
      en: `Leaving acorns on display
      adds them to the <i>overload</i>.
      The sum that this pile conveys
      is added to the dice rolled.
      Discard the pile right away
      if it adds ten to the load.`,
    })),
  }, {
    h4: Copy.text({
      es: "traslado de la bestia",
      en: "Transfer the Wild Beast",
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
      en: `The beast is placed on a zone—
      a river, mountain, or woods.
      It sends off-board those who come,
      unless they pay as they should.
      Pay, from wherever you roam,
      to choose where it will be moved.
      Bring it to the zone you're on,
      to leave the board or cut through.`,
    })),
  }]
}, ];

export default frontierSections;