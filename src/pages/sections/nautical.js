import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const nauticalSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#d834762a",
  header: {
    h3: Copy.text({
      es: "Conchas",
      en: "Shells",
    }),
    img: ASSETS.shells,
  },
  section: [{
    h4: Copy.text({
      es: "Echar cartas al mar",
      en: "Toss cards at sea",
    }),
    p: versify(Copy.text({
      es: `Su triángulo de negro (el de la costa)
      se pone en el subsuelo en sus orillas.
      Podrás desembarcar si te transportas,
      pues cuenta con un puerto de visitas.
      También, al deshacerte de tus conchas, 
      las cambia por el doble de la pila.
      Por turnos, un canjeo se te otorga;
      limítate a las cartas que recibas.`,
      en: `Its triangle underground
      is placed where the seas begin.
      It serves as a landing ground
      where boats are welcomed within.
      If you discard shells around,
      you'll double the cards you bin. 
      One trade per turn is allowed—
      the pile provides what you win.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado desde el Mar",
      en: "Trasfer via tides",
    }),
    p: versify(Copy.text({
      es: `En turnos en que sales al destierro,
        si pagas con tus conchas en el mar,
        trasládate a su islote en el momento:
        su torre que se encuentra en altamar.
        La góndola gratuita de su puerto
        te brinda la salida del lugar.`,
      en: `Do not end your turn off-board
        if you pay with shells at sea.
        Wash ashore its tower's port,
        where you're rescued for that fee.
        When you're ready to move forth,
        you may sail its boat for free. `,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#7026702a",
  header: {
    h3: Copy.text({
      es: "Anclas",
      en: "Anchors",
    }),
    img: ASSETS.anchors,
  },
  section: [{
    h4: Copy.text({
      es: "Lastrar a la Nobleza",
      en: "Weigh the Nobles Down",
    }),
    p: versify(Copy.text({
      es: `Es válido, con <strong>una</strong> de tus anclas,
      usarla al visitar a la nobleza.
      Poniéndola debajo de su carta,
      la sumas al valor con que se adquiera.
      La carta que pusiste se descarta
      si pagan por el noble de la pieza.`,
      en: `When you're on a royal’s tile,
      make its claim hard to achieve, 
      find its card in the court's aisle,
      and with one card underneath,
      add its value for the while—
      it's discarded once they leave.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado mediante el Velero",
      en: "Transfer via sailboat",
    }),
    p: versify(Copy.text({
      es: `Si abordas por la vía del velero,
      navégalo sin costo y libremente.
      Si pagas a la orilla del tablero,
      te mueves al que quieras de sus muelles;
      el barco te recoge en el proceso,
      y a un puerto de las anclas te transfieres.
      Su torre es un mercado heterogéneo:
      comercia con los palos que prefieres.`,
      en: `If you board the sailboat’s deck,
      sail it anywhere for free. 
      If you pay at sea-bound treks,
      you will summon it by sea;
      but you'll sail it to its hex—
      you must choose one of the three.
      Check the anchor tower’s specs—
      trade the suits that you decree.`,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#b8a4272a",
  header: {
    h3: Copy.text({
      es: "Campanas",
      en: "Bells",
    }),
    img: ASSETS.bells,
  },
  section: [{
    h4: Copy.text({
      es: "Implorar por cartas",
      en: "Implore for cards",
    }),
    p: versify(Copy.text({
      es: `Si imploras (con un <i>duelo</i> de campanas)
      afectas al hexágono completo:
      te entregan la que elijan de sus cartas
      sin que haya que salirse del tablero.
      Si quieren rechazar lo que demandas,
      que sumen sus campanas en el duelo.`,
      //Si imploras de la torre acampanada,
      //afectas al tablero por completo.`,
      en: `When you start a duel with bells,
      no one there will end off-board.
      Every player where you dwell
      gifts to you a card they hoard,
      or add bells to duel as well—
      if they win, your plea's ignored.`,
      //Implore from their tower's cell,
      //to plea all over the board.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado al aislamiento",
      en: "Transfer to the x-isle",
    }),
    p: versify(Copy.text({
      es: `Si pagas dondequiera con campanas,
      envías a cualquiera al aislamiento.
      Se aísla de cualquiera de las áreas,
      excepto las afueras del tablero.
      La cueva en el destino es la sellada,
      que exige que se pague por su acceso.
      La otra que es gratuita es la de entrada,
      que empieza conectada en el subsuelo.`,
      en: `Pay wherever you may be,
      and send anyone exiled.
      No one's safe from your decree—
      just off-board they'll skip the trial.
      The cave there charges a fee
      to escape that lonesome tile.
      Underground, this cave is free—
      added there to reach this isle.`,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#00aac42a",
  header: {
    h3: Copy.text({
      es: "Témpanos",
      en: "Icicles",
    }),
    img: ASSETS.icicles,
  },
  section: [{
    h4: Copy.text({
      es: "Deslizar el glaciar",
      en: "Slide the glacier",
    }),
    p: versify(Copy.text({
      es: `Con doce de tus témpanos (o más)
      que muestres de cualquiera de las fichas,
      o aíslas o conectas el glaciar:
      la torre hexagonal resbaladiza.
      Conéctala a un camino por el mar,
      de vía carretera a las orillas.`,
      en: `Count the icicles you hoard,
      show a sum of twelve at least,
      to connect—or move off-shore—
      the king tower wrapped by these.
      Link it to a road tile's port:
      a road open to the seas.`,
      /*`If your turn will end off-board,
      or you're heading to the seas,
      count the icicles you hoard—
      show at least a sum of six.
      You’ll be rescued and restored
      to their icy tower's breeze.
      There's a drop chute on its floor;
      one way underground it leads.`,*/
    })),
  }, {
    h4: Copy.text({
      es: "Traslado del Vórtice",
      en: "Transfer the vortex",
    }),
    p: versify(Copy.text({
      es: `Si pagas dondequiera con tus témpanos,
      al vórtice lo mueves a un hexágono.
      Y en este (exceptuando en el subsuelo)
      retén sus visitantes, congelándolo.
      Si escapan, es afuera del tablero,
      se salen con el viento huracanado:
      terminan con su turno en el destierro,
      o esperan a que se haya trasladado.`,
      en: `Pay from anywhere you please,
      choose the hex the storm affects,
      place on it the token piece
      freezing those within the hex.
      Any visitor who flees
      goes off-board from its effects.
      Only normal hexes freeze—
      underground, this storm deflects.`,
    })),
  }]
}, ];

export default nauticalSections;