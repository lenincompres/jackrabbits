import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const frontierSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#b7410e33",
  h3: Copy.text({
    es: "Antorchas",
    en: "Torches",
  }),
  img: ASSETS.torches,
  section: [{
    h4: Copy.text({
      es: "Saquear con fuego",
      en: "Plunder with fire",
    }),
    p: versify(Copy.text({
      es: `Podrás con tus antorchas pelear,
      igual que con las picas en sus duelos;
      excepto que, si robas al final,
      igual terminarás en el destierro.
      Pues todos los conejos del lugar
      terminan desterrados por el fuego.`,
      en: `You may attack (and defend)
      with torches instead of swords.
      But if you steal in the end,
      you will also go off-board.
      All the rabbits, there and then,
      will be removed from the board.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado del (y al) subsuelo",
      en: "Transfers via underground",
    }),
    p: versify(Copy.text({
      es: `El triángulo de negro (con el fuego)
        conéctalo al subsuelo por un lado.
        Si pagas al entrar en el subsuelo,
        te irás a la salida de inmediato.
        Si pagas al salirte del tablero,
        o incluso de visita en los hexágonos,
        a todos los conejos en destierro
        los llevas al subsuelo, congregándolos.`,
      en: `Emblazon the underground— 
        add its triangle with fire. 
        To exit in the same round, 
        pay there what the dice require. 
        If you pay while off-board bound, 
        or wherever you desire, 
        bring all off-board rabbits down
        to the underground's campfire.`,
    })),
  }],
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#436b9533",
  h3: Copy.text({
    es: "Escudos",
    en: "Shields",
  }),
  img: ASSETS.shields,
  section: [{
    h4: Copy.text({
      es: "Clausurar las residencias",
      en: "Seal the residences",
    }),
    p: versify(Copy.text({
      es: `Si exhibes en la mesa tus escudos
      (sin carta o con alguna de nobleza),
      clausuras el hexágono de turno,
      o aquel de la nobleza que exhibieras.
      Podría descartarlos con los suyos
      quienquiera que te invada y los supera.
      Un máximo de diez es tu recurso. 
      Si evitan la invasión, los recuperas.
      Prohibido en el subsuelo en absoluto.
      La carta de tu noble te la quedas.`,
      en: `Display your shields (ten or less) 
      to seal the hex where you stand.
      Or, to seal a royal’s hex,
      include the card from that land. 
      If any incoming guest 
      discards more shields than your band, 
      your shields are discarded next,
      and won't return to your hand.
      Keep the royal you addressed.
      Sealing the underground's banned.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado de la Guardia",
      en: "Transfer the guards",
    }),
    p: versify(Copy.text({
      es: `La guardia obstaculiza las <i>veredas</i>:
        bloquea los caminos <strong>en los triángulos</strong>.
        Si pagas con escudos dondequiera,
        se irán a la vereda de tu agrado.`,
      en: `Guards totally block the road,
        and stand on triangle tiles.
        Pay anywhere on the board
        to choose their new post meanwhile.`,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#bd6c3d33",
  h3: Copy.text({
    es: "Herraduras",
    en: "Horseshoes",
  }),
  img: ASSETS.horseshoes,
  section:[{
    h4: Copy.text({
      es: "Trapichear en el subsuelo",
      en: "Hustle underground",
    }),
    p: versify(Copy.text({
      es: `Su plaza triangular (la que es oscura),
      conéctala al subsuelo en un costado.
      Permite canjear tus herraduras,
      brindándole al subsuelo su mercado.
      Te vende, por el cambio de tus sumas,
      las cartas de cualquiera de los palos.`,
      en: `Trade with horseshoes underground
      at its shady marketplace.
      This triangle dark and brown
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
      es: `Si pagas por viajar con sus caballos
      (en islas con las casas de herradura),
      saliendo de las casas de su palo,
      cabalgan por los montes y llanuras.
      Entonces, si te alcanzan cabalgando,
      trasládate al lugar que se te ocurra.
      Si eliges el subsuelo, es sin cruzarlo;
      te llevan a sus cuevas… o te buscan.`,
      en: `Pay to ride a hex's horse,
      on islands where these are found.
      They will gallop from their source
      if they can reach you by ground,
      and will take you on your course,
      even to the underground—
      they may ride to the cave's doors,
      but will never venture down.`,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#6e6e3033",
  h3: Copy.text({
    es: "Bellotas",
    en: "Acorns",
  }),
  img: ASSETS.acorns,
  section:[{
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
      en: `Leaving acorns on display,
      adds them to the “overload”.
      The sum that this pile conveys
      is added to the dice rolled.
      Discard the pile right away,
      when they add ten to the load.`,
    })),
  }, {
    h4: Copy.text({
      es: "traslado de la bestia",
      en: "Transfer the Beast",
    }),
    p: versify(Copy.text({
      es: `La bestia se coloca por sus <i>zonas</i>:
      los ríos, las montañas o los bosques.
      En estas te destierra si te asomas,
      a menos de que pagues su transporte.
      Si pagas dondequiera con bellotas,
      elígele la zona en la que ronde.
      Destiérrate o traspasa sin demora,
      si estás en el lugar que la coloques.`,
      en: `The beast is placed in its zones,
      on rivers, mountains, or woods.
      It sends off-board those who come,
      unless they pay as they should.
      Pay from wherever you roam
      to choose where to move it to.
      Go off-board or cross along
      if you summon it to you.`,
    })),
  }]
}, ];

export default frontierSections;