import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const nauticalSections = [{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#d834762a",
  h3: Copy.text({
    es: "Conchas",
    en: "Shells",
  }),
  img: ASSETS.shells,
  section: [{
    h4: Copy.text({
      es: "Echar cartas al mar",
      en: "Toss cards at sea",
    }),
    p: versify(Copy.text({
      es: `Su triángulo de negro (el de la costa),
      se pone en el subsuelo, en las orillas.
      Podrás desembarcar si te transportas,
      pues cuenta con un puerto de visitas.
      También es la fontana de las conchas:
      las cambia por el doble de la pila.
      Por turnos, <strong>un canjeo</strong> se te otorga;
      limítate a las cartas que recibas.`,
      en: `Its triangle underground
      is placed where the seas begin.
      It serves as a landing ground,
      where boats are welcomed within.
      If you discard shells around,
      the pile doubles what you bin.
      One trade per turn is allowed—
      you must keep the cards you win.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado por la Marea",
      en: "Trasfer via tides",
    }),
    p: versify(Copy.text({
      es: `En turnos en que sales al destierro,
        si pagas con tus conchas en el mar,
        trasládate a su torre en el momento
        (su islote que se encuentra en altamar).
        La góndola gratuita de su puerto
        te brinda la salida del lugar.`,
      en: `Do not end your turn off-board
        if you pay with shells at sea.
        Transfer to its islet's port,
        where you're rescued for that fee.
        When you're ready to move forth,
        its gondola sails for free.`,
    })),
  }]
}, {
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#7026702a",
  h3: Copy.text({
    es: "Anclas",
    en: "Anchor",
  }),
  img: ASSETS.anchors,
  section: [{
    h4: Copy.text({
      es: "Lastrar a la Nobleza",
      en: "Weigh Nobles Down",
    }),
    p: versify(Copy.text({
      es: `Es válido, con <strong>una</strong> de tus anclas,
      usarla al visitar a la nobleza.
      Poniéndola debajo de su carta,
      la sumas al valor con que se adquiera.
      La carta que pusiste se descarta
      si pagan por el noble de la pieza.`,
      en: `When you're on a royal’s tile,
      make its claim hard to achieve.
      Find its card in the court's aisle;
      place <strong>an</strong> anchor underneath.
      Add its value for the while—
      discard if the royal leaves.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado con el Velero",
      en: "Transfer via sailboat",
    }),
    p: versify(Copy.text({
      es: `Si abordas por la vía del velero,
      navégalo sin costo y libremente.
      Si pagas a la orilla del tablero,
      te mueves al que quieras de sus muelles;
      el barco pasará por tu conejo,
      y a un puerto de las anclas los transfieres.
      Su torre es un mercado heterogéneo;
      comercia con los palos que prefieres.`,
      en: `If you board the sailboat’s deck,
      sail it anywhere for free.
      But pay at a sea-bound trek
      to summon it by the sea;
      then sail to an anchor hex—
      you must choose one of these three.
      Check the anchor tower’s specs:
      it trades the suits you decree.`,
    })),
  }]
},{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#b8a4272a",
  h3: Copy.text({
    es: "Campanas",
    en: "Bells",
  }),
  img: ASSETS.bells,
  section: [{
    h4: Copy.text({
      es: "Implorar a los conejos",
      en: "Implore the Rabbits",
    }),
    p: versify(Copy.text({
      es: `Tu ruego (con un duelo de campanas)
      afecta a los que estén con tu conejo.
      Te entregan la que elijan de sus cartas,
      sin que haya que salirse del tablero.
      Si quieren rechazar lo que demandas,
      que sumen sus campanas en el duelo.`,
      en: `If you start a duel with bells,
      no one will end up off-board.
      All the rabbits where you dwell
      must gift you a card they hoard;
      or add bells to duel as well—
      if they win, your plea's ignored.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado al aislamiento",
      en: "Transfer to the x-isle",
    }),
    p: versify(Copy.text({
      es: `Si pagas dondequiera con campanas,
      trasladas a un conejo al aislamiento:
      la torre con la cueva clausurada,
      que exige que se pague por su acceso.
      Ninguno de los usos de sus cartas
      es válido ni afecta en el subsuelo.
      Su cueva (que es gratuita) te lo aclara;
      te lleva al aislamiento sin proceso.`,
      en: `Pay with bells where you may be,
      to send anyone exiled.
      The cave there charges a fee 
      to leave the lone sandy isle.
      Yet underground, it is free—
      you won't pay to reach this tile.
      In fact, down there, by decree,
      bells are banned in any style.`,
    })),
  }]
},{
  boxShadow: "1px 1px 3px black",
  backgroundColor: "#00aac42a",
  h3: Copy.text({
    es: "Témpanos",
    en: "Icicles",
  }),
  img: ASSETS.icicles,
  section: [{
    h4: Copy.text({
      es: "Invocar la Salvaguardia",
      en: "Invoque the saveguard",
    }),
    p: versify(Copy.text({
      es: `Si acabas desterrándote en el mar,
      o estás por un camino a las orillas,
      tus témpanos te pueden rescatar
      (un mínimo de seis se necesitan).
      Los <strong>muestras</strong> y te vas a su glaciar:
      la torre hexagonal con salvavidas.
      El hoyo que se encuentra en el lugar
      te deja en el subsuelo de caída.`,
      en: `If your turn will end off-board,
      or you're heading to the seas,
      count the icicles you hoard—
      show at least a sum of six.
      You’ll be rescued and restored
      to their icy tower's breeze.
      There's a drop chute on its floor;
      one way underground it leads.`,
    })),
  }, {
    h4: Copy.text({
      es: "Traslado del Vórtice",
      en: "Transfer the vortex",
    }),
    p: versify(Copy.text({
      es: `Si pagas dondequiera con tus témpanos,
      trasladas la tormenta a los hexágonos.
      En estos (exceptuando en el subsuelo)
      retienes los conejos, congelándolos.
      A menos que trasladen el mal tiempo,
      se salen solamente desterrados.`,
      en: `Pay from anywhere you please,
      to choose where the storm affects.
      The hex selected will freeze—
      except the underground hex.
      Any visitor who flees,
      goes off-board from its effects.`,
    })),
  }]
},];

export default nauticalSections;