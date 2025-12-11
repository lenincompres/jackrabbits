import Copy from "../../../lib/Copy.js";
import { mixColor, suitStyle } from "../../aux/color.js";
import versify from "../../aux/versify.js";
import Card from "../../elements/Card.js";
import CardFloating from "../../elements/CardFloating.js";
import MediaFigure from "../../elements/MediaFigure.js";
import Song from "../../elements/Song.js";

const strategySections = [{
  style: suitStyle(Card.SUIT.C),
  h3_clubs: Copy.text({
    es: "Tréboles <small>(Bastos)</small>",
    en: "Clovers <small>(Clubs)</small>",
  }),
  img: new MediaFigure("clubs"),
  h4_clubs: Copy.text({
    es: "Volar entre las torres K",
    en: "Fly from <big>K</big>ing Towers",
  }),
  p: versify(Copy.text({
    es: [
      `Preséntate con carta pasaporte:
      un trébol al lanzar <b>la lotería</b>,
      y harás <b>la travesía</b> por las torres
      si no lo sobrepasa lo que tiras.
      Si el tiro soprepasa lo que expones,
      te vas a desterrar en las orillas.
      Igual el pasaporte lo recoges
      y el premio si un acierto se confirma.`,
      `Si pagas el <i>restante</i> que le sobre,
      consigues completar la travesía,
      cubriendo el resultado que te cobren
      con palos de la torre de partida.
      Si partes de los tréboles entonces,
      la carta pasaporte es permitida.`
    ],
    en: [
      `Show one card before you roll,
      cast <b>the journey</b> to the skies.
      Pick a tower as a goal,
      if it beats the dice or ties. 
      Or you’ll miss the board and fall—
      play <b>the lottery</b> likewise.
      Dropped off-board or standing tall,
      tumblers keep the card that tries.`,
      `Land your flight and don’t fall off,
      if you pay to reach the dice. 
      Count how far your card was off:
      pay this shortfall to suffice. 
      Note the hex where you took off, 
      just the suit from there applies.
      You may trade the shown card off—
      where the clubs fulfill the price.`,
    ]
  })),
  footer: {
    a_button_song: Song.getAlbum(0)[6].link,
  }
}, {
  style: suitStyle(Card.SUIT.S),
  h3_spades: Copy.text({
    es: "Picas <small>(Espadas)</small>",
    en: "Spades <small>(Swords)</small>",
  }),
  img: new MediaFigure("spades"),
  h4_spades: Copy.text({
    es: "Pelear por las cartas",
    en: "Fight others for cards",
  }),
  p: versify(Copy.text({
    es: [
      `Asalta en un combate sin empates
      a quien en el hexágono descansa.
      Se lucha superando los ataques,
      sumándose las picas descartadas,
      y cuando se terminen los avances,
      destierra a la persona derrotada.`,
      `Si ganas el combate que empezaste,
      procedes al asalto de sus cartas:
      le robas la primera que tocases,
      a ciegas deberás seleccionarla.
      Te toca <b>el incremento</b> y que la marques,
      si robas y la carta es de monarca;
      también elegirás la que descartes
      si acaso la que robas es tu cuarta.`,
      /*
      Asalta en un combate sin empates, 
      excepto en el subsuelo en tus andanzas.
      */
    ],
    en: [
      `You may steal a card at random,
      kicking someone off the board. 
      You must meet to seize their item, 
      and attack them with a sword.
      Both go back and forth in tandem,
      adding spades to beat what's scored.
      When no cards are thrown to sum them, 
      then the struggler's kicked off-board.`,
      `Note that tying scores is barred,
      and discard the spades outpoured.
      If your target wins the war,
      they can’t steal a card you hoard.
      If you steal a royal card,
      set <b>the acquisition</b> forth:
      place your carrot as the mark—
      give one up if it’s your fourth.`,
      /* 
      Note that tying scores is barred, 
      please discard the spades outpoured
      underground will host no war, 
      and defenders steal no hoard.
      */
    ]
  })),
  footer: {
    a_button_song: Song.getAlbum(0)[7].link,
  }
}, {
  style: suitStyle(Card.SUIT.H),
  h3_hearts: Copy.text({
    es: "Corazones <small>(Copas)</small>",
    en: "Hearts <small>(Cups)</small>",
  }),
  img: new MediaFigure("hearts"),
  h4_hearts: Copy.text({
    es: "Vetar los palacios Q",
    en: "Vet the <big>Q</big>ueen Palaces",
  }),
  p: versify(Copy.text({
    es: [
      `Anúnciate en la entrada de las reinas
      y espera que en la mesa te cuestionen:
      si cargas con su carta de nobleza 
      o un mínimo de seis en corazones.
      Te expulsan al destierro si te frenan
      y niegas que tu suma se cerciore.`,
      `Mas antes de mostrar tus pertenencias,
      se exige de cualquiera que cuestione:
      que muestre corazones de su cuenta,
      lo mínimo de aquellas condiciones.
      Pues pierde lo mostrado y se destierra
      si pruebas que te acusa sin razones.
      Tampoco se permiten exigencias
      de quien en el destierro las expone.`,
    ],
    en: [
      `Any player may contest, 
      as you reach a queen’s own throne:
      “Show six points to prove you're blest,
      adding hearts from cards you own.”
      Or declare you're honored guest, 
      if your carrot marks this zone.
      Off-board players can’t request—
      they’re not fit to cast a stone.`,
      `Yet before they check your cards,
      they're obliged to show their own. 
      Even standing far apart:
      let the proof they're blest be known.
      If you prove at least six hearts, 
      they'll discard the hearts they've shown.
      Either one who's wrong departs—
      off the board the meddler's thrown.`,
    ]
  })),
  footer: {
    a_button_song: Song.getAlbum(0)[5].link,
  }
}, {
  style: suitStyle(Card.SUIT.D),
  h3_diamonds: Copy.text({
    es: "Diamantes <small>(Oros)</small>",
    en: "Diamonds <small>(Gold)</small>",
  }),
  img: new MediaFigure("diamonds"),
  h4_diamonds: Copy.text({
    es: "Comerciar en las plazas J",
    en: "Trade at <big>J</big>ack Plazas",
  }),
  p: versify(Copy.text({
    es: `Los centros con los símbolos de canje 
      te ofrecen sus artículos en venta:
      las cartas de sus palos del descarte 
      que en estos por diamantes se canjean,
      o aceptan de cualquiera que les pagues 
      si el centro es el marcado con la estrella.`,
    en: `All spent cards are being sold, 
      every <b>J</b>ack will sell its suit.
      Browse the lot their houses hold,
      where you may obtain this loot.
      Match or overpay with gold, 
      see the markings underfoot.
      Note the asterisk in bold—
      any suit at all will suit.`,
  })),
  /*
    h5: Copy.text({
      es: "+ Comercio Interpersonal",
      en: "+ Interpersonal Trades",
    }),*/
  p_0: versify(Copy.text({
    es: `Si quieres <b class="diamonds">potenciar a los diamantes <sup>+</sup></b>,
    añádele el acápite a las reglas:
    permite los canjeos personales
    con alguien en el sitio que te encuentras;
    y mientras los negocios se debaten, 
    se ocultan en las manos las ofertas.
    A quien se le descubra por chantaje, 
    después del intercambio se destierra.`,
    en: `If agreed when setup starts,
    you may add the <b class="diamonds">diamonds boost <sup>+</sup></b>:
    players trade with diamond cards, 
    on their turn where both set foot.
    Never show your hand’s rewards—
    strike a deal beyond dispute.
    If what's traded proves a farce,
    swindlers get the off-board boot.`,
  })),
  footer: {
    a_button_song: Song.getAlbum(0)[4].link,
  }
}];

export default strategySections;