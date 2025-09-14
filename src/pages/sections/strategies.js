import Copy from "../../../lib/Copy.js";
import ASSETS from "../../assets.js";
import versify from "../../aux/versify.js";

const mixColor = (v, p = 50, b = "white") => `color-mix(in srgb, ${v} ${p}%, ${b})`;
const cMix = v => `color-mix(in srgb, var(--full) 90%, var(--${v}))`;

const strategySections = [{
  backgroundColor: cMix("clubs"),
  h3_clubs: Copy.text({
    es: "Tréboles <small>(Bastos)</small>",
    en: "Clovers <small>(Clubs)</small>",
  }),
  img: ASSETS.clubs,
  h4_clubs: Copy.text({
    es: "Volar entre dos torres K",
    en: "Fly among <big>K</big>ing Towers",
  }),
  p: versify(Copy.text({
    es: [
      `Preséntate con carta pasaporte:
      un trébol al lanzar <b>la lotería</b>,
      y harás <b>la travesía</b> por las torres
      si no lo sobrepasa lo que tiras.
      En cambio, si los dados son mayores,
      te sales al destierro en las orillas.
      Igual el pasaporte lo recoges
      y el premio si un acierto se confirma.
      Si pagas el <i>restante</i> que le sobre,
      consigues completar la travesía,
      cubriendo el resultado que te cobren
      con palos de la torre de partida.
      Si partes de los tréboles entonces,
      la carta pasaporte es permitida.`
    ],
    en: [
      `Show one card before you roll,
      if it beats the dice or ties,
      pick a tower as a goal—
      take <b>the journey</b> through the skies.
      Or you’ll miss the board and fall—
      play <b>the lottery</b> likewise.
      And whatever may befall,
      tumblers keep the card that tries.`,
      `Land your flight and don’t fall off,
      if you pay to reach the dice. 
      Count how far your card was off—
      pay this shortfall to suffice.
      See the hex where you took off—
      just the suit from there applies.
      You may trade the shown card off,
      if the clubs fulfill the price.`,
    ]
  })),
}, {
  backgroundColor: cMix("spades"),
  h3_spades: Copy.text({
    es: "Picas <small>(Espadas)</small>",
    en: "Spades <small>(Swords)</small>",
  }),
  img: ASSETS.spades,
  h4_spades: Copy.text({
    es: "Pelear por las cartas",
    en: "Fight players for cards",
  }),
  p: versify(Copy.text({
    es: [
      `Asalta en un combate sin empates
      a quien en el hexágono descansa.
      Se lucha superando los ataques,
      sumándose las picas descartadas,
      y cuando se terminen los avances,
      destierra a la persona derrotada.
      Si ganas el combate que empezaste,
      procedes al asalto de sus cartas:
      le robas la primera que tocases,
      a ciegas deberás seleccionarla.
      Te toca <b>el incremento</b> y que descanses,
      si robas y la carta es de monarca.
      Tendrías que elegir la que descartes
      si acaso la que robas es tu cuarta.`,
      /*
      Asalta en un combate sin empates, 
      excepto en el subsuelo en tus andanzas.
      */
    ],
    en: [
      `You may steal a card at random,
      kicking someone off the board,
      if you meet to seize their item, 
      once you put them to the sword.
      You go back and forth in tandem,
      adding spades to beat what’s scored.
      When no cards are thrown to sum them, 
      then the struggler's kicked off-board.`,
      `Note that tying scores is barred,
      and discard the spades outpoured.
      If your target wins the war,
      they can’t steal the cards you hoard.
      If you steal a royal card, 
      give one up if it’s your fourth—
      take <b>the increment</b>’s reward,
      matching carrots in accord.`,
      /* 
      Note that tying scores is barred; 
      please discard the spades outpoured; 
      underground will host no war; 
      the defender steals no hoard.
      */
    ]
  })),
}, {
  backgroundColor: cMix("hearts"),
  h3_hearts: Copy.text({
    es: "Corazones <small>(Copas)</small>",
    en: "Hearts <small>(Cups)</small>",
  }),
  img: ASSETS.hearts,
  h4_hearts: Copy.text({
    es: "Accesar a los palacios Q",
    en: "Access the <big>Q</big>ueen Palaces",
  }),
  p: versify(Copy.text({
    es: [
      `Anúnciate en la entrada de las reinas
      y espera que en la mesa te cuestionen:
      si cargas con su carta de nobleza 
      o un mínimo de seis en corazones.
      Te expulsan al destierro si te frenan
      y niegas que tu suma se cerciore.
      Mas antes de mostrar tus pertenencias,
      se exige de cualquiera que cuestione:
      que muestre previamente que las tenga,
      las cartas con aquellas condiciones.
      Pues pierde lo mostrado y se destierra
      si pruebas que te acusa sin razones.
      Tampoco se permiten exigencias
      de quien en el destierro las expone.`,
    ],
    en: [
      `Any player may contest, 
      as you reach a queenly throne:
      “Show six points to prove you're blest,
      adding hearts from cards you own.”
      Or declare you're honored guest, 
      with the Queen's card as is known.
      Off-board players can’t request—
      they’re not fit to cast a stone.`,
      `But before they check your cards,
      they're obliged to show their own. 
      Even standing far apart:
      prove they’re welcome in this zone.
      If you prove at least six hearts, 
      they will lose the cards they’ve shown.
      Either one who's wrong departs—
      off the board the meddler's thrown.`,
    ]
  })),
}, {
  backgroundColor: cMix("diamonds"),
  h3_diamonds: Copy.text({
    es: "Diamantes <small>(Oros)</small>",
    en: "Diamonds <small>(Gold)</small>",
  }),
  img: ASSETS.diamonds,
  h4_diamonds: Copy.text({
    es: "Comerciar en las plazas J",
    en: "Trade at <big>J</big>ack Plazas",
  }),
  p: versify(Copy.text({
    es: `Los centros con los símbolos marcados
      te ofrecen sus artículos en venta:
      las cartas descartadas de sus palos
      que en estos por diamantes se canjean,
      o aceptan de cualquiera por el pago
      si el centro es el marcado con la estrella.`,
    en: `All spent cards are being sold—
      every <b>J</b>ack will sell its suit.
      Browse the lot their houses hold,
      where you may obtain this loot.
      Match or overpay with gold—
      see the markings underfoot.
      Note the asterisk in bold:
      any suit at all will suit.`,
  })),
  /*
    h5: Copy.text({
      es: "+ Comercio Interpersonal",
      en: "+ Interpersonal Trades",
    }),*/
  p_0: versify(Copy.text({
    es: `Es válido el <b class="diamonds">comercio consensuado <sup>+</sup></b>
    si sumas el artículo a las reglas:
    se vende por diamantes en un trato
    con alguien en el sitio que te encuentras,
    y mientras el negocio es concretado,
    se ocultan en las manos las ofertas.
    A quien se le descubra por engaño,
    después del intercambio se destierra.`,
    en: `If agreed by all the parts,
    add <b class="diamonds">consented trades <sup>+</sup></b> to boot.
    Deal in turn with diamond cards—
    meet to trade or to dispute.
    Never show your hand’s rewards—
    strike a deal for your pursuit.
    If what's traded proves a farce,
    swindlers get the off-board boot.`,
  })),
}];

export default strategySections;