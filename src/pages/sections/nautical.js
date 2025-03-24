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
  img: ASSETS.torches,
  section: [{
    h4: Copy.text({
      es: "Echar cartas a la fuente",
      en: "Toss cards at the well",
    }),
    p: versify(Copy.text({
      es: `Su triángulo de negro con la costa
      se pone en el subsuelo en las orillas.
      Podrás desembarcar si te transportas,
      pues cuenta con un puerto de visitas.
      También es el mercado de las conchas:
      las cambia por el doble de la pila.
      Por turnos, <strong>un</strong> canjeo se te otorga;
      te quedas con las cartas que recibas.`,
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
        trasládate a su torre en el momento: 
        su islote que se encuentra en altamar.
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
  backgroundColor: "#672C6E2a",
  h3: Copy.text({
    es: "Anclas",
    en: "Anchor",
  }),
  img: ASSETS.shields,
  section: [{
    h4: Copy.text({
      es: "Anclar a la Nobleza",
      en: "Anchor the Nobles",
    }),
    p: versify(Copy.text({
      es: `Es válido con una de tus anclas
      usarla al visitar a la nobleza.
      Poniéndola debajo de su carta,
      la sumas al valor con que se adquiera.
      La carta que pusiste se descarta
      si pagan por el noble de la pieza.`,
      en: `When you're on a royal’s tile,
      make its claim hard to achieve.
      Find its card in the court's aisle;
      place an anchor underneath.
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
      trasládate de gratis al moverle.
      Si pagas sin estar en su sendero,
      lo envías cualquiera de sus muelles.
      Podrías abordar con tu conejo,
      si estás en el lugar al que lo lleves.
      La torre, en su mercado heterogéneo,
      comercia con los palos que prefieres.`,
      en: `If you board the sailboat's deck
      you may sail with it for free.
      Pay wherever you may trek,
      to summon it to its key;
      or another anchor hex,
      even one where you may be.
      Check out the key tower's specs—
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
  img: ASSETS.horseshoes,
  section: [{
    h4: Copy.text({
      es: "Implorar a los conejos",
      en: "Implore the Rabbits",
    }),
    p: versify(Copy.text({
      es: `Si imploras en un duelo de campanas,
      harás que los que estén con tu conejo
      te entreguen la que elijan de sus cartas
      sin que haya que salirse del tablero.
      Si quieren rechazar lo que demandas,
      que sumen sus campanas en un duelo.`,
      en: `If you start a fight with bells,
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
      es: `Si pagas dondequiera con campanas
      trasladas a un conejo al aislamiento:
      la torre con la cueva clausurada
      que exige que se pague por acceso.
      Mas nada que requiera campanadas
      es válido ni afecta en el subsuelo;
      su cueva, que es gratuita, lo señala
      y accede al aislamiento sin proceso.`,
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
  img: ASSETS.acorns,
  section: [{
    h4: Copy.text({
      es: "Invocar la Salvaguardia",
      en: "Invoque the saveguard",
    }),
    p: versify(Copy.text({
      es: `Si acabas desterándote en el mar
      o estás por un camino a las orillas,
      y logras con tus témpanos mostrar:
      el mínimo de seis que necesitas,
      te puedes trasladar a su glaciar, 
      la torre hexagonal con salvavidas.
      El hoyo que se encuentra en el lugar,
      te deja en el subsuelo de caída.`,
      en: `If your turn will end off-board
      or you're heading to the seas,
      count the icicles you hoard;
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
      En estos, exceptuando en el subsuelo,
      retienes los conejos, congelándolos.
      A menos que trasladen el mal tiempo,
      se salen solamente desterrados.`,
      en: `Pay from anywhere you please
      to choose where the storm affects.
      The hex selected will freeze;
      except the underground hex.
      Any visitor who flees,
      goes off-board from its effects.`,
    })),
  }]
},];

export default nauticalSections;