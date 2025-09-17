import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const mixColor = (v, p = 50, b = "white") => `color-mix(in srgb, ${v} ${p}%, ${b})`;
const cMix = v => `color-mix(in srgb, var(--expansion) 90%, var(--${v}))`;

const nauticalSections = [{
  backgroundColor: cMix("shells"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_shells: Copy.text({
      es: "Conchas",
      en: "Shells",
    }),
    img: ASSETS.shells,
  },
  section: [{
    h4_shells: Copy.text({
      es: "Echar cartas al mar",
      en: "Toss shells undeground",
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
      en: `Its extension underground,
      which is set when games begin,
      will provide a landing ground,
      where the boats may reach within.
      You may draw when you're around—
      twice as many cards you bin. 
      Just a trade per turn's allowed,
      so you keep the cards you win.`,
    })),
  }, {
    h4_shells: Copy.text({
      es: "Traslado desde el Mar",
      en: "Transfer via rescue",
    }),
    p: versify(Copy.text({
      es: `En turnos en que sales al destierro,
        si pagas con tus conchas en el mar,
        trasládate a su islote en el momento:
        su torre que se encuentra en altamar.
        La góndola gratuita de su puerto
        te brinda la salida del lugar.`,
      en: `If you pay with shells at sea, 
      you won't end your turn off-board. 
      You'll be rescued for that fee—
      wash ashore its tower's port.
      Guests may leave from there for free, 
      riding on the tower's boat.`,
    })),
  }]
}, {
  backgroundColor: cMix("anchors"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_anchors: Copy.text({
      es: "Anclas",
      en: "Anchors",
    }),
    img: ASSETS.anchors,
  },
  section: [{
    h4_anchors: Copy.text({
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
      en: `When you visit a hex tile,
      make its claim hard to achieve, 
      find its card in the court's aisle,
      place an anchor underneath:
      add its value for the while,
      and discard it once they leave.`,
    })),
  }, {
    h4_anchors: Copy.text({
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
      sail it to an anchor hex—
      you must choose one of the three.
      Note the anchor tower’s specs—
      trade the suits that you decree.`,
    })),
  }]
}, {
  backgroundColor: cMix("bells"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_bells: Copy.text({
      es: "Campanas",
      en: "Bells",
    }),
    img: ASSETS.bells,
  },
  section: [{
    h4_bells: Copy.text({
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
      en: `You may duel with bells as well, 
      though no one will end off-board.
      Every player where you dwell 
      gifts to you a card they hoard,
      or may duel and add their bells—
      if they win, your plea's ignored.`,
      //Implore from their tower's cell,
      //to plea all over the board.`,
    })),
  }, {
    h4_bells: Copy.text({
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
      en: `There’s a cave that has a fee 
      to escape its tower's tile.
      Pay wherever you may be 
      to have anyone exiled.
      Even those off-board at sea 
      may be stranded in this isle.
      Underground, this cave is free, 
      and you're safe from facing trial.`,
    })),
  }]
}, {
  backgroundColor: cMix("icicles"),
  boxShadow: "1px 1px 3px black",
  header: {
    h3_icicles: Copy.text({
      es: "Témpanos",
      en: "Icicles",
    }),
    img: ASSETS.icicles,
  },
  section: [{
    h4_icicles: Copy.text({
      es: "Deslizar el glaciar",
      en: "Slide the glacier",
    }),
    p: versify(Copy.text({
      es: /*`Con doce de tus témpanos (o más)
      que muestres de cualquiera de las fichas,*/
      `Aíslas o conectas su glaciar,
      la torre hexagonal resbaladiza,
      si muestras, en cualquier localidad,
      un témpano al momento en el que tiras.
      Si alcanzas a tus dados al lanzar
      o pagas lo <i>restante</i> de la cifra,
      conéctalo a un camino por el mar,
      o elije despegarlo de la orilla.`,
      en: /*`Count the icicles you hoard,
      show a sum of twelve at least,*/
      `Move its tower by the shore,
      when you roll from any piece
      if you show a card before,
      and it's equal or exceeds.
      Link it to a road tile's port,
      or maroon it at the sea.
      If your card has fallen short,
      ice may pay the shortfall fee.`,
    })),
  }, {
    h4_icicles: Copy.text({
      es: "Traslado del Vórtice",
      en: "Transfer the vortex",
    }),
    p: versify(Copy.text({
      es: `Si pagas dondequiera con tus témpanos,
      al vórtice lo mueves a un hexágono.
      Y en este (exceptuando en el subsuelo)
      retén sus visitantes, congelándolo.
      Si escapan, es afuera del tablero,
      se salen con el viento huracanado`,/*
      terminan con su turno en el destierro,
      o esperan a que se haya trasladado.`,*/
      en: `Pay from anywhere you please,
      and you may select a hex.
      Place the token on that piece,
      where it freezes all its guests.
      Any visitor who flees
      goes off-board from its effects.`,/*
      Only normal hexes freeze—
      underground, this storm deflects.`,*/
    })),
  }]
}, ];

export default nauticalSections;