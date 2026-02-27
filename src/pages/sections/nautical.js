import Copy from "../../../lib/Copy.js";
import {
  suitStyle
} from "../../aux/color.js";
import versify from "../../aux/versify.js";
import CardExpanded from "../../elements/CardExpanded.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const nauticalSections = [{
  style: suitStyle(CardExpanded.SUIT.NB),
  h3_bells: Copy.text({
    es: "Campanas",
    en: "Bells",
  }),
  img: new MediaFigure("bells"),
  h4_bells: Copy.text({
    es: "Implorar por cartas",
    en: "Implore for cards",
  }),
  p: versify(Copy.text({
    es: `Si imploras, con un <i>duelo</i> de campanas,
      afectas al hexágono completo:
      te entregan la que elijan de sus cartas
      sin que haya que salirse del tablero.
      Si quieren rechazar lo que demandas,
      que sumen sus campanas en el duelo.`,
    en: `You may meet with bells as well, 
      just like you would do with swords,
      but you cast a gentler spell
      where no one is sent off-board.
      Everybody where you dwell
      gifts to you a card they hoard,
      or contend and add their bells—
      if they win, your plea's ignored.`,
  })),
  h4_bells_: Copy.text({
    es: "Traslado al aislamiento",
    en: "Transfer to the x-isle",
  }),
  p_: versify(Copy.text({
    es: `Si pagas dondequiera con campanas,
      envías a cualquiera al aislamiento.
      Si muestran seis campanas se te escapa—
      incluso si se encuentra en el destierro.
      La cueva en el destino es la sellada,
      que exige que se pague por su acceso.
      La gratis subterránea es la de entrada,
      que veta su poder en el subsuelo.`,
    en: `There’s a cave that has a fee 
      to escape its tower's tile.
      Pay wherever you may be
      to decree someone's exile.
      Targets, even off at sea,
      show six bells and dodge the isle.
      Underground, the cave is free—
      bells may cast no plea or trial.`,
  })),
  footer: {
    a_button_song: Song.getAlbum(1)[4].link,
  }
}, {
  style: suitStyle(CardExpanded.SUIT.NA),
  h3_anchors: Copy.text({
    es: "Anclas",
    en: "Anchors",
  }),
  img: new MediaFigure("anchors"),
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
    en: `When you're visiting a tile,
      make its claim hard to achieve.
      Choose its noble from the aisle,
      where the royals take their leave.
      Set an anchor as its pile—
      one card weighing underneath.
      Add its value for the while,
      and discard it when they leave.`,
  })),
  h4_anchors_: Copy.text({
    es: "Traslado mediante el Velero",
    en: "Transfer by Sailboat",
  }),
  p_: versify(Copy.text({
    es: `Si abordas por la vía del velero,
      navégalo sin costo y libremente.
      Si pagas a la orilla del tablero,
      te mueves al que quieras de sus muelles;
      el barco te recoge en el proceso,
      y a un puerto de las anclas te transfieres.
      Su torre es un mercado heterogéneo:
      comercia lo que sea que prefieres.`,
    en: `If you board the sailboat’s deck,
      sail it anywhere for free. 
      If you pay at sea-bound treks,
      you will summon it by sea;
      ride it to an anchor hex,
      or choose one where it shall be.
      Note the anchor tower’s specs—
      trade with suits that you decree.`,
  })),
  footer: {
    a_button_song: Song.getAlbum(1)[5].link,
  }
}, {
  style: suitStyle(CardExpanded.SUIT.NS),
  h3_shells: Copy.text({
    es: "Conchas",
    en: "Shells",
  }),
  img: new MediaFigure("shells"),
  h4_shells: Copy.text({
    es: "Echar cartas al mar",
    en: "Toss them underground",
  }),
  p: versify(Copy.text({
    es: `La gruta coralina de la costa
      se extiende del subsuelo en sus orillas.
      Podrás desembarcar si te transportas,
      pues cuenta con un puerto de visitas.
      También, al deshacerte de tus conchas, 
      las cambia por el doble de la pila.
      La suma de sus números se ignora;
      duplica independiente lo que tiras.`,
    en: `Its extension underground
      will be set when games begin.
      It provides a landing ground—
      where the boats may venture in.
      You may draw when you're around,
      twice as many cards you bin:
      toss your shells beneath the ground,
      for a double card-count win.`,
  })),
  h4_shells_: Copy.text({
    es: "Traslado desde el Mar",
    en: "Transfer with the tides",
  }),
  p_: versify(Copy.text({
    es: `En turnos en que sales al destierro,
      si pagas con tus conchas en el mar,
      trasládate a su islote en el momento:
      su torre que se encuentra en altamar.
      Contempla que la barca de su puerto
      te ofrece navegarla sin pagar.`,
    en: `If you pay with shells at sea, 
      you won't end your turn off-board. 
      You'll be rescued for that fee—
      wash ashore its tower's port.
      And this island, you will see,
      is a traveler's resort;
      guests may leave from there for free, 
      on the ferry they may board.`,
  })),
  footer: {
    a_button_song: Song.getAlbum(1)[6].link,
  }
}, {
  style: suitStyle(CardExpanded.SUIT.NI),
  h3_icicles: Copy.text({
    es: "Témpanos",
    en: "Icicles",
  }),
  img: new MediaFigure("icicles"),
  h4_icicles: Copy.text({
    es: "Deslizar el glaciar",
    en: "Slide the glacier",
  }),
  p: versify(Copy.text({
    es: `Aíslas o conectas su glaciar,
      la torre que en las aguas se desliza,
      si muestras en cualquier localidad
      un témpano al tratar la lotería.
      Si alcanza el resultado tras lanzar
      o pagas lo <i>restante</i> de la cifra,
      deslízalo a un camino por el mar
      o elije despegarlo de la orilla.`,
    en: `Move its tower by the shore,
      when you roll from any piece,
      if you show a card before,
      and it's equal or exceeds.
      Link to any road its port,
      or maroon it at the seas.
      If your card has fallen short,
      ice may pay the shortfall fees.`,
  })),
  h4_icicles_: Copy.text({
    es: "Traslado del Vórtice",
    en: "Transfer the vortex",
  }),
  p_: versify(Copy.text({
    es: `Si pagas dondequiera con tus témpanos,
      al vórtice lo mueves a un hexágono.
      Y en este, exceptuando en el subsuelo,
      retén sus visitantes, congelándolo.
      Si escapan, es afuera del tablero,
      lanzados por el viento huracanado.`,
    en: `Pay from anywhere you please,
      and you may select a hex.
      Bring the vortex on that piece,
      where it freezes all its guests.
      Any visitor who flees
      goes off-board from its effects.
      Note the underground won't freeze—
      it's no place where this affects.`,
  })),
  footer: {
    a_button_song: Song.getAlbum(1)[7].link,
  }
}];

export default nauticalSections;